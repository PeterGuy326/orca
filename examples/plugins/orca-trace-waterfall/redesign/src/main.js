import { adaptRun, dateTime } from './model.js'
import { createOfficeView } from './office-view.js'
import { currentOffice, officePeople } from './current-office.js'
import { loadTrace } from '../../voxel-src/integrations/tasks/trace-read.js'
const root=document.getElementById('redesign'), drawer=root.querySelector('#drawer'), notice=root.querySelector('#notice')
const request=(name,data)=>orca.plugin.request(name,data)
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c])
let models=[],people=[],chosen=null,error=null,version=0,ready=false
const office=createOfficeView({root:root.querySelector('#view-office'),onTask:(id,person)=>showPerson(person)})
const title=document.getElementById('current-title'), history=document.getElementById('run')
function clear(){drawer.hidden=true;drawer.replaceChildren();window.TraceTimeline.clear()}
function fail(e){error=e.message;notice.hidden=false;notice.textContent='读取失败 / unknown：'+e.message;document.getElementById('refresh').hidden=false;office.fail()}
function showPerson(person) {
  if(!person)return
  const tasks=people.find(p=>p.id===person.id)?.tasks || person.tasks
  drawer.hidden=false
  drawer.innerHTML=`<button id="close">收起</button><h2>${esc(person.name)}</h2><p>来源：Orca 原生派发 · ${esc(person.terminalId || '会话未关联')}</p>${tasks.map((t,i)=>`<article><h3>${esc(t.row?.title || t.model.data.run.objective)}</h3><p>${esc(t.row?.owner)} · ${esc(t.model.data.run.id)}</p><button data-flow="${i}">查看流程</button><details><summary>输入与回报</summary><pre>${esc(t.row?.input)}</pre><pre>${esc(t.row?.output)}</pre></details><details><summary>对话</summary>${(t.row?.messages||[]).map(m=>`<p>${esc(m.type)} ${dateTime(m.at)}</p><pre>${esc(m.body)}</pre>`).join('')}</details></article>`).join('')}`
  drawer.querySelector('#close').onclick=()=>drawer.hidden=true
  drawer.querySelectorAll('[data-flow]').forEach(b=>b.onclick=()=>flow(tasks[Number(b.dataset.flow)].model))
}
function flow(model){
  const changed=chosen?.data.run.id!==model.data.run.id
  chosen=model
  if(changed)window.TraceTimeline.clear()
  title.textContent=model.data.run.shortTitle || model.data.run.objective
  title.title=model.data.run.id
  window.TraceTimeline.apply(model.data)
  window.TraceTimeline.show('timeline')
}
function back(){version++;chosen=null;history.hidden=true;clear();title.textContent='当前协作';window.TraceTimeline.show('office')}
const poll=currentOffice({request,onError:fail,onData(bundles){
  models=bundles.map(b=>adaptRun(b));people=officePeople(models)
  ready=true;error=null;notice.hidden=true
  if(chosen && models.some(m=>m.data.run.id===chosen.data.run.id)) {
    chosen=models.find(m=>m.data.run.id===chosen.data.run.id);window.TraceTimeline.apply(chosen.data)
  }
  office.setPeople(people,models);ready=true;error=null;notice.hidden=true
  if(chosen){const fresh=models.find(m=>m.data.run.id===chosen.data.run.id);if(fresh){chosen=fresh;window.TraceTimeline.apply(fresh.data)}}
}})
document.getElementById('vTime').onclick=()=>{
  if(chosen){flow(chosen);return}
  drawer.hidden=false
  drawer.innerHTML='<p>请选择人物查看流程</p>'+models.map((m,i)=>`<button data-run="${i}">${esc(m.data.run.shortTitle)}</button>`).join('')
  drawer.querySelectorAll('[data-run]').forEach(b=>b.onclick=()=>flow(models[Number(b.dataset.run)]))
}
document.getElementById('back').onclick=back
document.getElementById('refresh').onclick=()=>poll.refresh()
document.getElementById('history').onclick=async()=>{
  const token=++version
  try {
    const result=await request('trace.runs');if(token!==version)return
    history.replaceChildren(...result.runs.map(r=>new Option(r.objective,r.id)))
    history.hidden=false;history.value=''
  }catch(e){fail(e)}
}
history.onchange=async()=>{
  const token=++version;chosen=null;clear()
  try{const data=await loadTrace(request,history.value,()=>token===version);if(token!==version)return;flow(adaptRun({data,liveSummary:{active:0},capturedAt:Date.now()}))}catch(e){if(token===version)fail(e)}
}
document.getElementById('vOffice').onclick=()=>{history.hidden=true;back()}
window.TraceRedesign={show:v=>office.show(v),fail,getState:()=>({ready,error,runId:chosen?.data.run.id,people:people.map(p=>({id:p.id,name:p.name,tasks:p.tasks.map(t=>({run:t.model.data.run.id,task:t.row?.id}))})),office:office.getState()})}
window.PrototypeRedesign={getState:()=>window.TraceRedesign.getState()}
window.addEventListener('pagehide',()=>{poll.dispose();office.dispose();version++},{once:true})
office.show(true);void poll.start()
