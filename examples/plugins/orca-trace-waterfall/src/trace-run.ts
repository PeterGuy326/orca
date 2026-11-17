import type { TraceNode } from './trace-types.ts'
import type { Terminal } from './trace-session.ts'
import { sessionFor } from './trace-session.ts'
import { query, toMs, clip } from './trace-db.ts'
import { shortTitle, goalTitle, deliveryOf } from './trace-delivery.ts'
import { runMessages } from './trace-messages.ts'
import { parseTraceRecord } from './trace-record.ts'

const FAILED = new Set(['failed', 'blocked', 'abandoned', 'stop_unknown', 'start_unknown', 'error'])

export async function loadRun(db: string, runId: string, terminals: Terminal[] | null) {
  const runs = await query(
    db,
    `select id, objective, coordinator_handle, created_at, updated_at from runs where id = '${runId.replace(/'/g, "''")}'`
  )
  if (runs.length === 0) {
    throw new Error(`run not found: ${runId}`)
  }
  const run = runs[0]

  const tasks = await query(
    db,
    `select id, parent_id, task_title, display_name, spec, status, deps, result, created_at, completed_at
       from tasks where run_id = '${runId.replace(/'/g, "''")}'`
  )
  const dispatches = await query(
    db,
    `select d.id, d.task_id, d.status, d.depth, d.failure_count, d.created_at, d.dispatched_at,
            d.completed_at, d.last_heartbeat_at, d.last_failure, d.contract_version, d.assignee_handle,
            w.agent_terminal_handle, w.worktree_id, w.state as worker_state,
            coalesce(json_extract(w.start_options, '$.agent'), '') as agent,
            coalesce(json_extract(w.start_options, '$.name'), '') as agent_name,
            coalesce((select t.task_title from tasks t where t.id = d.task_id),
                     (select t.display_name from tasks t where t.id = d.task_id), '') as task_title,
            coalesce((select t.spec from tasks t where t.id = d.task_id), '') as task_spec,
            coalesce((select m.body from messages m
                       where m.id = (select json_extract(t.result, '$.messageId')
                                       from tasks t where t.id = d.task_id)), '') as last_report
       from dispatch_contexts d
       left join worker_dispatches w on w.dispatch_id = d.id
      where d.run_id = '${runId.replace(/'/g, "''")}'`
  )

  const nodes: TraceNode[] = []
  const taskIds = new Set(tasks.map((t) => String(t.id)))

  const root: TraceNode = {
    id: String(run.id),
    parentId: null,
    kind: 'run',
    session: sessionFor(String(run.coordinator_handle ?? ''), terminals, '', '', '协调者'),
    label: clip(String(run.objective ?? ''), 60) || String(run.id),
    status: 'run',
    start: toMs(run.created_at),
    end: toMs(run.updated_at),
    detail: String(run.objective ?? ''),
    input: String(run.objective ?? ''),
    failed: false
  }
  nodes.push(root)

  for (const task of tasks) {
    const title = String(task.task_title ?? task.display_name ?? '')
    nodes.push({
      id: String(task.id),
      parentId: task.parent_id ? String(task.parent_id) : String(run.id),
      kind: 'task',
      label: String(title) || String(task.id),
      shortTitle: shortTitle(String(title)),
      input: String(task.spec ?? ''),
      dependencies: parseTraceRecord(String(task.deps ?? '[]')),
      status: String(task.status ?? 'pending'),
      start: toMs(task.created_at),
      end: toMs(task.completed_at),
      detail: clip(String(task.spec ?? title), 400),
      failed: FAILED.has(String(task.status))
    })
  }

  for (const dispatch of dispatches) {
    const parent = dispatch.task_id ? String(dispatch.task_id) : String(run.id)
    const startedAt = toMs(dispatch.dispatched_at) ?? toMs(dispatch.created_at)
    const active =
      ['starting', 'ready', 'running'].includes(String(dispatch.worker_state ?? '')) ||
      (!dispatch.worker_state && ['pending', 'dispatched'].includes(String(dispatch.status)))
    const endedAt = active
      ? null
      : (toMs(dispatch.completed_at) ?? toMs(dispatch.last_heartbeat_at))
    const worktree = dispatch.worktree_id
      ? (String(dispatch.worktree_id).split('::').pop() ?? '')
      : ''
    const worktreeName = worktree.split('/').findLast(Boolean) ?? ''
    const title = String(dispatch.task_title ?? '')
    const spec = String(dispatch.task_spec ?? '')
    const task = title
    nodes.push({
      id: String(dispatch.id),
      parentId: taskIds.has(parent) ? parent : String(run.id),
      kind: 'dispatch',
      agent: String(dispatch.agent ?? ''),
      workspaceId: String(dispatch.worktree_id ?? ''),
      terminalId: String(dispatch.agent_terminal_handle ?? dispatch.assignee_handle ?? ''),
      taskId: String(dispatch.task_id ?? ''),
      contractVersion: Number(dispatch.contract_version ?? 1),
      shortTitle: shortTitle(title || task),
      task,
      input: spec,
      output: String(dispatch.last_report ?? ''),
      label: worktreeName || String(dispatch.id).slice(4, 12),
      session: sessionFor(
        String(dispatch.agent_terminal_handle ?? dispatch.assignee_handle ?? ''),
        terminals,
        String(dispatch.agent ?? ''),
        String(dispatch.agent_name ?? ''),
        '执行者'
      ),
      status: String(dispatch.worker_state ?? dispatch.status ?? 'pending'),
      start: startedAt,
      end: endedAt,
      detail: [
        `dispatch ${dispatch.id}`,
        `task ${dispatch.task_id ?? '—'}`,
        `status ${dispatch.status ?? '—'}${dispatch.worker_state ? ` · worker ${dispatch.worker_state}` : ''}`,
        `depth ${dispatch.depth ?? '—'}`,
        worktreeName ? `worktree ${worktree}` : '',
        dispatch.failure_count ? `retries ${dispatch.failure_count}` : '',
        dispatch.last_failure ? `failure: ${clip(String(dispatch.last_failure), 200)}` : ''
      ]
        .filter(Boolean)
        .join(' · '),
      failed: FAILED.has(String(dispatch.status)) || FAILED.has(String(dispatch.worker_state))
    })
  }

  // The run's own end is the latest thing that happened inside it.
  let latest: number | null = null
  for (const n of nodes) {
    if (n.kind === 'run') {
      continue
    }
    for (const t of [n.start, n.end]) {
      if (t !== null && (latest === null || t > latest)) {
        latest = t
      }
    }
  }
  if (!root.end || root.end < (latest ?? 0)) {
    root.end = latest || root.end
  }

  const { mapped, calls } = await runMessages(db, runId, nodes)
  const workers = nodes.filter((n) => n.kind === 'dispatch')
  // A dispatch report is specific to that attempt; never reuse another attempt's task-level result.
  for (const node of workers) {
    const report = mapped.findLast((m) => m.type === 'worker_done' && m.dispatchId === node.id)
    node.output = report?.body ?? ''
    node.outputSummary = report?.subject || ''
    node.outputMessageId = report?.id ?? null
  }
  // Task-level result links to a specific worker_done message via tasks.result.messageId.
  for (const node of nodes) {
    if (node.kind !== 'task') {
      continue
    }
    node.output = node.output ?? ''
    node.outputSummary = node.outputSummary ?? ''
    node.outputMessageId = node.outputMessageId ?? null
    const task = tasks.find((t) => String(t.id) === node.id)
    const result = task?.result ? parseTraceRecord(String(task.result)) : null
    const report = mapped.find(
      (m) => m.id === result?.messageId && m.type === 'worker_done' && m.taskId === node.id
    )
    if (report) {
      node.output = report.body || ''
      node.outputSummary = report.subject || ''
      node.outputMessageId = report.id
    }
    node.inputSummary = String(task?.task_title || task?.display_name || '')
      .replace(/^职责[：:][^。]*。\s*/, '')
      .replace(/^任务[：:]\s*/, '')
      .split('。')[0]
  }
  for (const node of workers) {
    // task_title is stored truncated (~80 chars); role-prefixed titles fall back to the full spec sentence.
    const rawTitle = node.task || ''
    const src = /^职责[：:]|^任务[：:]/.test(rawTitle) ? node.input || rawTitle : rawTitle
    node.inputSummary = src
      .replace(/^职责[：:][^。]*。\s*/, '')
      .replace(/^任务[：:]\s*/, '')
      .split('。')[0]
  }

  const taskNodes = nodes.filter((n) => n.kind === 'task')
  const completed = taskNodes.filter((n) => n.status === 'completed').length
  const failed = taskNodes.filter((n) => ['failed', 'blocked'].includes(n.status)).length
  root.inputSummary = shortTitle(String(run.objective ?? ''))
  root.outputSummary = `子任务${taskNodes.length}项：完成${completed}项，失败或阻塞${failed}项，其他${taskNodes.length - completed - failed}项`
  root.output = taskNodes
    .map(
      (n) =>
        `${n.shortTitle}：${n.outputSummary || (n.status === 'completed' ? '已完成，但未记录结果正文' : '尚无完成回报')}`
    )
    .join('\n')
  for (const node of nodes) {
    node.goal = goalTitle(
      node.kind === 'run' ? String(run.objective ?? '') : node.task || node.label
    )
    if (node.kind !== 'dispatch') {
      node.shortTitle =
        [...node.goal].length <= 12 ? node.goal : shortTitle(node.task || node.label)
    }
    if (node.kind !== 'run') {
      node.delivery = deliveryOf(node.output || '', node.status)
    }
  }
  const outcomes = taskNodes.map((node) => ({
    nodeId: node.id,
    goal: node.goal,
    ...node.delivery
  }))
  return {
    run: { id: String(run.id), objective: String(run.objective ?? ''), shortTitle: root.goal },
    outcomes,
    nodes,
    messages: mapped,
    calls,
    db
  }
}
