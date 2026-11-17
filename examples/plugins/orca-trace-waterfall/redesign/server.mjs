import http from 'node:http'
import { loadTrace } from '../voxel-src/integrations/tasks/trace-read.js'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import path from 'node:path'
import { readdir, readFile } from 'node:fs/promises'
const execute = promisify(execFile),
  root = import.meta.dirname
const port = Number(process.env.PROTOTYPE_PORT || 5240)
if (!Number.isInteger(port) || port < 1024 || port > 65535) {
  throw new Error('Invalid prototype port')
}
const origin = `http://127.0.0.1:${port}`,
  host = `127.0.0.1:${port}`
const snapshots = JSON.parse(
  await readFile(
    process.env.ORCA_TRACE_FIXTURE || path.join(root, 'fixtures/snapshots.json'),
    'utf8'
  )
)
const allowed = new Set(snapshots.bundles.map((bundle) => bundle.data.run.id)),
  files = new Map()
async function index(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      await index(file)
    } else if (entry.isFile()) {
      files.set(`/${path.relative(path.join(root, 'dist'), file).split(path.sep).join('/')}`, file)
    }
  }
}
await index(path.join(root, 'dist'))
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.woff2': 'font/woff2',
  '.md': 'text/plain; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
}
function sanitize(value) {
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
      Object.entries(value)
        .filter(([key]) => key !== 'db')
        .map(([key, item]) => [
          key,
          /^(?:secret|token|password|apiKey)$/i.test(key) ? '[已隐藏]' : sanitize(item)
        ])
    )
  }
  return value
}
async function request(name, data) {
  const args = [
    'plugin',
    'dev',
    'request',
    'local.orca-trace-waterfall',
    name,
    '--json',
    '--timeout-ms',
    '12000'
  ]
  if (data) {
    args.push('--data', JSON.stringify(data))
  }
  const { stdout } = await execute(process.env.ORCA_CLI_COMMAND || 'orca', args, {
    timeout: 15000,
    maxBuffer: 20 * 1024 * 1024
  })
  const envelope = JSON.parse(stdout)
  if (
    !envelope.ok ||
    envelope.result?.name !== name ||
    envelope.result?.pluginKey !== 'local.orca-trace-waterfall'
  ) {
    throw new Error('Invalid source reply')
  }
  return envelope.result.result
}
http
  .createServer(async (req, res) => {
    res.setHeader('Cache-Control', 'no-store')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('Referrer-Policy', 'no-referrer')
    const json = (status, body) => {
      res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' })
      res.end(JSON.stringify(body))
    }
    if (req.headers.host !== host || (req.headers.origin && req.headers.origin !== origin)) {
      return json(403, { error: 'same_origin_required' })
    }
    if (req.method !== 'GET') {
      return json(405, { error: 'read_only' })
    }
    let url
    try {
      url = new URL(req.url, origin)
    } catch {
      return json(400, { error: 'invalid_url' })
    }
    const document =
      req.headers['sec-fetch-mode'] === 'navigate' &&
      req.headers['sec-fetch-dest'] === 'document' &&
      ['/', '/index.html'].includes(url.pathname)
    if (url.origin !== origin || (req.headers['sec-fetch-site'] === 'cross-site' && !document)) {
      return json(403, { error: 'same_origin_required' })
    }
    try {
      if (url.pathname === '/api/snapshots' && !url.search) {
        return json(200, sanitize(snapshots))
      }
      if (url.pathname === '/api/read') {
        const keys = [...url.searchParams.keys()],
          runId = url.searchParams.get('runId')
        if (keys.length !== 1 || keys[0] !== 'runId' || !allowed.has(runId)) {
          return json(400, { error: 'invalid_run_id' })
        }
        const live = await request('trace.live'),
          data = await loadTrace(request, runId)
        if (data?.run?.id !== runId) {
          throw new Error('Run mismatch')
        }
        return json(
          200,
          sanitize({
            data,
            capturedAt: new Date().toISOString(),
            source: 'orca.plugin trace.load / trace.live',
            liveSummary: live.runs.find((run) => run.id === runId) ?? { active: 0 }
          })
        )
      }
      if (url.search) {
        return json(400, { error: 'unexpected_query' })
      }
      let file = files.get(url.pathname === '/' ? '/index.html' : url.pathname)
      if (!file && url.pathname.startsWith('/assets/')) {
        await index(path.join(root, 'dist'))
        file = files.get(url.pathname)
      }
      if (!file) {
        return json(404, { error: 'not_found' })
      }
      res.writeHead(200, {
        'Content-Type': types[path.extname(file)] || 'text/plain; charset=utf-8'
      })
      res.end(await readFile(file))
    } catch {
      json(503, { error: 'source_read_unavailable' })
    }
  })
  .listen(port, '127.0.0.1', () => console.log(`Prototype ready ${origin}/ PID=${process.pid}`))
