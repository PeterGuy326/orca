import { adaptRun, dateTime } from './model.js'
import { createOfficeView } from './office-view.js'
import { createHostLive } from '../../voxel-src/integrations/tasks/orca-host-live.js'

const root = document.getElementById('redesign')
const select = document.getElementById('run')
const notice = root.querySelector('#notice')
const drawer = root.querySelector('#drawer')
const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[char])
let model = null, selected = null, visible = true, error = null
const office = createOfficeView({ root: root.querySelector('#view-office'), onTask: showTask })
function showTask(id, scroll = true) {
  selected = id
  const row = model?.rows.find(row => row.id === id)
  drawer.hidden = !row
  if (!row) return
  drawer.innerHTML = `<button id="close-drawer" aria-label="收起任务详情">收起</button><h2>${escape(row.title)}</h2><p>${escape(row.owner)} · ${escape(row.reason)}</p><details open><summary>任务输入</summary><pre>${escape(row.input || row.raw.inputSummary || '未记录')}</pre></details><details open><summary>回报</summary><pre>${escape(row.output || row.result || '尚无回报')}</pre></details><details open><summary>任务对话（${row.messages.length}）</summary>${row.messages.map(message => `<article><b>${escape(message.type)} · ${dateTime(message.at)}</b><p>${escape(message.subject)}</p><pre>${escape(message.body)}</pre></article>`).join('')}</details>`
  root.querySelector('#close-drawer').onclick = () => { selected = null; drawer.hidden = true }
  if (visible && scroll) drawer.scrollIntoView({block:'nearest'})
}
function fail(reason) {
  error = reason?.message || String(reason)
  office.fail()
  notice.hidden = false
  notice.textContent = '读取失败 / unknown：' + error
  document.getElementById('refresh').hidden = false
  document.getElementById('foot').textContent = '读取失败，保留上次记录，人物停止工作。'
}
const live = createHostLive({
  request: (name, data) => orca.plugin.request(name, data),
  selectedRun: () => select.value,
  followActive: () => false,
  selectRun(id, title) {
    if (![...select.options].some(option => option.value === id)) select.add(new Option(title || id, id))
    select.value = id
  },
  onData(data, summary) {
    error = null
    notice.hidden = true
    document.getElementById('refresh').hidden = true
    if (!data) {
      notice.hidden = false
      notice.textContent = '暂无协作记录'
      return
    }
    const changed = model?.data.run.id !== data.run.id
    model = adaptRun({data, liveSummary: summary, capturedAt:new Date().toISOString()})
    office.setData(model)
    window.TraceTimeline.apply(data)
    if (changed) { selected = null; drawer.hidden = true }
    if (selected) showTask(selected, false)
  },
  onError: fail
})
window.TraceRedesign = {
  show(value) { visible = value; office.show(value) },
  fail,
  getState: () => ({runId:model?.data.run.id, selectedTask:selected, error, office:office.getState()})
}
window.PrototypeRedesign = {getState: () => ({ready:Boolean(model), ...window.TraceRedesign.getState()})}
select.onchange = () => {
  selected = null
  drawer.hidden = true
  office.fail()
  live.changed()
}
async function init() {
  try {
    const [history, active] = await Promise.all([orca.plugin.request('trace.runs'), orca.plugin.request('trace.live')])
    if (!Array.isArray(history?.runs) || !Array.isArray(active?.runs)) throw new Error('宿主未返回有效协作列表')
    const previous = select.value
    const runs = [...new Map([...active.runs, ...history.runs].map(run => [run.id, run])).values()]
    select.replaceChildren(...runs.map(run => new Option(run.objective || run.id, run.id)))
    select.value = runs.find(run => run.id === previous)?.id || active.runs[0]?.id || runs[0]?.id || ''
    live.show(true)
    live.setEnabled(true)
  } catch (reason) { fail(reason) }
}
document.getElementById('refresh').onclick = init
window.addEventListener('pagehide', () => { live.dispose(); office.dispose() }, {once:true})
window.addEventListener('keydown', event => { if (event.key === 'Escape') {selected = null; drawer.hidden = true} })
office.show(true)
void init()
