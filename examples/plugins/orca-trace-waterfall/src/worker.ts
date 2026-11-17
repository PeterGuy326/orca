// oxlint-disable max-lines -- Keep the migrated read-only SQL projection together for baseline comparison.
// Reads Orca's own orchestration database read-only and turns it into waterfall spans.
// No official host API exposes runs/tasks/dispatches, so this worker is the data source.
// Reconstructed 2026-11-11 from source-archive/src-worker.ts.patches (data layer faithful to original).
import type { OrcaWorkerApi } from 'orca/worker'
import { execFile } from 'node:child_process'
import { existsSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

type Row = Record<string, string | number | null>

type Terminal = {
  handle: string
  title?: string
  agentIdentity?: string
  connected?: boolean
  orphaned?: boolean
  writable?: boolean
}
export type Session = {
  status: 'active' | 'closed' | 'unavailable' | 'unrecorded'
  terminalId: string | null
  agent: string
  name: string
  role: string
}

type CliResult = {
  ok: boolean
  result?: { terminals?: Terminal[]; truncated?: boolean }
  error?: { code?: string; message?: string }
}
function orcaCommand(args: string[]): Promise<CliResult> {
  return new Promise((resolve, reject) => {
    execFile(
      process.env.ORCA_CLI_COMMAND || 'orca',
      args,
      { windowsHide: true, timeout: 8000, maxBuffer: 2 * 1024 * 1024 },
      (error, stdout, stderr) => {
        try {
          resolve(JSON.parse(stdout))
        } catch {
          reject(new Error(stderr.trim() || error?.message || 'Orca CLI returned invalid JSON'))
        }
      }
    )
  })
}

async function liveTerminals(): Promise<Terminal[] | null> {
  try {
    const reply = await orcaCommand(['terminal', 'list', '--json'])
    if (!reply.ok || !Array.isArray(reply.result?.terminals)) {
      return null
    }
    return reply.result.truncated ? null : reply.result.terminals
  } catch {
    return null
  }
}

export function sessionFor(
  handle: string,
  terminals: Terminal[] | null,
  agent: string,
  name: string,
  role: string
): Session {
  const terminal = terminals?.find((t) => t.handle === handle)
  return {
    status: !handle
      ? 'unrecorded'
      : !terminals
        ? 'unavailable'
        : !terminal || terminal.orphaned || !terminal.connected
          ? 'closed'
          : 'active',
    terminalId: handle || null,
    agent: agent || terminal?.agentIdentity || '',
    name: name || terminal?.title || '',
    role
  }
}

export async function openSession(session: Session, command = orcaCommand) {
  if (session.status !== 'active' || !session.terminalId) {
    return { opened: false, status: session.status, reason: '对应会话不可打开' }
  }
  const reply = await command(['terminal', 'switch', '--terminal', session.terminalId, '--json'])
  if (!reply.ok) {
    return {
      opened: false,
      status: reply.error?.code === 'terminal_handle_stale' ? 'closed' : 'unavailable',
      reason: reply.error?.message || '会话跳转失败'
    }
  }
  return { opened: true, terminalId: session.terminalId, agent: session.agent, name: session.name }
}

export type TraceNode = {
  id: string
  parentId: string | null
  kind: 'run' | 'task' | 'dispatch'
  agent?: string
  workspaceId?: string
  task?: string
  input?: string
  output?: string
  shortTitle?: string
  taskId?: string
  terminalId?: string
  contractVersion?: number
  dependencies?: unknown[]
  session?: Session
  inputSummary?: string
  outputSummary?: string
  outputMessageId?: string | null
  goal?: string
  delivery?: { status: string; summary: string; links: { url: string; label: string }[] }
  label: string
  status: string
  start: number | null
  end: number | null
  detail: string
  failed: boolean
}

export type TraceRun = {
  id: string
  objective: string
  createdAt: number | null
  nodes: number
  failed: number
}

function dbPath(): string {
  if (process.env.ORCA_TRACE_DB) {
    return process.env.ORCA_TRACE_DB
  }
  if (process.platform === 'darwin') {
    return join(homedir(), 'Library', 'Application Support', 'orca', 'orchestration.db')
  }
  if (process.platform === 'win32') {
    return join(
      process.env.APPDATA ?? join(homedir(), 'AppData', 'Roaming'),
      'orca',
      'orchestration.db'
    )
  }
  return join(homedir(), '.config', 'orca', 'orchestration.db')
}

function query(db: string, sql: string): Promise<Row[]> {
  return new Promise((resolve, reject) => {
    if (!existsSync(db)) {
      reject(new Error(`orchestration.db not found: ${db}`))
      return
    }
    execFile(
      'sqlite3',
      ['-readonly', '-json', db, sql],
      { windowsHide: true, timeout: 15000, maxBuffer: 16 * 1024 * 1024 },
      (error, stdout, stderr) => {
        if (error) {
          reject(new Error(stderr.trim() || error.message))
          return
        }
        const text = stdout.trim()
        if (!text) {
          resolve([])
          return
        }
        try {
          resolve(JSON.parse(text) as Row[])
        } catch {
          reject(new Error('sqlite3 returned invalid JSON'))
        }
      }
    )
  })
}

function toMs(value: string | number | null | undefined): number | null {
  if (value === null || value === undefined || value === '') {
    return null
  }
  if (typeof value === 'number') {
    return value > 1e12 ? value : value * 1000
  }
  const s = String(value).trim()
  if (/^\d+$/.test(s)) {
    const n = Number(s)
    return n > 1e12 ? n : n * 1000
  }
  // SQLite datetime('now') => 'YYYY-MM-DD HH:MM:SS' in UTC; ISO strings carry Z/offset.
  const iso = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(s) ? `${s.replace(' ', 'T')}Z` : s
  const ms = Date.parse(iso)
  return Number.isNaN(ms) ? null : ms
}

function clip(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max)}…` : text
}

const FAILED = new Set(['failed', 'blocked', 'abandoned', 'stop_unknown', 'start_unknown', 'error'])

export function shortTitle(text: string): string {
  return clip(
    text
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/^职责[：:][^。]*。\s*/, '')
      .replace(/^任务[：:]\s*/, '')
      .split(/[。；\n]/)[0] || '任务未命名',
    32
  )
}

export function goalTitle(title: string): string {
  return shortTitle(title)
}

export function deliveryOf(
  output: string,
  status: string
): { status: string; summary: string; links: { url: string; label: string }[] } {
  const clauses = output
    .split(/\n|[。；]/)
    .map((s) => s.trim())
    .filter(Boolean)
  const links: { url: string; label: string }[] = []
  const seen = new Set<string>()
  for (const clause of clauses) {
    if (
      /未(?:部署|发布|开通|获批)|尚未|待(?:审批|部署|发布|开通)|候选|申请中|不能.*(?:访问|使用)/.test(
        clause
      )
    ) {
      continue
    }
    for (const found of clause.matchAll(/https?:\/\/[^\s<>\x22]+/g)) {
      const value = found[0].replace(/[）)\]，,；;。]+$/, '')
      try {
        const parsed = new URL(value)
        if (
          parsed.username ||
          parsed.password ||
          seen.has(value) ||
          /token|authCode|secret|access_key/i.test(parsed.search)
        ) {
          continue
        }
        if (
          /\/codereview\/|\/merge_requests\/|\/openapi\/|\/api\/|\/auth\/|\/console\/|\/tags\//.test(
            parsed.pathname
          )
        ) {
          continue
        }
        if (!/页面|工作台|访问|预览|打开|可用|服务|发布|域名|http:/.test(clause)) {
          continue
        }
        seen.add(value)
        links.push({
          url: value,
          label: /localhost|127\.0\.0\.1/.test(parsed.hostname)
            ? '打开本机页面（回报入口）'
            : '打开页面（回报入口）'
        })
      } catch {
        /* Only complete recorded HTTP(S) links are accepted. */
      }
    }
  }
  const remaining = clauses.find((s) =>
    /尚未|未完成|未验证|未核实|未部署|未发布|未验收|未提交|审批中|仍缺|仍需|仍待|等待|阻塞|缺少|不等于.*验收|not_connected|configuration_required/.test(
      s
    )
  )
  if (remaining) {
    const summary = /真实登录|登录.*未|换票.*未/.test(output)
      ? '真实登录尚未验收'
      : /数据|not_connected|reads503/.test(remaining)
        ? '真实数据尚未接通'
        : /域名|HTTPS/.test(remaining)
          ? '域名访问尚未开通'
          : /部署|上线|镜像|ASI/.test(remaining)
            ? '上线部署尚未验收'
            : /审批|授权|权限/.test(remaining)
              ? '授权条件仍待确认'
              : '仍有交付条件未完成'
    return { status: '待交付', summary, links }
  }
  if (['failed', 'blocked', 'abandoned'].includes(status)) {
    return { status: '需处理', summary: '任务遇到阻塞，尚无交付结果', links }
  }
  if (!output.trim()) {
    return {
      status: 'completed' === status ? '待核验' : '进行中',
      summary: 'completed' === status ? '执行已结束，但没有成果回报' : '尚未收到本任务的结果',
      links
    }
  }
  return {
    status: '已回报',
    summary: /评审通过|复审通过|无阻断|无.*P1.*P2/.test(output)
      ? '代码评审通过，业务交付另行验收'
      : /推送|提交|MR|PR/.test(output)
        ? '代码已提交，尚需交付验收'
        : /可用|页面.*验证通过|访问.*成功/.test(output)
          ? '已提供页面入口与验证回报'
          : '已有结果回报，可点开核对',
    links
  }
}

async function listRuns(db: string): Promise<TraceRun[]> {
  const runs = await query(
    db,
    `select id, objective, created_at from runs where legacy = 0 order by created_at desc`
  )
  const out: TraceRun[] = []
  for (const run of runs) {
    const stat = (
      await query(
        db,
        `select count(*) as total, sum(case when status in ('failed','blocked','abandoned') then 1 else 0 end) as failed
         from (select status from tasks where run_id = '${String(run.id).replace(/'/g, "''")}'
               union all
               select d.status from dispatch_contexts d where d.run_id = '${String(run.id).replace(/'/g, "''")}')`
      )
    )[0]
    out.push({
      id: String(run.id),
      objective: clip(String(run.objective ?? ''), 90),
      createdAt: toMs(run.created_at),
      nodes: stat ? Number(stat.total) : 0,
      failed: stat ? Number(stat.failed ?? 0) : 0
    })
  }
  return out
}

export type LiveRun = {
  id: string
  objective: string
  active: number
  lastAt: number | null
}

// Runs with at least one dispatch that is still alive right now.
// "Alive" mirrors loadRun's active definition: worker starting/ready/running,
// or no worker row yet while the dispatch is pending/dispatched.
async function liveRuns(db: string): Promise<LiveRun[]> {
  const rows = await query(
    db,
    `select d.run_id as id, count(*) as active,
            max(coalesce(d.last_heartbeat_at, d.dispatched_at, d.created_at)) as last_at
       from dispatch_contexts d
       left join worker_dispatches w on w.dispatch_id = d.id
      where w.state in ('starting','ready','running')
         or (w.state is null and d.status in ('pending','dispatched'))
      group by d.run_id
      order by active desc, last_at desc
      limit 20`
  )
  const out: LiveRun[] = []
  for (const row of rows) {
    const id = String(row.id)
    const run = (
      await query(
        db,
        `select objective from runs where id = '${id.replace(/'/g, "''")}' and legacy = 0`
      )
    )[0]
    if (!run) {
      continue
    }
    out.push({
      id,
      objective: clip(String(run.objective ?? ''), 90),
      active: Number(row.active),
      lastAt: toMs(row.last_at)
    })
  }
  return out
}

async function loadRun(db: string, runId: string, terminals: Terminal[] | null) {
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
      dependencies: JSON.parse(String(task.deps ?? '[]')),
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
    const result = task?.result ? JSON.parse(String(task.result)) : null
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
  const outcomes = taskNodes.map((node) => ({ nodeId: node.id, goal: node.goal, ...node.delivery }))
  return {
    run: { id: String(run.id), objective: String(run.objective ?? ''), shortTitle: root.goal },
    outcomes,
    nodes,
    messages: mapped,
    calls,
    db
  }
}

export function sanitize(value: unknown): unknown {
  if (typeof value === 'string') {
    return value
      .replace(
        /((?:access[_-]?token|refresh[_-]?token|api[_-]?key|client[_-]?secret|password|authorization)["']?\s*[=:]\s*["']?)[^\s"',;]+/gi,
        '$1[已隐藏]'
      )
      .replace(/\bBearer\s+[A-Za-z0-9._~+/-]+=*/gi, 'Bearer [已隐藏]')
      .replace(/\bsk-[A-Za-z0-9_-]{16,}\b/g, '[已隐藏]')
  }
  if (Array.isArray(value)) {
    return value.map(sanitize)
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        /^(?:secret|token|password|apiKey)$/i.test(key) ? '[已隐藏]' : sanitize(item)
      ])
    )
  }
  return value
}

export default function activate(orca: OrcaWorkerApi): void {
  orca.panels.handle('trace.runs', async () => sanitize({ runs: await listRuns(dbPath()) }))
  orca.panels.handle('trace.live', async () =>
    sanitize({ now: Date.now(), runs: await liveRuns(dbPath()) })
  )
  orca.panels.handle('trace.load', async (input: { runId: string }) =>
    sanitize(await loadRun(dbPath(), String(input.runId), await liveTerminals()))
  )
  orca.panels.handle('trace.session.open', async (input: { session: Session }) =>
    openSession(input.session)
  )
}
