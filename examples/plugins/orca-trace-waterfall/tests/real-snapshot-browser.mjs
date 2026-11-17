import { chromium } from '@playwright/test'
import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const output = process.env.OFFICE_PLUGIN_EVIDENCE
if (!output || !process.env.ORCA_TRACE_PREVIEW_URL) {
  throw new Error('Set external evidence directory and preview URL')
}
await mkdir(output, { recursive: true })
const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader']
})
const page = await browser.newPage({ viewport: { width: 904, height: 1000 } })
const errors = []
page.on('pageerror', (error) => errors.push(error.message))
try {
  await page.goto(process.env.ORCA_TRACE_PREVIEW_URL)
  await page.waitForFunction(() => window.PrototypeRedesign?.getState().ready)
  await page.screenshot({ path: path.join(output, 'real-source-904-overview.png') })
  if (!(await page.locator('[data-detail]').count())) {
    await page.locator('#completed-toggle').click()
  }
  await page.locator('[data-detail]').first().click()
  const before = await page.evaluate(() => window.PrototypeRedesign.getState().counts)
  for (let index = 0; index < 4; index++) {
    await page.locator(index ? '#action-again' : '#open-action').click()
    await page.locator('[name="action-type"]').nth(index).check()
    await page.locator('#action-choose-next').click()
    await page.locator('#action-opinion').fill('Synthetic validation opinion; no real delivery')
    await page.locator('#action-next').click()
    await page.locator('#action-consent').check()
    await page.locator('#action-send').click()
    assert.equal(await page.locator('#action-receipt').isVisible(), true)
  }
  assert.deepEqual(await page.evaluate(() => window.PrototypeRedesign.getState().counts), before)
  await page.screenshot({ path: path.join(output, 'real-source-904-receipt.png') })
  await page.locator('[data-view="office"]').click()
  await page.waitForFunction(() => window.PrototypeRedesign.getState().office.mounts > 0)
  await page.locator('#close-drawer').click()
  await page.screenshot({ path: path.join(output, 'real-source-904-office.png') })
  await page.setViewportSize({ width: 420, height: 1000 })
  await page.screenshot({ path: path.join(output, 'real-source-420-office.png') })
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true)
  await page.locator('[data-view="recap"]').click()
  await page.screenshot({ path: path.join(output, 'real-source-420-recap.png') })
  assert.deepEqual(errors, [])
  await writeFile(
    path.join(output, 'real-source-browser-results.json'),
    JSON.stringify(
      {
        passed: true,
        scope:
          'Headless preview of private external snapshots; native Orca panel captures recorded separately',
        errors,
        state: await page.evaluate(() => window.PrototypeRedesign.getState())
      },
      null,
      2
    )
  )
} finally {
  await browser.close()
}
