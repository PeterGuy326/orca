import { businessState } from '../../voxel-src/integrations/tasks/orca-source.js'

export const states = {
  attention: { label: '需查看', icon: '!', rank: 0 },
  reported: { label: '已回报待确认', icon: '↗', rank: 1 },
  running: { label: '执行中', icon: '●', rank: 2 },
  starting: { label: '待启动', icon: '○', rank: 3 },
  waiting: { label: '待安排', icon: '○', rank: 4 },
  ended: { label: '已结束', icon: '✓', rank: 5 }
}
export const dateTime = (timestamp) =>
  Number.isFinite(timestamp)
    ? new Date(timestamp).toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    : '时间未记录'
export const duration = (value) =>
  !Number.isFinite(value)
    ? '未记录'
    : value >= 3600000
      ? `${(value / 3600000).toFixed(1)} 小时`
      : `${Math.max(0, Math.round(value / 60000))} 分钟`
export const titleOf = (node) => {
  let text = node?.shortTitle || node?.goal || node?.task || node?.label || '未命名任务'
  if (/^(?:你是|职责[：:])/.test(text)) {
    const sentence = (node.input || '')
      .split(/[。；\n]/)
      .find(
        (part) =>
          !/^(?:用户|你是|先读)/.test(part) && /任务[：:]|实际实现|修复|核验|部署适配/.test(part)
      )
    if (sentence) {
      text = sentence.match(/实际(实现.*)/)?.[1] || sentence
    }
  }
  return text.replace(/^任务[：:]\s*/, '').split('\n')[0]
}
const related = (message, taskId, ids) =>
  message.taskId === taskId ||
  ids.has(message.dispatchId) ||
  ids.has(message.fromNodeId) ||
  ids.has(message.toNodeId)

export function adaptRun(bundle) {
  const data = bundle?.data
  if (!data?.run?.id || !Array.isArray(data.nodes) || !Array.isArray(data.messages)) {
    throw new Error('缺少可用的 Run 数据')
  }
  const messages = [
    ...new Map(data.messages.map((message) => [message.id, message])).values()
  ].sort((a, b) => (a.at ?? 0) - (b.at ?? 0))
  const byId = new Map(data.nodes.map((node) => [node.id, node]))
  const dispatches = data.nodes.filter((node) => node.kind === 'dispatch')
  const sessionIds = [
    ...new Set(
      [...dispatches]
        .sort((a, b) => (a.start ?? 0) - (b.start ?? 0) || a.id.localeCompare(b.id))
        .map((node) => node.terminalId || node.id)
    )
  ]
  const captured = Date.parse(bundle.capturedAt)
  const rows = data.nodes
    .filter((node) => node.kind === 'task')
    .map((task) => {
      const attempts = dispatches
        .filter((node) => node.taskId === task.id || node.parentId === task.id)
        .sort((a, b) => (a.start ?? 0) - (b.start ?? 0) || a.id.localeCompare(b.id))
      const ids = new Set(attempts.map((node) => node.id))
      const taskMessages = messages.filter((message) => related(message, task.id, ids))
      const current = attempts.at(-1)
      const report = taskMessages.findLast(
        (message) => message.type === 'worker_done' && ids.has(message.dispatchId)
      )
      const rawState = current
        ? businessState(
            current,
            taskMessages.filter(
              (message) =>
                message.dispatchId === current.id ||
                message.fromNodeId === current.id ||
                message.toNodeId === current.id
            ),
            (bundle.liveSummary ?? bundle.summary)?.active ?? 0
          )
        : null
      let state = 'waiting',
        reason = '尚无已记录的执行派发'
      if (rawState?.[0] === 'running') {
        state = 'running'
        reason = '读取时派发存活；不代表持续调用工具'
      } else if (rawState?.[0] === 'starting') {
        state = 'starting'
        reason = '已经派发，正在等待启动'
      } else if (
        ['waiting_reply', 'failed', 'unknown'].includes(rawState?.[0]) ||
        ['blocked', 'failed', 'error'].includes(task.status)
      ) {
        state = 'attention'
        reason =
          rawState?.[0] === 'waiting_reply'
            ? '有未回复的提问或升级消息（推断），不等于需要审批'
            : rawState?.[0] === 'unknown'
              ? '当前执行结果不明确，需要查看来源记录'
              : task.status === 'blocked'
                ? '编排记录标为阻塞；具体原因见消息与回报'
                : '记录有失败结果，先查看具体回报'
      } else if (
        task.status === 'completed' ||
        ['cancelled', 'stopped', 'abandoned'].includes(task.status)
      ) {
        state = 'ended'
        reason =
          task.status === 'completed' ? '编排任务已结束；不据此声明业务已验收' : '编排任务已停止'
      } else if (rawState?.[0] === 'completed' || report?.payload?.outcome === 'succeeded') {
        state = 'reported'
        reason = '执行者已回报，任务尚未记录为 completed；需核对交付结果'
      } else if (rawState?.[0] === 'stopped') {
        state = 'ended'
        reason = '派发已停止'
      }
      let ancestor = task,
        seen = new Set()
      while (
        ancestor.parentId &&
        byId.get(ancestor.parentId)?.kind === 'task' &&
        !seen.has(ancestor.id)
      ) {
        seen.add(ancestor.id)
        ancestor = byId.get(ancestor.parentId)
      }
      const text = report?.subject || task.outputSummary || ''
      return {
        id: task.id,
        title: titleOf(task),
        fullTitle: task.label || task.task || task.inputSummary || titleOf(task),
        lineId: ancestor.id,
        line: titleOf(ancestor),
        state,
        reason,
        attempts,
        current,
        messages: taskMessages,
        report,
        result: text || (state === 'ended' ? '未记录独立结果摘要，可展开回报核对' : '尚无最终回报'),
        input: task.input || current?.input || '',
        output: report?.body || task.output || '',
        raw: task,
        lastAt: Math.max(
          task.end || task.start || 0,
          ...taskMessages.map((message) => message.at || 0)
        ),
        owner: current
          ? `执行会话 ${String(sessionIds.indexOf(current.terminalId || current.id) + 1).padStart(2, '0')}`
          : '尚未分配会话'
      }
    })
  const duplicates = new Map()
  rows.forEach((row) => duplicates.set(row.title, (duplicates.get(row.title) || 0) + 1))
  const seen = new Map()
  rows.forEach((row) => {
    seen.set(row.title, (seen.get(row.title) || 0) + 1)
    row.duplicate = duplicates.get(row.title) > 1 ? seen.get(row.title) : null
  })
  const counts = Object.fromEntries(
    Object.keys(states).map((key) => [key, rows.filter((row) => row.state === key).length])
  )
  const points = data.nodes
    .flatMap((node) => [node.start, node.end])
    .concat(messages.map((message) => message.at))
    .filter(Number.isFinite)
  const range = points.length
    ? [Math.min(...points), Math.max(...points)]
    : [captured, captured + 1]
  return { bundle, data, rows, messages, counts, range, capturedAt: captured, byId }
}

export function filterRows(
  model,
  { query = '', status = 'all', sort = 'priority', completed = false } = {}
) {
  const term = query.trim().toLocaleLowerCase()
  return model.rows
    .filter(
      (row) =>
        (!term ||
          `${row.title} ${row.fullTitle} ${row.owner} ${row.line}`
            .toLocaleLowerCase()
            .includes(term)) &&
        (status === 'all' ? completed || row.state !== 'ended' : row.state === status)
    )
    .sort((a, b) =>
      sort === 'recent'
        ? b.lastAt - a.lastAt
        : states[a.state].rank - states[b.state].rank || b.lastAt - a.lastAt
    )
}

export function waitsFor(model, row) {
  const waits = []
  for (const request of row.messages) {
    if (
      !['question', 'escalation'].includes(request.type) ||
      !row.attempts.some(
        (attempt) =>
          request.fromNodeId === attempt.id ||
          (request.dispatchId === attempt.id && request.fromHandle === attempt.terminalId)
      )
    ) {
      continue
    }
    if (!Number.isFinite(request.at)) {
      continue
    }
    const reply = row.messages.find(
      (message) =>
        message.id !== request.id &&
        message.threadId === request.id &&
        message.fromHandle === request.toHandle &&
        message.toHandle === request.fromHandle &&
        message.at >= request.at
    )
    const attempt = row.attempts.find(
      (node) => node.id === request.fromNodeId || node.id === request.dispatchId
    )
    const end = reply?.at ?? attempt?.end ?? model.capturedAt
    if (end > request.at) {
      waits.push({ start: request.at, end, request, reply, inferred: true })
    }
  }
  return waits
}
