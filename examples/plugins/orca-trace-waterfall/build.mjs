import { build } from 'vite'
import path from 'node:path'

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
          output.code = `/* oxlint-disable typescript/switch-exhaustiveness-check, typescript/restrict-template-expressions -- Generated bundle includes untyped third-party Three.js; source remains checked. */\n${output.code}`
        }
      }
    }
  ],
  css: { postcss: { plugins: [scope()] } },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    cssCodeSplit: false,
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
