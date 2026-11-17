import { chromium } from '@playwright/test'
import { readFile, mkdir, writeFile } from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
const root = path.resolve(import.meta.dirname, '..'),
  out = process.env.OFFICE_PLUGIN_EVIDENCE
assert.ok(out)
await mkdir(out, { recursive: true })
const exec = promisify(execFile),
  live = process.env.OFFICE_PLUGIN_LIVE === '1'
const server = http.createServer(async (req, res) => {
  try {
    const u = new URL(req.url, 'http://localhost')
    if (u.pathname === '/rpc') {
      const args = [
        'plugin',
        'dev',
        'request',
        'local.orca-trace-waterfall',
        u.searchParams.get('n')
      ]
      if (u.searchParams.get('d') !== 'undefined') {
        args.push('--data', u.searchParams.get('d'))
      }
      args.push('--json')
      const a = JSON.parse((await exec('orca', args)).stdout)
      if (!a.ok) {
        throw new Error(a.error.message)
      }
      res.end(JSON.stringify(a.result.result))
      return
    }
    const f = path.resolve(root, `.${u.pathname}`)
    if (!f.startsWith(`${root}/`)) {
      throw new Error('Invalid static resource path')
    }
    res.setHeader(
      'Content-Type',
      f.endsWith('.js') ? 'text/javascript' : f.endsWith('.css') ? 'text/css' : 'text/html'
    )
    res.end(await readFile(f))
  } catch (e) {
    res.writeHead(500).end(e.message)
  }
})
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader']
})
const page = await browser.newPage({ viewport: { width: 904, height: 990 } }),
  errors = []
page.on('pageerror', (e) => errors.push(e.message))
await page.addInitScript(
  ({ live }) => {
    window.mode = 'normal'
    window.orca = {
      plugin: {
        async request(n, d) {
          if (live) {
            return (await fetch(`/rpc?n=${n}&d=${encodeURIComponent(JSON.stringify(d))}`)).json()
          }
          if (window.mode === 'fail') {
            throw new Error('synthetic')
          }
          if (n === 'trace.live') {
            return {
              runs:
                window.mode === 'empty'
                  ? []
                  : [
                      { id: 'A', active: 1 },
                      { id: 'B', active: 1 }
                    ]
            }
          }
          if (n === 'trace.runs') {
            return { runs: [{ id: 'H', objective: 'history' }] }
          }
          const id = d.runId,
            t = Date.now() - 120000
          return {
            run: { id, objective: id },
            nodes: [
              { id, kind: 'run', start: t },
              {
                id: 't',
                kind: 'task',
                parentId: id,
                label: `${id} task`,
                start: t,
                status: 'dispatched'
              },
              {
                id: 'd',
                kind: 'dispatch',
                parentId: 't',
                taskId: 't',
                start: t,
                terminalId: 'same',
                status: 'running',
                input: `${id} ONLY`,
                session: { name: '工程师', status: 'active' }
              }
            ],
            messages: [{ id: 'm', dispatchId: 'd', body: `${id} message`, type: 'status', at: t }]
          }
        }
      }
    }
  },
  { live }
)
try {
  await page.goto(`http://127.0.0.1:${server.address().port}/panel/index.html`)
  await page.waitForFunction(() => window.TraceRedesign?.getState().ready, null, {
    timeout: 60000
  })
  const state = await page.evaluate(() => window.TraceRedesign.getState())
  if (!live) {
    await page.evaluate(() => {
      window.reads = 0
      const read = window.orca.plugin.request
      window.orca.plugin.request = async (n, d) => {
        const a = await read(n, d)
        if (n === 'trace.load') {
          window.reads++
        }
        if (n === 'trace.live' && window.order) {
          a.runs = window.order.map((id) => ({ id, active: 1 }))
        }
        return a
      }
    })
    await page.locator('#vTime').click()
    await page.evaluate(() => {
      window.oldA = document.querySelector('[data-run="A"]')
      window.order = ['B', 'A']
    })
    let reads = await page.evaluate(() => window.reads)
    await page.locator('#refresh').evaluate((b) => b.click())
    await page.waitForFunction((n) => window.reads > n, reads)
    await page.waitForTimeout(100)
    await page.evaluate(() => window.oldA.click())
    assert.equal(await page.evaluate(() => window.TraceTimeline.getState().runId), 'A')
    await page.locator('#back').click()
    await page.locator('#vTime').click()
    await page.evaluate(() => {
      window.oldA = document.querySelector('[data-run="A"]')
      window.order = ['B', 'C']
    })
    reads = await page.evaluate(() => window.reads)
    await page.locator('#refresh').evaluate((b) => b.click())
    await page.waitForFunction((n) => window.reads > n, reads)
    await page.waitForTimeout(100)
    assert.equal(await page.locator('[data-run="A"]').count(), 0)
    assert.equal(await page.locator('[data-run="C"]').count(), 1)
    await page.evaluate(() => window.oldA.click())
    assert.equal(await page.evaluate(() => window.TraceTimeline.getState().runId), undefined)
    await page.evaluate(() => (window.order = null))
    await page.locator('#refresh').evaluate((b) => b.click())
    await page.waitForTimeout(300)
    await page.locator('#back').click()
    await page.locator('#view-office summary').click()
    await page.locator('.person-row').first().focus()
    await page.keyboard.press('Enter')
    for (const selector of ['#close', '[data-flow]', '#drawer summary']) {
      await page.locator(selector).first().focus()
      const key = await page.evaluate(() => document.activeElement.dataset.focusKey)
      const before = await page.evaluate(() => window.reads)
      await page.waitForTimeout(10500)
      assert.equal(await page.evaluate(() => window.reads), before, 'cache poll')
      assert.equal(await page.evaluate(() => document.activeElement.dataset.focusKey), key)
      await page.locator('#refresh').evaluate((b) => b.click())
      await page.waitForFunction((n) => window.reads > n, before)
      await page.waitForTimeout(100)
      assert.equal(
        await page.evaluate(() => document.activeElement.dataset.focusKey),
        key,
        'full-read poll'
      )
    }
    await page.keyboard.press('Escape')
    assert.ok(await page.evaluate(() => document.activeElement.classList.contains('person-row')))
    await page.locator('[data-office-actor]').filter({ visible: true }).first().focus()
    await page.keyboard.press('Enter')
    await page.locator('#close').click()
    assert.ok(await page.evaluate(() => document.activeElement.hasAttribute('data-office-actor')))
    await page.locator('#view-office summary').click()
    await page.locator('[data-office-camera="room"]').click()
    await page.waitForTimeout(1800)
  }
  const pose = () => page.evaluate(() => window.TraceRedesign.getState().office.engine.cameraPose)
  const before = await pose()
  await page.locator('canvas').hover()
  await page.mouse.wheel(120, 30)
  await page.waitForTimeout(80)
  const pan = await pose()
  assert.equal(pan.zoom, before.zoom)
  assert.notDeepEqual(pan.target, before.target)
  await page.mouse.wheel(0, 120)
  await page.waitForTimeout(80)
  assert.ok((await pose()).zoom < pan.zoom)
  assert.equal(await page.locator('#run').isVisible(), false)
  if (!live) {
    assert.equal(state.people.length, 1)
    assert.equal(state.people[0].tasks.length, 2)
  }
  await page.locator('#view-office summary').click()
  await page.locator('.person-row').first().click()
  await page.setViewportSize({ width: 420, height: 990 })
  const bounds = await page.locator('#drawer').boundingBox()
  assert.ok(bounds.y >= 0 && bounds.y + bounds.height <= 990)
  await page.screenshot({ path: `${out}/detail-420.png` })
  await page.setViewportSize({ width: 904, height: 990 })
  await page.setViewportSize({ width: 420, height: 990 })
  const rect = await page.locator('#drawer').boundingBox()
  assert.ok(rect.y >= 0 && rect.y + rect.height <= 990, 'drawer is readable at 420')
  await page.screenshot({ path: `${out}/drawer-420.png` })
  await page.keyboard.press('Escape')
  assert.equal(await page.locator('#drawer').isVisible(), false)
  await page.locator('.person-row').first().click()
  if (!live) {
    assert.ok((await page.locator('#drawer').textContent()).includes('A message'))
    assert.ok((await page.locator('#drawer').textContent()).includes('B message'))
  }
  await page.locator('[data-flow]').first().click()
  const flow = await page.evaluate(() => window.TraceTimeline.getState())
  if (!live) {
    assert.equal(flow.runId, 'A')
  }
  if (!live) {
    await page.locator('#chart-scroll').hover()
    await page.mouse.wheel(0, -120)
    await page.mouse.wheel(0, -120)
    await page.mouse.wheel(0, -120)
    await page.waitForTimeout(100)
    const range = await page.evaluate(() => window.TraceTimeline.getState().range)
    await page.waitForTimeout(21000)
    assert.deepEqual(
      await page.evaluate(() => window.TraceTimeline.getState().range),
      range,
      'two polls retain zoom'
    )
    await page.evaluate(() => {
      const read = window.orca.plugin.request
      window.orca.plugin.request = async (n, d) => {
        if (n === 'trace.load' && d.runId === 'H') {
          await new Promise((r) => (window.releaseH = r))
        }
        const a = await read(n, d)
        if (n === 'trace.live' && window.onlyA) {
          a.runs = a.runs.filter((r) => r.id === 'A')
        }
        if (n === 'trace.load' && window.newMessage) {
          a.messages.push({ id: 'new', dispatchId: 'd', body: 'NEW A', type: 'status' })
        }
        return a
      }
    })
    await page.locator('#history').click()
    await page.locator('#run').selectOption('H')
    await page.waitForFunction(() => !!window.releaseH)
    await page.locator('#vTime').click()
    await page.locator('[data-run]').first().click()
    await page.evaluate(() => window.releaseH())
    await page.waitForTimeout(100)
    assert.equal(
      await page.evaluate(() => window.TraceTimeline.getState().runId),
      'A',
      'late history cannot replace A'
    )
    for (const target of ['B', 'back']) {
      await page.locator('#history').click()
      await page.locator('#run').selectOption('H')
      await page.waitForFunction(() => !!window.releaseH)
      if (target === 'back') {
        await page.locator('#back').click()
      } else {
        await page.locator('#vTime').click()
        await page.locator('[data-run]').nth(1).click()
      }
      await page.evaluate(() => window.releaseH())
      await page.waitForTimeout(50)
      assert.equal(
        await page.evaluate(() => window.TraceTimeline.getState().runId),
        target === 'back' ? undefined : 'B'
      )
    }
    await page.evaluate(() => {
      const read = window.orca.plugin.request
      window.orca.plugin.request = async (n, d) => {
        if (n === 'trace.runs') {
          await new Promise((r, j) => (window.rejectList = j))
        }
        return read(n, d)
      }
    })
    await page.locator('#history').click()
    await page.waitForFunction(() => !!window.rejectList)
    await page.locator('#back').click()
    await page.evaluate(() => window.rejectList(new Error('late list failure')))
    await page.waitForTimeout(50)
    assert.equal(await page.evaluate(() => window.TraceRedesign.getState().error), null)
    await page.locator('#back').click()
    await page.locator('.person-row').first().click()
    await page.evaluate(() => {
      window.onlyA = true
      window.newMessage = true
    })
    await page.locator('#refresh').evaluate((b) => b.click())
    await page.waitForFunction(() => window.TraceRedesign.getState().people[0]?.tasks.length === 1)
    assert.ok((await page.locator('#drawer').textContent()).includes('NEW A'))
    assert.equal(await page.locator('[data-flow]').count(), 1)
    await page.setViewportSize({ width: 420, height: 990 })
    const box = await page.locator('#drawer').boundingBox()
    assert.ok(box.y >= 0 && box.y + 60 < 990)
    await page.screenshot({ path: `${out}/drawer-420.png` })
    await page.keyboard.press('Escape')
    assert.equal(await page.locator('#drawer').isVisible(), false)
    await page.evaluate(() => {
      window.onlyA = false
      window.newMessage = false
    })
    await page.locator('#refresh').evaluate((b) => b.click())
  }
  await page.locator('#back').click()
  assert.equal(await page.locator('#drawer').isVisible(), false)
  await page.screenshot({ path: `${out}/904.png` })
  await page.setViewportSize({ width: 420, height: 990 })
  await page.screenshot({ path: `${out}/420.png` })
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth))
  if (!live) {
    await page.evaluate(() => (window.mode = 'fail'))
    await page.locator('#refresh').evaluate((b) => b.click())
    await page.waitForFunction(() => window.TraceRedesign.getState().error)
    assert.ok(
      (await page.evaluate(() => window.TraceRedesign.getState())).office.bindings.every(
        (p) => p.action === 'idle'
      )
    )
    await page.evaluate(() => (window.mode = 'empty'))
    await page.locator('#refresh').evaluate((b) => b.click())
    await page.waitForFunction(() => window.TraceRedesign.getState().people.length === 0)
  }
  if (!live) {
    await page.evaluate(() => {
      window.mode = 'normal'
      const read = window.orca.plugin.request
      window.orca.plugin.request = async (n, d) => {
        const a = await read(n, d)
        if (n === 'trace.load') {
          for (let i = 1; i < 10; i++) {
            a.nodes.push({ ...a.nodes[2], id: `d${i}`, terminalId: `s${i}` })
          }
        }
        return a
      }
    })
    await page.locator('#refresh').evaluate((b) => b.click())
    await page.waitForFunction(() => window.TraceRedesign.getState().people.length === 10)
    await page.locator('#office-next').click()
    assert.equal(await page.evaluate(() => window.TraceRedesign.getState().office.page), 1)
  }
  assert.deepEqual(errors, [])
  await writeFile(
    `${out}/result.json`,
    JSON.stringify(
      {
        live,
        people: state.people,
        flow,
        errors,
        wheel: 'horizontal-dominant pan and vertical zoom',
        overflow: !live
      },
      null,
      2
    )
  )
  console.log({ live, people: state.people.length, errors })
} finally {
  await browser.close()
  server.closeAllConnections()
  server.close()
}
