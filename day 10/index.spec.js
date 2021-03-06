import * as day10 from '.'
import actual from './input'

// SAMPLE INPUT
const sample = `[({(<(())[]>[[{[]{<()<>>
  [(()[<>])]({[<{<<[]>>(
  {([(<{}[<>[]}>{[]{[(<()>
  (((({<>}<{<{<>}{[]{[]{}
  [[<[([]))<([[{}[[()]]]
  [{[{({}]{}}([{[{{{}}([]
  {<[[]]>}<{[{[{[]{()[[[]
  [<(<(<(<{}))><([]([]()
  <{([([[(<>()){}]>(<<{{
  <{([{{}}[<[[[<>{}]]]>[]]`

describe('DAY 10', () => {
  describe('part 1', () => {
    it('should get score of corrupted lines', () => {
      const answer = day10.scan(sample)

      expect(answer).toEqual(26397)
    })

    it('FINAL', () => {
      const answer = day10.scan(actual)

      expect(answer).toEqual(265527)
    })
  })

  describe('part 2', () => {
    it('should get median autocomplete score', () => {
      const answer = day10.scan(sample, true)

      expect(answer).toEqual(288957)
    })

    it('FINAL', () => {
      const answer = day10.scan(actual, true)

      expect(answer).toEqual(3969823589)
    })
  })
})
