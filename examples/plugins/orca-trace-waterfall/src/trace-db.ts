import { execFile } from 'node:child_process'
import { existsSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'
import type { TraceRun } from './trace-types.ts'

type Row = Record<string, string | number | null>

export function dbPath(): string {
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

export function query(db: string, sql: string): Promise<Row[]> {
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

export function toMs(value: string | number | null | undefined): number | null {
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

export function clip(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max)}…` : text
}

export async function listRuns(db: string): Promise<TraceRun[]> {
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
export async function liveRuns(db: string): Promise<LiveRun[]> {
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
      `
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
