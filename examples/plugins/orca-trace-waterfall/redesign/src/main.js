import { adaptRun, dateTime } from './model.js'
import '../../voxel-src/integrations/tasks/task-displays.css'
import { createOfficeView } from './office-view.js'
import { currentOffice, officePeople } from './current-office.js'
import { loadTrace } from '../../voxel-src/integrations/tasks/trace-read.js'
const root = document.getElementById('redesign'),
  drawer = root.querySelector('#drawer'),
  notice = root.querySelector('#notice')
const request = (name, data) => orca.plugin.request(name, data)
const esc = (v) =>
  String(v ?? '').replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
  )
let models = [],
  people = [],
  chosen = null,
  error = null,
  version = 0,
  ready = false,
  selectedPerson = null,
  opener = null,
  returnPerson = null,
  entryKind = 'roster',
  choosingRun = false
const office = createOfficeView({
  root: root.querySelector('#view-office'),
  onTask: (id, person) => showPerson(person)
})
const title = document.getElementById('current-title'),
  history = document.getElementById('run')
function close() {
  const seat = office.getState().slots.find((s) => s.id === returnPerson)
  const roster = [...root.querySelectorAll('[data-person-id]')].find(
    (b) => b.dataset.personId === returnPerson
  )
  const label =
    seat &&
    seat.page === office.getState().page &&
    root.querySelector(`[data-office-actor="${seat.slot}"]`)
  const target = people.some((p) => p.id === returnPerson)
    ? entryKind === 'label'
      ? label
      : roster
    : null
  selectedPerson = null
  choosingRun = false
  drawer.hidden = true
  drawer.replaceChildren()
  ;(target && target.getClientRects().length ? target : document.getElementById('vOffice')).focus({
    preventScroll: true
  })
}
function clear() {
  close()
  window.TraceTimeline.clear()
}
function fail(e) {
  error = e.message
  notice.hidden = false
  notice.textContent = `读取失败 / unknown：${e.message}`
  document.getElementById('refresh').hidden = false
  office.fail()
}
function showPerson(person, reveal = true) {
  person = people.find((p) => p.id === person?.id)
  if (!person) {
    close()
    return
  }
  if (reveal) {
    version++
    opener = document.activeElement
    returnPerson = person.id
    entryKind = opener?.classList.contains('person-row') ? 'roster' : 'label'
    choosingRun = false
  }
  selectedPerson = person.id
  const tasks = person.tasks
  const active = drawer.contains(document.activeElement)
    ? document.activeElement.dataset.focusKey
    : null
  const expanded = new Set(
      [...drawer.querySelectorAll('details[open]')].map(
        (d) =>
          d.parentElement.querySelector('p')?.textContent + d.querySelector('summary').textContent
      )
    ),
    scroll = drawer.scrollTop
  drawer.hidden = false
  drawer.innerHTML = `<button id="close">收起</button><h2>${esc(person.name)}</h2><p>来源：Orca 原生派发 · ${esc(person.terminalId || '会话未关联')}</p>${tasks.map((t, i) => `<article><h3>${esc(t.row?.title || t.model.data.run.objective)}</h3><p>${esc(t.row?.owner)} · ${esc(t.model.data.run.id)}</p><button data-flow="${i}">查看流程</button><details><summary>输入与回报</summary><pre>${esc(t.row?.input)}</pre><pre>${esc(t.row?.output)}</pre></details><details><summary>对话</summary>${(t.row?.messages || []).map((m) => `<p>${esc(m.type)} ${dateTime(m.at)}</p><pre>${esc(m.body)}</pre>`).join('')}</details></article>`).join('')}`
  drawer.querySelector('#close').onclick = close
  drawer.querySelector('#close').dataset.focusKey = 'close'
  drawer.querySelectorAll('[data-flow]').forEach((b, i) => {
    const status = document.createElement('p')
    status.textContent = tasks[i].label
    b.after(status)
    const run = tasks[i].model.data.run.id,
      dispatch = tasks[i].node.id
    b.dataset.focusKey = `flow:${run}:${dispatch}`
    b.parentElement
      .querySelectorAll('summary')
      .forEach((s, index) => (s.dataset.focusKey = `summary:${run}:${dispatch}:${index}`))
    b.onclick = () => {
      const task = people
        .find((p) => p.id === selectedPerson)
        ?.tasks.find((t) => t.model.data.run.id === run && t.node.id === dispatch)
      if (task) {
        flow(task.model)
      }
    }
  })
  drawer.querySelectorAll('details').forEach((d) => {
    d.open = expanded.has(
      d.parentElement.querySelector('p')?.textContent + d.querySelector('summary').textContent
    )
  })
  if (!reveal) {
    const control = [...drawer.querySelectorAll('[data-focus-key]')].find(
      (e) => e.dataset.focusKey === active
    )
    if (control) {
      control.focus({ preventScroll: true })
    } else if (active) {
      document.getElementById('vOffice').focus({ preventScroll: true })
    }
    drawer.scrollTop = scroll
  }
  if (reveal) {
    drawer.scrollTop = 0
    drawer.querySelector('#close').focus({ preventScroll: true })
  }
}
function flow(model, historical = false) {
  version++
  choosingRun = false
  const changed = chosen?.data.run.id !== model.data.run.id
  chosen = model
  chosen.historical = historical
  if (changed) {
    window.TraceTimeline.clear()
  }
  title.textContent = model.data.run.shortTitle || model.data.run.objective
  title.title = model.data.run.id
  window.TraceTimeline.apply(model.data)
  window.TraceTimeline.show('timeline')
}
function back() {
  version++
  chosen = null
  history.hidden = true
  clear()
  title.textContent = '当前协作'
  window.TraceTimeline.show('office')
}
const poll = currentOffice({
  request,
  onError: fail,
  onData(bundles) {
    models = bundles.map((b) => adaptRun(b))
    people = officePeople(models)
    office.setPeople(people, models)
    ready = true
    error = null
    notice.hidden = true
    if (selectedPerson) {
      showPerson({ id: selectedPerson }, false)
    } else if (choosingRun) {
      showChoices()
    }
    if (chosen && !chosen.historical) {
      const fresh = models.find((m) => m.data.run.id === chosen.data.run.id)
      if (fresh) {
        chosen = fresh
        window.TraceTimeline.apply(fresh.data)
      } else {
        chosen = null
        window.TraceTimeline.clear()
        title.textContent = '协作已结束'
      }
    }
  }
})
function showChoices() {
  const active = drawer.contains(document.activeElement) ? document.activeElement.dataset.run : null
  drawer.hidden = false
  drawer.innerHTML = `<p>请选择人物查看流程</p>${models.map((m) => `<button data-run="${esc(m.data.run.id)}">${esc(m.data.run.shortTitle || m.data.run.objective)}</button>`).join('')}`
  drawer.querySelectorAll('[data-run]').forEach(
    (b) =>
      (b.onclick = () => {
        const model = models.find((m) => m.data.run.id === b.dataset.run)
        if (model) {
          flow(model)
        } else {
          notice.hidden = false
          notice.textContent = '该协作已结束，请重新选择'
        }
      })
  )
  if (active) {
    const control = [...drawer.querySelectorAll('[data-run]')].find((b) => b.dataset.run === active)
    ;(control || document.getElementById('vTime')).focus({ preventScroll: true })
  }
}
document.getElementById('vTime').onclick = () => {
  version++
  if (chosen) {
    flow(chosen, chosen.historical)
    return
  }
  window.TraceTimeline.show('office')
  selectedPerson = null
  choosingRun = true
  showChoices()
}
document.getElementById('back').onclick = back
document.getElementById('refresh').onclick = () => poll.refresh()
document.getElementById('history').onclick = async () => {
  const token = ++version
  try {
    const result = await request('trace.runs')
    if (token !== version) {
      return
    }
    history.replaceChildren(...result.runs.map((r) => new Option(r.objective, r.id)))
    history.hidden = false
    history.value = ''
  } catch (e) {
    if (token === version) {
      fail(e)
    }
  }
}
history.onchange = async () => {
  const token = ++version
  chosen = null
  clear()
  try {
    const data = await loadTrace(request, history.value, () => token === version)
    if (token !== version) {
      return
    }
    flow(adaptRun({ data, liveSummary: { active: 0 }, capturedAt: Date.now() }), true)
  } catch (e) {
    if (token === version) {
      fail(e)
    }
  }
}
document.getElementById('vOffice').onclick = () => {
  history.hidden = true
  back()
}
window.TraceRedesign = {
  show: (v) => office.show(v),
  fail,
  getState: () => ({
    ready,
    error,
    runId: chosen?.data.run.id,
    people: people.map((p) => ({
      id: p.id,
      name: p.name,
      tasks: p.tasks.map((t) => ({ run: t.model.data.run.id, task: t.row?.id }))
    })),
    office: office.getState()
  })
}
window.PrototypeRedesign = { getState: () => window.TraceRedesign.getState() }
window.addEventListener(
  'pagehide',
  () => {
    poll.dispose()
    office.dispose()
    version++
  },
  { once: true }
)
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !drawer.hidden) {
    version++
    close()
  }
})
office.show(true)
void poll.start()
