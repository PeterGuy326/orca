// Synthetic browser-only counterexamples; no Orca worker or business write is called.
import { chromium } from '@playwright/test'
import assert from 'node:assert/strict'
import http from 'node:http'
import path from 'node:path'
import { readFile, mkdir, writeFile } from 'node:fs/promises'

const root = path.resolve(import.meta.dirname, '..')
const output = process.env.OFFICE_PLUGIN_EVIDENCE
assert.ok(output, 'Set OFFICE_PLUGIN_EVIDENCE outside the repository')
await mkdir(output, {recursive:true})
const {bundles} = JSON.parse(await readFile(path.join(root,'redesign/fixtures/snapshots.json')))
const server = http.createServer(async (req,res) => {
  try {
    const file = path.resolve(root,'.'+(req.url==='/'?'/panel/index.html':req.url))
    if (!file.startsWith(root+path.sep)) throw new Error('Invalid path')
    res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.woff2')?'font/woff2':'text/html')
    res.end(await readFile(file))
  } catch(error) {res.writeHead(500).end(error.message)}
})
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve))
const browser = await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']})
const page = await browser.newPage({viewport:{width:904,height:990}})
const errors=[], evidence={synthetic:true,steps:[]}
page.on('pageerror',error=>errors.push(error.message))
page.on('console',message=>{if(message.type()==='error') errors.push(message.text())})
await page.addInitScript(({template})=>{
  const start = Date.now()-120000
  window.__cfg={fail:null,delay:null,discover:false}
  window.__loads=0
  window.__requests=[]
  window.orca={plugin:{async request(name,data){
    window.__requests.push({name,data})
    if(name==='trace.runs') return {runs:['A','B'].map(id=>({id,objective:'Synthetic '+id}))}
    if(name==='trace.live') return {runs:(window.__cfg.discover?['A','C']:['A']).map(id=>({id,objective:'Synthetic '+id,active:1}))}
    if(name!=='trace.load') throw new Error('Unexpected request '+name)
    if(window.__cfg.delay===data.runId) {
      window.__pending=data.runId
      await new Promise(resolve=>window.__release=resolve)
      window.__pending=null
    }
    if(window.__cfg.fail===data.runId) throw new Error('Synthetic read failure '+data.runId)
    const value=structuredClone(template)
    value.run={...value.run,id:data.runId,objective:'Synthetic '+data.runId}
    value.nodes=value.nodes.slice(0,3)
    for(const node of value.nodes) {
      node.start=start+(node.kind==='dispatch'?1000:0)
      if(node.kind==='run') node.id=data.runId
      if(node.kind==='task') node.parentId=data.runId
      if(node.kind==='dispatch') node.input='Only '+data.runId+' input'
    }
    value.nodes.push({id:'poll-'+(++window.__loads),kind:'task',parentId:data.runId,label:'New poll event',start:Date.now(),status:'completed'})
    if(window.__cfg.many) for(let i=1;i<10;i++) {
      value.nodes.push({...value.nodes[2],id:'dispatch-'+i,terminalId:'term-'+i,session:{...value.nodes[2].session,terminalId:'term-'+i}})
    }
    value.messages=[]
    return value
  }}}
},{template:bundles[0].data})
const state = () => page.evaluate(()=>window.TraceTimeline.getState())
const loaded = id => page.waitForFunction(id=>window.TraceTimeline.getState().runId===id,id,{timeout:15000})
const choose = async id => {await page.locator('#run').selectOption(id);await loaded(id)}
const detail = async id => {
  await page.locator('#svg .bar').first().click()
  assert.ok((await page.locator('#detail').textContent()).includes('Only '+id+' input'))
}
try {
  await page.goto('http://127.0.0.1:'+server.address().port)
  await loaded('A')
  assert.equal(await page.locator('.office-page').isVisible(),false)
  await page.screenshot({path:path.join(output,'single.png')})
  await page.locator('#view-office details > summary').click()
  await page.locator('.person-row').first().click()
  assert.equal(await page.locator('#drawer').isVisible(),true)
  await page.locator('#vTime').click()
  await detail('A')
  await page.locator('#run').selectOption('B')
  assert.equal(await page.locator('#detail').textContent(),'')
  assert.equal(await page.locator('#drawer').textContent(),'')
  await loaded('B')
  await detail('B')
  assert.deepEqual((await state()).range,(await state()).full)
  evidence.steps.push('A details cleared immediately; B success has only B details and full range')

  await choose('A'); await detail('A')
  await page.evaluate(()=>window.__cfg.fail='B')
  await page.locator('#run').selectOption('B')
  await page.waitForFunction(()=>Boolean(window.TraceRedesign.getState().error))
  assert.equal(await page.locator('#detail').textContent(),'')
  assert.equal(await page.locator('#jump').count(),0)
  assert.equal(await page.locator('#svg .bar').count(),0)
  const failed=await page.locator('#foot').textContent()
  assert.ok(failed.includes('选择 B') && failed.includes('上次记录：A'))
  await page.screenshot({path:path.join(output,'switch-failure.png')})
  evidence.failure={footer:failed,timeline:await state()}
  await page.evaluate(()=>window.__cfg.fail=null)
  await choose('B')
  await page.evaluate(()=>{
    window.__applied=[]
    const apply=window.TraceTimeline.apply
    window.TraceTimeline.apply=data=>{window.__applied.push(data.run.id);apply(data)}
    window.__cfg.delay='A'
  })
  await page.locator('#run').selectOption('A')
  await page.waitForFunction(()=>window.__pending==='A')
  await page.locator('#run').selectOption('B')
  await page.evaluate(()=>{window.__cfg.delay=null;window.__release()})
  await loaded('B')
  assert.deepEqual(await page.evaluate(()=>window.__applied),['B'])
  evidence.steps.push('B failure clears old bars/jump and labels retained A; late A never overwrites B')

  await choose('A')
  await page.locator('#chart-scroll').hover()
  await page.mouse.wheel(0,-120)
  const zoomed=await state()
  const box=await page.locator('#chart-scroll').boundingBox()
  await page.mouse.move(box.x+box.width*0.6,box.y+70)
  await page.mouse.down();await page.mouse.move(box.x+box.width*0.5,box.y+70);await page.mouse.up()
  const before=await state(),count=await page.evaluate(()=>window.__loads)
  assert.ok(before.range[1]-before.range[0]<before.full[1]-before.full[0],'wheel must actually zoom')
  assert.notDeepEqual(before.range,zoomed.range,'drag must actually pan')
  const eventBefore=await page.locator('.lane-label').count()
  await page.waitForFunction(count=>window.__loads>=count+2,count,{timeout:15000})
  await page.waitForTimeout(100)
  const after=await state()
  assert.deepEqual(after.range,before.range,'two same-Run polls preserve zoom and pan')
  assert.ok(after.full[1]>before.full[1],'poll events update available boundary')
  evidence.polling={before,after,loadsBefore:count,loadsAfter:await page.evaluate(()=>window.__loads),labels:eventBefore}
  await page.screenshot({path:path.join(output,'polling-range.png')})
  await page.locator('#chart-scroll').dblclick()
  assert.deepEqual((await state()).range,(await state()).full)
  evidence.steps.push('zoom/pan survives two polls with updated events; explicit reset returns full range')

  await page.evaluate(()=>window.__cfg.discover=true)
  await page.waitForFunction(()=>[...document.querySelector('#run').options].some(option=>option.value==='C'),null,{timeout:10000})
  assert.equal(await page.locator('#run').inputValue(),'A')
  await choose('C')
  assert.equal(await page.evaluate(()=>window.TraceRedesign.getState().runId),'C')
  assert.deepEqual((await state()).range,(await state()).full)
  await detail('C')
  await page.locator('#vOffice').click()
  assert.equal(await page.locator('#view-office').isVisible(),true)
  assert.equal(await page.evaluate(()=>window.TraceRedesign.getState().runId),'C')
  evidence.discovered={selected:await page.locator('#run').inputValue(),timeline:await state(),officeRun:await page.evaluate(()=>window.TraceRedesign.getState().runId)}
  evidence.steps.push('new C discovered without reload or forcing A away; both views show selected C')
  await page.setViewportSize({width:420,height:990})
  await page.screenshot({path:path.join(output,'single-420.png')})
  await page.evaluate(()=>window.__cfg.many=true)
  await page.waitForFunction(()=>window.TraceRedesign.getState().office.slots.length===10,null,{timeout:15000})
  assert.equal(await page.locator('.office-page').isVisible(),true)
  await page.locator('#office-next').click()
  assert.equal(await page.evaluate(()=>window.TraceRedesign.getState().office.page),1)
  assert.equal(await page.locator('#office-page').textContent(),'2/2')
  await page.locator('#office-prev').focus()
  await page.keyboard.press('Enter')
  assert.equal(await page.evaluate(()=>window.TraceRedesign.getState().office.page),0)
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth))
  await page.screenshot({path:path.join(output,'multi-420.png')})
  evidence.steps.push('single-page controls hidden; 10 people reachable on page 2; keyboard previous; 420px no overflow')
  assert.deepEqual(errors,[])
  evidence.errors=errors
  await writeFile(path.join(output,'polling-results.json'),JSON.stringify(evidence,null,2))
  console.log(JSON.stringify({steps:evidence.steps,errors}))
} finally {await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve))}
