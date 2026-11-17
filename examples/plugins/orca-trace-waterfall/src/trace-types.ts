export type Session = {
  status: 'active' | 'closed' | 'unavailable' | 'unrecorded'
  terminalId: string | null
  agent: string
  name: string
  role: string
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
