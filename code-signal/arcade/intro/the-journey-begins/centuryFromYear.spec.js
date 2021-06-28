const centuryFromYear = require('./centuryFromYear')

test('should return 20 when give 1905', () => {
  expect(centuryFromYear(1905)).toEqual(20)
})

test('should return 17 when give 1700', () => {
  expect(centuryFromYear(1700)).toEqual(17)
})

test('should return 20 when give 1988', () => {
  expect(centuryFromYear(1988)).toEqual(20)
})

test('should return 20 when give 2000', () => {
  expect(centuryFromYear(2000)).toEqual(20)
})

test('should return 21 when give 2001', () => {
  expect(centuryFromYear(2000)).toEqual(20)
})