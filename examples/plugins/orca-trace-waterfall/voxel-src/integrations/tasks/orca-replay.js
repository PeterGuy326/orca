// An as-of projection of recorded intervals, never a mutation of the DB payload.
export function replayBounds(data) {
  const stamps = [
    ...data.nodes.flatMap((node) => [node.start, node.end]),
    ...data.messages.map((message) => message.at)
  ].filter(Number.isFinite)
  const start = stamps.length ? Math.min(...stamps) : 0
  const end = Math.max(
    start + 1,
    ...stamps,
    data.nodes.some((node) => node.kind === 'dispatch' && node.end == null) ? Date.now() : start
  )
  return [start, end]
}

export function projectOrcaReplay(data, at) {
  const messages = data.messages
    .filter((message) => Number.isFinite(message.at) && message.at <= at)
    .map((message) => structuredClone(message))
  const nodes = data.nodes
    .filter((node) => node.kind === 'run' || (Number.isFinite(node.start) && node.start <= at))
    .map((raw) => {
      const node = structuredClone(raw)
      node.output = ''
      node.outputSummary = ''
      node.outputMessageId = null
      delete node.delivery
      if (node.kind === 'run') {
        node.end = at
        return node
      }
      const report = messages.findLast(
        (message) => message.type === 'worker_done' && message.dispatchId === node.id
      )
      if (node.kind === 'dispatch') {
        node.replayProjection = true
        if (!report && (node.end == null || node.end > at)) {
          // The archive records a dispatch interval, not individual tool activity.
          if (
            [
              'ready',
              'running',
              'completed',
              'succeeded',
              'reported',
              'released',
              'failed',
              'stopped',
              'cancelled',
              'abandoned'
            ].includes(node.status)
          ) {
            node.status = 'running'
            node.failed = false
          }
          node.end = null
        }
        if (report) {
          node.output = report.body ?? ''
          node.outputSummary = report.subject ?? ''
          node.outputMessageId = report.id
        }
      } else {
        if (node.end == null || node.end > at) {
          node.status = 'pending'
          node.failed = false
          node.end = null
        }
        const taskReport = messages.findLast(
          (message) => message.type === 'worker_done' && message.taskId === node.id
        )
        if (taskReport) {
          node.output = taskReport.body ?? ''
          node.outputSummary = taskReport.subject ?? ''
          node.outputMessageId = taskReport.id
        }
      }
      return node
    })
  const active = nodes.filter(
    (node) =>
      node.kind === 'dispatch' &&
      node.end == null &&
      !messages.some((message) => message.type === 'worker_done' && message.dispatchId === node.id)
  ).length
  return {
    data: { run: structuredClone(data.run), nodes, messages, calls: [], outcomes: [] },
    summary: { active },
    at,
    projection: 'recorded-intervals-as-of'
  }
}
