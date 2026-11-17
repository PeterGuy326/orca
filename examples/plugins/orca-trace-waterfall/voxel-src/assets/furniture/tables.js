import { box, group, palette as c } from '../materials/art.js'
import { createDeskSlab } from './primitives.js'

export function createFacingTable(parent, { table, surface, thickness, supports, planters }) {
  const root = group(parent)
  const slab = createDeskSlab(root, { ...table, surface, thickness })
  box(root, table.x, surface - thickness - 0.09, table.z, table.w - 0.7, 0.07, 0.55, '#4a5a58')
  for (const point of supports) {
    box(root, point.x, (surface - thickness) / 2, point.z, 0.12, surface - thickness, 0.5, c.white)
  }
  for (const point of planters) {
    box(root, point.x, surface + 0.07, point.z, 0.5, 0.14, 0.34, '#e6d3b8')
    box(root, point.x, surface + 0.185, point.z, 0.34, 0.1, 0.22, c.leafLight)
    box(root, point.x, surface + 0.245, point.z, 0.18, 0.07, 0.14, c.leaf)
  }
  return { root, colliders: [slab.collision], anchors: { surface } }
}
