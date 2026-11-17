import { chromium } from '@playwright/test'
import assert from 'node:assert/strict'
import http from 'node:http'
import path from 'node:path'
import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { loadTrace } from '../voxel-src/integrations/tasks/trace-read.js'

const root = path.resolve(import.meta.dirname, '..')
const output = process.env.OFFICE_PLUGIN_EVIDENCE
assert.ok(output, 'Set OFFICE_PLUGIN_EVIDENCE outside the repository')
await mkdir(output, {recursive:true})
const live = process.env.OFFICE_PLUGIN_LIVE === '1'
const {bundles} = JSON.parse(await readFile(path.join(root,'redesign/fixtures/snapshots.json')))
const exec = promisify(execFile)
const allowed = new Set(['trace.runs','trace.live','trace.load'])
const server = http.createServer(async (req,res) => {
  const url = new URL(req.url,'http://localhost')
  try {
    if (url.pathname === '/rpc') {
      const name = url.searchParams.get('name'), data = JSON.parse(url.searchParams.get('data') || 'null')
      if (!allowed.has(name)) throw new Error('Only read handlers are permitted')
      let value
      if (live) {
        const request=async(name,data)=>{
          const args = ['plugin','dev','request','local.orca-trace-waterfall',name,'--json']
          if(data) args.push('--data',JSON.stringify(data))
          const {stdout} = await exec('orca',args)
          const answer = JSON.parse(stdout)
          if(!answer.ok) throw new Error(answer.error?.message || 'Host read failed')
          return answer.result.result
        }
        value = name==='trace.load' ? await loadTrace(request,data.runId) : await request(name)
      } else {
        value = name === 'trace.runs' ? {runs:bundles.map(b=>b.data.run)}
          : name === 'trace.live' ? {runs:bundles.map(b=>b.liveSummary)}
          : bundles.find(b=>b.data.run.id===data.runId)?.data
      }
      res.setHeader('Content-Type','application/json')
      return res.end(JSON.stringify(value))
    }
    const file = path.resolve(root,'.'+(url.pathname === '/' ? '/panel/index.html' : url.pathname))
    if(!file.startsWith(root+path.sep)) throw new Error('Invalid path')
    res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.woff2')?'font/woff2':'text/html')
    res.end(await readFile(file))
  } catch(error) {res.writeHead(500).end(error.message)}
})
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve))
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']})
const page=await browser.newPage({viewport:{width:904,height:990}})
const errors=[], evidence={live, steps:[]}
page.on('pageerror',e=>errors.push(e.message))
page.on('console',m=>{if(m.type()==='error') errors.push(m.text())})
await page.addInitScript(()=>{
  window.__requests=[]
  window.__failure=false
  window.__mode=null
  window.orca={plugin:{async request(name,data){
    window.__requests.push({name,data})
    if(window.__failure) throw new Error('Synthetic read failure')
    const response=await fetch('/rpc?name='+encodeURIComponent(name)+'&data='+encodeURIComponent(JSON.stringify(data??null)))
    if(!response.ok) throw new Error('Host read failed')
    const answer=await response.json()
    if(window.__mode==='inactive' && name==='trace.live') {
      window.__appliedMode='inactive'
      return {runs:[]}
    }
    if(window.__mode==='wait' && name==='trace.load'){
      const dispatch=answer.nodes.find(n=>n.kind==='dispatch' && n.end==null)
      if(dispatch) answer.messages.push({id:'synthetic-question',type:'question',fromNodeId:dispatch.id,fromHandle:dispatch.terminalId,toHandle:'run:'+answer.run.id,dispatchId:dispatch.id,at:Date.now(),subject:'Synthetic wait check',body:'Test only'})
    }
    if(window.__mode==='done' && name==='trace.load') for(const n of answer.nodes) if(n.kind==='dispatch'){n.status='completed';n.end=Date.now()}
    if(name==='trace.load') window.__appliedMode=window.__mode
    return answer
  }}}
})
try {
  await page.goto('http://127.0.0.1:'+server.address().port)
  if (process.env.OFFICE_PLUGIN_RUN) {
    const runId=process.env.OFFICE_PLUGIN_RUN
    await page.locator('#run').selectOption(runId)
    await page.waitForFunction(id=>window.TraceRedesign.getState().runId===id,runId,{timeout:30000})
  }
  await page.waitForFunction(()=>window.PrototypeRedesign?.getState().ready, null,{timeout:30000})
  await page.waitForFunction(()=>window.TraceRedesign.getState().office.engine?.actors.some(a=>a.visible),null,{timeout:15000})
  const initial=await page.evaluate(()=>window.TraceRedesign.getState())
  evidence.initial=initial
  assert.equal(await page.locator('#view-office').isVisible(),true)
  assert.equal(await page.locator('#drawer').isVisible(),false)
  assert.equal(await page.locator('body > header button:visible').allTextContents().then(a=>a.join('|')),'办公室|瀑布图')
  const runId=initial.runId
  const pose=()=>page.evaluate(()=>window.TraceRedesign.getState().office.engine)
  evidence.wheel=[]
  const cameraPose=async()=>(await pose()).cameraPose
  const wheelCanvas=page.locator('#office-viewport canvas')
  await wheelCanvas.hover()
  for(const [name,deltaX,deltaY] of [['right',120,0],['left',-120,0],['horizontal diagonal',120,30]]){
    const before=await cameraPose()
    await page.mouse.wheel(deltaX,deltaY)
    await page.waitForFunction(target=>window.TraceRedesign.getState().office.engine.cameraPose.target.some((n,i)=>Math.abs(n-target[i])>1e-5),before.target)
    const after=await cameraPose()
    assert.equal(after.zoom,before.zoom, name+' must not zoom')
    for(let i=0;i<3;i++) assert.ok(Math.abs((after.position[i]-before.position[i])-(after.target[i]-before.target[i]))<1e-6, name+' translates camera and target together')
    evidence.wheel.push({name,deltaX,deltaY,before,after})
  }
  const right=evidence.wheel[0],left=evidence.wheel[1]
  assert.ok(right.after.target.every((n,i)=>Math.abs(n-left.before.target[i])<1e-6))
  assert.ok(left.after.target.every((n,i)=>Math.abs(n-right.before.target[i])<1e-6),'opposite horizontal gestures reverse the pan')
  await page.screenshot({path:path.join(output,'wheel-horizontal.png')})
  for(const [name,deltaX,deltaY] of [['vertical out',0,120],['vertical in',0,-120],['vertical diagonal',30,120]]){
    const before=await cameraPose()
    await page.mouse.wheel(deltaX,deltaY)
    await page.waitForFunction(zoom=>window.TraceRedesign.getState().office.engine.cameraPose.zoom!==zoom,before.zoom)
    const after=await cameraPose()
    assert.ok(deltaY>0 ? after.zoom<before.zoom : after.zoom>before.zoom,name)
    assert.ok(after.target.every((n,i)=>Math.abs(n-before.target[i])<1e-6),name+' must retain its target')
    evidence.wheel.push({name,deltaX,deltaY,before,after})
  }
  for(const deltaMode of [1,2]){
    const before=await cameraPose()
    await wheelCanvas.dispatchEvent('wheel',{deltaX:1,deltaY:0,deltaMode,cancelable:true,bubbles:true})
    const after=await cameraPose()
    assert.equal(after.zoom,before.zoom)
    assert.ok(after.target.some((n,i)=>Math.abs(n-before.target[i])>1e-5))
    evidence.wheel.push({name:'horizontal unit',deltaMode,before,after})
  }
  await page.locator('[data-office-camera="room"]').click()
  evidence.steps.push('horizontal wheel pans; diagonal follows dominant axis; vertical wheel still zooms; line/page deltas pan')
  await writeFile(path.join(output,'wheel-results.json'),JSON.stringify({live,wheel:evidence.wheel,errors},null,2))
  const first=await pose()
  await page.waitForTimeout(700)
  const second=await pose()
  assert.ok(second.render.count>first.render.count)
  const moving=first.actors.filter(a=>a.visible && ['work','think'].includes(a.action))
  if(moving.length) assert.notDeepEqual(first.actors.filter(a=>a.visible).map(a=>a.pose),second.actors.filter(a=>a.visible).map(a=>a.pose))
  else assert.ok(first.actors.every(a=>!a.visible || a.action==='idle'),'no active work stays idle')
  evidence.motion={first,second}
  await page.screenshot({path:path.join(output,'office-904.png')})
  await page.locator('#view-office details > summary').click()
  await page.locator('.person-row').first().click()
  assert.equal(await page.locator('#drawer').isVisible(),true)
  const beforePick = await page.evaluate(()=>window.TraceRedesign.getState().office.picks)
  const canvas = page.locator('#office-viewport canvas')
  const size = await canvas.boundingBox()
  const points = [[0.5,0.5],[0.5,0.6],[0.45,0.55],[0.55,0.55]]
  for(let y=0.3;y<=0.75;y+=0.04) for(let x=0.15;x<=0.85;x+=0.04) points.push([x,y])
  for (const [x,y] of points) {
    await canvas.click({position:{x:size.width*x,y:size.height*y}})
    if (await page.evaluate(()=>window.TraceRedesign.getState().office.picks)>beforePick) break
  }
  assert.ok(await page.evaluate(()=>window.TraceRedesign.getState().office.picks)>beforePick, '3D person pick reaches task details')
  evidence.steps.push('person task details')
  await page.screenshot({path:path.join(output,'details-904.png')})
  await page.locator('#vTime').click()
  assert.equal(await page.locator('#wrap').isVisible(),true)
  assert.equal(await page.locator('#redesign').isVisible(),false)
  assert.equal(await page.evaluate(()=>window.TraceRedesign.getState().runId),runId)
  await page.locator('#svg .bar').last().click()
  assert.equal(await page.locator('#detail').isVisible(),true)
  await page.screenshot({path:path.join(output,'waterfall-904.png')})
  for(const width of [420,904]){
    await page.setViewportSize({width,height:990})
    await page.locator('#vOffice').click()
    await page.screenshot({path:path.join(output,'office-'+width+'.png')})
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1))
    await page.locator('#vTime').click()
    await page.screenshot({path:path.join(output,'waterfall-'+width+'.png')})
    await page.locator('#vOffice').click()
  }
  const options=await page.locator('#run option').evaluateAll(list=>list.map(o=>o.value))
  if(options.length>1){
    await page.locator('#run').selectOption(options.find(id=>id!==runId))
    await page.waitForFunction(id=>window.TraceRedesign.getState().runId===id,options.find(id=>id!==runId),{timeout:15000})
    assert.equal(await page.locator('#drawer').isVisible(),false)
    await page.locator('#run').selectOption(runId)
    await page.waitForFunction(id=>window.TraceRedesign.getState().runId===id,runId,{timeout:15000})
  }
  // Only the browser bridge is overridden here; no test event or write reaches Orca.
  // A targeted historical Run may have no live dispatch to put into a wait state.
  if (!process.env.OFFICE_PLUGIN_RUN) {
  for(const [mode,action] of [['wait','think'],['done','idle'],['inactive','idle']]){
    await page.evaluate(value=>window.__mode=value,mode)
    await page.waitForFunction(mode=>window.__appliedMode===mode,mode,{timeout:15000})
    await page.waitForFunction(action=>{
      const actors=window.TraceRedesign.getState().office.engine.actors.filter(a=>a.visible)
      return action==='think' ? actors.some(a=>a.action===action) : actors.every(a=>a.action===action)
    },action,{timeout:15000})
    evidence.steps.push('synthetic '+mode+' → '+action)
  }
  await page.evaluate(()=>{window.__mode=null;window.__failure=true})
  await page.waitForFunction(()=>window.TraceRedesign.getState().error,null,{timeout:15000})
  assert.ok((await pose()).actors.every(a=>!a.visible || a.action==='idle'))
  assert.equal(await page.locator('#notice').isVisible(),true)
  await page.screenshot({path:path.join(output,'synthetic-failure.png')})
  await page.evaluate(()=>window.__failure=false)
  await page.locator('#refresh').click()
  await page.waitForFunction(()=>!window.TraceRedesign.getState().error,null,{timeout:15000})
  assert.ok((await pose()).actors.some(a=>a.visible))
  evidence.steps.push('synthetic failure stops work','recovery')
  }
  assert.deepEqual(errors,[])
  evidence.requests=await page.evaluate(()=>window.__requests)
  assert.ok(evidence.requests.every(r=>['trace.runs','trace.live','trace.load'].includes(r.name)))
  evidence.steps.push('live load',moving.length?'actual work/think pose and frame changes':'inactive stays idle with rendering','shared Run waterfall','narrow layout','Run switch')
  evidence.errors=errors
  await writeFile(path.join(output,'browser-results.json'),JSON.stringify(evidence,null,2))
  console.log(JSON.stringify({live,steps:evidence.steps,errors}))
} catch(error) {
  await writeFile(path.join(output,'browser-failure.json'),JSON.stringify({message:error.message,steps:evidence.steps,errors,state:await page.evaluate(()=>window.TraceRedesign?.getState())},null,2))
  throw error
} finally {await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve))}
