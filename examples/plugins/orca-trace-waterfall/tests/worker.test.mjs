import test from 'node:test'
import assert from 'node:assert/strict'
import { sanitize, openSession, sessionFor } from '../src/worker.ts'

test('outward trace values recursively redact credentials', () => {
  assert.deepEqual(
    sanitize({
      token: 'synthetic-secret',
      nodes: [{ input: 'password=example Bearer abc123 authorization:credential' }]
    }),
    {
      token: '[已隐藏]',
      nodes: [{ input: 'password=[已隐藏] Bearer [已隐藏] authorization:[已隐藏]' }]
    }
  )
})

test('unavailable session cannot invoke a jump', async () => {
  const session = sessionFor('term_example', [], 'example', 'Example worker', 'worker')
  let called = false
  const result = await openSession(session, async () => {
    called = true
    return { ok: true }
  })
  assert.equal(result.opened, false)
  assert.equal(called, false)
})
