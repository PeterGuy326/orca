export function parseTraceRecord(text: string) {
  try {
    return JSON.parse(text)
  } catch {
    throw new Error('协作记录格式无效，请重试')
  }
}
