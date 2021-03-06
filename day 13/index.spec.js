import * as day13 from '.'
import actual from './input'

// SAMPLE INPUT
const sample1 = `6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5`

describe('DAY 13', () => {
  describe('part 1', () => {
    it('should find how many dots after 1 pass', () => {
      const answer = day13.run(sample1, 1)

      expect(answer).toEqual(17)
    })

    it('should find how many dots after 2 passes', () => {
      const answer = day13.run(sample1, 2)

      expect(answer).toEqual(16)
    })

    it('FINAL', () => {
      const answer = day13.run(actual, 1)

      expect(answer).toEqual(785)
    })
  })

  // describe('part 2', () => {
  //   it('FINAL', () => {
  //     console.log(day13.run(actual, 99, true))

  //     expect(true).toEqual(true) // not real answer - look at console log output
  //   })
  // })
})
