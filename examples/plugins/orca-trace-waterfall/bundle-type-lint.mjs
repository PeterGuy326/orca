import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { SourceMap } from 'node:module'
import { parseSync } from 'rolldown/utils'

// Exact statements diagnosed by oxlint 1.91.0 / tsgolint 7.0.2005 on the original ARM CI.
const targets = [
  {
    rule: 'typescript/switch-exhaustiveness-check',
    file: 'three.core.js',
    line: 42018,
    column: 2,
    type: 'SwitchStatement',
    hash: 'a440518b147c3aeee5a5ef492d01c8433b325c193ba427b6e2cd254dbb971825'
  },
  {
    rule: 'typescript/restrict-template-expressions',
    file: 'three.module.js',
    line: 5611,
    column: 1,
    type: 'VariableDeclaration',
    hash: '1f500c6af93763cd6512f2e652df1154bfba5d1d67c43f7c0c1859ca545b92b1'
  }
]

function visit(node, callback) {
  if (!node || typeof node !== 'object') {
    return
  }
  if (typeof node.type === 'string') {
    callback(node)
  }
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) {
      value.forEach((item) => visit(item, callback))
    } else if (value && typeof value === 'object') {
      visit(value, callback)
    }
  }
}

function position(text, offset) {
  const before = text.slice(0, offset)
  return [before.split('\n').length - 1, before.length - before.lastIndexOf('\n') - 1]
}

export function scopeThreeTypeLint(chunk, version) {
  assert.equal(version, '0.180.0', 'Review typed exemptions when Three changes')
  assert.ok(chunk.map, 'Typed exemptions require a source map')
  const sourceMap = new SourceMap(chunk.map)
  const ast = parseSync('redesign.js', chunk.code)
  assert.equal(ast.errors.length, 0)
  const ranges = targets.map((target) => {
    const sourceIndex = chunk.map.sources.findIndex((file) =>
      file.endsWith(`/node_modules/three/build/${target.file}`)
    )
    assert.ok(sourceIndex !== -1, `Missing Three source: ${target.file}`)
    const source = chunk.map.sourcesContent[sourceIndex]
    const sourceOffset =
      source.split('\n').slice(0, target.line).join('\n').length + 1 + target.column
    const original = []
    visit(parseSync(target.file, source).program, (node) => {
      if (node.type === target.type && node.start === sourceOffset) {
        original.push(node)
      }
    })
    assert.equal(original.length, 1, `Expected one original ${target.type}`)
    const statement = original[0]
    assert.equal(
      createHash('sha256').update(source.slice(statement.start, statement.end)).digest('hex'),
      target.hash,
      `Three statement changed: ${target.file}`
    )
    const matches = []
    visit(ast.program, (node) => {
      if (node.type !== target.type) {
        return
      }
      const entry = sourceMap.findEntry(...position(chunk.code, node.start))
      if (
        entry.originalSource === chunk.map.sources[sourceIndex] &&
        entry.originalLine === target.line &&
        entry.originalColumn === target.column
      ) {
        matches.push(node)
      }
    })
    assert.equal(matches.length, 1, `Expected one generated ${target.type}`)
    const generated = matches[0]
    visit(generated, (node) => {
      const entry = sourceMap.findEntry(...position(chunk.code, node.start))
      assert.equal(entry.originalSource, chunk.map.sources[sourceIndex], 'Mixed-source exemption')
      const offset =
        source.split('\n').slice(0, entry.originalLine).join('\n').length + 1 + entry.originalColumn
      assert.ok(
        offset >= statement.start && offset < statement.end,
        'Mapping outside Three statement'
      )
    })
    return { start: generated.start, end: generated.end, rule: target.rule }
  })
  let code = chunk.code
  for (const range of ranges.toSorted((a, b) => b.start - a.start)) {
    const before = `\n/* oxlint-disable ${range.rule} -- Verified Three 0.180.0 statement; see bundle-type-lint.mjs. */\n`
    const after = `\n/* oxlint-enable ${range.rule} */\n`
    code =
      code.slice(0, range.start) +
      before +
      code.slice(range.start, range.end) +
      after +
      code.slice(range.end)
  }
  return { code, ranges }
}
