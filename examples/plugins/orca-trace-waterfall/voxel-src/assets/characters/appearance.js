import { box, group, panel, canvasMaterial, palette as c } from '../materials/art.js'

// All additions attach to an existing joint, so hair, hats and clothing follow
// the same character animations without another skeleton or external assets.
export function addHair(head, config) {
  const h = group(head)
  h.name = `hair:${config.hairStyle}`
  const hair = (x, y, z, w, height, d) => box(h, x, y, z, w, height, d, config.hair)
  hair(0, 0.49, 0, 0.57, 0.13, 0.53)
  const standardFringe = () => {
    hair(-0.19, 0.38, 0.264, 0.18, 0.18, 0.04)
    hair(0.04, 0.42, 0.264, 0.29, 0.1, 0.04)
  }
  switch (config.hairStyle) {
    case 'shoulder-bob':
      // Centre part, a closed back and inward-stepped ends at the shoulders.
      hair(-0.15, 0.41, 0.268, 0.24, 0.15, 0.045)
      hair(0.16, 0.44, 0.268, 0.22, 0.09, 0.045)
      hair(0, 0.15, -0.25, 0.56, 0.54, 0.12)
      for (const side of [-1, 1]) {
        hair(side * 0.285, 0.17, -0.045, 0.1, 0.54, 0.44)
        hair(side * 0.26, -0.08, -0.045, 0.13, 0.12, 0.43)
      }
      break
    case 'bob':
      standardFringe()
      hair(-0.27, 0.22, -0.07, 0.09, 0.47, 0.43)
      hair(0.27, 0.22, -0.07, 0.09, 0.47, 0.43)
      hair(0.32, 0.3, -0.17, 0.17, 0.18, 0.2)
      break
    case 'spiky':
      standardFringe()
      hair(-0.15, 0.59, -0.08, 0.21, 0.14, 0.3)
      hair(0.1, 0.56, -0.04, 0.19, 0.1, 0.36)
      break
    case 'bun':
      standardFringe()
      hair(0, 0.52, -0.3, 0.3, 0.27, 0.24)
      box(h, 0, 0.45, -0.43, 0.2, 0.08, 0.025, config.trim)
      break
    case 'asymmetric':
      hair(-0.22, 0.2, -0.05, 0.16, 0.48, 0.46)
      hair(0.26, 0.29, -0.09, 0.11, 0.3, 0.43)
      hair(-0.13, 0.39, 0.27, 0.32, 0.2, 0.055)
      hair(0.1, 0.45, 0.27, 0.18, 0.08, 0.055)
      hair(-0.05, 0.19, -0.27, 0.48, 0.45, 0.1)
      break
    case 'curly':
      for (const [x, y, z, s] of [
        [-0.22, 0.53, 0.04, 0.28],
        [0.07, 0.6, 0.08, 0.31],
        [0.27, 0.5, -0.04, 0.26],
        [-0.13, 0.57, -0.25, 0.3],
        [0.16, 0.56, -0.23, 0.28],
        [-0.27, 0.27, -0.13, 0.19]
      ]) {
        hair(x, y, z, s, s * 0.8, s)
      }
      hair(-0.16, 0.39, 0.27, 0.24, 0.16, 0.08)
      break
    case 'ponytail': {
      hair(0, 0.43, 0.26, 0.55, 0.09, 0.04)
      const tail = group(h, 0, 0.4, -0.31)
      tail.rotation.x = -0.2
      box(tail, 0, -0.19, -0.08, 0.23, 0.55, 0.24, config.hair)
      box(tail, 0, -0.5, -0.09, 0.17, 0.18, 0.2, config.hair)
      box(h, 0, 0.39, -0.34, 0.27, 0.09, 0.1, config.shirt)
      break
    }
    case 'undercut':
      hair(0.05, 0.54, -0.02, 0.46, 0.16, 0.45)
      hair(0.17, 0.42, 0.27, 0.23, 0.1, 0.05)
      box(h, -0.279, 0.31, -0.05, 0.018, 0.15, 0.35, '#697079')
      break
    case 'braid':
      hair(-0.22, 0.39, 0.26, 0.18, 0.19, 0.05)
      hair(0.1, 0.44, 0.26, 0.33, 0.08, 0.05)
      hair(0.27, 0.19, -0.01, 0.13, 0.41, 0.39)
      for (let i = 0; i < 4; i++) {
        hair(-0.32 + (i % 2) * 0.035, 0.17 - i * 0.13, 0.01, 0.16, 0.16, 0.18)
      }
      box(h, -0.285, -0.27, 0.01, 0.16, 0.06, 0.19, config.trim)
      break
    case 'locs':
      for (let i = 0; i < 4; i++) {
        hair(-0.21 + i * 0.14, 0.55 + (i % 2) * 0.04, -0.04, 0.12, 0.16, 0.48)
      }
      hair(0, 0.31, -0.32, 0.26, 0.54, 0.23)
      hair(0.07, -0.02, -0.36, 0.18, 0.18, 0.19)
      box(h, 0, 0.36, -0.45, 0.28, 0.08, 0.04, config.trim)
      break
    case 'pixie':
      hair(-0.1, 0.56, 0.03, 0.41, 0.19, 0.46)
      hair(-0.2, 0.37, 0.27, 0.18, 0.2, 0.05)
      hair(0.02, 0.43, 0.27, 0.3, 0.09, 0.05)
      hair(0.27, 0.34, -0.02, 0.08, 0.17, 0.42)
      break
    case 'sidepart':
      hair(-0.13, 0.57, -0.01, 0.34, 0.14, 0.5)
      hair(0.19, 0.51, 0, 0.15, 0.08, 0.5)
      hair(-0.12, 0.4, 0.27, 0.33, 0.16, 0.05)
      hair(-0.26, 0.29, -0.05, 0.08, 0.32, 0.42)
      box(h, 0.08, 0.55, 0, 0.025, 0.06, 0.49, '#7b8587')
      break
    case 'shaggy':
      hair(-0.22, 0.21, -0.05, 0.13, 0.41, 0.44)
      hair(0.24, 0.23, -0.05, 0.11, 0.35, 0.44)
      hair(-0.17, 0.35, 0.27, 0.15, 0.16, 0.06)
      hair(0.04, 0.39, 0.27, 0.21, 0.12, 0.06)
      hair(0, 0.12, -0.27, 0.51, 0.25, 0.11)
      break
    default:
      standardFringe()
  }
}

export function addHeadAccessory(head, config) {
  const g = group(head)
  g.name = `accessory:${config.accessory || 'none'}`
  switch (config.accessory) {
    case 'hairclip':
      box(g, 0.275, 0.34, 0.2, 0.035, 0.07, 0.2, '#f4dca2')
      box(g, 0.292, 0.34, 0.21, 0.015, 0.025, 0.12, '#eaad66')
      break
    case 'headphones':
      box(g, 0, 0.7, -0.02, 0.65, 0.08, 0.11, '#314655')
      for (const side of [-1, 1]) {
        box(g, side * 0.33, 0.51, -0.02, 0.06, 0.37, 0.1, '#314655')
        box(g, side * 0.35, 0.27, -0.02, 0.14, 0.25, 0.26, '#314655')
        box(g, side * 0.425, 0.27, -0.02, 0.018, 0.14, 0.15, '#b8c8aa')
      }
      break
    case 'cap': {
      const cap = group(g, 0, 0.51, 0)
      cap.rotation.z = -0.06
      box(cap, 0, 0.1, 0, 0.63, 0.25, 0.56, '#344f65')
      box(cap, 0, -0.005, 0.32, 0.65, 0.06, 0.28, '#344f65')
      box(cap, 0, 0.11, 0.287, 0.14, 0.13, 0.025, config.trim)
      box(cap, 0, 0.245, 0, 0.08, 0.05, 0.08, config.trim)
      break
    }
    case 'beret': {
      const hat = group(g, -0.025, 0.53, -0.015)
      hat.rotation.z = 0.13
      box(hat, 0, 0.02, 0, 0.58, 0.09, 0.54, '#85677d')
      box(hat, -0.055, 0.1, -0.01, 0.72, 0.15, 0.61, '#85677d')
      box(hat, -0.03, 0.21, -0.02, 0.08, 0.09, 0.08, '#85677d')
      break
    }
    case 'bow':
      box(g, 0.31, 0.43, 0.03, 0.06, 0.09, 0.12, '#efdca5')
      box(g, 0.33, 0.48, -0.06, 0.1, 0.16, 0.15, '#f4e7c5')
      box(g, 0.33, 0.38, 0.12, 0.1, 0.16, 0.15, '#f4e7c5')
      break
    case 'beanie':
      box(g, 0, 0.57, -0.015, 0.64, 0.24, 0.59, '#d28b4e')
      box(g, 0, 0.45, 0, 0.67, 0.1, 0.62, '#e2aa69')
      box(g, 0, 0.72, -0.02, 0.5, 0.1, 0.48, '#d28b4e')
      box(g, 0.19, 0.45, 0.32, 0.1, 0.09, 0.02, '#f2dfb0')
      break
  }
}

export function addOutfit(torso, config) {
  const g = group(torso)
  g.name = `outfit:${config.outfit}`
  const add = (x, y, z, w, h, d, color = config.trim) => box(g, x, y, z, w, h, d, color)
  switch (config.outfit) {
    case 'dress':
      add(0, 0.055, 0, 0.55, 0.13, 0.34, config.shirt)
      add(0, 0.11, 0.177, 0.53, 0.035, 0.025, '#34333b')
      break
    case 'utility':
      for (const side of [-1, 1]) {
        add(side * 0.18, 0.2, 0.18, 0.13, 0.17, 0.04, '#b66137')
        add(side * 0.1, 0.51, 0.18, 0.12, 0.13, 0.04)
      }
      add(0, 0.31, 0.18, 0.035, 0.42, 0.03)
      add(0, 0.36, -0.17, 0.4, 0.07, 0.025)
      break
    case 'hoodie':
      add(0, 0.45, -0.2, 0.45, 0.32, 0.18, '#4a725f')
      add(0, 0.18, 0.18, 0.35, 0.16, 0.05, '#507961')
      for (const side of [-1, 1]) {
        add(side * 0.1, 0.43, 0.19, 0.025, 0.17, 0.025)
      }
      add(0, 0.08, -0.17, 0.5, 0.07, 0.025)
      break
    case 'blazer':
      add(0, 0.34, 0.17, 0.2, 0.41, 0.025)
      for (const side of [-1, 1]) {
        const lapel = add(side * 0.12, 0.43, 0.19, 0.09, 0.25, 0.04, '#8ea6bc')
        lapel.rotation.z = side * 0.24
      }
      add(0.16, 0.31, 0.2, 0.14, 0.15, 0.035, '#f3edda')
      add(0.16, 0.37, 0.225, 0.11, 0.025, 0.015, '#cf9a55')
      add(0.16, 0.28, 0.225, 0.08, 0.025, 0.015, '#718a93')
      add(0, 0.5, -0.17, 0.25, 0.05, 0.03, '#8ea6bc')
      break
    case 'varsity':
      add(0, 0.28, 0.18, 0.055, 0.42, 0.03)
      add(0, 0.07, 0.18, 0.52, 0.09, 0.03)
      add(-0.15, 0.36, 0.19, 0.13, 0.15, 0.03)
      add(-0.15, 0.36, 0.21, 0.05, 0.08, 0.015, config.shirt)
      add(0, 0.35, -0.17, 0.3, 0.26, 0.025, '#f0e5c9')
      add(0, 0.35, -0.19, 0.13, 0.13, 0.02, config.shirt)
      break
    case 'apron':
      add(0, 0.25, 0.19, 0.41, 0.48, 0.05, '#839664')
      for (const side of [-1, 1]) {
        add(side * 0.15, 0.47, 0.19, 0.055, 0.18, 0.035, '#839664')
        const strap = add(side * 0.08, 0.35, -0.18, 0.055, 0.42, 0.035, '#839664')
        strap.rotation.z = side * -0.35
      }
      add(0, 0.15, 0.225, 0.26, 0.12, 0.03, '#a5b584')
      add(-0.08, 0.2, 0.25, 0.035, 0.06, 0.015, '#dba575')
      add(0.055, 0.13, 0.25, 0.07, 0.03, 0.015, '#a5c1c9')
      break
    case 'plaid': {
      const plaid = canvasMaterial(32, 32, (ctx) => {
        ctx.fillStyle = config.shirt
        ctx.fillRect(0, 0, 32, 32)
        ctx.fillStyle = '#bdd0b3'
        for (let i = 4; i < 32; i += 12) {
          ctx.fillRect(i, 0, 3, 32)
          ctx.fillRect(0, i, 32, 3)
        }
        ctx.fillStyle = '#35585e'
        for (let i = 2; i < 32; i += 12) {
          ctx.fillRect(i, 0, 1, 32)
          ctx.fillRect(0, i, 32, 1)
        }
      })
      panel(g, 0, 0.3, 0.177, 0.52, 0.49, plaid)
      const back = panel(g, 0, 0.3, -0.177, 0.52, 0.49, plaid)
      back.rotation.y = Math.PI
      add(0, 0.3, 0.19, 0.045, 0.48, 0.03, '#d0c8a3')
      break
    }
    case 'overalls':
      add(0, 0.21, 0.185, 0.4, 0.35, 0.04, config.pants)
      add(0, 0.19, -0.18, 0.42, 0.3, 0.04, config.pants)
      for (const side of [-1, 1]) {
        add(side * 0.16, 0.42, 0.19, 0.065, 0.29, 0.04, config.pants)
        add(side * 0.16, 0.42, -0.18, 0.065, 0.29, 0.04, config.pants)
        add(side * 0.16, 0.39, 0.218, 0.04, 0.04, 0.02, '#c7984b')
      }
      add(0, 0.25, 0.22, 0.2, 0.13, 0.03, '#f4e8d1')
      break
    case 'vest':
      for (const side of [-1, 1]) {
        add(side * 0.16, 0.28, 0.19, 0.2, 0.44, 0.05, '#78758f')
      }
      add(0, 0.29, -0.18, 0.53, 0.48, 0.04, '#78758f')
      add(0, 0.32, 0.19, 0.045, 0.36, 0.03, '#474e62')
      add(-0.16, 0.35, 0.225, 0.12, 0.1, 0.025, '#5d6079')
      add(-0.17, 0.42, 0.25, 0.025, 0.13, 0.02, '#e7b56d')
      break
    case 'cardigan':
      add(0, 0.29, 0.18, 0.17, 0.45, 0.025, '#f2e6c9')
      for (const side of [-1, 1]) {
        add(side * 0.18, 0.15, 0.19, 0.12, 0.12, 0.035, '#a98543')
      }
      add(0, 0.52, 0.02, 0.42, 0.12, 0.45, '#577c73')
      add(-0.13, 0.32, 0.23, 0.13, 0.38, 0.065, '#577c73')
      add(-0.13, 0.16, 0.267, 0.13, 0.045, 0.018, '#c8cfad')
      add(0.12, 0.39, -0.23, 0.12, 0.24, 0.06, '#577c73')
      break
  }
  if (config.accessory === 'scarf') {
    const scarf = group(g)
    scarf.name = 'accessory:scarf'
    box(scarf, 0, 0.54, 0.015, 0.48, 0.16, 0.42, config.trim)
    box(scarf, -0.115, 0.435, 0.235, 0.17, 0.16, 0.09, config.trim)
    const tail = box(scarf, -0.12, 0.27, 0.225, 0.14, 0.34, 0.07, config.trim)
    tail.rotation.z = -0.08
    box(scarf, -0.132, 0.105, 0.267, 0.14, 0.045, 0.02, '#eb5654')
    box(scarf, 0.12, 0.39, -0.22, 0.12, 0.22, 0.06, config.trim)
  }
}

export function decorateLeg(thigh, config) {
  if (config.outfit !== 'dress') {
    return
  }
  // Two overlapping panels share the leg joints: the hem follows walking and
  // folds onto the lap while seated instead of hanging through the chair.
  const skirt = group(thigh)
  skirt.name = 'outfit:dress-skirt'
  box(skirt, 0, -0.115, 0, 0.3, 0.34, 0.36, config.shirt)
  box(skirt, 0, -0.265, 0.005, 0.32, 0.07, 0.39, config.shirt)
}

export function decorateArm(elbow, config, side) {
  if (
    config.outfit === 'hoodie' ||
    config.outfit === 'cardigan' ||
    config.outfit === 'blazer' ||
    config.outfit === 'varsity' ||
    config.outfit === 'vest'
  ) {
    box(
      elbow,
      0,
      -0.075,
      0,
      0.18,
      0.18,
      0.215,
      config.outfit === 'varsity' ? config.trim : config.shirt
    )
    if (config.outfit === 'hoodie' || config.outfit === 'varsity') {
      box(elbow, 0, -0.16, 0, 0.19, 0.05, 0.22, config.trim)
    }
  }
  if (config.accessory === 'watch' && side === -1) {
    box(elbow, 0, -0.17, 0, 0.19, 0.065, 0.22, '#3c4a45')
    box(elbow, -0.107, -0.17, 0.01, 0.04, 0.09, 0.13, '#cdbb85')
  }
}

// A matching pixel portrait helps identify the same character in the selector.
export function drawPortrait(canvas, config) {
  canvas.width = 36
  canvas.height = 40
  const ctx = canvas.getContext('2d')
  const fill = (color, x, y, w, h) => {
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
  }
  fill(config.shirt, 4, 29, 28, 11)
  if (config.outfit === 'vest' || config.outfit === 'apron' || config.outfit === 'overalls') {
    fill(
      config.outfit === 'vest' ? '#78758f' : config.outfit === 'apron' ? '#839664' : config.pants,
      9,
      28,
      18,
      12
    )
  }
  if (config.outfit === 'blazer' || config.outfit === 'cardigan') {
    fill(config.trim, 15, 29, 6, 11)
  }
  if (config.outfit === 'varsity') {
    fill(config.trim, 4, 29, 5, 11)
    fill(config.trim, 27, 29, 5, 11)
  }
  if (config.outfit === 'plaid') {
    for (const x of [8, 16, 24]) {
      fill(config.trim, x, 29, 2, 11)
    }
  }
  if (config.outfit === 'cardigan') {
    fill('#577c73', 10, 28, 16, 4)
    fill('#577c73', 11, 30, 4, 10)
  }
  fill(config.hair, 6, 5, 25, 24)
  fill(config.skin || c.skin, 9, 10, 19, 18)
  fill(config.hair, 7, 5, 23, 7)
  if (['asymmetric', 'sidepart', 'pixie', 'braid'].includes(config.hairStyle)) {
    fill(config.hair, 7, 10, 8, 9)
  }
  if (config.hairStyle === 'asymmetric') {
    fill(config.hair, 6, 15, 4, 14)
  }
  if (config.hairStyle === 'curly') {
    fill(config.hair, 3, 5, 9, 9)
    fill(config.hair, 10, 1, 11, 10)
    fill(config.hair, 23, 3, 10, 11)
  }
  if (config.hairStyle === 'ponytail') {
    fill(config.hair, 27, 13, 6, 20)
  }
  if (config.hairStyle === 'braid') {
    for (let i = 0; i < 4; i++) {
      fill(config.hair, 4 + (i % 2), 20 + i * 4, 5, 5)
    }
  }
  if (config.hairStyle === 'locs') {
    for (const x of [7, 13, 19, 25]) {
      fill(config.hair, x, 2, 4, 8)
    }
    fill(config.hair, 28, 17, 5, 15)
  }
  if (config.hairStyle === 'shoulder-bob') {
    fill(config.hair, 5, 12, 5, 19)
    fill(config.hair, 27, 12, 5, 19)
    fill(config.hair, 7, 10, 9, 4)
    fill(config.hair, 22, 10, 7, 2)
    fill(config.hair, 7, 29, 4, 3)
    fill(config.hair, 26, 29, 4, 3)
  }
  if (config.accessory === 'scarf') {
    fill(config.trim, 10, 28, 17, 4)
    fill(config.trim, 11, 31, 6, 9)
    fill('#eb5654', 11, 38, 6, 2)
  }
  const eyeH = ['narrow', 'relaxed'].includes(config.eyes) ? 2 : 4
  fill(c.ink, 13, 17, 3, eyeH)
  fill(c.ink, 23, 17, 3, eyeH)
  fill('#995940', 18, 25, 4, 1)
  if (config.freckles) {
    fill('#b87f59', 11, 23, 1, 1)
    fill('#b87f59', 26, 23, 1, 1)
  }
  if (config.beard) {
    fill(config.hair, 12, 25, 14, 3)
    fill('#b77f58', 17, 25, 5, 1)
  }
  if (config.glasses) {
    ctx.strokeStyle = c.ink
    ctx.lineWidth = config.glasses === 'heavy' ? 2 : 1
    ctx.strokeRect(10.5, 15.5, 7, 7)
    ctx.strokeRect(20.5, 15.5, 7, 7)
    fill(c.ink, 18, 18, 3, 1)
  }
  switch (config.accessory) {
    case 'hairclip':
      fill('#f4dca2', 28, 13, 3, 2)
      break
    case 'headphones':
      fill('#314655', 3, 5, 30, 3)
      fill('#314655', 2, 13, 5, 11)
      fill('#314655', 29, 13, 5, 11)
      break
    case 'cap':
      fill('#344f65', 5, 3, 26, 10)
      fill('#344f65', 6, 11, 28, 3)
      fill(config.trim, 17, 6, 4, 4)
      break
    case 'beret':
      fill('#85677d', 3, 3, 30, 7)
      fill('#85677d', 7, 1, 23, 6)
      fill('#85677d', 16, 0, 2, 3)
      break
    case 'bow':
      fill('#f4e7c5', 29, 9, 5, 4)
      fill('#f4e7c5', 29, 15, 5, 4)
      fill('#efdca5', 30, 13, 3, 2)
      break
    case 'beanie':
      fill('#d28b4e', 5, 2, 26, 10)
      fill('#e2aa69', 4, 10, 28, 4)
      fill('#f2dfb0', 25, 10, 3, 4)
      break
  }
}
