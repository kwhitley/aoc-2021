import { process } from '.'
import actual from './input'

// SAMPLE INPUT
const sample1 = `..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..###..######.###...####..#..#####..##..#.#####...##.#.#..#.##..#.#......#.###.######.###.####...#.##.##..#..#..#####.....#.#....###..#.##......#.....#..#..#..##..#...##.######.####.####.#.#...#.......#..#.#.#...####.##.#......#..#...##.#.##..#...##.#.##..###.#......#.#.......#.#.#.####.###.##...#.....####.#..#..#.##.#....##..#.####....##...##..#...#......#.#.......#.......##..####..#...#.#.#...##..#.#..###..#####........#..####......#..#

#..#.
#....
##..#
..#..
..###`

describe('DAY 20', () => {
  describe('part 1', () => {
    it('should do a thing', () => {
      expect(process(sample1)).toEqual(35)
    })

    it('FINAL', () => {
      expect(process(actual)).toEqual(5583) // 5898 is too high, 5565 is too low, 5687 not right either
    })
  })

  // describe('part 2', () => {
  //   it('should do a thing, but bigger', () => {
  //     expect(process(sample1, 50)).toEqual(3351)
  //   })

  //   it('FINAL', () => {
  //     expect(process(actual, 50)).toEqual(19592)
  //   })
  // })
})
