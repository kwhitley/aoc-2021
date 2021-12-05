export const findIntersections = (input, size = 10) => {
  const lines = input
                  .split('\n')
                  .map(line => line.split(/[^\d]+/))
                  .map(coords => coords.map(Number))

  const map = Array(size).fill(0).map(() => Array(size).fill(0))

  // console.log('lines', lines)


  for (const [x1, y1, x2, y2] of lines) {
    if (x1 === x2 || y1 === y2) {
      // console.log('parsing line', [x1, y1, x2, y2])
      for (let y=Math.min(y1, y2); y<=Math.max(y1, y2); y++) {
        for (let x=Math.min(x1, x2); x<=Math.max(x1, x2); x++) {
          map[y][x]++
        }
      }
    }
  }



  // console.log(map.map(line => line.join('')).join('\n'))

  const intersections = map.flat().filter(v => v > 1).length
  // console.log('intersections', intersections)

  return intersections
}
