import { build } from 'vite'
import path from 'node:path'
import { readFileSync } from 'node:fs'
import { scopeThreeTypeLint } from './bundle-type-lint.mjs'

const root = import.meta.dirname
const scope = () => ({
  postcssPlugin: 'scope-redesign',
  Rule(rule) {
    if (rule.parent.type === 'atrule' && rule.parent.name.endsWith('keyframes')) {
      return
    }
    rule.selectors = rule.selectors.map((selector) =>
      selector === ':root' || selector === 'body' ? '#redesign' : `#redesign ${selector}`
    )
  }
})
const options = { configFile: false, root, base: './', publicDir: false }
await build({
  ...options,
  plugins: [
    {
      name: 'generated-bundle-type-lint',
      generateBundle(_options, bundle) {
        const output = bundle['redesign.js']
        if (output?.type === 'chunk') {
          const version = JSON.parse(
            readFileSync(path.join(root, 'node_modules/three/package.json'), 'utf8')
          ).version
          output.code = scopeThreeTypeLint(output, version).code
          // The verified map describes pre-annotation bytes and must not be shipped as a runtime map.
          delete bundle['redesign.js.map']
          output.map = null
        }
      }
    }
  ],
  css: { postcss: { plugins: [scope()] } },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    cssCodeSplit: false,
    sourcemap: 'hidden',
    rolldownOptions: {
      input: path.join(root, 'redesign/src/main.js'),
      output: {
        format: 'iife',
        entryFileNames: 'redesign.js',
        inlineDynamicImports: true,
        assetFileNames: (asset) =>
          asset.names?.some((name) => name.endsWith('.css'))
            ? 'redesign.css'
            : 'redesign-assets/[name]-[hash][extname]'
      }
    }
  }
})
