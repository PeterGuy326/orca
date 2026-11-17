// Sequence numbers below are local publications, never database sequence IDs.
const copy = (value) => structuredClone(value)
const done = new Set(['completed', 'succeeded'])
const stopped = new Set(['stopped', 'cancelled', 'canceled', 'abandoned'])
const failed = new Set(['failed', 'error', 'crashed', 'start_failed'])
const messageFor = (message, node) =>
  message.dispatchId === node.id || message.fromNodeId === node.id || message.toNodeId === node.id

export function businessState(node, messages, active) {
  const report = messages.findLast(
    (message) => message.type === 'worker_done' && message.dispatchId === node.id
  )
  const outcome = report?.payload?.outcome
  // Releasing the pane after settlement does not change its recorded outcome.
  if (outcome === 'failed') {
    return ['failed', '失败', 'idle', 'failed']
  }
  if (done.has(outcome)) {
    return ['completed', '完成', 'celebrate', 'completed']
  }
  if (stopped.has(outcome)) {
    return ['stopped', '已停止', 'idle', 'failed']
  }
  if (['stop_unknown', 'start_unknown'].includes(node.status)) {
    return ['unknown', '未知 / 待命', 'idle', 'idle']
  }
  if (stopped.has(node.status) || stopped.has(outcome)) {
    return ['stopped', '已停止', 'idle', 'failed']
  }
  if (failed.has(node.status) || node.failed || outcome === 'failed') {
    return ['failed', '失败', 'idle', 'failed']
  }
  if (done.has(node.status) || done.has(outcome)) {
    return ['completed', '完成', 'celebrate', 'completed']
  }
  // A report without an explicit successful outcome does not prove success.
  if (report) {
    return ['unknown', '已回报，结果待判', 'idle', 'idle']
  }
  const unresolved = messages.some((request) => {
    if (
      !['question', 'escalation'].includes(request.type) ||
      (request.fromNodeId !== node.id && request.fromHandle !== node.terminalId)
    ) {
      return false
    }
    return !messages.some(
      (reply) =>
        reply.id !== request.id &&
        reply.threadId === request.id &&
        reply.fromHandle === request.toHandle &&
        reply.toHandle === request.fromHandle &&
        reply.at >= request.at
    )
  })
  if (unresolved && node.end == null) {
    return ['waiting_reply', '等回复（推断）', 'think', 'blocked']
  }
  if (['starting', 'pending', 'dispatched'].includes(node.status) && node.end == null) {
    return ['starting', '待启动', 'think', 'waiting']
  }
  if (['ready', 'running'].includes(node.status) && node.end == null && active > 0) {
    return ['running', '执行中（派发存活）', 'work', 'running']
  }
  return ['unknown', '未知 / 待命', 'idle', 'idle']
}

export function createOrcaSource() {
  let runId = null,
    seq = 0,
    lastUpdated = null,
    error = null,
    active = 0,
    router = null
  let entities = [],
    snapshot
  const slots = new Map(),
    dispatchKeys = new Map(),
    listeners = new Set()
  function publish(objective = '等待真实 Orca 数据') {
    const status = error
      ? 'idle'
      : entities.length && entities.every((item) => item.state === 'completed')
        ? 'completed'
        : entities.some((item) => item.state === 'failed' || item.state === 'stopped')
          ? 'failed'
          : active
            ? 'running'
            : 'idle'
    snapshot = {
      source: 'orca',
      run: {
        id: runId ?? 'orca:empty',
        title: objective,
        objective,
        status,
        updatedAt: lastUpdated
      },
      seq: ++seq,
      agents: entities.map((item) => ({
        id: item.id,
        name: item.name,
        status: item.taskStatus,
        currentSubtaskId: item.dispatchId,
        currentStep: item.label
      })),
      subtasks: entities.map((item) => ({
        id: item.dispatchId,
        assigneeAgentId: item.id,
        title: item.name,
        description: item.label,
        summary: item.output,
        status: item.taskStatus
      })),
      logs: Object.fromEntries(
        entities.map((item) => [
          item.id,
          item.messages
            .filter((message) => Number.isFinite(message.at))
            .slice(-200)
            .map((message) => ({
              id: message.id,
              timestamp: message.at,
              kind:
                message.type === 'worker_done'
                  ? 'result'
                  : message.type === 'escalation'
                    ? 'error'
                    : 'info',
              text: `${message.type} · ${message.subject}\n${message.body}`
            }))
        ])
      )
    }
    for (const listener of listeners) {
      listener({ type: 'snapshot', snapshot: copy(snapshot) })
    }
  }
  publish()
  return {
    kind: 'orca',
    getSnapshot: () => copy(snapshot),
    getBindings: () => copy(entities.filter((item) => item.slot < 9)),
    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    update(data, summary, now = Date.now()) {
      if (!data?.run?.id || !Array.isArray(data.nodes) || !Array.isArray(data.messages)) {
        throw new Error('Invalid Orca trace')
      }
      if (runId !== data.run.id) {
        slots.clear()
        dispatchKeys.clear()
        entities = []
      }
      runId = data.run.id
      active = summary?.active ?? 0
      lastUpdated = now
      error = null
      router = data.nodes.find((node) => node.kind === 'run')?.session ?? null
      const messages = [
        ...new Map(data.messages.map((message) => [message.id, message])).values()
      ].sort((a, b) => (a.at ?? 0) - (b.at ?? 0) || a.id.localeCompare(b.id))
      const sessions = new Map()
      const nodes = data.nodes
        .filter((node) => node.kind === 'dispatch')
        .sort((a, b) => (a.start ?? 0) - (b.start ?? 0) || a.id.localeCompare(b.id))
      for (const node of nodes) {
        const id = node.terminalId || node.id,
          previous = dispatchKeys.get(node.id)
        if (!slots.has(id)) {
          if (previous && slots.has(previous)) {
            slots.set(id, slots.get(previous))
            slots.delete(previous)
          } else {
            slots.set(id, slots.size)
          }
        }
        dispatchKeys.set(node.id, id)
        sessions.set(id, node)
      }
      entities = [...sessions]
        .map(([id, node]) => {
          const related = messages.filter((message) => messageFor(message, node))
          const [state, label, action, taskStatus] = businessState(node, related, active)
          return {
            id,
            terminalId: node.terminalId || null,
            dispatchId: node.id,
            slot: slots.get(id),
            name: node.task || node.inputSummary || node.session?.name || node.label || node.id,
            rawStatus: node.status,
            end: node.end,
            state,
            label: node.replayProjection && state === 'running' ? '历史派发区间（推断）' : label,
            action,
            taskStatus,
            input: node.input || '',
            output: node.output || '',
            messages: related
          }
        })
        .sort((a, b) => a.slot - b.slot)
      publish(data.run.objective)
    },
    empty(now = Date.now()) {
      runId = null
      active = 0
      entities = []
      router = null
      slots.clear()
      dispatchKeys.clear()
      lastUpdated = now
      error = null
      publish('暂无活跃 Run，也没有可回读的上一 Run')
    },
    fail(message = '读取失败') {
      error = message
      active = null
      entities = entities.map((item) => ({
        ...item,
        state: 'unknown',
        label: '读取失败 / unknown',
        action: 'idle',
        taskStatus: 'idle'
      }))
      publish(snapshot.run.objective)
    },
    getState: () =>
      copy({
        source: 'orca',
        runId,
        lastUpdated,
        active,
        error,
        router,
        localSeq: seq,
        bindings: entities,
        overflow: entities.filter((item) => item.slot >= 9).length,
        overflowActive: entities.filter(
          (item) => item.slot >= 9 && ['running', 'starting', 'waiting_reply'].includes(item.state)
        ).length
      }),
    dispose() {
      listeners.clear()
    }
  }
}

// One request chain per poll; changing the chosen run aborts and fences old results.
export function createOrcaPoller({ fetchJson, onData, onError, interval = 4000 }) {
  let timer,
    controller,
    generation = 0,
    pinned = null,
    current = null,
    disposed = false
  async function poll() {
    const version = generation
    controller = new AbortController()
    const signal = controller.signal
    try {
      const live = await fetchJson('/api/live', signal)
      if (version !== generation || disposed) {
        return
      }
      const runId =
        pinned ||
        (live.runs.some((run) => run.id === current) ? current : live.runs[0]?.id) ||
        current ||
        live.lastRunId
      const data = runId
        ? await fetchJson(`/api/run?runId=${encodeURIComponent(runId)}`, signal)
        : null
      if (version !== generation || disposed) {
        return
      }
      current = runId ?? null
      onData({ live, data, summary: live.runs.find((run) => run.id === runId) ?? { active: 0 } })
    } catch (error) {
      if (version === generation && !disposed && !signal.aborted) {
        onError(error)
      }
    } finally {
      if (version === generation && !disposed) {
        timer = setTimeout(poll, interval)
      }
    }
  }
  return {
    start(runId = null) {
      pinned = runId
      generation++
      clearTimeout(timer)
      controller?.abort()
      void poll()
    },
    dispose() {
      disposed = true
      generation++
      clearTimeout(timer)
      controller?.abort()
    }
  }
}
