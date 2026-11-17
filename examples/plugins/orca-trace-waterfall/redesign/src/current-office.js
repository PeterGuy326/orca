import { businessState } from '../../voxel-src/integrations/tasks/orca-source.js'
import { loadTrace } from '../../voxel-src/integrations/tasks/trace-read.js'
export function officePeople(models) {
  const people = new Map()
  for (const model of models) {
    for (const node of model.data.nodes) {
      if (node.kind !== 'dispatch' || node.end != null || !['starting','pending','dispatched','ready','running'].includes(node.status)) continue
      const messages = model.data.messages.filter(m=>m.dispatchId===node.id || m.fromNodeId===node.id || m.toNodeId===node.id)
      const [state,label,action] = businessState(node,messages,model.bundle.liveSummary?.active)
      if (!['starting','running','waiting_reply','unknown'].includes(state)) continue
      const id=node.terminalId || model.data.run.id+':'+node.id
      const taskRow=model.rows.find(r=>r.id===node.taskId || r.id===node.parentId)
      const task={model,row:taskRow,node,state,label,action}
      let person=people.get(id)
      if(!person) {
        const raw=String(node.session?.name || node.session?.agent || node.agent || 'Agent')
        const name=`${raw.length>20 || raw===node.task ? node.session?.agent || node.agent || 'Agent' : raw} · ${id.slice(-6)}`
        person={id,terminalId:node.terminalId,dispatchId:node.id,name,identitySource:node.session?.name?'派发会话名':'Agent类型',state,label,action,taskRow,tasks:[],slot:people.size}
        people.set(id,person)
      }
      person.tasks.push(task)
    }
  }
  const priority={running:0,waiting_reply:1,starting:2,unknown:3}
  return [...people.values()].map(person=>{
    person.tasks.sort((a,b)=>priority[a.state]-priority[b.state] || a.model.data.run.id.localeCompare(b.model.data.run.id) || a.node.id.localeCompare(b.node.id))
    const task=person.tasks[0]
    return {...person,state:task.state,label:task.label,action:task.action,taskRow:task.row}
  })
}
export function currentOffice({request,onData,onError,interval=10000}) {
  let generation=0,timer,disposed=false,busy=false
  const cache=new Map()
  async function tick() {
    if(busy || disposed)return
    busy=true
    const version=generation,valid=()=>!disposed && generation===version
    try {
      const live=await request('trace.live')
      if(!valid())return
      if(!Array.isArray(live?.runs))throw Error('无效列表')
      const models=[]
      for(const summary of live.runs) {
        let entry=cache.get(summary.id)
        if(!entry || Date.now()-entry.at>15000) {
          const data=await loadTrace(request,summary.id,valid)
          if(!valid())return
          if(data?.run?.id!==summary.id)throw Error('Run不匹配')
          entry={data,at:Date.now()};cache.set(summary.id,entry)
        }
        models.push({data:entry.data,liveSummary:summary,capturedAt:entry.at})
      }
      for(const id of cache.keys())if(!live.runs.some(r=>r.id===id))cache.delete(id)
      if(valid())onData(models)
    } catch(e) {if(valid())onError(e)}
    finally {busy=false;if(!disposed)timer=setTimeout(tick,interval)}
  }
  return {start(){clearTimeout(timer);return tick()}, refresh(){generation++;clearTimeout(timer);cache.clear();if(!busy)void tick()},dispose(){disposed=true;generation++;clearTimeout(timer)}}
}
