const checkPalindrome = require('./checkPalindrome')

test('should return true when give "aabaa"', () => {
  expect(checkPalindrome('aabaa')).toBeTruthy()
})

test('should return true when give "abac"', () => {
  expect(checkPalindrome('abac')).toBeFalsy()
})

test('should return true when give "a"', () => {
  expect(checkPalindrome('a')).toBeTruthy()
})

test('should return true when give "az"', () => {
  expect(checkPalindrome('az')).toBeFalsy()
})