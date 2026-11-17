import test from 'node:test'
import assert from 'node:assert/strict'
import { adaptRun, filterRows, waitsFor, titleOf } from '../redesign/src/model.js'
const time = 1794810000000
const fixture = (taskStatus = 'dispatched', workerStatus = 'ready', messages = []) => ({
  capturedAt: new Date(time + 100000).toISOString(),
  liveSummary: { active: 1 },
  data: {
    run: { id: 'run_test', objective: '测试' },
    nodes: [
      { id: 'run_test', kind: 'run', start: time },
      {
        id: 'task_a',
        kind: 'task',
        shortTitle: '任务目标',
        label: '完整任务目标',
        parentId: 'run_test',
        status: taskStatus,
        start: time
      },
      {
        id: 'ctx_a',
        kind: 'dispatch',
        taskId: 'task_a',
        parentId: 'task_a',
        terminalId: 'term_a',
        status: workerStatus,
        start: time,
        end: ['ready', 'pending'].includes(workerStatus) ? null : time + 1000
      }
    ],
    messages
  }
})
const report = (outcome) => ({
  id: 'done',
  taskId: 'task_a',
  dispatchId: 'ctx_a',
  type: 'worker_done',
  fromNodeId: 'ctx_a',
  body: '回报正文',
  subject: '已提交结果',
  at: time + 1000,
  payload: { outcome }
})
test('counts separate running, reports and orchestration completion', () => {
  let model = adaptRun(fixture())
  assert.equal(model.counts.running, 1)
  model = adaptRun(fixture('reported', 'reported', [report('succeeded')]))
  assert.equal(model.counts.reported, 1)
  assert.equal(model.counts.ended, 0)
  model = adaptRun(fixture('completed', 'released', [report('succeeded')]))
  assert.equal(model.counts.ended, 1)
  assert.equal(model.counts.running, 0)
  assert.equal(filterRows(model).length, 0)
  assert.equal(filterRows(model, { completed: true }).length, 1)
})
test('failure, unknown and blocked need viewing without inventing an approval', () => {
  for (const [task, worker] of [
    ['blocked', 'failed'],
    ['dispatched', 'stop_unknown'],
    ['failed', 'failed']
  ]) {
    const model = adaptRun(fixture(task, worker))
    assert.equal(model.counts.attention, 1)
    assert.equal(model.counts.ended, 0)
    assert.doesNotMatch(model.rows[0].reason, /需要审批/)
  }
})
test('duplicate and exact threaded messages determine waits; unrelated title matches do not', () => {
  const q = {
    id: 'q',
    type: 'question',
    dispatchId: 'ctx_a',
    fromNodeId: 'ctx_a',
    fromHandle: 'term_a',
    toHandle: 'router',
    at: time + 1000
  }
  const wrong = {
    id: 'wrong',
    type: 'status',
    taskId: 'task_else',
    subject: '任务目标',
    at: time + 2000
  }
  let model = adaptRun(fixture('dispatched', 'ready', [q, q, wrong]))
  assert.equal(model.counts.attention, 1)
  assert.equal(model.rows[0].messages.length, 1)
  assert.equal(waitsFor(model, model.rows[0])[0].reply, undefined)
  const reply = {
    id: 'r',
    type: 'status',
    threadId: 'q',
    toNodeId: 'ctx_a',
    fromHandle: 'router',
    toHandle: 'term_a',
    at: time + 4000
  }
  model = adaptRun(fixture('dispatched', 'ready', [q, reply]))
  assert.equal(model.counts.running, 1)
  assert.equal(waitsFor(model, model.rows[0])[0].end, reply.at)
})
test('search preserves source semantics and rejects missing sources', () => {
  const model = adaptRun(fixture())
  assert.equal(filterRows(model, { query: '目标' }).length, 1)
  assert.equal(filterRows(model, { query: '不存在' }).length, 0)
  assert.throws(() => adaptRun({}), /缺少/)
})
test('responsibility text yields an explicit source task and reused terminals keep one owner', () => {
  assert.equal(
    titleOf({ shortTitle: '你是唯一工程师', input: '你是唯一工程师。任务：修复登录入口。' }),
    '修复登录入口'
  )
  const bundle = fixture()
  bundle.data.nodes.push(
    { ...bundle.data.nodes[1], id: 'task_b' },
    { ...bundle.data.nodes[2], id: 'ctx_b', taskId: 'task_b', parentId: 'task_b', start: time + 1 }
  )
  const model = adaptRun(bundle)
  assert.equal(model.rows[0].owner, model.rows[1].owner)
})
