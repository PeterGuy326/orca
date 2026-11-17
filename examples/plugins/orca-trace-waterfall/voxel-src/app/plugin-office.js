import { createScene } from '../engine/scene.js'
import { assembleOffice } from '../world/assemble-office.js'
import { getLayout } from '../layouts/registry.js'
import { createTaskDisplays } from '../integrations/tasks/task-displays.js'
import { createOrcaSource } from '../integrations/tasks/orca-source.js'
import { projectOrcaReplay, replayBounds } from '../integrations/tasks/orca-replay.js'
import { createHostLive } from '../integrations/tasks/orca-host-live.js'
import './plugin-office.css'

const root = document.getElementById('officewrap')
root.innerHTML = `<div class="ov-heading"><b>Office Voxel · 真实 Orca 数据 / 只读 / 非模拟</b><span id="ovRouter"></span></div>
<div class="ov-main"><section class="ov-stage"><div id="ovViewport" tabindex="0" aria-label="套间场景：拖拽旋转、滚轮缩放、点击人物看详情"></div><p id="ovFallback" role="status" hidden></p>
<div class="ov-cameras"><button data-camera="room">全景</button><button data-camera="person">人物特写</button><button data-camera="top">俯视</button><button id="ovComputer">电脑特写</button></div></section>
<aside class="ov-side"><p id="ovState" role="status"></p><p id="ovOverflow"></p><div id="ovRoster"></div><section id="ovDetail" aria-live="polite"></section></aside></div>
<div class="ov-deck"><div class="ov-row"><button id="oPlay" title="播放或暂停真实历史">▶</button><label>速度<input id="oSpeed" type="range" min="0.25" max="8" step="0.25" value="1"><output id="oSpeedVal">1×</output></label><input id="oScrub" type="range" aria-label="真实历史回放游标"><output id="oRtime"></output><button id="oToEnd">结束</button></div>
<div class="ov-row"><button id="oLive" title="直接向 Orca 宿主请求真实数据，每次链完成后间隔4秒">实时</button><label><input id="oFollow" type="checkbox">跟随活跃 Run</label><span id="oLiveTag" role="status"></span></div>
<p class="ov-note">默认固定上方所选 Run；跟随模式也优先保留当前活跃 Run。Router 不占九席。work=派发存活；回放为有时刻标记的历史区间投影，等待为推断。</p></div>`
const $ = (selector) => root.querySelector(selector),
  source = createOrcaSource(),
  layout = structuredClone(getLayout('suite'))
let office = null,
  shown = false,
  liveMode = false,
  fullData = null,
  sceneRun = null,
  selected = null
let mounts = 0,
  disposals = 0,
  at = 0,
  bounds = [0, 1],
  playing = false,
  playTimer = null,
  lastTick = 0,
  speed = 1,
  disposed = false
const celebrations = new Map(),
  previous = new Map()
function stopPlayback() {
  playing = false
  clearInterval(playTimer)
  playTimer = null
  $('#oPlay').textContent = '▶'
}
function clearCelebrations() {
  celebrations.forEach(clearTimeout)
  celebrations.clear()
  previous.clear()
}
function boot() {
  if (!shown || disposed) {
    return
  }
  const runId = source.getState().runId
  if (office && sceneRun === runId) {
    return
  }
  clearCelebrations()
  if (office) {
    office.dispose()
    office = null
    disposals++
  }
  sceneRun = runId
  selected = null
  try {
    office = createScene({
      viewport: $('#ovViewport'),
      layout: structuredClone(layout),
      createOffice: assembleOffice,
      managedActors: true,
      personCameraOffset: [4.5, 2.1, 1.2],
      labels: { pickPerson: '右侧显示真实输入与回报', selecting: (name) => `已选择 ${name}` },
      onEvent(event) {
        if (event.type === 'selection') {
          selected =
            source.getState().bindings.find((item) => item.slot === event.index)?.id ?? null
          office?.camera('person')
          renderDetail()
        }
      },
      mountTasks: (context) => createTaskDisplays({ ...context, root, initialSource: source })
    })
    mounts++
    $('#ovFallback').hidden = true
    office.pause(matchMedia('(prefers-reduced-motion: reduce)').matches)
  } catch (error) {
    $('#ovFallback').hidden = false
    $('#ovFallback').textContent = `场景加载失败：${error.message}`
  }
}
function renderDetail() {
  const state = source.getState(),
    entity = state.bindings.find((item) => item.id === selected),
    container = $('#ovDetail')
  container.replaceChildren()
  $('#ovRoster')
    .querySelectorAll('[data-id]')
    .forEach((button) =>
      button.setAttribute('aria-pressed', String(button.dataset.id === selected))
    )
  $('#ovComputer').disabled = !entity || entity.slot >= 9
  if (!entity) {
    return
  }
  const add = (title, body) => {
    const heading = document.createElement('h4'),
      content = document.createElement('pre')
    heading.textContent = title
    content.textContent = body || '暂无记录'
    container.append(heading, content)
  }
  add(
    entity.name,
    `${entity.label}\n会话 ${entity.terminalId || '缺失，使用 dispatch ID'}\n派发 ${entity.dispatchId}`
  )
  const node = fullData?.nodes.find((item) => item.id === entity.dispatchId),
    session = node?.session
  if (session?.terminalId) {
    const button = document.createElement('button')
    button.textContent = '打开真实会话'
    button.disabled = session.status !== 'active'
    button.title =
      session.status === 'active' ? '仅点击时请求宿主跳转' : `会话不可打开：${session.status}`
    button.onclick = async () => {
      button.disabled = true
      try {
        const reply = await orca.plugin.request('trace.session.open', { session })
        button.textContent = reply.opened ? '已跳转' : reply.reason || '会话不可打开'
      } catch {
        button.textContent = '会话跳转失败'
      } finally {
        button.disabled = session.status !== 'active'
      }
    }
    container.append(button)
  }
  add('输入', entity.input)
  add('回报', entity.output)
  add(
    '真实消息（仅当前时刻前）',
    entity.messages
      .map(
        (message) =>
          `${Number.isFinite(message.at) ? new Date(message.at).toLocaleTimeString('zh-CN', { hour12: false }) : '时间未知'} · ${message.type} · ${message.subject || ''}\n${message.body || ''}`
      )
      .join('\n\n')
  )
}
function choose(entity) {
  selected = entity.id
  if (entity.slot < 9 && office) {
    office.select(entity.slot)
    office.camera('person')
    office.renderNow()
  }
  renderDetail()
}
function render() {
  if (disposed) {
    return
  }
  boot()
  const state = source.getState()
  if (shown && office) {
    for (let slot = 0; slot < 9; slot++) {
      const entity = state.bindings.find((item) => item.slot === slot)
      let action = entity?.action ?? 'idle'
      if (entity?.state === 'completed') {
        if ((liveMode || playing) && previous.get(entity.id) !== 'completed' && !state.error) {
          celebrations.set(
            entity.id,
            setTimeout(() => {
              celebrations.delete(entity.id)
              if (!disposed && office) {
                office.setActor(layout.actors[slot].instanceId, { action: 'idle' })
                if (shown) {
                  office.renderNow()
                }
              }
            }, 1800)
          )
        }
        if (!celebrations.has(entity.id)) {
          action = 'idle'
        }
      } else if (entity && celebrations.has(entity.id)) {
        clearTimeout(celebrations.get(entity.id))
        celebrations.delete(entity.id)
      }
      office.setActor(layout.actors[slot].instanceId, {
        visible: Boolean(entity),
        name: entity?.name || '空位',
        action
      })
      if (entity) {
        previous.set(entity.id, entity.state)
      }
    }
    office.suspend(false)
    office.renderNow()
  }
  const roster = $('#ovRoster')
  roster.replaceChildren()
  for (const entity of state.bindings) {
    const button = document.createElement('button'),
      name = document.createElement('b'),
      status = document.createElement('span')
    button.className = 'ov-worker'
    button.dataset.id = entity.id
    name.textContent = entity.name
    status.textContent = `${entity.slot < 9 ? `工位 ${entity.slot + 1}` : '超额 / 列表展示'} · ${entity.label}`
    button.append(name, status)
    button.onclick = () => choose(entity)
    roster.append(button)
  }
  if (!selected && state.bindings.length) {
    selected = state.bindings[0].id
  }
  $('#ovState').textContent = state.error
    ? `读取失败 / unknown · ${state.error}`
    : `${liveMode ? '实时' : '真实历史回放'} · Run ${state.runId || '暂无'} · active ${state.active ?? 'unknown'} · ${state.lastUpdated ? new Date(state.lastUpdated).toLocaleTimeString('zh-CN', { hour12: false }) : '尚无数据'}`
  $('#ovRouter').textContent =
    `Router：${state.router?.name || state.router?.terminalId || '暂无'} · 不占 Worker 席位`
  $('#ovOverflow').textContent = state.overflow
    ? `超出九席 ${state.overflow} 人，其中活跃 ${state.overflowActive}；全部保留列表与详情。`
    : !state.bindings.length
      ? '暂无此时刻已开始的 Worker，空位隐藏。'
      : ''
  $('#oScrub').min = bounds[0]
  $('#oScrub').max = bounds[1]
  $('#oScrub').value = at
  $('#oRtime').textContent =
    `${new Date(at).toLocaleTimeString('zh-CN', { hour12: false })}${liveMode ? ' · 实时' : ' · 回放'}`
  renderDetail()
}
function replay() {
  if (!fullData || liveMode) {
    return
  }
  const projection = projectOrcaReplay(fullData, at)
  source.update(projection.data, projection.summary, at)
  render()
}
function mount(data) {
  if (!data?.run?.id) {
    return false
  }
  const changed = fullData?.run.id !== data.run.id
  fullData = structuredClone(data)
  bounds = replayBounds(fullData)
  stopPlayback()
  clearCelebrations()
  if (changed) {
    selected = null
  }
  at = bounds[1]
  if (liveMode) {
    source.update(fullData, { active: 0 })
    source.fail('等待宿主实时校验')
    render()
  } else {
    replay()
  }
  return true
}
function setLive(value) {
  liveMode = Boolean(value)
  stopPlayback()
  clearCelebrations()
  for (const id of ['oPlay', 'oSpeed', 'oScrub', 'oToEnd']) {
    $(`#${id}`).disabled = liveMode
  }
  if (liveMode) {
    source.fail('等待宿主实时刷新')
    render()
  } else if (fullData) {
    bounds = replayBounds(fullData)
    at = bounds[1]
    replay()
  }
}
function live(data, summary) {
  if (!liveMode) {
    return false
  }
  if (!data) {
    source.empty()
    render()
    return true
  }
  fullData = structuredClone(data)
  bounds = replayBounds(fullData)
  at = Date.now()
  source.update(fullData, summary)
  render()
  return true
}
function show(value) {
  shown = Boolean(value)
  stopPlayback()
  if (shown) {
    render()
    office?.pause(matchMedia('(prefers-reduced-motion: reduce)').matches)
  } else {
    office?.pause(true)
    office?.suspend(true)
  }
}
function seek(value) {
  if (liveMode || !Number.isFinite(value)) {
    return false
  }
  clearCelebrations()
  at = Math.max(bounds[0], Math.min(bounds[1], value))
  replay()
  return true
}
function play() {
  if (liveMode || !shown || !fullData) {
    return false
  }
  if (playing) {
    stopPlayback()
    return true
  }
  if (at >= bounds[1]) {
    seek(bounds[0])
  }
  playing = true
  lastTick = performance.now()
  $('#oPlay').textContent = '⏸'
  playTimer = setInterval(() => {
    const now = performance.now(),
      delta = now - lastTick
    lastTick = now
    at = Math.min(bounds[1], at + ((delta * (bounds[1] - bounds[0])) / 60000) * speed)
    replay()
    if (at >= bounds[1]) {
      stopPlayback()
    }
  }, 250)
  return true
}
$('#oPlay').onclick = play
$('#oScrub').oninput = (event) => {
  stopPlayback()
  seek(Number(event.target.value))
}
$('#oSpeed').oninput = (event) => {
  speed = Number(event.target.value)
  $('#oSpeedVal').textContent = `${speed}×`
}
$('#oToEnd').onclick = () => {
  stopPlayback()
  seek(bounds[1])
}
root.querySelectorAll('[data-camera]').forEach(
  (button) =>
    (button.onclick = () => {
      office?.camera(button.dataset.camera)
      office?.renderNow()
    })
)
$('#ovComputer').onclick = () => {
  const entity = source.getState().bindings.find((item) => item.id === selected),
    binding = office?.tasks.getState().bindings.find((item) => item.actorIndex === entity?.slot)
  if (binding) {
    office.tasks.focus(binding.displayId)
    office.renderNow()
  }
}
window.OfficeView = {
  mount,
  show,
  live,
  setLive,
  seek,
  play,
  resize() {
    if (shown) {
      boot()
      office?.renderNow()
    }
  },
  fail(message) {
    source.fail(message || '宿主读取失败')
    clearCelebrations()
    render()
  },
  createLiveController: createHostLive,
  getState() {
    const state = source.getState(),
      scene = office?.getState() ?? null,
      bindings = office?.tasks.getState().bindings ?? []
    return structuredClone({
      ...state,
      mode: liveMode ? 'live' : 'replay',
      projection: liveMode ? null : 'recorded-intervals-as-of',
      at,
      bounds,
      playing,
      speed,
      shown,
      selected,
      mounts,
      disposals,
      bindings: state.bindings.map((item) => ({
        ...item,
        instanceId: scene?.actors[item.slot]?.instanceId ?? null,
        stationId: bindings.find((binding) => binding.actorIndex === item.slot)?.stationId ?? null,
        displayId: bindings.find((binding) => binding.actorIndex === item.slot)?.displayId ?? null,
        action: scene?.actors[item.slot]?.action ?? null
      })),
      scene,
      taskState: office?.tasks.getState() ?? null
    })
  },
  dispose() {
    if (disposed) {
      return
    }
    disposed = true
    stopPlayback()
    clearCelebrations()
    office?.dispose()
    source.dispose()
  }
}
window.addEventListener('pagehide', () => window.OfficeView.dispose(), { once: true })
