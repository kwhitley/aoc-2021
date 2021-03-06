import { sum } from 'supergeneric'

const between = (a, b) => c => c >= Math.min(a, b) && c <= Math.max(a, b)

export const run = (input, part2) => {
  const target = input.split('=').slice(1).map(pair => pair.split('..').map(c => Number(c.replace(/[^\d-]/g, ''))))
  const inBoundsX = between(...target[0])
  const inBoundsY = between(...target[1])
  const inBounds = (x, y) => inBoundsX(x) && inBoundsY(y)
  let hits = [], hit

  const play = (v, target) => {
    const pos = [0, 0] // start at 0,0
    const inPlay = ([x, y]) => x < target[0][1] && y > target[1][0]
    let maxY = -Infinity
    const advance = (p, v) => {
      p[0] += v[0]
      p[1] += v[1]
      v[1] -= 1
      v[0] = Math.max(0, v[0]-1)
      maxY = Math.max(maxY, p[1])
    }

    while (inPlay(pos)) {
      advance(pos, v)
      if (inBounds(...pos)) return maxY
    }

    return false
  }

  forX: for (let xv=0; xv<target[0][1]*1.01; xv++) {
    forY: for (let yv=target[1][0]; yv<Math.abs(target[1][0]); yv++) {
      if ((hit = play([xv, yv], target)) !== false) {
        hits.push(hit)
      }
    }
  }

  return part2 ? hits.length : Math.max(...hits)
}
