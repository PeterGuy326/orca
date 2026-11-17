import { adaptRun, states, filterRows, dateTime, duration, waitsFor } from './model.js'
import { createOfficeView } from './office-view.js'
import './styles.css'

const root = document.getElementById('redesign')
const embedded = Boolean(window.orca?.plugin)
let visible = !embedded
const $ = (selector) => root.querySelector(selector)
const escape = (value) =>
  String(value ?? '').replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
  )
const messageNames = {
  worker_done: '执行回报',
  question: '提问',
  escalation: '求助 / 升级',
  status: '补充记录',
  handoff: '交接',
  dispatch: '派发',
  merge_ready: '评审就绪'
}
const state = {
  view: 'overview',
  model: null,
  bundles: [],
  selected: null,
  query: '',
  status: 'all',
  sort: 'priority',
  completed: false,
  from: 0,
  to: 1,
  error: null,
  generation: 0,
  connections: []
}
// Demo drafts and receipts live only in this page's memory, apart from the source model.
const demoActions = { flow: null, records: new Map(), sequence: 0 }
const actionChoices = [
  {
    type: '补充要求',
    help: '补资料、说明或验收标准',
    prompt: '请写明需要补充的资料、说明或验收标准。'
  },
  {
    type: '要求返工',
    help: '指出哪里不符合要求、需要怎么改',
    prompt: '请写明哪里不符合要求，以及希望怎么改。'
  },
  {
    type: '核对结果',
    help: '请负责人提供证据，先不判定通过',
    prompt: '请写明需要负责人提供哪些证据、核对哪些结果。'
  },
  {
    type: '拿不准，先请负责人给建议',
    help: '请负责人说明可选方案',
    prompt: '请写明拿不准的地方，以及希望负责人说明的可选方案。'
  }
]
const office = createOfficeView({ root: $('#view-office'), onTask: (id) => selectTask(id) })
let aborter
function announce(message, error = false) {
  $('#notice').hidden = !message
  $('#notice').textContent = message || ''
  $('#notice').classList.toggle('error', error)
}
function badge(row) {
  return `<span class="status-badge ${row.state}"><span aria-hidden="true">${states[row.state].icon}</span>${states[row.state].label}</span>`
}
function selectTask(id) {
  state.selected = id
  renderDrawer()
  if (state.view === 'recap') {
    renderRecap()
  }
  focusAction('#open-action', true)
}
function focusAction(selector, narrowOnly = false) {
  requestAnimationFrame(() => {
    if (narrowOnly && !matchMedia('(max-width: 1050px)').matches) {
      return
    }
    const element = $(selector)
    element?.focus({ preventScroll: true })
    element?.scrollIntoView({ block: 'center' })
  })
}
function switchView(view) {
  state.view = view
  for (const name of ['overview', 'office', 'recap']) {
    $(`#view-${name}`).hidden = view !== name
    $(`[data-view="${name}"]`).setAttribute('aria-selected', String(view === name))
  }
  office.show(visible && view === 'office')
  if (view === 'recap') {
    renderRecap()
  }
  renderDrawer()
  root.scrollTo({ top: 0, behavior: 'instant' })
}
function locateOffice(id) {
  selectTask(id)
  switchView('office')
  office.focusTask(id)
}
function locateRecap(id) {
  const row = state.model.rows.find((item) => item.id === id)
  if (!row) {
    return
  }
  state.selected = id
  $('#show-lines').checked = true
  const points = row.attempts
    .flatMap((attempt) => [attempt.start, attempt.end ?? state.model.capturedAt])
    .filter(Number.isFinite)
  if (points.length) {
    const min = Math.min(...points),
      max = Math.max(...points),
      pad = Math.max(60000, (max - min) * 0.12)
    state.from = min - pad
    state.to = max + pad
  }
  switchView('recap')
  requestAnimationFrame(() => {
    const selected = $('#recap-board [data-selected="true"]')
    if (selected) {
      $('#recap-board').scrollTop = Math.max(0, selected.offsetTop - 100)
    }
  })
}
function renderMetrics() {
  const definitions = [
    ['running', '执行中', '快照中派发存活的执行任务'],
    ['attention', '等待 / 阻塞需查看', '失败、阻塞、未回复或状态不明确；不等于审批'],
    ['reported', '已回报待确认', '有成功回报，编排任务尚未结束'],
    ['ended', '已结束', '编排任务已结束；业务验收另记']
  ]
  $('#metrics').innerHTML = definitions
    .map(
      ([key, label, help]) =>
        `<button class="metric ${key} ${state.status === key ? 'selected' : ''}" data-filter="${key}" title="${escape(help)}"><span>${label}</span><strong>${state.model.counts[key]}</strong><small>${escape(help)}</small></button>`
    )
    .join('')
  $('#metrics')
    .querySelectorAll('[data-filter]')
    .forEach(
      (button) =>
        (button.onclick = () => {
          state.status = button.dataset.filter
          $('#status').value = state.status
          renderOverview()
        })
    )
}
function renderOverview() {
  if (!state.model) {
    return
  }
  renderMetrics()
  const rows = filterRows(state.model, state),
    groups = new Map()
  for (const row of rows) {
    if (!groups.has(row.lineId)) {
      groups.set(row.lineId, [])
    }
    groups.get(row.lineId).push(row)
  }
  $('#task-list').innerHTML = rows.length
    ? [...groups.values()]
        .map(
          (group) =>
            `<section class="task-group">${group.length > 1 ? `<h3>${escape(group[0].line)} <span>${group.length} 项任务</span></h3>` : ''}${group
              .map(
                (row) => `
    <article class="task-card ${row.state}" data-task="${escape(row.id)}"><div class="task-card-heading"><button class="task-title" data-detail="${escape(row.id)}" title="${escape(row.fullTitle)}">${escape(row.title)}</button>${badge(row)}</div>
    <p class="task-meta">${escape(row.owner)}${row.duplicate ? ` · 同名任务 #${row.duplicate}` : ''} · 更新于 ${dateTime(row.lastAt)}</p>
    <p class="task-reason">${escape(row.reason)}</p><div class="task-result"><span>${row.report ? '最新回报' : '结果记录'}</span><p>${escape(row.result)}</p></div>
    <div class="card-actions"><button data-detail="${escape(row.id)}">看目标与回报</button><button data-office="${escape(row.id)}" ${row.current ? '' : 'disabled title="尚无执行会话"'}>在办公室定位</button><button data-recap="${escape(row.id)}">在复盘中查看</button></div></article>`
              )
              .join('')}</section>`
        )
        .join('')
    : `<div class="empty-state"><h3>${state.model.counts.ended && state.status === 'all' && !state.query ? '这次协作在快照中已结束' : '没有匹配的任务'}</h3><p>${state.query ? '试着缩短搜索词或选择其他状态。' : '可以展开已结束项，查看交付与历史问题。'}</p></div>`
  $('#task-list')
    .querySelectorAll('[data-detail]')
    .forEach((button) => (button.onclick = () => selectTask(button.dataset.detail)))
  $('#task-list')
    .querySelectorAll('[data-office]')
    .forEach((button) => (button.onclick = () => locateOffice(button.dataset.office)))
  $('#task-list')
    .querySelectorAll('[data-recap]')
    .forEach((button) => (button.onclick = () => locateRecap(button.dataset.recap)))
  $('#completed-toggle').textContent =
    `${state.completed ? '收起' : '展开'}已结束的 ${state.model.counts.ended} 项任务`
  $('#completed-toggle').hidden = state.status !== 'all' || !state.model.counts.ended
}
function renderDrawer() {
  const row = state.model?.rows.find((item) => item.id === state.selected),
    drawer = $('#drawer')
  const key = row ? JSON.stringify([state.model.data.run.id, row.id]) : null
  if (demoActions.flow?.key !== key) {
    demoActions.flow = null
  }
  drawer.hidden = !row
  $('.workspace').classList.toggle('has-detail', Boolean(row))
  if (!row) {
    drawer.replaceChildren()
    return
  }
  const waits = waitsFor(state.model, row),
    lastReport = row.report
  drawer.innerHTML = `<div class="drawer-head"><span>任务详情</span><button id="close-drawer" aria-label="收起任务详情">收起</button></div><h2>${escape(row.title)}</h2>${badge(row)}
    ${renderAction(row, key)}
    <section><h3>目标</h3><p>${escape(row.raw.inputSummary || row.title)}</p></section><section><h3>现况</h3><p>${escape(row.reason)}</p><p class="muted">${escape(row.owner)} · 快照 ${dateTime(state.model.capturedAt)}</p></section>
    <section><h3>结果</h3><p class="result-summary">${escape(row.result)}</p>${lastReport ? `<p class="muted">回报时间 ${dateTime(lastReport.at)}；回报不代表业务已经验收。</p>` : ''}</section>
    <section><h3>证据</h3><p>${row.attempts.length} 次派发记录 · ${row.messages.length} 条精确关联消息${waits.length ? ` · ${waits.length} 段等待（推断）` : ''}</p><div class="detail-actions"><button id="drawer-office" ${row.current ? '' : 'disabled'}>办公室定位</button><button id="drawer-recap">复盘定位</button></div></section>
    <details><summary>完整输入</summary><pre>${escape(row.input || '没有记录完整输入')}</pre></details><details><summary>完整回报</summary><pre>${escape(row.output || '没有记录回报正文')}</pre></details>
    <details><summary>关联消息（${row.messages.length}）</summary><div class="message-list">${row.messages.map((message) => `<article><h4>${escape(messageNames[message.type] || '其他记录')} · ${dateTime(message.at)}</h4><b>${escape(message.subject || '')}</b><pre>${escape(message.body || '无正文')}</pre></article>`).join('') || '<p>没有精确关联的消息。</p>'}</div></details>
    <details id="technical"><summary>来源与技术信息</summary><dl><dt>Run</dt><dd>${escape(state.model.data.run.id)}</dd><dt>任务</dt><dd>${escape(row.id)}</dd><dt>编排状态</dt><dd>${escape(row.raw.status)}</dd><dt>派发</dt><dd>${escape(row.current?.id || '无')}</dd><dt>会话来源</dt><dd>${escape(row.current?.terminalId || '未记录')}</dd></dl><button id="open-session" ${embedded && row.current?.session?.status === 'active' ? '' : 'disabled'}>打开原会话</button><button id="copy-session" ${row.current?.terminalId ? '' : 'disabled'}>复制会话句柄</button><p class="muted">原型不执行会话跳转；后续是否接入由确认后的插件实现。</p></details>`
  $('#close-drawer').onclick = () => {
    state.selected = null
    renderDrawer()
    if (state.view === 'recap') {
      renderRecap()
    }
  }
  $('#drawer-office').onclick = () => locateOffice(row.id)
  $('#drawer-recap').onclick = () => locateRecap(row.id)
  $('#copy-session').onclick = async () => {
    try {
      await navigator.clipboard.writeText(row.current.terminalId)
      announce('会话句柄已复制。')
    } catch {
      announce('浏览器未允许复制，请在来源信息中手动选择句柄。', true)
    }
  }
  $('#open-session').onclick = async () => {
    try {
      const result = await orca.plugin.request('trace.session.open', {
        session: row.current.session
      })
      announce(result.opened ? '已打开原会话。' : result.reason || '会话不可打开。', !result.opened)
    } catch {
      announce('会话跳转失败。', true)
    }
  }
  bindAction(row, key)
}
function actionRecipient(row) {
  const coordinator = state.model.messages.find(
    (message) => message.toHandle === `run:${state.model.data.run.id}`
  )?.toHandle
  return coordinator
    ? { label: '原协调者', handle: coordinator }
    : row.current?.terminalId
      ? { label: '任务负责人执行会话', handle: row.current.terminalId }
      : { label: '任务负责人路径待核', handle: '' }
}
function renderAction(row, key) {
  const flow = demoActions.flow,
    records = demoActions.records.get(key) || [],
    recipient = flow?.recipient || actionRecipient(row)
  const choice = actionChoices.find((item) => item.type === flow?.type)
  const target = `<p class="action-target">接收路径（只读）：${escape(recipient.label)}<br><code>${escape(recipient.handle || '快照未记录精确接收标识，不猜测')}</code></p>`
  const summary = (record) =>
    `<dl><dt>任务</dt><dd>${escape(record.title)}<br>${escape(record.taskId)}</dd><dt>Run</dt><dd>${escape(record.runId)}</dd><dt>动作</dt><dd>${escape(record.type)}</dd><dt>对象（只读来源记录）</dt><dd>${escape(record.recipient.label)}<br>${escape(record.recipient.handle || '接收标识待核，仅演示负责人路径')}</dd><dt>意见</dt><dd class="action-opinion">${escape(record.opinion)}</dd></dl>`
  const recordHtml = (record) =>
    `<article class="demo-receipt"><h4>模拟已发送·未真实送达</h4><p>本地示意记录 ${escape(record.id)}</p><p>示意时间：${escape(new Date(record.at).toLocaleString('zh-CN', { hour12: false }))}</p><p>接收/处理/解决均未验证</p>${summary(record)}</article>`
  let content = ''
  if (flow?.step === 'choose') {
    content = `<form id="action-choice-form"><fieldset id="action-choices" aria-describedby="action-choice-help"><legend id="action-choice-heading" tabindex="-1">我想怎么处理</legend><p id="action-choice-help" class="muted">由你选择。以下是适用说明，不代表对当前任务的诊断。</p>${actionChoices.map((item) => `<label class="action-choice"><input type="radio" name="action-type" value="${escape(item.type)}" ${item.type === flow.type ? 'checked' : ''} required><span><strong>${escape(item.type)}</strong><small>${escape(item.help)}</small></span></label>`).join('')}</fieldset><div class="detail-actions"><button id="action-choose-next" type="submit" ${choice ? '' : 'disabled'}>继续填写意见</button><button id="action-cancel" type="button">取消</button></div></form>`
  }
  if (flow?.step === 'edit') {
    content = `<form id="action-form"><h3>填写处理意见</h3><p class="action-selected">已选方式：<strong>${escape(flow.type)}</strong></p><button id="action-change" type="button">更换处理方式</button>${target}<label for="action-opinion">意见（必填）</label><textarea id="action-opinion" rows="4" required placeholder="${escape(choice.prompt)}" aria-describedby="action-input-help">${escape(flow.opinion)}</textarea><p id="action-input-help" class="muted">${escape(choice.prompt)}纯空白不能继续；刷新页面即清除。</p><div class="detail-actions"><button id="action-next" type="submit" ${flow.opinion.trim() ? '' : 'disabled'}>下一步：确认示意内容</button><button id="action-cancel" type="button">取消</button></div></form>`
  }
  if (flow?.step === 'confirm') {
    content = `<div id="action-confirm" tabindex="-1"><h3>确认示意内容</h3>${summary(flow)}<label class="action-consent"><input id="action-consent" type="checkbox" ${flow.consent ? 'checked' : ''}>我知道这只是示意，不会实际发送</label><div class="detail-actions"><button id="action-send" ${flow.consent ? '' : 'disabled'}>模拟发送</button><button id="action-back">返回编辑</button><button id="action-cancel">取消</button></div></div>`
  }
  if (flow?.step === 'receipt') {
    content = `<div id="action-receipt" tabindex="-1" role="status">${recordHtml(flow.receipt)}<button id="action-again">再次处理</button></div>`
  }
  const replied = waitsFor(state.model, row).some((wait) => wait.reply)
  return `<section class="task-action" aria-label="处理这件事"><div class="action-heading"><button id="open-action" aria-expanded="${Boolean(flow)}">处理这件事</button><span class="demo-badge">示意·不实际发送</span></div><p class="muted">精确处理线程待核，演示发给原协调者或负责人。${replied ? '历史提问已有回复，本入口不将其列为待答复。' : '本入口不判断原提问是否待答复。'}</p><p class="muted">仅在当前页面内存生成示意回执，原任务状态不变。</p>${content}${records.length ? `<details id="action-records"><summary>查看本任务示意记录（${records.length}）</summary>${records.map(recordHtml).join('')}</details>` : ''}</section>`
}
function bindAction(row, key) {
  const render = (selector) => {
    renderDrawer()
    focusAction(selector)
  }
  const start = () => {
    demoActions.flow = {
      key,
      step: 'choose',
      runId: state.model.data.run.id,
      taskId: row.id,
      title: row.title,
      type: '',
      opinion: '',
      consent: false,
      recipient: actionRecipient(row)
    }
    render('#action-choice-heading')
  }
  $('#open-action').onclick = () =>
    demoActions.flow
      ? focusAction(
          demoActions.flow.step === 'choose'
            ? '#action-choice-heading'
            : demoActions.flow.step === 'edit'
              ? '#action-opinion'
              : `#action-${demoActions.flow.step}`
        )
      : start()
  if ($('#action-again')) {
    $('#action-again').onclick = start
  }
  if ($('#action-cancel')) {
    $('#action-cancel').onclick = () => {
      demoActions.flow = null
      render('#open-action')
    }
  }
  const flow = demoActions.flow
  if (flow?.step === 'choose') {
    $('#action-choice-form').onchange = (event) => {
      if (event.target.name === 'action-type') {
        flow.type = event.target.value
        $('#action-choose-next').disabled = false
      }
    }
    $('#action-choice-form').onsubmit = (event) => {
      event.preventDefault()
      if (demoActions.flow !== flow || !actionChoices.some((item) => item.type === flow.type)) {
        return
      }
      flow.step = 'edit'
      flow.consent = false
      render('#action-opinion')
    }
  }
  if (flow?.step === 'edit') {
    $('#action-opinion').oninput = (event) => {
      flow.opinion = event.target.value
      $('#action-next').disabled = !flow.opinion.trim()
    }
    $('#action-change').onclick = () => {
      flow.step = 'choose'
      flow.consent = false
      render('#action-choice-heading')
    }
    $('#action-form').onsubmit = (event) => {
      event.preventDefault()
      if (demoActions.flow !== flow || !flow.opinion.trim()) {
        return
      }
      flow.step = 'confirm'
      flow.consent = false
      render('#action-confirm')
    }
  }
  if (flow?.step === 'confirm') {
    $('#action-consent').onchange = (event) => {
      flow.consent = event.target.checked
      $('#action-send').disabled = !flow.consent
    }
    $('#action-back').onclick = () => {
      flow.step = 'edit'
      flow.consent = false
      render('#action-opinion')
    }
    $('#action-send').onclick = () => {
      if (demoActions.flow !== flow || !flow.consent || !flow.opinion.trim()) {
        return
      }
      const receipt = {
        id: `DEMO-${String(++demoActions.sequence).padStart(4, '0')}`,
        at: Date.now(),
        runId: flow.runId,
        taskId: flow.taskId,
        title: flow.title,
        type: flow.type,
        recipient: { ...flow.recipient },
        opinion: flow.opinion
      }
      const records = demoActions.records.get(key) || []
      records.push(receipt)
      demoActions.records.set(key, records)
      demoActions.flow = { key, step: 'receipt', receipt }
      render('#action-receipt')
    }
  }
}
const localInput = (timestamp) => {
  const date = new Date(timestamp)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
}
function renderRecap() {
  if (!state.model) {
    return
  }
  const model = state.model,
    span = Math.max(1, state.to - state.from),
    x = (value) => ((value - state.from) / span) * 100
  const rows = model.rows.filter(
    (row) =>
      row.id === state.selected ||
      row.attempts.some(
        (attempt) =>
          Number.isFinite(attempt.start) &&
          attempt.start <= state.to &&
          (attempt.end ?? model.capturedAt) >= state.from
      )
  )
  const board = $('#recap-board'),
    top = board.scrollTop,
    left = board.scrollLeft
  $('#from-time').value = localInput(state.from)
  $('#to-time').value = localInput(state.to)
  $('#recap-window').textContent =
    `${dateTime(state.from)} — ${dateTime(state.to)} · 显示 ${rows.length} / ${model.rows.length} 项任务 · ${$('#show-lines').checked && state.selected ? '仅选中任务关联线' : '连线已收起'}`
  const intervalHtml = (row) =>
    row.attempts
      .map((attempt) => {
        const end = attempt.end ?? model.capturedAt,
          start = attempt.start
        if (!Number.isFinite(start) || end < state.from || start > state.to) {
          return ''
        }
        const a = Math.max(0, x(start)),
          b = Math.min(100, x(end))
        return `<button class="interval ${attempt.failed ? 'failed' : ''}" style="left:${a}%;width:${Math.max(0.25, b - a)}%" title="${escape(row.title)} · 派发区间 ${dateTime(start)} — ${dateTime(end)}，不代表全程工作" data-bar-task="${escape(row.id)}" aria-label="${escape(row.title)}的派发区间"></button>`
      })
      .join('') +
    waitsFor(model, row)
      .map((wait) => {
        if (wait.end < state.from || wait.start > state.to) {
          return ''
        }
        const a = Math.max(0, x(wait.start)),
          b = Math.min(100, x(wait.end))
        return `<span class="wait-interval" style="left:${a}%;width:${Math.max(0.25, b - a)}%" title="等待（推断）${duration(wait.end - wait.start)} · ${escape(wait.request.subject)}"></span>`
      })
      .join('')
  const rowY = new Map(rows.map((row, index) => [row.id, (index + 1) * 46 + 23]))
  const rowForNode = (id) => {
    if (model.byId.get(id)?.kind === 'run') {
      return 23
    }
    const row = rows.find((row) => row.attempts.some((attempt) => attempt.id === id))
    return row ? rowY.get(row.id) : null
  }
  const selected = model.rows.find((row) => row.id === state.selected),
    links = []
  if ($('#show-lines').checked && selected) {
    for (const message of selected.messages) {
      if (
        !Number.isFinite(message.at) ||
        message.at < state.from ||
        message.at > state.to ||
        !['worker_done', 'question', 'escalation', 'handoff', 'merge_ready'].includes(message.type)
      ) {
        continue
      }
      const from = rowForNode(message.fromNodeId),
        to =
          rowForNode(message.toNodeId) ??
          (message.toHandle === `run:${model.data.run.id}` ? 23 : null)
      if (from == null || to == null) {
        continue
      }
      links.push({
        messageId: message.id,
        taskId: selected.id,
        x: x(message.at),
        from,
        to,
        title: `${messageNames[message.type] || '记录'} · ${dateTime(message.at)} · ${message.subject || ''}`
      })
    }
  }
  state.connections = links
  board.innerHTML = `<div class="recap-inner"><div class="recap-axis"><div class="axis-label">任务 / 完整目标见详情</div><div class="axis-plot">${Array.from(
    { length: 4 },
    (_, index) => {
      const percent = (index / 3) * 100
      return `<span style="left:${percent}%;transform:translateX(${index === 0 ? '0' : index === 3 ? '-100%' : '-50%'})">${dateTime(state.from + (span * index) / 3)}</span>`
    }
  ).join('')}</div></div>
    <div class="recap-body"><div class="recap-row"><div class="lane-label muted">协调者 · 消息端点</div><div class="lane-plot router-lane"></div></div>${rows.map((row) => `<div class="recap-row ${row.id === state.selected ? 'selected' : ''}" data-selected="${row.id === state.selected}" data-recap-row="${escape(row.id)}"><button class="lane-label" data-recap-detail="${escape(row.id)}" title="${escape(row.fullTitle)}"><b>${escape(row.title)}</b><span>${escape(row.owner)}${row.duplicate ? ` · #${row.duplicate}` : ''}</span></button><div class="lane-plot">${intervalHtml(row)}</div></div>`).join('')}
    <svg class="related-lines" viewBox="0 0 1000 ${(rows.length + 1) * 46}" preserveAspectRatio="none" aria-label="仅选中任务的关联消息"><defs><marker id="arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5" fill="currentColor"/></marker></defs>${links.map((link) => `<path data-message="${escape(link.messageId)}" d="M${link.x * 10},${link.from} Q${link.x * 10 + 20},${(link.from + link.to) / 2} ${link.x * 10},${link.to}" marker-end="url(#arrow)"><title>${escape(link.title)}</title></path>`).join('')}</svg></div></div>`
  board.scrollTop = top
  board.scrollLeft = left
  board.querySelectorAll('[data-recap-detail]').forEach(
    (button) =>
      (button.onclick = () => {
        $('#show-lines').checked = true
        selectTask(button.dataset.recapDetail)
      })
  )
  board.querySelectorAll('[data-bar-task]').forEach(
    (button) =>
      (button.onclick = () => {
        $('#show-lines').checked = true
        selectTask(button.dataset.barTask)
      })
  )
  $('#recap-events').innerHTML = selected
    ? `<h3>「${escape(selected.title)}」的关联记录</h3><p>只取这项任务与派发 ID 精确关联的消息，未记录的端点不猜测连线。</p><div class="event-strip">${
        selected.messages
          .filter((message) => message.at >= state.from && message.at <= state.to)
          .map(
            (message) =>
              `<p><time>${dateTime(message.at)}</time><span>${escape(messageNames[message.type] || '其他记录')}</span>${escape(message.subject || '无标题')}</p>`
          )
          .join('') || '<p>此时间窗没有关联消息。</p>'
      }</div>`
    : '<p>选择任务可查看其关联消息。默认不展示全网连线。</p>'
}
function resetWindow() {
  state.to = state.model.range[1]
  state.from = Math.max(state.model.range[0], state.to - 12 * 3600000)
  if (state.from === state.to) {
    state.from -= 60000
  }
  renderRecap()
}
function setBundle(bundle) {
  demoActions.flow = null
  state.generation++
  aborter?.abort()
  state.model = adaptRun(bundle)
  state.selected = null
  state.error = null
  state.query = ''
  state.status = 'all'
  state.completed = false
  $('#search').value = ''
  $('#status').value = 'all'
  $('#goal').textContent = state.model.data.run.shortTitle || state.model.data.run.objective
  $('#source-caption').textContent =
    `真实数据快照 · ${dateTime(state.model.capturedAt)} · 不自动跟踪${state.model.counts.attention ? ` · ${state.model.counts.attention} 项记录需查看` : ''}`
  office.setData(state.model)
  announce('')
  renderOverview()
  resetWindow()
  renderDrawer()
  office.show(visible && state.view === 'office')
}
function renderRunOptions() {
  $('#run-options').innerHTML = state.bundles
    .map(
      (bundle) =>
        `<button class="run-option" data-run="${escape(bundle.data.run.id)}"><b>${escape(bundle.data.run.objective)}</b><span>快照 ${dateTime(Date.parse(bundle.capturedAt))}</span></button>`
    )
    .join('')
  $('#run-options')
    .querySelectorAll('[data-run]')
    .forEach(
      (button) =>
        (button.onclick = () => {
          loadSelection(button.dataset.run)
          $('#run-dialog').close()
        })
    )
}
async function refresh() {
  if (!state.model) {
    return init()
  }
  const id = state.model.data.run.id,
    version = ++state.generation
  aborter?.abort()
  aborter = new AbortController()
  $('#snapshot-refresh').disabled = true
  $('#snapshot-refresh').textContent = '读取中…'
  try {
    const bundle = await readBundle(id)
    if (version !== state.generation) {
      return
    }
    if (embedded) {
      window.traceRedesignAccept(bundle.data, bundle.liveSummary)
    }
    const index = state.bundles.findIndex((item) => item.data.run.id === id)
    if (index !== -1) {
      state.bundles[index] = bundle
    } else {
      state.bundles.push(bundle)
    }
    setBundle(bundle)
    renderRunOptions()
    announce('已通过原插件重新读取快照；这不是自动实时跟踪。')
  } catch (error) {
    if (version === state.generation && error.name !== 'AbortError') {
      state.error = '读取失败'
      office.fail()
      announce(
        `读取失败，仍展示 ${dateTime(state.model.capturedAt)} 的上次快照。人物工作动画已停止；没有把错误当作完成。`,
        true
      )
    }
  } finally {
    $('#snapshot-refresh').disabled = false
    $('#snapshot-refresh').textContent = '重新读取快照'
  }
}
async function readBundle(runId) {
  if (!embedded) {
    const response = await fetch(`/api/read?runId=${encodeURIComponent(runId)}`)
    if (!response.ok) {
      throw new Error('Read unavailable')
    }
    return response.json()
  }
  const data = await orca.plugin.request('trace.load', { runId })
  if (data?.run?.id !== runId) {
    throw new Error('Run mismatch')
  }
  const live = await orca.plugin.request('trace.live')
  return {
    data,
    capturedAt: new Date().toISOString(),
    liveSummary: live.runs.find((run) => run.id === runId) ?? { active: 0 }
  }
}
async function loadSelection(runId) {
  if (embedded) {
    return window.traceRedesignSelect(runId)
  }
  const version = ++state.generation
  try {
    const bundle = await readBundle(runId)
    if (version === state.generation) {
      setBundle(bundle)
    }
  } catch {
    if (version === state.generation) {
      state.error = '读取失败'
      office.fail()
      announce('读取失败，请重新选择记录或重试。', true)
    }
  }
}
async function init() {
  try {
    if (!embedded) {
      const response = await fetch('/api/snapshots')
      if (!response.ok) {
        throw new Error('Snapshot unavailable')
      }
      state.bundles = (await response.json()).bundles
      if (state.bundles.length) {
        setBundle(state.bundles[0])
      }
      renderRunOptions()
      return
    }
    const { runs } = await orca.plugin.request('trace.runs')
    state.bundles = runs.map((run) => ({ data: { run }, capturedAt: new Date().toISOString() }))
    renderRunOptions()
    const current = window.traceRedesignCurrent?.()
    if (current) {
      setBundle(current)
    }
  } catch {
    announce('暂无可读取的记录，请重新读取重试。', true)
  }
}
root
  .querySelectorAll('[data-view]')
  .forEach((button) => (button.onclick = () => switchView(button.dataset.view)))
$('#search').oninput = (event) => {
  state.query = event.target.value
  renderOverview()
}
$('#status').onchange = (event) => {
  state.status = event.target.value
  renderOverview()
}
$('#sort').onchange = (event) => {
  state.sort = event.target.value
  renderOverview()
}
$('#completed-toggle').onclick = () => {
  state.completed = !state.completed
  renderOverview()
}
$('#choose-run').onclick = () => $('#run-dialog').showModal()
$('#help').onclick = () => $('#help-dialog').showModal()
root
  .querySelectorAll('[data-close-dialog]')
  .forEach((button) => (button.onclick = () => button.closest('dialog').close()))
$('#snapshot-refresh').onclick = refresh
$('#apply-window').onclick = () => {
  const from = new Date($('#from-time').value).getTime(),
    to = new Date($('#to-time').value).getTime()
  if (!Number.isFinite(from) || !Number.isFinite(to) || from >= to) {
    return announce('请选择有效的起止时间，结束须晚于开始。', true)
  }
  announce('')
  state.from = from
  state.to = to
  renderRecap()
}
$('#reset-window').onclick = resetWindow
$('#show-lines').onchange = renderRecap
for (const [selector, factor] of [
  ['#zoom-in', 0.5],
  ['#zoom-out', 2]
]) {
  $(selector).onclick = () => {
    const center = (state.from + state.to) / 2,
      span = Math.max(60000, (state.to - state.from) * factor)
    state.from = center - span / 2
    state.to = center + span / 2
    renderRecap()
  }
}
Object.defineProperty(window, 'PrototypeRedesign', {
  value: Object.freeze({
    getState: () =>
      structuredClone({
        ready: Boolean(state.model),
        view: state.view,
        runId: state.model?.data.run.id,
        selectedTask: state.selected,
        capturedAt: state.model?.capturedAt,
        counts: state.model?.counts,
        filters: { query: state.query, status: state.status, completed: state.completed },
        range: [state.from, state.to],
        connections: state.connections,
        error: state.error,
        office: office.getState()
      })
  })
})
window.addEventListener(
  'pagehide',
  () => {
    aborter?.abort()
    office.dispose()
  },
  { once: true }
)
window.TraceRedesign = {
  setData(data, liveSummary) {
    setBundle({ data, liveSummary, capturedAt: new Date().toISOString() })
  },
  show(nextVisible) {
    visible = nextVisible
    office.show(visible && state.view === 'office')
  }
}
void init()
