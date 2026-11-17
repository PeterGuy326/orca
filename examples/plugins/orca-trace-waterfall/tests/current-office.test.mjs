import test from 'node:test'
import assert from 'node:assert/strict'
import { officePeople, currentOffice } from '../redesign/src/current-office.js'
import { adaptRun } from '../redesign/src/model.js'
const model = (id, status = 'running') => ({
  data: {
    run: { id },
    nodes: [
      {
        id: 'd',
        kind: 'dispatch',
        taskId: 't',
        terminalId: 's',
        status,
        end: null,
        session: { name: '工程师' }
      }
    ],
    messages: []
  },
  rows: [{ id: 't' }],
  bundle: { liveSummary: { active: 1 } }
})
test('same session across Runs keeps one person and separate task sources', () => {
  const people = officePeople([model('A'), model('B')])
  assert.equal(people.length, 1)
  assert.deepEqual(
    people[0].tasks.map((t) => t.model.data.run.id),
    ['A', 'B']
  )
  assert.equal(officePeople([model('A', 'completed')]).length, 0)
  assert.equal(officePeople([]).length, 0)
})
test('multi-task summary is independent of all Run permutations', () => {
  const work = model('work'),
    wait = model('wait'),
    start = model('start', 'pending'),
    unknown = model('unknown')
  wait.data.messages = [
    { id: 'q', type: 'question', fromNodeId: 'd', fromHandle: 's', toHandle: 'r', at: 1 }
  ]
  unknown.data.messages = [{ id: 'r', type: 'worker_done', dispatchId: 'd' }]
  const permutations = (a) =>
    a.length
      ? a.flatMap((v, i) => permutations(a.filter((_, j) => j !== i)).map((rest) => [v, ...rest]))
      : [[]]
  for (const order of permutations([work, wait, start, unknown])) {
    assert.equal(officePeople(order)[0].state, 'running')
  }
  for (const order of permutations([wait, start, unknown])) {
    assert.equal(officePeople(order)[0].state, 'waiting_reply')
  }
  for (const order of permutations([start, unknown])) {
    assert.equal(officePeople(order)[0].state, 'starting')
  }
  assert.equal(officePeople([unknown])[0].state, 'unknown')
})
test('numeric and ISO capture times produce the same finite model time', () => {
  const data = { run: { id: 'A' }, nodes: [], messages: [] },
    at = 1700000000000
  assert.equal(adaptRun({ data, capturedAt: at }).capturedAt, at)
  assert.equal(adaptRun({ data, capturedAt: new Date(at).toISOString() }).capturedAt, at)
})
test('list polls preserve cached full-read time until body is read again', async () => {
  const original = Date.now
  let now = 1700000000000,
    reads = 0,
    answer
  Date.now = () => now
  const poll = currentOffice({
    interval: 100000,
    request: async (n) =>
      n === 'trace.live'
        ? { runs: [{ id: 'A' }] }
        : (reads++, { run: { id: 'A' }, nodes: [], messages: [] }),
    onData: (a) => (answer = a),
    onError: (e) => {
      throw e
    }
  })
  try {
    await poll.start()
    assert.equal(reads, 1)
    assert.equal(answer[0].capturedAt, now)
    now += 10000
    await poll.start()
    assert.equal(reads, 1)
    assert.equal(answer[0].capturedAt, 1700000000000)
    now += 6000
    await poll.start()
    assert.equal(reads, 2)
    assert.equal(answer[0].capturedAt, now)
  } finally {
    poll.dispose()
    Date.now = original
  }
})
