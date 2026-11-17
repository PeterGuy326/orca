import test from 'node:test'
import assert from 'node:assert/strict'
import { sanitize, openSession, sessionFor, createTracePager, traceReply } from '../src/worker.ts'
import { parseTraceRecord } from '../src/trace-record.ts'
import { loadTrace } from '../voxel-src/integrations/tasks/trace-read.js'
import activate from '../src/worker.ts'

test('malformed records and unknown worker errors expose no original content', async () => {
  for (const text of ['api_key=synthetic-private-value', '{"password":"synthetic-private-value"']) {
    assert.throws(() => parseTraceRecord(text), { message: '协作记录格式无效，请重试' })
    await assert.rejects(traceReply(() => parseTraceRecord(text))(), {
      message: '协作记录读取失败，请重试'
    })
    await assert.rejects(
      traceReply(async () => {
        throw new Error(text)
      })(),
      { message: '协作记录读取失败，请重试' }
    )
    await assert.rejects(
      loadTrace(
        async () => ({
          paged: true,
          runId: 'broken',
          snapshotId: 'one',
          total: text.length,
          offset: 0,
          chunk: text,
          nextOffset: null
        }),
        'broken'
      ),
      { message: '协作记录格式无效，请重试' }
    )
  }
  const handlers = new Map()
  activate({ panels: { handle: (name, handler) => handlers.set(name, handler) } })
  await assert.rejects(
    handlers.get('trace.load')({ runId: 'broken', snapshotId: 'api_key=synthetic-private-value' }),
    { message: '协作记录读取失败，请重试' }
  )
  await assert.rejects(handlers.get('trace.session.open')({ session: null }), {
    message: '协作记录读取失败，请重试'
  })
})

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

test('oversize trace is complete, sanitized and bound to one immutable read', async () => {
  const page = createTracePager()
  const raw = {
    run: { id: 'large' },
    nodes: [{ input: `${'中文😀'.repeat(250000)} password=example` }],
    messages: [{ body: 'complete' }],
    calls: []
  }
  const value = sanitize(raw)
  let reads = 0,
    pages = 0
  const request = async (name, input) => {
    assert.equal(name, 'trace.load')
    const result = page(input, input.snapshotId ? undefined : value)
    if (!input.snapshotId) {
      reads++
    }
    pages++
    assert.ok(Buffer.byteLength(JSON.stringify(result)) < 1024 * 1024, 'each IPC answer fits')
    return result
  }
  assert.deepEqual(await loadTrace(request, 'large'), value)
  assert.equal(reads, 1)
  assert.ok(pages > 2)
  const first = page({ runId: 'large' }, value)
  assert.throws(
    () => page({ runId: 'other', snapshotId: first.snapshotId, offset: first.nextOffset }),
    /Run/
  )
  assert.throws(() => page({ runId: 'large', snapshotId: first.snapshotId, offset: 1 }), /位置/)
  assert.deepEqual(page({ runId: 'small' }, { nodes: [] }), { nodes: [] })
})

test('segmented read rejects gaps and stops fetching when its generation changes', async () => {
  const page = createTracePager(),
    value = { body: 'x'.repeat(1100000) }
  let current = true,
    calls = 0
  assert.equal(
    await loadTrace(
      async (name, input) => {
        calls++
        current = false
        return page(input, value)
      },
      'large',
      () => current
    ),
    null
  )
  assert.equal(calls, 1)
  await assert.rejects(
    loadTrace(
      async () => ({
        paged: true,
        runId: 'large',
        snapshotId: 'x',
        offset: 0,
        total: 10,
        chunk: 'a',
        nextOffset: 3
      }),
      'large'
    ),
    /连续/
  )
  await assert.rejects(
    loadTrace(
      async () => ({
        paged: true,
        runId: 'large',
        snapshotId: 'x',
        offset: 0,
        total: 10,
        chunk: 'a',
        nextOffset: null
      }),
      'large'
    ),
    /缺失/
  )
})
