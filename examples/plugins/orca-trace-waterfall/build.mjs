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
