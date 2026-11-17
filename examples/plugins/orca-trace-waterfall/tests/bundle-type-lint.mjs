import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const repository = path.resolve(process.argv[2])
const fixture = path.join(root, 'dist/bundle-type-canary.js')
const bundle = readFileSync(path.join(root, 'dist/redesign.js'), 'utf8')
const expected = [
  'typescript(restrict-template-expressions)',
  'typescript(switch-exhaustiveness-check)'
].sort()
function scan(code) {
  writeFileSync(fixture, code)
  let stdout
  try {
    stdout = execFileSync(
      process.execPath,
      [
        path.join(repository, 'node_modules/oxlint/bin/oxlint'),
        '--type-aware',
        '--config',
        path.join(repository, 'config/oxlint-code-quality-type-aware.json'),
        '--report-unused-disable-directives-severity',
        'error',
        '--format',
        'json',
        fixture
      ],
      { cwd: repository, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 }
    )
  } catch (error) {
    assert.equal(error.status, 1)
    stdout = error.stdout
  }
  const result = JSON.parse(stdout)
  assert.equal(result.number_of_files, 1)
  return result.diagnostics
}
try {
  const directives =
    /\/\* oxlint-(?:disable|enable) typescript\/(?:switch-exhaustiveness-check|restrict-template-expressions)(?: --[^*]*)? \*\//g
  assert.equal([...bundle.matchAll(directives)].length, 4)
  const original = scan(bundle.replace(directives, ''))
  assert.deepEqual(original.map((d) => d.code).sort(), expected)
  assert.deepEqual(scan(bundle), [])
  const canary = `
/** @param {'a' | 'b'} state */
function businessSwitchCanary(state) { switch (state) { case 'a': return 'a' } }
/** @param {string[]} values */
function businessTemplateCanary(values) { return \`\${values}\` }
`
  const violations = scan(bundle + canary)
  assert.deepEqual(violations.map((d) => d.code).sort(), expected)
  assert.ok(
    violations.every((d) =>
      d.labels.every((label) => label.span.offset >= Buffer.byteLength(bundle))
    )
  )
  console.log(
    'Original: exactly two verified vendor diagnostics; scoped bundle: zero; business canary: both rules active.'
  )
} finally {
  rmSync(fixture, { force: true })
}
