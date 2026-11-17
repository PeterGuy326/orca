import { build } from 'vite'
import { cp } from 'node:fs/promises'
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
const legacyScope = {
  postcssPlugin: 'scope-office',
  Rule(rule) {
    if (rule.parent.type === 'atrule' && rule.parent.name.endsWith('keyframes')) {
      return
    }
    rule.selectors = rule.selectors.map((selector) =>
      selector.startsWith('#officewrap') ? selector : `#officewrap ${selector}`
    )
  }
}
const options = { configFile: false, root, base: './', publicDir: false }
await build({
  ...options,
  css: { postcss: { plugins: [legacyScope] } },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    cssCodeSplit: false,
    rolldownOptions: {
      input: path.join(root, 'voxel-src/app/plugin-office.js'),
      output: {
        format: 'iife',
        entryFileNames: 'office.js',
        inlineDynamicImports: true,
        assetFileNames: (asset) =>
          asset.names?.some((name) => name.endsWith('.css'))
            ? 'office-voxel.css'
            : 'office-assets/[name]-[hash][extname]'
      }
    }
  }
})
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
await build({
  ...options,
  root: path.join(root, 'redesign'),
  build: { outDir: 'dist', emptyOutDir: true }
})
for (const name of ['LICENSE', 'ASSET_LICENSE.md', 'THIRD_PARTY_NOTICES.md', 'licenses']) {
  await cp(path.join(root, 'redesign', name), path.join(root, 'redesign/dist', name), {
    recursive: true
  })
}
