const add = require('./add')

test('should return 3 when give 1, and 2 as parameters', () => {
  expect(add(2,1)).toEqual(3)
})
test('should return 100 when give 0 and, 1000 as parameters', () => {
  expect(add(0,1000)).toEqual(1000)
})

test('should return -37 when give 2 and, -39 as parameters', () => {
  expect(add(2,-39)).toEqual(-37)
})

test('should return 0 when give 100 and, -100 as parameters', () => {
  expect(add(100,-100)).toEqual(0)
})
test('should return -2000 when give -1000 and, -1000 as parameters', () => {
  expect(add(-1000,-1000)).toEqual(-2000)
})