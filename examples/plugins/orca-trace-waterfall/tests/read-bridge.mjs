import http from 'node:http'
import path from 'node:path'
import { readFile } from 'node:fs/promises'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

export function createReadBridge({ root, live = false, execute = promisify(execFile) }) {
  const server = http.createServer(async (req, res) => {
    const host = `127.0.0.1:${server.address().port}`
    const reject = (status) =>
      res
        .writeHead(status, { 'Content-Type': 'application/json' })
        .end(JSON.stringify({ error: 'Trace read unavailable' }))
    if (
      req.headers.host !== host ||
      (req.headers.origin && req.headers.origin !== `http://${host}`)
    ) {
      reject(403)
      return
    }
    if (req.method !== 'GET') {
      reject(405)
      return
    }
    try {
      const u = new URL(req.url, `http://${host}`)
      if (u.pathname === '/rpc') {
        if (
          live !== true ||
          !['trace.live', 'trace.load', 'trace.runs'].includes(u.searchParams.get('n'))
        ) {
          reject(403)
          return
        }
        const args = [
          'plugin',
          'dev',
          'request',
          'local.orca-trace-waterfall',
          u.searchParams.get('n')
        ]
        if (u.searchParams.get('d') !== 'undefined') {
          args.push('--data', u.searchParams.get('d'))
        }
        args.push('--json')
        const answer = JSON.parse((await execute('orca', args)).stdout)
        if (!answer.ok) {
          reject(503)
          return
        }
        res
          .writeHead(200, { 'Content-Type': 'application/json' })
          .end(JSON.stringify(answer.result.result))
        return
      }
      const file = path.resolve(root, `.${u.pathname}`)
      if (
        !file.startsWith(`${root}/`) ||
        !(u.pathname === '/panel/index.html' || u.pathname.startsWith('/dist/'))
      ) {
        reject(404)
        return
      }
      res.setHeader(
        'Content-Type',
        file.endsWith('.js')
          ? 'text/javascript'
          : file.endsWith('.css')
            ? 'text/css'
            : file.endsWith('.woff2')
              ? 'font/woff2'
              : 'text/html'
      )
      res.end(await readFile(file))
    } catch {
      reject(503)
    }
  })
  return server
}
