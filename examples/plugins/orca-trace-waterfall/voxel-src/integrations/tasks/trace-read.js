// A transport snapshot is one live read, never a cached substitute for the next poll.
export async function loadTrace(request, runId, current = () => true) {
  let answer = await request('trace.load', {runId})
  if (!current()) return null
  if (!answer?.paged) return answer
  const {snapshotId, total} = answer
  const chunks = []
  let offset = 0
  while (true) {
    if (answer.runId !== runId || answer.snapshotId !== snapshotId || answer.total !== total ||
        answer.offset !== offset || typeof answer.chunk !== 'string' || !answer.chunk.length ||
        !Number.isInteger(total) || total <= 0 || offset + answer.chunk.length > total) {
      throw new Error('分段读取不完整或 Run 不匹配')
    }
    chunks.push(answer.chunk)
    offset += answer.chunk.length
    if (answer.nextOffset === null) {
      if (offset !== total) throw new Error('分段读取缺失')
      return JSON.parse(chunks.join(''))
    }
    if (answer.nextOffset !== offset) throw new Error('分段位置不连续')
    if (!current()) return null
    answer = await request('trace.load', {runId, snapshotId, offset})
    if (!current()) return null
  }
}
