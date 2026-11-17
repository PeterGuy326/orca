import test from 'node:test'
import assert from 'node:assert/strict'
import { createReadBridge } from './read-bridge.mjs'
import { get } from 'node:http'

test('bridge defaults to synthetic and requires explicit live plus same-origin read-only requests', async () => {
  for (const live of [undefined, false, true]) {
    let calls = 0
    const server = createReadBridge({
      root: '/unused',
      live,
      execute: async () => {
        calls++
        return { stdout: JSON.stringify({ ok: true, result: { result: { synthetic: true } } }) }
      }
    })
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
    const origin = `http://127.0.0.1:${server.address().port}`
    try {
      for (const name of [
        'trace.live',
        'trace.load',
        'trace.runs',
        'trace.session.open',
        'unknown'
      ]) {
        const answer = await fetch(`${origin}/rpc?n=${name}&d=undefined`)
        assert.equal(
          answer.status,
          live === true && name !== 'trace.session.open' && name !== 'unknown' ? 200 : 403
        )
      }
      assert.equal(calls, live === true ? 3 : 0)
      for (const headers of [{ Host: 'foreign.invalid' }, { Origin: 'https://foreign.invalid' }]) {
        const status = await new Promise((resolve, reject) => {
          get(`${origin}/rpc?n=trace.live&d=undefined`, { headers }, (response) => {
            response.resume()
            resolve(response.statusCode)
          }).on('error', reject)
        })
        assert.equal(status, 403)
      }
      assert.equal(
        (await fetch(`${origin}/rpc?n=trace.live&d=undefined`, { method: 'POST' })).status,
        405
      )
      assert.equal(calls, live === true ? 3 : 0)
    } finally {
      await new Promise((resolve) => server.close(resolve))
    }
  }
})

test('bridge failures never return CLI or JSON excerpts', async () => {
  const server = createReadBridge({
    root: '/unused',
    live: true,
    execute: async () => {
      throw new Error('password=synthetic-private-value')
    }
  })
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  try {
    const response = await fetch(
      `http://127.0.0.1:${server.address().port}/rpc?n=trace.load&d=undefined`
    )
    assert.equal(response.status, 503)
    assert.deepEqual(await response.json(), { error: 'Trace read unavailable' })
  } finally {
    await new Promise((resolve) => server.close(resolve))
  }
})
