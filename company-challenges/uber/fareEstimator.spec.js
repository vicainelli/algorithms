const { expect, test } = require('@jest/globals')
const fareEstimator = require('./fareEstimator')

test('should return correct test case 1', () => {
  const result = fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5])
  expect(result).toEqual([13.7, 23.1, 28.1, 38])
})

test('should return correct test case 2', () => {
  const result = fareEstimator(15, 9, [0.2, 0.34, 0.35, 0.45, 1], [1.1, 1.8, 1.9, 1.7, 5])
  expect(result).toEqual([12.9, 21.3, 22.35, 22.05, 60])
})

test('should return correct test case 3', () => {
  const result = fareEstimator(50, 17, [0.123, 0.35, 0.78, 1.6, 1.6, 3, 2], [1.1, 1.8, 2.4, 1.8, 2.6, 1.5, 2.45])
  expect(result).toEqual([24.85, 48.1, 79.8, 110.6, 124.2, 175.5, 141.65])
})