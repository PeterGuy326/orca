import { chromium } from '@playwright/test'
import assert from 'node:assert/strict'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { readFile, mkdir, writeFile } from 'node:fs/promises'

const root = fileURLToPath(new URL('../', import.meta.url))
const output = process.env.OFFICE_PLUGIN_EVIDENCE
if (!output) {
  throw new Error('Set OFFICE_PLUGIN_EVIDENCE outside the repository')
}
await mkdir(output, { recursive: true })
const { bundles } = JSON.parse(
  await readFile(new URL('../redesign/fixtures/snapshots.json', import.meta.url))
)
const server = http.createServer(async (req, res) => {
  const file = path.resolve(root, `.${req.url === '/' ? '/panel/index.html' : req.url}`)
  if (!file.startsWith(root)) {
    return res.writeHead(403).end()
  }
  try {
    res.setHeader(
      'Content-Type',
      file.endsWith('.js')
        ? 'text/javascript'
        : file.endsWith('.css')
          ? 'text/css'
          : file.endsWith('.woff2')
            ? 'font/woff2'
            : 'text/html'
    )
    res.end(await readFile(file))
  } catch {
    res.writeHead(404).end()
  }
})
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader']
})
const page = await browser.newPage({ viewport: { width: 904, height: 1000 } })
page.setDefaultTimeout(10000)
const errors = []
page.on('pageerror', (error) => (errors.push(error.message), console.error(error.message)))
await page.addInitScript(
  ({ bundles }) => {
    window.__calls = []
    window.orca = {
      plugin: {
        async request(name, data) {
          window.__calls.push({ name, data })
          if (name === 'trace.runs') {
            return {
              runs: bundles.map((bundle) => ({
                ...bundle.data.run,
                nodes: bundle.data.nodes.length
              }))
            }
          }
          if (name === 'trace.live') {
            return { runs: bundles.map((bundle) => bundle.liveSummary) }
          }
          if (name === 'trace.load') {
            if (window.__readError) {
              throw new Error('Synthetic read failure')
            }
            return structuredClone(bundles.find((bundle) => bundle.data.run.id === data.runId).data)
          }
          if (name === 'trace.session.open') {
            return { opened: true }
          }
          throw new Error(`Unapproved request: ${name}`)
        }
      }
    }
  },
  { bundles }
)
try {
  await page.goto(`http://127.0.0.1:${server.address().port}`)
  await page.waitForFunction(() => window.PrototypeRedesign?.getState().ready, null, {
    timeout: 10000
  })
  assert.equal(await page.locator('#wrap').isVisible(), true)
  await page.locator('#vTeam').click()
  assert.equal(await page.locator('#teamwrap').isVisible(), true)
  await page.locator('#vOffice').click()
  await page.locator('[data-detail]').first().click()
  for (let choice = 0; choice < 4; choice++) {
    await page.locator(choice ? '#action-again' : '#open-action').click()
    await page.locator('[name="action-type"]').nth(choice).check()
    await page.locator('#action-choose-next').click()
    assert.equal(await page.locator('#action-next').isDisabled(), true)
    await page.locator('#action-opinion').fill('  ')
    assert.equal(await page.locator('#action-next').isDisabled(), true)
    await page.locator('#action-opinion').fill(`Synthetic review instruction ${choice}`)
    await page.locator('#action-next').click()
    assert.equal(await page.locator('#action-send').isDisabled(), true)
    await page.locator('#action-consent').check()
    await page.locator('#action-send').click()
    assert.equal(await page.locator('#action-receipt').isVisible(), true)
  }
  await page.locator('#technical summary').click()
  await page.locator('#open-session').click()
  assert.equal(
    await page.evaluate(() => __calls.filter((call) => call.name === 'trace.session.open').length),
    1
  )
  assert.equal(
    await page.evaluate(() =>
      __calls.some(
        (call) =>
          !['trace.runs', 'trace.live', 'trace.load', 'trace.session.open'].includes(call.name)
      )
    ),
    false
  )
  await page.screenshot({ path: path.join(output, 'synthetic-904-actions.png') })
  await page.locator('[data-view="office"]').click()
  await page.waitForFunction(() => window.PrototypeRedesign.getState().office.mounts > 0)
  await page.screenshot({ path: path.join(output, 'synthetic-904-office.png') })
  await page.locator('#office-next').click()
  await page.setViewportSize({ width: 420, height: 1000 })
  await page.screenshot({ path: path.join(output, 'synthetic-420-office.png') })
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true)
  await page.locator('[data-view="recap"]').click()
  await page.screenshot({ path: path.join(output, 'synthetic-420-recap.png') })
  await page.locator('#choose-run').click()
  await page.locator('[data-run="run_second"]').click()
  await page.waitForFunction(() => window.PrototypeRedesign.getState().runId === 'run_second')
  assert.equal(await page.locator('#drawer').isVisible(), false)
  await page.evaluate(() => (window.__readError = true))
  await page.locator('#snapshot-refresh').click()
  await page.waitForFunction(() => window.PrototypeRedesign.getState().error === '读取失败')
  assert.equal(await page.evaluate(() => window.PrototypeRedesign.getState().error), '读取失败')
  assert.deepEqual(errors, [])
  await writeFile(
    path.join(output, 'browser-results.json'),
    JSON.stringify(
      {
        passed: true,
        errors,
        state: await page.evaluate(() => window.PrototypeRedesign.getState())
      },
      null,
      2
    )
  )
} finally {
  await browser.close()
  server.close()
}
