import './live.css'
import { createScene } from '../engine/scene.js'
import { assembleOffice } from '../world/assemble-office.js'
import { getLayout } from '../layouts/registry.js'
import { createTaskDisplays } from '../integrations/tasks/task-displays.js'
import { createOrcaSource, createOrcaPoller } from '../integrations/tasks/orca-source.js'

const $ = (selector) => document.querySelector(selector)
const source = createOrcaSource(),
  timers = new Map(),
  previous = new Map()
let office,
  sceneRun = null,
  selectedId = null,
  mounts = 0,
  disposals = 0,
  disposed = false
const layout = structuredClone(getLayout('suite'))
function clearCelebrations() {
  timers.forEach(clearTimeout)
  timers.clear()
  previous.clear()
}
function mount(runId) {
  clearCelebrations()
  if (office) {
    office.dispose()
    disposals++
  }
  sceneRun = runId
  selectedId = null
  mounts++
  office = createScene({
    viewport: $('#viewport'),
    layout: structuredClone(layout),
    createOffice: assembleOffice,
    managedActors: true,
    labels: { pickPerson: '查看右侧真实任务与回报', selecting: (name) => `已选择 ${name}` },
    onEvent(event) {
      if (event.type === 'ready') {
        $('#loading').hidden = true
      }
      if (event.type === 'selection') {
        const entity = source.getState().bindings.find((item) => item.slot === event.index)
        if (entity && selectedId !== entity.id) {
          selectedId = entity.id
          details()
        }
        office?.camera('person')
      }
    },
    mountTasks: (context) =>
      createTaskDisplays({ ...context, root: $('#app'), initialSource: source })
  })
}
function choose(entity) {
  selectedId = entity.id
  if (entity.slot < 9) {
    office.select(entity.slot)
    office.camera('person')
    office.renderNow()
  }
  details()
}
function details() {
  const entity = source.getState().bindings.find((item) => item.id === selectedId),
    detail = $('#detail')
  detail.replaceChildren()
  $('#workers')
    .querySelectorAll('[data-id]')
    .forEach((button) =>
      button.setAttribute('aria-pressed', String(button.dataset.id === selectedId))
    )
  $('#computer').disabled = !entity || entity.slot >= 9
  if (!entity) {
    return
  }
  function section(title, body) {
    const heading = document.createElement('h3'),
      text = document.createElement('pre')
    heading.textContent = title
    text.textContent = body || '暂无记录'
    detail.append(heading, text)
  }
  section(
    entity.name,
    `${entity.label}\n原始状态 ${entity.rawStatus}\n会话 ${entity.terminalId ?? '缺失，使用 dispatch ID'}\n派发 ${entity.dispatchId}`
  )
  section('输入', entity.input)
  section('回报', entity.output)
  section(
    '真实任务消息',
    entity.messages
      .map(
        (message) =>
          `${Number.isFinite(message.at) ? new Date(message.at).toLocaleTimeString('zh-CN', { hour12: false }) : '时间未知'} · ${message.type} · ${message.subject}\n${message.body}`
      )
      .join('\n\n')
  )
}
function paint() {
  const state = source.getState()
  if (sceneRun !== state.runId) {
    mount(state.runId)
  }
  const rows = $('#workers')
  rows.replaceChildren()
  for (let slot = 0; slot < 9; slot++) {
    const entity = state.bindings.find((item) => item.slot === slot)
    let action = entity?.action ?? 'idle'
    if (entity?.state === 'completed') {
      if (previous.get(entity.id) !== 'completed' && !state.error) {
        timers.set(
          entity.id,
          setTimeout(() => {
            timers.delete(entity.id)
            if (!disposed) {
              office.setActor(layout.actors[slot].instanceId, { action: 'idle' })
              office.renderNow()
            }
          }, 1800)
        )
      }
      if (!timers.has(entity.id)) {
        action = 'idle'
      }
    } else if (entity && timers.has(entity.id)) {
      clearTimeout(timers.get(entity.id))
      timers.delete(entity.id)
    }
    office.setActor(layout.actors[slot].instanceId, {
      visible: Boolean(entity),
      name: entity?.name ?? '空位',
      action
    })
    if (entity) {
      previous.set(entity.id, entity.state)
    }
  }
  for (const entity of state.bindings) {
    const button = document.createElement('button'),
      name = document.createElement('b'),
      status = document.createElement('span')
    button.className = 'worker'
    button.dataset.id = entity.id
    name.textContent = entity.name
    status.textContent = `${entity.slot < 9 ? `工位 ${entity.slot + 1}` : '超额 / 无场景席位'} · ${entity.label}`
    button.append(name, status)
    button.addEventListener('click', () => choose(entity))
    rows.append(button)
  }
  $('#refresh').textContent =
    `${state.error ? `读取失败 / unknown：${state.error} · ` : ''}最新成功刷新 ${state.lastUpdated ? new Date(state.lastUpdated).toLocaleTimeString('zh-CN', { hour12: false }) : '尚无'} · Run ${state.runId ?? '无'} · active ${state.active ?? 'unknown'}`
  $('#router').textContent =
    `Router：${state.router?.name || state.router?.terminalId || '暂无'}（不占 Worker 9 席）`
  $('#empty').textContent = state.error
    ? '数据已过期，全部人物停止工作。'
    : !state.bindings.length
      ? '暂无可展示的真实 Worker，空工位保留。'
      : state.active === 0
        ? '当前无活跃派发；正在回读此 Run 的真实终态。'
        : `${state.bindings.length} 个真实会话，动作根据派发状态更新。`
  $('#overflow').textContent = state.overflow
    ? `超过 9 席：${state.overflow} 个会话（其中活跃 ${state.overflowActive} 个）只在列表展示；已有席位保持固定。`
    : ''
  if (!selectedId && state.bindings.length) {
    selectedId = state.bindings[0].id
  }
  details()
  office.renderNow()
}

mount(null)
paint()
const picker = $('#run-picker')
const poller = createOrcaPoller({
  async fetchJson(url, signal) {
    const response = await fetch(url, { signal, cache: 'no-store' })
    if (!response.ok) {
      throw new Error(`只读接口 HTTP ${response.status}`)
    }
    return response.json()
  },
  onData({ live, data, summary }) {
    const pinned = picker.value
    picker.replaceChildren(new Option('跟随活跃 Run', ''))
    const choices = new Map(live.runs.map((run) => [run.id, run.objective]))
    if (data) {
      choices.set(data.run.id, data.run.objective)
    }
    if (pinned && !choices.has(pinned)) {
      choices.set(pinned, pinned)
    }
    for (const [id, title] of choices) {
      picker.add(new Option(`${title} · ${id}`, id))
    }
    picker.value = pinned
    if (data) {
      source.update(data, summary)
    } else {
      source.empty()
    }
    paint()
  },
  onError() {
    source.fail('接口不可用，等待下次刷新')
    paint()
  }
})
picker.addEventListener('change', () => {
  const url = new URL(location.href)
  if (picker.value) {
    url.searchParams.set('run', picker.value)
  } else {
    url.searchParams.delete('run')
  }
  history.replaceState(null, '', url)
  source.fail('正在切换 Run')
  paint()
  poller.start(picker.value || null)
})
const requested = new URL(location.href).searchParams.get('run')
if (requested) {
  picker.add(new Option(requested, requested))
  picker.value = requested
}
poller.start(requested)
document.querySelectorAll('[data-camera]').forEach((button) =>
  button.addEventListener('click', () => {
    office.camera(button.dataset.camera)
    office.renderNow()
  })
)
$('#computer').addEventListener('click', () => {
  const entity = source.getState().bindings.find((item) => item.id === selectedId)
  const binding = office.tasks.getState().bindings.find((item) => item.actorIndex === entity?.slot)
  if (binding) {
    office.tasks.focus(binding.displayId)
    office.renderNow()
  }
})
Object.defineProperty(window, 'OfficeVoxelLive', {
  value: Object.freeze({
    getState() {
      const state = source.getState(),
        scene = office.getState()
      return structuredClone({
        ...state,
        bindings: state.bindings.map((item) => ({
          ...item,
          instanceId: item.slot < 9 ? scene.actors[item.slot].instanceId : null,
          stationId: item.slot < 9 ? `suite:station:${layout.stationFor[item.slot]}` : null,
          displayId:
            office.tasks.getState().bindings.find((binding) => binding.actorIndex === item.slot)
              ?.displayId ?? null,
          action: item.slot < 9 ? scene.actors[item.slot].action : null
        })),
        selected: selectedId,
        scene,
        mounts,
        disposals,
        taskState: office.tasks.getState()
      })
    }
  }),
  writable: false,
  configurable: false
})
function dispose() {
  if (disposed) {
    return
  }
  disposed = true
  poller.dispose()
  clearCelebrations()
  office.dispose()
  source.dispose()
}
window.addEventListener('pagehide', dispose, { once: true })
if (import.meta.hot) {
  import.meta.hot.dispose(dispose)
}
