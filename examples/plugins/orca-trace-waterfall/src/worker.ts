// Reads Orca native orchestration records read-only; no business writes.
import type { OrcaWorkerApi } from 'orca/worker'
import type { Session } from './trace-types.ts'
import { randomUUID } from 'node:crypto'
import { dbPath, listRuns, liveRuns } from './trace-db.ts'
import { loadRun } from './trace-run.ts'
import { liveTerminals, openSession } from './trace-session.ts'
export { openSession, sessionFor } from './trace-session.ts'
export { shortTitle, goalTitle, deliveryOf } from './trace-delivery.ts'
export type { Session, TraceNode, TraceRun } from './trace-types.ts'
export type { LiveRun } from './trace-db.ts'

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

export function createTracePager() {
  const snapshots = new Map<string, { runId: string; text: string; at: number }>()
  const size = 65536
  return (input: { runId: string; snapshotId?: string; offset?: number }, value?: unknown) => {
    let id = input.snapshotId
    if (!id) {
      const text = JSON.stringify(value)
      if (Buffer.byteLength(text) <= 512 * 1024) {
        return value
      }
      for (const [key, snapshot] of snapshots) {
        if (Date.now() - snapshot.at > 120000) {
          snapshots.delete(key)
        }
      }
      while (snapshots.size >= 4) {
        snapshots.delete(snapshots.keys().next().value!)
      }
      id = randomUUID()
      snapshots.set(id, { runId: input.runId, text, at: Date.now() })
    }
    const snapshot = snapshots.get(id)
    if (!snapshot || snapshot.runId !== input.runId || Date.now() - snapshot.at > 120000) {
      throw new Error('分段读取已过期或 Run 不匹配，请重试')
    }
    const offset = input.offset ?? 0
    if (
      !Number.isInteger(offset) ||
      offset < 0 ||
      offset >= snapshot.text.length ||
      offset % size !== 0
    ) {
      throw new Error('无效分段位置')
    }
    const chunk = snapshot.text.slice(offset, offset + size)
    const nextOffset = offset + chunk.length < snapshot.text.length ? offset + chunk.length : null
    return {
      paged: true,
      runId: input.runId,
      snapshotId: id,
      offset,
      total: snapshot.text.length,
      chunk,
      nextOffset
    }
  }
}

export default function activate(orca: OrcaWorkerApi): void {
  const page = createTracePager()
  orca.panels.handle('trace.runs', async () => sanitize({ runs: await listRuns(dbPath()) }))
  orca.panels.handle('trace.live', async () =>
    sanitize({ now: Date.now(), runs: await liveRuns(dbPath()) })
  )
  orca.panels.handle(
    'trace.load',
    async (input: { runId: string; snapshotId?: string; offset?: number }) =>
      page(
        input,
        input.snapshotId
          ? undefined
          : sanitize(await loadRun(dbPath(), String(input.runId), await liveTerminals()))
      )
  )
  orca.panels.handle('trace.session.open', async (input: { session: Session }) =>
    openSession(input.session)
  )
}
