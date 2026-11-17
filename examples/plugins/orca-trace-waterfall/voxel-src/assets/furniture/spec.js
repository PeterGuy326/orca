// Plain data: layouts/navigation can use these without importing Three.js.
export const furnitureSpec = Object.freeze({
  chair: Object.freeze({ w: 0.78, d: 0.78 }),
  desk: Object.freeze({ w: 2.55, d: 1.28 }),
  plant: Object.freeze({ w: 0.6, d: 0.6 })
})

export const workstationSpecs = Object.freeze({
  'desk-classic': Object.freeze({ hasDesk: true, monitorId: 'monitor-tall' }),
  'desk-low': Object.freeze({ hasDesk: true, monitorId: 'monitor-wide' }),
  'seat-facing': Object.freeze({ hasDesk: false, monitorId: 'monitor-compact' })
})

// Shape names describe reusable assets, independently of office presets.
export const monitorSpecs = Object.freeze({
  'monitor-tall': {
    base: { y: 1.23, z: 0, w: 0.5, h: 0.07, d: 0.32 },
    stem: { y: 1.43, z: -0.08, w: 0.09, h: 0.4, d: 0.09 },
    housing: { y: 1.7, z: -0.06, w: 1.05, h: 0.65, d: 0.1 },
    screen: { y: 1.7, z: 0, w: 0.94, h: 0.53 }
  },
  'monitor-wide': {
    base: { y: 0.015, z: 0, w: 0.34, h: 0.03, d: 0.22 },
    stem: { y: 0.195, z: -0.09, w: 0.08, h: 0.32, d: 0.08 },
    housing: { y: 0.485, z: -0.04, w: 1.05, h: 0.6, d: 0.09 },
    screen: { y: 0.485, z: 0.012, w: 0.94, h: 0.5 }
  },
  'monitor-compact': {
    base: { y: 0.015, z: 0, w: 0.34, h: 0.03, d: 0.22 },
    stem: { y: 0.195, z: -0.09, w: 0.08, h: 0.32, d: 0.08 },
    housing: { y: 0.485, z: -0.04, w: 1, h: 0.6, d: 0.09 },
    screen: { y: 0.485, z: 0.012, w: 0.92, h: 0.52 }
  }
})
