import { createFacingTable } from '../furniture/tables.js'
import { createMug as mug, createPlant } from '../furniture/primitives.js'
// Procedural environment asset. All geometry and placement data comes from the supplied layout.
import * as THREE from 'three'
import { box, group, panel, canvasMaterial, palette as c } from '../materials/art.js'
import { registerDisplay } from '../../world/display-registry.js'

export function buildEnvironment(scene, layout, { placeFurniture }) {
  const office = group(scene),
    obstacles = [],
    screens = [],
    displays = []
  const ZONE = Object.fromEntries(layout.environment.zones.map((zone) => [zone.id, zone]))
  const planterX = layout.planterX
  const table = layout.table
  const halfWidth = layout.width / 2,
    halfDepth = layout.depth / 2
  const back = -halfDepth + 0.05,
    left = -halfWidth + 0.05

  // Floor, plinth and the long timber boards.
  box(office, 0, -0.3, 0, layout.width, 0.55, layout.depth, c.cream)
  box(office, 0, -0.58, 0, layout.width - 0.35, 0.12, layout.depth - 0.35, '#b7c8c8')
  const columns = Math.ceil(layout.width / 1.5),
    plankWidth = layout.width / columns
  for (let row = 0; row < layout.depth * 2; row++) {
    for (let col = 0; col < columns; col++) {
      const x = -halfWidth + plankWidth / 2 + col * plankWidth
      box(
        office,
        x,
        -0.005,
        -halfDepth + 0.25 + row * 0.5,
        plankWidth - 0.015,
        0.08,
        0.485,
        ['#ccae86', '#d2b48e', '#d6bb98', '#c6a680'][(row * 7 + col * 3) % 4],
        'wood'
      )
    }
  }
  // Open dollhouse shell: the long back and left walls stay, both ends stay open.
  box(office, 0, 1.65, back, layout.width, 3.3, 0.18, c.cream)
  box(office, left, 1.65, 0, 0.18, 3.3, layout.depth, c.cream)
  box(office, 0, 0.24, back + 0.14, layout.width - 0.2, 0.38, 0.08, '#b3bca5')
  box(office, left + 0.14, 0.24, 0, 0.08, 0.38, layout.depth - 0.2, '#b3bca5')
  box(office, 0, 3.32, back, layout.width + 0.1, 0.12, 0.26, '#f6f6e9')
  box(office, left, 3.32, 0, 0.26, 0.12, layout.depth + 0.1, '#f6f6e9')

  const windowMat = canvasMaterial(
    64,
    40,
    (ctx) => {
      ctx.fillStyle = '#b6d6d9'
      ctx.fillRect(0, 0, 64, 40)
      ctx.fillStyle = '#e4eee4'
      ctx.fillRect(5, 5, 19, 4)
      ctx.fillRect(36, 8, 23, 4)
      ctx.fillStyle = '#9ab7b3'
      for (let i = 0; i < 8; i++) {
        ctx.fillRect(i * 9, 25 - (i % 3) * 4, 7, 20)
      }
      ctx.fillStyle = '#c4d8cc'
      ctx.fillRect(2, 34, 64, 6)
    },
    true
  )
  const screenMat = canvasMaterial(
    64,
    40,
    (ctx) => {
      ctx.fillStyle = '#293e40'
      ctx.fillRect(0, 0, 64, 40)
      ctx.fillStyle = '#52666a'
      ctx.fillRect(0, 0, 64, 5)
      ctx.fillRect(0, 7, 12, 33)
      for (let i = 0; i < 7; i++) {
        ctx.fillStyle = ['#e2bd8b', '#9ec5b5', '#839fac'][i % 3]
        ctx.fillRect(16 + (i % 2) * 5, 10 + i * 4, 13 + ((i * 7) % 25), 2)
      }
    },
    true
  )
  const signMat = canvasMaterial(256, 112, (ctx) => {
    ctx.fillStyle = '#79917a'
    ctx.fillRect(0, 0, 256, 112)
    ctx.fillStyle = '#f8f9f5'
    ctx.font = 'bold 33px monospace'
    ctx.fillText('PIX OFFICE', 24, 47)
    ctx.font = '12px monospace'
    ctx.fillText('NINE AT ONE LONG TABLE.', 26, 78)
  })
  const whiteboardMat = canvasMaterial(320, 96, (ctx) => {
    ctx.fillStyle = '#f4f7f1'
    ctx.fillRect(0, 0, 320, 96)
    ctx.fillStyle = '#5c6e70'
    ctx.font = 'bold 13px monospace'
    ctx.fillText('LOFT STUDIO / SPRINT 07', 14, 20)
    ctx.strokeStyle = '#7d9aa0'
    ctx.lineWidth = 2
    for (const [x, y, w, h] of [
      [18, 34, 60, 34],
      [110, 34, 54, 34],
      [196, 34, 74, 34]
    ]) {
      ctx.strokeRect(x, y, w, h)
    }
    ctx.beginPath()
    ctx.moveTo(78, 51)
    ctx.lineTo(110, 51)
    ctx.moveTo(164, 51)
    ctx.lineTo(196, 51)
    ctx.stroke()
    ctx.fillStyle = '#d57645'
    ctx.fillRect(26, 62, 44, 26)
    ctx.fillStyle = '#79917a'
    ctx.fillRect(140, 62, 40, 26)
    ctx.fillStyle = '#708fa5'
    ctx.fillRect(226, 62, 40, 26)
  })
  const menuMat = canvasMaterial(128, 96, (ctx) => {
    ctx.fillStyle = '#2f3c3b'
    ctx.fillRect(0, 0, 128, 96)
    ctx.fillStyle = '#f0ead6'
    ctx.font = 'bold 12px monospace'
    ctx.fillText('BAR', 12, 20)
    ctx.fillStyle = '#c9a477'
    for (let i = 0; i < 4; i++) {
      ctx.fillRect(12, 32 + i * 14, 84 - i * 12, 5)
    }
    ctx.fillStyle = '#8caa70'
    ctx.fillRect(104, 14, 12, 74)
  })
  const glassMat = new THREE.MeshStandardMaterial({
    color: '#cfe3e6',
    transparent: true,
    opacity: 0.34,
    roughness: 0.3
  })

  // Five windows and a centred sign on the long back wall.
  for (const x of [-9.9, -3.3, 3.3, 9.9]) {
    box(office, x, 2.05, back + 0.17, 2.75, 1.85, 0.12, c.white)
    panel(office, x, 2.05, back + 0.248, 2.5, 1.6, windowMat)
    box(office, x, 2.05, back + 0.3, 0.08, 1.7, 0.08, c.white)
    box(office, x, 2.05, back + 0.3, 2.55, 0.08, 0.08, c.white)
    box(office, x, 1.12, back + 0.35, 2.9, 0.12, 0.45, c.white)
  }
  box(office, 0, 2.35, back + 0.2, 2.8, 1.3, 0.16, c.wood)
  registerDisplay(displays, 'topic', panel(office, 0, 2.35, back + 0.292, 2.62, 1.13, signMat), {
    id: 'mission',
    label: '任务主题'
  })

  const plant = (x, z, scale = 1, y = 0) => createPlant(office, x, z, scale, y)

  // One shared table, one leg per seat pair, shared planters down the middle.
  // Everything on the table is measured from its surface so the top stays
  // height-matched to the typing pose in the supplied table parameters.
  const surface = table.surface,
    slab = table.thickness
  createFacingTable(office, {
    table,
    surface,
    thickness: slab,
    supports: layout.tableSupports,
    planters: planterX.map((x) => ({ x, z: table.z }))
  })
  box(office, 1.1, surface + 0.035, 0, 0.46, 0.07, 0.3, '#c9d3cf')
  box(office, 1.1, surface + 0.085, 0, 0.4, 0.03, 0.24, c.white)
  for (const [x, side] of [
    [-6.6, -1],
    [1.1, 1],
    [7.7, -1]
  ]) {
    box(office, x, 0.39, side * 0.72, 0.5, 0.76, 0.62, c.cream)
    box(office, x, 0.8, side * 0.72, 0.56, 0.06, 0.68, c.wood, 'wood')
    for (let i = 0; i < 2; i++) {
      box(office, x, 0.3 + i * 0.34, side * 1.06, 0.3, 0.04, 0.04, c.woodDark)
    }
  }

  screens.push(...placeFurniture(office, screenMat))

  // Left end: the long whiteboard wall, a pinboard and a clock between cabinets.
  const board = group(office, left + 0.16, 2, -0.2)
  board.rotation.y = Math.PI / 2
  box(board, 0, 0, 0, 6.4, 2.1, 0.1, c.wood)
  registerDisplay(displays, 'board', panel(board, 0, 0, 0.06, 6.2, 1.92, whiteboardMat), {
    id: 'tasks',
    label: '全部子任务'
  })
  box(board, 0, -1.1, 0.07, 6, 0.06, 0.12, c.wood)
  box(board, -1.7, -1.04, 0.1, 0.1, 0.05, 0.05, c.orange)
  box(board, -1.5, -1.04, 0.1, 0.1, 0.05, 0.05, c.blue)
  const pinboard = group(office, left + 0.16, 1.95, 5.4)
  pinboard.rotation.y = Math.PI / 2
  box(pinboard, 0, 0, 0, 2.3, 1.3, 0.09, c.wood)
  box(pinboard, 0, 0, 0.055, 2.14, 1.14, 0.05, '#c5ae8b')
  for (let i = 0; i < 6; i++) {
    const note = box(
      pinboard,
      -0.72 + (i % 3) * 0.72,
      0.24 - Math.floor(i / 3) * 0.5,
      0.09,
      0.38,
      0.32,
      0.02,
      [c.cream, '#e4b581', '#b7ccb6'][i % 3]
    )
    note.rotation.z = ((i % 3) - 1) * 0.09
  }
  const clock = group(office, left + 0.17, 2.6, -5.4)
  clock.rotation.y = Math.PI / 2
  box(clock, 0, 0, 0, 0.65, 0.65, 0.12, c.woodDark)
  box(clock, 0, 0, 0.08, 0.54, 0.54, 0.05, c.white)
  box(clock, 0, 0.09, 0.12, 0.04, 0.21, 0.02, c.ink)
  box(clock, 0.09, 0, 0.12, 0.21, 0.04, 0.02, c.ink)
  for (const id of ['file-n', 'file-s']) {
    const f = ZONE[id]
    box(office, f.x, 0.62, f.z, f.w, 1.24, f.d, c.cream)
    box(office, f.x, 1.27, f.z, f.w + 0.08, 0.07, f.d + 0.08, c.wood, 'wood')
    for (let i = 0; i < 3; i++) {
      box(office, f.x + f.w / 2 + 0.005, 0.34 + i * 0.38, f.z, 0.03, 0.32, f.d - 0.2, '#dde0cb')
      box(office, f.x + f.w / 2 + 0.03, 0.34 + i * 0.38, f.z, 0.05, 0.05, 0.16, c.woodDark)
    }
  }
  plant(ZONE['file-n'].x + 0.2, ZONE['file-n'].z, 0.55, 1.3)

  // Right end: a bar, a back-bar unit and three stools.
  const bar = ZONE.bar,
    barBack = ZONE['bar-back']
  box(office, bar.x, 0.53, bar.z, bar.w, 1.02, bar.d, c.cream)
  box(office, bar.x, 1.08, bar.z, bar.w + 0.18, 0.12, bar.d + 0.16, c.wood, 'wood')
  for (const z of [-3.1, -1.1, 0.9]) {
    box(office, bar.x - bar.w / 2 - 0.02, 0.52, z, 0.03, 0.86, 1.6, '#dde0cb')
    box(office, bar.x - bar.w / 2 - 0.06, 0.72, z, 0.06, 0.05, 0.18, c.woodDark)
  }
  box(office, bar.x, 1.155, -2.7, 0.5, 0.04, 0.66, '#c3cfcb')
  box(office, bar.x, 1.32, -2.4, 0.06, 0.32, 0.06, '#9fb0ad')
  box(office, bar.x + 0.04, 1.42, -2.35, 0.3, 0.05, 0.05, '#9fb0ad')
  box(office, bar.x - 0.05, 1.45, 0.35, 0.56, 0.62, 0.5, c.ink)
  box(office, bar.x - 0.36, 1.48, 0.35, 0.03, 0.3, 0.34, '#657671')
  box(office, bar.x + 0.06, 1.2, 0.35, 0.3, 0.06, 0.3, c.ink)
  mug(office, bar.x - 0.32, 1.14, 1.05, c.white)
  mug(office, bar.x - 0.32, 1.14, 0.72, c.orange)
  box(office, barBack.x, 1, barBack.z, barBack.w, 2, barBack.d, c.cream)
  box(office, barBack.x, 2.03, barBack.z, barBack.w + 0.08, 0.08, barBack.d + 0.08, c.wood, 'wood')
  for (let i = 0; i < 3; i++) {
    box(
      office,
      barBack.x,
      0.45 + i * 0.5,
      barBack.z,
      barBack.w + 0.06,
      0.05,
      barBack.d - 0.18,
      '#dde0cb'
    )
  }
  for (let i = 0; i < 6; i++) {
    box(
      office,
      barBack.x - 0.03,
      0.62 + (i % 3) * 0.5,
      barBack.z - 1.85 + i * 0.62,
      0.22,
      0.3,
      0.24,
      [c.blue, c.green, c.orange, c.woodDark][i % 4]
    )
  }
  panel(office, barBack.x - barBack.w / 2 - 0.04, 1.62, barBack.z, 1.6, 0.8, menuMat).rotation.y =
    -Math.PI / 2
  for (const id of ['stool-a', 'stool-b', 'stool-c']) {
    const s = ZONE[id],
      g = group(office, s.x, 0, s.z)
    box(g, 0, 0.63, 0, s.w, 0.07, s.w, c.wood, 'wood')
    for (const [sx, sz] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1]
    ]) {
      box(g, sx * 0.13, 0.3, sz * 0.13, 0.06, 0.6, 0.06, c.ink)
    }
    box(g, 0, 0.2, 0, s.w - 0.12, 0.04, 0.04, c.ink)
  }
  plant(ZONE['plant-bar'].x, ZONE['plant-bar'].z, 0.85)

  // Back wall: a low cabinet run and a low shelf run under the windows.
  const lowLeft = ZONE['low-left'],
    lowRight = ZONE['low-right']
  box(office, lowLeft.x, 0.5, lowLeft.z, lowLeft.w, 0.98, lowLeft.d, c.cream)
  box(office, lowLeft.x, 1.02, lowLeft.z, lowLeft.w + 0.08, 0.08, lowLeft.d + 0.08, c.wood, 'wood')
  for (let i = 0; i < 3; i++) {
    box(
      office,
      lowLeft.x - 1.5 + i * 1.5,
      0.5,
      lowLeft.z + lowLeft.d / 2 + 0.01,
      1.38,
      0.8,
      0.03,
      '#dde0cb'
    )
    box(
      office,
      lowLeft.x - 1.5 + i * 1.5,
      0.62,
      lowLeft.z + lowLeft.d / 2 + 0.04,
      0.34,
      0.05,
      0.04,
      c.woodDark
    )
  }
  box(office, -11.5, 1.2, -7.3, 0.6, 0.3, 0.5, c.blue)
  box(office, -10.8, 1.14, -7.3, 0.4, 0.18, 0.4, c.orange)
  box(office, -8.5, 1.16, -7.3, 0.8, 0.22, 0.62, c.ink)
  box(office, -8.5, 1.3, -7.42, 0.7, 0.05, 0.5, c.white)
  box(office, lowRight.x, 0.5, lowRight.z, lowRight.w, 1, lowRight.d, c.wood)
  box(office, lowRight.x, 1.03, lowRight.z, lowRight.w + 0.06, 0.06, lowRight.d + 0.06, c.cream)
  for (let i = 0; i < 18; i++) {
    box(
      office,
      lowRight.x - lowRight.w / 2 + 0.5 + i * 0.52,
      1.21,
      lowRight.z + 0.08,
      0.34,
      0.24 + (i % 3) * 0.05,
      0.2,
      [c.blue, c.green, c.orange, '#a6b497', '#c27e83'][i % 5]
    )
  }
  box(office, 2.2, 1.24, -7.3, 0.5, 0.34, 0.44, '#8caa70')
  plant(ZONE['plant-bk1'].x, ZONE['plant-bk1'].z, 0.9)
  plant(ZONE['plant-bk2'].x, ZONE['plant-bk2'].z, 0.75)

  // Front edge: lounge nook, phone booth, lockers and a reading corner.
  function rug(x, z, columns, rows) {
    for (let a = 0; a < columns; a++) {
      for (let b = 0; b < rows; b++) {
        box(
          office,
          x + a * 0.55,
          0.049,
          z + b * 0.45,
          0.545,
          0.015,
          0.445,
          (a + b) % 2 ? '#d9c4a0' : '#dfcbaa'
        )
      }
    }
  }
  rug(-9.9, 5.1, 7, 6)
  rug(6.3, 5.4, 5, 5)
  const sofa = ZONE.sofa
  const sg = group(office, sofa.x, 0, sofa.z)
  box(sg, 0, 0.72, sofa.d / 2 - 0.12, sofa.w, 1.1, 0.25, c.green)
  box(sg, 0, 0.38, 0, sofa.w, 0.3, sofa.d - 0.35, c.green)
  for (const x of [-0.75, 0, 0.75]) {
    box(sg, x, 0.59, -0.05, 0.7, 0.2, sofa.d - 0.5, '#a6b497')
  }
  for (const x of [-1.3, 1.3]) {
    box(sg, x, 0.69, 0, 0.22, 0.65, sofa.d - 0.3, c.green)
  }
  for (const x of [-1, 1]) {
    box(sg, x, 0.12, 0, 0.16, 0.2, sofa.d - 0.5, c.woodDark)
  }
  box(sg, -0.35, 0.91, 0.2, 0.45, 0.45, 0.45, '#e2bd8b')
  box(sg, 0.45, 0.2, sofa.d / 2 + 0.05, 0.5, 0.4, 0.5, '#f0e6c8') // floor lamp base beside the sofa
  box(sg, 0.45, 1.4, sofa.d / 2 + 0.05, 0.07, 2.4, 0.07, c.ink)
  box(sg, 0.45, 2.7, sofa.d / 2 + 0.05, 0.5, 0.35, 0.5, '#f0e6c8')
  const coffee = ZONE.coffee
  box(office, coffee.x, 0.42, coffee.z, coffee.w, 0.1, coffee.d, c.wood, 'wood')
  for (const x of [coffee.x - 0.45, coffee.x + 0.45]) {
    for (const z of [coffee.z - 0.26, coffee.z + 0.26]) {
      box(office, x, 0.2, z, 0.09, 0.4, 0.09, c.ink)
    }
  }
  box(office, coffee.x - 0.2, 0.5, coffee.z, 0.4, 0.06, 0.3, c.white)
  mug(office, coffee.x + 0.35, 0.47, coffee.z - 0.1, c.orange)
  const armchair = ZONE.armchair
  const ag = group(office, armchair.x, 0, armchair.z)
  ag.rotation.y = -Math.PI / 2
  box(ag, 0, 0.68, armchair.d / 2 - 0.1, armchair.w, 1, 0.22, '#708fa5')
  box(ag, 0, 0.38, 0, armchair.w, 0.3, armchair.d - 0.3, '#708fa5')
  box(ag, 0, 0.57, -0.04, 0.6, 0.18, 0.6, '#abc2c9')
  for (const x of [-armchair.w / 2 + 0.1, armchair.w / 2 - 0.1]) {
    box(ag, x, 0.64, 0, 0.18, 0.6, armchair.d - 0.24, '#708fa5')
  }
  const reader = ZONE.reader
  const rg = group(office, reader.x, 0, reader.z)
  rg.rotation.y = Math.PI
  box(rg, 0, 0.68, reader.d / 2 - 0.1, reader.w, 1, 0.22, c.green)
  box(rg, 0, 0.38, 0, reader.w, 0.3, reader.d - 0.3, c.green)
  box(rg, 0, 0.57, -0.04, 0.6, 0.18, 0.6, '#a6b497')
  for (const x of [-reader.w / 2 + 0.1, reader.w / 2 - 0.1]) {
    box(rg, x, 0.64, 0, 0.18, 0.6, reader.d - 0.24, c.green)
  }
  const side = ZONE.side
  box(office, side.x, 0.46, side.z, side.w, 0.06, side.d, c.wood, 'wood')
  for (const x of [side.x - 0.18, side.x + 0.18]) {
    box(office, x, 0.23, side.z, 0.06, 0.46, side.d - 0.16, c.ink)
  }
  mug(office, side.x, 0.5, side.z - 0.1, c.blue)
  const lamp = ZONE.lamp
  box(office, lamp.x, 0.05, lamp.z, 0.44, 0.1, 0.44, c.ink)
  box(office, lamp.x, 1.4, lamp.z, 0.07, 2.7, 0.07, c.ink)
  box(office, lamp.x, 2.68, lamp.z, 0.5, 0.35, 0.5, '#f0e6c8')
  plant(ZONE['plant-front'].x, ZONE['plant-front'].z, 0.8)
  plant(ZONE['plant-sw'].x, ZONE['plant-sw'].z, 0.7)
  plant(ZONE['plant-nw'].x, ZONE['plant-nw'].z, 0.8)

  // Phone booth with glass on three sides and a small desk inside.
  const booth = ZONE.booth
  const bg = group(office, booth.x, 0, booth.z)
  box(bg, 0, -0.02, 0, booth.w + 0.1, 0.12, booth.d + 0.1, '#8f9c94')
  for (const [sx, sz] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1]
  ]) {
    box(bg, sx * (booth.w / 2 - 0.08), 1.2, sz * (booth.d / 2 - 0.08), 0.14, 2.4, 0.14, c.ink)
  }
  box(bg, 0, 2.44, 0, booth.w + 0.06, 0.12, booth.d + 0.06, c.ink)
  panel(bg, 0, 1.2, booth.d / 2 - 0.07, booth.w - 0.3, 2.24, glassMat)
  panel(bg, booth.w / 2 - 0.07, 1.2, 0, booth.d - 0.3, 2.24, glassMat).rotation.y = -Math.PI / 2
  panel(bg, -(booth.w / 2 - 0.07), 1.2, -0.35, booth.d - 1, 2.24, glassMat).rotation.y = Math.PI / 2
  box(bg, 0.48, 0.76, -0.1, 0.55, 0.06, 1, c.wood, 'wood')
  for (const z of [-0.5, 0.3]) {
    box(bg, 0.48, 0.38, z, 0.08, 0.76, 0.08, c.ink)
  }
  box(bg, 0.8, 0.9, -0.5, 0.3, 0.22, 0.3, c.cream)
  box(bg, -0.6, 0.3, 0.6, 0.34, 0.6, 0.34, '#79917a')

  // Woven runners down both long aisles.
  for (const centerZ of [-4.3, 4.3]) {
    for (let col = 0; col < 36; col++) {
      for (let row = 0; row < 2; row++) {
        box(
          office,
          -9.9 + col * 0.55 + 0.275,
          0.049,
          centerZ - 0.25 + row * 0.5,
          0.545,
          0.015,
          0.49,
          (col + row) % 2 ? '#d9c4a0' : '#dfcbaa'
        )
      }
    }
  }
  for (const id of ['lockers']) {
    const lk = ZONE[id]
    box(office, lk.x, 0.9, lk.z, lk.w, 1.8, lk.d, c.cream)
    box(office, lk.x, 1.83, lk.z, lk.w + 0.1, 0.07, lk.d + 0.1, c.wood, 'wood')
    for (let col = 0; col < 4; col++) {
      for (let row = 0; row < 2; row++) {
        const x = lk.x - lk.w / 2 + 0.45 + col * 0.84,
          y = 0.52 + row * 0.82
        box(office, x, y, lk.z - lk.d / 2 - 0.015, 0.76, 0.74, 0.03, '#dde0cb')
        box(office, x + 0.26, y, lk.z - lk.d / 2 - 0.04, 0.06, 0.14, 0.04, c.woodDark)
      }
    }
  }

  return { office, obstacles, seats: layout.seats, stations: layout.seats, screens, displays }
}
