import { createScene } from '../../voxel-src/engine/scene.js'
import { assembleOffice } from '../../voxel-src/world/assemble-office.js'
import { getLayout } from '../../voxel-src/layouts/registry.js'
import { createTaskDisplays } from '../../voxel-src/integrations/tasks/task-displays.js'
import { createOrcaSource } from '../../voxel-src/integrations/tasks/orca-source.js'

export function createOfficeView({ root, onTask }) {
  const source = createOrcaSource(),
    slots = new Map(),
    listeners = new Set()
  let people = null,
    model,
    office,
    shown = false,
    runId = null,
    page = 0,
    selected = null,
    programmatic = false,
    mounts = 0,
    picks = 0
  const layout = structuredClone(getLayout('suite'))
  const entities = () => people ?? source.getState().bindings
  const binding = (entity) => ({ ...entity, slot: slots.get(entity.id) % 9 })
  const current = () => entities().filter((entity) => Math.floor(slots.get(entity.id) / 9) === page)
  const feed = {
    kind: 'orca',
    label: 'Orca 实时协作',
    getSnapshot: source.getSnapshot,
    getBindings: () => current().map(binding),
    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    dispose() {}
  }
  const notify = () => {
    for (const listener of listeners) {
      listener({ type: 'snapshot', snapshot: source.getSnapshot() })
    }
  }
  function rowFor(entity) {
    if(entity.taskRow) return entity.taskRow
    const node = model?.byId.get(entity.dispatchId)
    return model?.rows.find((row) => row.id === node?.taskId || row.id === node?.parentId)
  }
  function ensure() {
    if (!shown || office || !model) {
      return
    }
    office = createScene({
      viewport: root.querySelector('#office-viewport'),
      layout: structuredClone(layout),
      createOffice: assembleOffice,
      managedActors: true,
      personCameraOffset: [4.5, 2.1, 1.2],
      labels: { pickPerson: '查看该会话的当前任务', selecting: (name) => name },
      mountTasks: (context) => createTaskDisplays({ ...context, root, initialSource: feed }),
      onEvent(event) {
        if (event.type !== 'selection' || programmatic) {
          return
        }
        const entity = current().find((item) => slots.get(item.id) % 9 === event.index)
        if (!entity) {
          return
        }
        picks++
        selected = entity.id
        office?.camera('person')
        const row = rowFor(entity)
        if (row) {
          onTask(row.id, entity)
        }
      }
    })
    mounts++
  }
  function paint() {
    ensure()
    if (shown && office) {
      for (let slot = 0; slot < 9; slot++) {
        const entity = current().find((item) => slots.get(item.id) % 9 === slot)
        office.setActor(layout.actors[slot].instanceId, {
          visible: Boolean(entity),
          name: entity?.name || '空位',
          action: entity?.action === 'celebrate' ? 'idle' : entity?.action || 'idle'
        })
      }
      office.suspend(false)
      office.renderNow()
    }
    const roster = root.querySelector('#office-roster')
    roster.replaceChildren()
    for (const entity of entities()) {
      const row = rowFor(entity),
        button = document.createElement('button')
      button.className = 'person-row'
      button.dataset.personId = entity.id
      const seat = slots.get(entity.id)
      const name = document.createElement('b'),
        status = document.createElement('span')
      name.textContent = entity.name
      status.textContent = `${entity.label} · ${row?.title || ''}`
      button.append(name, status)
      button.onclick = () => {
        if (row) {
          onTask(row.id, entity)
          page = Math.floor(seat / 9); notify(); paint()
        }
      }
      roster.append(button)
    }
    const pages = Math.max(1, Math.ceil((Math.max(-1,...slots.values())+1) / 9))
    root.querySelector('.office-page').hidden = pages <= 1
    root.querySelector('#office-page').textContent = `${page + 1}/${pages}`
    root.querySelector('#office-prev').disabled = page === 0
    root.querySelector('#office-next').disabled = page >= pages - 1
    root.querySelector('#office-source').textContent = model
      ? `${entities().length} 个会话 · ${new Date(model.capturedAt).toLocaleTimeString('zh-CN', { hour12: false })}更新`
      : '暂无快照'
    root.querySelector('#office-source').title = '仅 Orca 原生派发，未覆盖外部会话；10秒查列表，最多15秒复用记录'
  }
  function focusTask(taskId) {
    const row = model?.rows.find((item) => item.id === taskId),
      attempt = row?.current
    const id = attempt?.terminalId || attempt?.id,
      entity = entities().find((item) => item.id === id)
    if (!entity) {
      root.querySelector('#office-locator').textContent = '这项任务还没有可定位的执行会话。'
      return false
    }
    page = Math.floor(slots.get(id) / 9)
    selected = id
    notify()
    paint()
    if (office) {
      programmatic = true
      office.select(slots.get(id) % 9)
      programmatic = false
      office.camera('person')
      office.renderNow()
    }
    const currentRow = rowFor(entity)
    root.querySelector('#office-locator').textContent =
      currentRow?.id === taskId
        ? `已定位「${row.title}」的执行会话。`
        : `已定位该任务的会话；该会话在快照中的当前任务是「${currentRow?.title || entity.name}」。`
    return true
  }
  root.querySelectorAll('[data-office-camera]').forEach(
    (button) =>
      (button.onclick = () => {
        office?.camera(button.dataset.officeCamera)
        office?.renderNow()
      })
  )
  root.querySelector('#office-computer').onclick = () => {
    const entity = entities().find((item) => item.id === selected) || current()[0]
    const display = office?.tasks
      .getState()
      .bindings.find((item) => item.actorIndex === slots.get(entity?.id) % 9)
    if (display) {
      office.tasks.focus(display.displayId)
      office.renderNow()
    }
  }
  for (const [selector, change] of [
    ['#office-prev', -1],
    ['#office-next', 1]
  ]) {
    root.querySelector(selector).onclick = () => {
      page += change
      selected = null
      notify()
      paint()
    }
  }
  return {
    setPeople(next, models) {
      people=next
      for(const id of slots.keys())if(!people.some(p=>p.id===id))slots.delete(id)
      const used=new Set(slots.values())
      for(const person of people)if(!slots.has(person.id)) {
        let seat=0;while(used.has(seat))seat++
        slots.set(person.id,seat);used.add(seat)
      }
      model={data:{run:{id:'current'}},byId:new Map(),rows:[],bundle:{liveSummary:{active:people.filter(p=>p.action!=='idle').length}},capturedAt:Date.now()}
      page=Math.min(page,Math.max(0,Math.ceil((Math.max(-1,...slots.values())+1)/9)-1))
      notify();paint()
    },
    setData(next) {
      if (model?.data.run.id !== next.data.run.id) {
        office?.dispose()
        office = null
        slots.clear()
        page = 0
        selected = null
        runId = next.data.run.id
      }
      model = next
      source.update(model.data, model.bundle.liveSummary ?? model.bundle.summary, model.capturedAt)
      const priority = (entity) =>
        ['running', 'starting', 'waiting_reply'].includes(entity.state) ? 0 : 1
      entities()
        .sort(
          (a, b) =>
            priority(a) - priority(b) ||
            (model.byId.get(b.dispatchId)?.start || 0) - (model.byId.get(a.dispatchId)?.start || 0)
        )
        .forEach((entity) => {
          if (!slots.has(entity.id)) {
            slots.set(entity.id, slots.size)
          }
        })
      notify()
      paint()
    },
    show(value) {
      shown = value
      if (shown) {
        paint()
        office?.pause(matchMedia('(prefers-reduced-motion: reduce)').matches)
      } else {
        office?.pause(true)
        office?.suspend(true)
      }
    },
    focusTask,
    fail() {
      if(people)people=people.map(p=>({...p,action:'idle',state:'unknown',label:'读取失败'}))
      source.fail('读取失败，工作动画已停止')
      notify()
      paint()
    },
    getState() {
      return {
        source: 'orca',
        bindings: entities(),
        runId,
        page,
        selected,
        mounts,
        picks,
        slots: [...slots].map(([id, index]) => ({
          id,
          page: Math.floor(index / 9),
          slot: index % 9
        })),
        engine: office?.getState() ?? null
      }
    },
    dispose() {
      office?.dispose()
      source.dispose()
      listeners.clear()
    }
  }
}
