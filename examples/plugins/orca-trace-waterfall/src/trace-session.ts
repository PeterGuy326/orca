import { execFile } from 'node:child_process'
import type { Session } from './trace-types.ts'

export type Terminal = {
  handle: string
  title?: string
  agentIdentity?: string
  connected?: boolean
  orphaned?: boolean
  writable?: boolean
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

export async function liveTerminals(): Promise<Terminal[] | null> {
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
