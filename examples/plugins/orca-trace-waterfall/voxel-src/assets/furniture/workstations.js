import { box, group, palette as c } from '../materials/art.js'
import {
  createMug as mug,
  createChair,
  createMonitor,
  createDeskSlab,
  createKeyboard,
  seatPoint as at
} from './primitives.js'
import { monitorSpecs } from './spec.js'
import { monitorPlacement } from '../../world/workstation.js'

export function createWorkstation(parent, instance, screenMat) {
  const office = group(parent),
    screens = [],
    { seat, station: p, parameters } = instance
  const i = parameters.paletteIndex ?? instance.stationIndex
  const { deskItems, surface = 0.98, thickness: slab = 0.15 } = parameters
  const deskSurface = surface,
    deskThickness = slab
  if (instance.assetId === 'desk-classic') {
    const g = group(office, p.x, 0, p.z)
    g.rotation.y = instance.yaw
    createDeskSlab(g, { w: 2.55, d: 1.28, surface: 1.175, thickness: 0.15 })
    for (const x of [-1.05, 1.05]) {
      box(g, x, 0.54, 0, 0.11, 1.02, 1, c.white)
      box(g, x, 0.05, 0, 0.35, 0.09, 1.15, c.white)
    }
    const screenZ = 1.18 - monitorPlacement.screenDistance
    screens.push(
      createMonitor(g, { z: screenZ, spec: monitorSpecs['monitor-tall'], material: screenMat })
        .screen
    )
    box(g, -0.05, 1.21, 0.3, 0.72, 0.045, 0.25, '#e6e6d9')
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 9; col++) {
        box(g, -0.35 + col * 0.073, 1.239, 0.22 + row * 0.07, 0.052, 0.013, 0.04, '#99a3a1')
      }
    }
    box(g, 0.6, 1.19, 0.25, 0.36, 0.02, 0.4, c.green)
    box(g, 0.6, 1.23, 0.25, 0.12, 0.06, 0.19, c.white)
    mug(g, -0.92, 1.18, 0.22, [c.orange, c.blue, c.green][i % 3])
    box(g, 0.9, 1.22, -0.23, 0.35, 0.1, 0.4, [c.blue, c.orange, c.green][i % 3])
    box(g, 0.9, 1.28, -0.2, 0.32, 0.03, 0.34, c.white)
    createChair(office, seat)
  } else if (instance.assetId === 'desk-low') {
    const g = group(office, instance.desk.x, 0, instance.desk.z)
    g.rotation.y = seat.yaw + Math.PI // local -z is the far edge of the desk
    const surface = deskSurface,
      slab = deskThickness
    const local = (forward) => 1.18 - forward // seat-relative forward -> desk-local z
    createDeskSlab(g, { w: 2.55, d: 1.28, surface, thickness: slab })
    for (const x of [-1.05, 1.05]) {
      box(g, x, (surface - slab) / 2, 0, 0.11, surface - slab, 1, c.white)
      box(g, x, 0.05, 0, 0.35, 0.09, 1.15, c.white)
    }
    const monitor = local(deskItems.monitor.forward)
    screens.push(
      createMonitor(g, {
        z: monitor,
        surface,
        faceOffset: deskItems.monitor.faceOffset,
        spec: monitorSpecs['monitor-wide'],
        material: screenMat
      }).screen
    )
    const keys = deskItems.keyboard,
      keyboard = local(keys.forward)
    box(g, 0, surface + keys.thickness / 2, keyboard, 0.62, keys.thickness, keys.depth, '#e6e6d9')
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 9; col++) {
        box(
          g,
          -0.35 + col * 0.073,
          surface + keys.thickness + keys.keyHeight / 2,
          keyboard + (row - 1) * 0.068,
          0.052,
          keys.keyHeight,
          0.042,
          '#99a3a1'
        )
      }
    }
    box(
      g,
      deskItems.mouse.side,
      surface + 0.015,
      local(deskItems.mouse.forward),
      0.12,
      0.03,
      0.18,
      c.ink
    )
    const book = local(deskItems.notebook.forward)
    box(g, deskItems.notebook.side, surface + 0.02, book, 0.3, 0.04, 0.24, '#e6e6d9')
    box(
      g,
      deskItems.notebook.side,
      surface + 0.045,
      book,
      0.3,
      0.01,
      0.05,
      [c.orange, c.blue, c.green][i % 3]
    )
    mug(
      g,
      deskItems.mug.side,
      surface,
      local(deskItems.mug.forward),
      [c.orange, c.blue, c.green][i % 3]
    )
    createChair(office, seat)
  } else if (instance.assetId === 'seat-facing') {
    const monitor = at(seat, deskItems.monitor.forward, 0)
    screens.push(
      createMonitor(office, {
        ...monitor,
        yaw: seat.yaw + Math.PI,
        surface: surface,
        faceOffset: deskItems.monitor.faceOffset,
        material: screenMat,
        spec: monitorSpecs['monitor-compact']
      }).screen
    )
    createKeyboard(office, seat, surface, deskItems.keyboard)
    if (parameters.chairStage === 'afterKeyboard') {
      createChair(office, seat)
    }
    const mouse = at(seat, deskItems.mouse.forward, deskItems.mouse.side)
    box(office, mouse.x, surface + 0.015, mouse.z, 0.12, 0.03, 0.18, c.ink)
    const book = at(seat, deskItems.notebook.forward, deskItems.notebook.side)
    box(office, book.x, surface + 0.02, book.z, 0.3, 0.04, 0.24, '#e6e6d9')
    box(
      office,
      book.x,
      surface + 0.045,
      book.z,
      0.3,
      0.01,
      0.05,
      [c.orange, c.blue, c.green][i % 3]
    )
    const cup = at(seat, deskItems.mug.forward, deskItems.mug.side)
    mug(office, cup.x, surface, cup.z, [c.orange, c.blue, c.green][i % 3])
    if (parameters.chairStage !== 'afterKeyboard') {
      createChair(office, seat)
    }
  } else {
    throw new Error(`Unknown workstation asset: ${instance.assetId}`)
  }
  return { root: office, colliders: instance.colliders, anchors: instance.anchors, screens }
}
