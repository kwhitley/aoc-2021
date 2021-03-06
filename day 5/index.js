export const findIntersections = (input, part2, points = {}) => {
  const intersections = new Set()
  const lines = input
                  .split('\n')
                  .map(line => line.split(/[^\d]+/).map(Number))

  for (const [x1, y1, x2, y2] of lines) {
    const ticks = Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2))
    const [dx, dy] = [(x2 - x1)/ticks, (y2 - y1)/ticks]

    if (!dx || !dy || part2) {
      for (let t=0; t<=ticks; t++) {
        const coordinates = `${x1 + t * dx},${y1 + t * dy}`

        points[coordinates] && intersections.add(coordinates)
        points[coordinates] = true
      }
    }
  }

  return intersections.size
}
