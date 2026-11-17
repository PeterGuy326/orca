import { loadTrace } from './trace-read.js'
// Host calls cannot be aborted; generations fence replies after hide/toggle/run changes.
export function createHostLive({
  request,
  selectedRun,
  followActive,
  selectRun,
  onRuns = () => {},
  onData,
  onError,
  interval = 4000
}) {
  let generation = 0,
    timer = null,
    enabled = false,
    shown = false,
    disposed = false
  let inFlight = null,
    lastRun = null
  function invalidate() {
    generation++
    clearTimeout(timer)
    timer = null
  }
  function schedule() {
    if (enabled && shown && !disposed) {
      timer = setTimeout(tick, interval)
    }
  }
  async function tick() {
    if (!enabled || !shown || disposed) {
      return
    }
    if (inFlight) {
      schedule()
      return
    }
    const version = generation
    const valid = () => version === generation && enabled && shown && !disposed
    const job = (async () => {
      try {
        const live = await request('trace.live')
        if (!valid()) {
          return
        }
        if (!live || !Array.isArray(live.runs)) {
          throw new Error('trace.live 未返回有效列表')
        }
        onRuns(live.runs)
        const current = selectedRun() || lastRun
        const pick = followActive()
          ? live.runs.find((run) => run.id === current)?.id || live.runs[0]?.id || current
          : current || live.runs[0]?.id
        if (!pick) {
          onData(null, { active: 0 }, live)
          return
        }
        const data = await loadTrace(request, pick, valid)
        if (!valid()) {
          return
        }
        if (data?.run?.id !== pick || !Array.isArray(data.nodes) || !Array.isArray(data.messages)) {
          throw new Error('trace.load 未返回有效 Run')
        }
        lastRun = pick
        selectRun(pick, data.run.objective)
        onData(data, live.runs.find((run) => run.id === pick) ?? { active: 0 }, live)
      } catch (error) {
        if (valid()) {
          onError(error)
        }
      }
    })()
    inFlight = job
    try {
      await job
    } finally {
      if (inFlight === job) {
        inFlight = null
      }
      if (valid()) {
        schedule()
      }
    }
  }
  return {
    setEnabled(value) {
      enabled = Boolean(value)
      invalidate()
      if (enabled) {
        void tick()
      }
    },
    show(value) {
      shown = Boolean(value)
      invalidate()
      if (shown) {
        void tick()
      }
    },
    changed() {
      invalidate()
      if (enabled && shown) {
        void tick()
      }
    },
    dispose() {
      disposed = true
      invalidate()
    }
  }
}
