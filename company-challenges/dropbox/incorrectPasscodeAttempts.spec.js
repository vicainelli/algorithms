const incorrectPasscodeAttempts = require('./incorrectPasscodeAttempts')

test('test 1', () => {
  expect(incorrectPasscodeAttempts("1111", ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"])).toBe(true)
})

test('test 2', () => {
  expect(incorrectPasscodeAttempts("1234", ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "1234", "9999", "9999", "9999", "9999"])).toBe(false)
})

test('test 3', () => {
  expect(incorrectPasscodeAttempts("1111", ["1111", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "9999", "1111"])).toBe(true)
})