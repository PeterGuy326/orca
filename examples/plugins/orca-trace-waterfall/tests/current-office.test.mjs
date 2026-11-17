import test from 'node:test'
import assert from 'node:assert/strict'
import {officePeople} from '../redesign/src/current-office.js'
const model=(id,status='running')=>({data:{run:{id},nodes:[{id:'d',kind:'dispatch',taskId:'t',terminalId:'s',status,end:null,session:{name:'工程师'}}],messages:[]},rows:[{id:'t'}],bundle:{liveSummary:{active:1}}})
test('same session across Runs keeps one person and separate task sources',()=>{
 const people=officePeople([model('A'),model('B')]);assert.equal(people.length,1);assert.deepEqual(people[0].tasks.map(t=>t.model.data.run.id),['A','B'])
 assert.equal(officePeople([model('A','completed')]).length,0)
 assert.equal(officePeople([]).length,0)
})
