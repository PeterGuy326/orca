import { box, palette as c } from '../materials/art.js'

export function createWallRun(
  office,
  { at, from, to, axis = 'x', doors = [] },
  wallSpec,
  glassMat,
  { jambKind = 'noise' } = {}
) {
  const { thickness, solid: base, height: top } = wallSpec,
    glass = top - base
  const place = (mid, length, y, height, depth, color, kind = 'noise') =>
    axis === 'x'
      ? box(office, mid, y, at, length, height, depth, color, kind)
      : box(office, at, y, mid, depth, height, length, color, kind)
  const segment = (a, b) => {
    const mid = (a + b) / 2,
      length = b - a
    if (length <= 0.02) {
      return
    }
    place(mid, length, base / 2, base, thickness, c.cream)
    place(mid, length, base + glass / 2, glass, thickness * 0.35, glassMat)
    place(mid, length, base + 0.04, 0.07, thickness + 0.06, c.wood, 'wood')
    place(mid, length, top - 0.06, 0.12, thickness + 0.06, c.cream)
    for (const edge of [a + 0.05, b - 0.05]) {
      place(edge, 0.1, top / 2, top, thickness + 0.07, c.wood, 'wood')
    }
  }
  const coord = (door) => (axis === 'x' ? door.x : door.z)
  let cursor = from
  for (const door of [...doors].sort((a, b) => coord(a) - coord(b))) {
    const center = coord(door),
      start = center - door.width / 2,
      end = center + door.width / 2
    segment(cursor, start)
    for (const edge of [start + 0.05, end - 0.05]) {
      place(edge, 0.12, top / 2, top, thickness + 0.09, c.wood, jambKind)
    }
    place(center, door.width, top - 0.1, 0.2, thickness + 0.09, c.cream)
    place(center, door.width - 0.12, top - 0.32, 0.24, thickness * 0.3, glassMat)
    const length = door.width - 0.14,
      into = door.into,
      hinge = end - 0.06
    const leaf = (y, height, depth, material) =>
      axis === 'x'
        ? box(office, hinge, y, at + into * (length / 2 + 0.06), depth, height, length, material)
        : box(office, at + into * (length / 2 + 0.06), y, hinge, length, height, depth, material)
    leaf(0.98, 1.96, 0.06, glassMat)
    leaf(2.02, 0.12, 0.1, c.wood)
    leaf(0.1, 0.16, 0.12, c.wood)
    if (axis === 'x') {
      box(office, hinge, 1, at + into * (length - 0.04), 0.07, 0.5, 0.07, c.ink)
    } else {
      box(office, at + into * (length - 0.04), 1, hinge, 0.07, 0.5, 0.07, c.ink)
    }
    if (axis === 'x') {
      box(office, center, 0.02, at, door.width, 0.04, thickness + 0.04, c.woodDark, 'wood')
    } else {
      box(office, at, 0.02, center, thickness + 0.04, 0.04, door.width, c.woodDark, 'wood')
    }
    cursor = end
  }
  segment(cursor, to)
}
