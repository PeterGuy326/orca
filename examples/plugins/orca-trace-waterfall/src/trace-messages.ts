import type { TraceNode } from './trace-types.ts'
import { query, toMs } from './trace-db.ts'

export async function runMessages(db: string, runId: string, nodes: TraceNode[]) {
  const messages = await query(
    db,
    `select id, type, from_handle, to_handle, thread_id, subject, body, payload,
            created_at, delivered_at, delivery_contract, read
       from messages where run_id = '${runId.replace(/'/g, "''")}' order by sequence`
  )
  const workers = nodes.filter((n) => n.kind === 'dispatch')
  function endpoint(handle: string, dispatchId: string | undefined, at: number | null) {
    if (handle === `run:${runId}`) {
      return { name: '协调者', agent: '', nodeId: null }
    }
    let node = handle.startsWith('dispatch:')
      ? workers.find((n) => n.id === handle.slice(9))
      : undefined
    if (!node && dispatchId) {
      const known = workers.find((n) => n.id === dispatchId)
      if (known?.terminalId === handle) {
        node = known
      }
    }
    if (!node) {
      const candidates = workers.filter(
        (n) =>
          n.terminalId === handle &&
          at !== null &&
          n.start !== null &&
          n.start <= at &&
          (n.end === null || n.end >= at - 5000)
      )
      if (candidates.length === 1) {
        node = candidates[0]
      }
    }
    return {
      name: node?.shortTitle ?? '未关联会话',
      agent: node?.agent ?? '',
      nodeId: node?.id ?? null
    }
  }
  const mapped = messages.map((m) => {
    const payload = m.payload ? JSON.parse(String(m.payload)) : null
    const at = toMs(m.created_at)
    const dispatchId = payload?.dispatchId as string | undefined
    const fromHandle = String(m.from_handle ?? '')
    const toHandle = String(m.to_handle ?? '')
    const from = endpoint(fromHandle, dispatchId, at)
    const to = endpoint(toHandle, dispatchId, at)
    return {
      id: String(m.id),
      type: String(m.type),
      threadId: m.thread_id ? String(m.thread_id) : null,
      subject: String(m.subject ?? ''),
      body: String(m.body ?? ''),
      payload,
      at,
      deliveredAt: toMs(m.delivered_at),
      deliveryContract: String(m.delivery_contract),
      read: Boolean(m.read),
      taskId: payload?.taskId ?? null,
      dispatchId: dispatchId ?? null,
      fromHandle,
      toHandle,
      from: from.name,
      to: to.name,
      fromAgent: from.agent,
      toAgent: to.agent,
      fromNodeId: from.nodeId,
      toNodeId: to.nodeId
    }
  })
  const replies = new Map<string, (typeof mapped)[number]>()
  for (const message of mapped) {
    if (!message.threadId || message.id === message.threadId) {
      continue
    }
    const request = mapped.find((m) => m.id === message.threadId && m.type === 'question')
    if (
      request &&
      message.fromHandle === request.toHandle &&
      message.toHandle === request.fromHandle &&
      message.at !== null &&
      request.at !== null &&
      message.at >= request.at &&
      !replies.has(request.id)
    ) {
      replies.set(request.id, message)
    }
  }
  const calls = mapped
    .filter((m) => !['status', 'heartbeat'].includes(m.type))
    .map((message) => {
      const response = replies.get(message.id) ?? null
      return {
        id: message.id,
        request: message,
        response,
        replyIntervalMs:
          response?.at !== null && response?.at !== undefined && message.at !== null
            ? response.at - message.at
            : null,
        deliveryIntervalMs:
          message.deliveredAt !== null && message.at !== null
            ? message.deliveredAt - message.at
            : null
      }
    })
  return { mapped, calls }
}
