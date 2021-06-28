const isCryptSolution = require('./isCryptSolution')

test('test 1: should return false', () => {
  expect(isCryptSolution(["SEND",
  "MORE",
  "MONEY"],[["O","0"],
  ["M","1"],
  ["Y","2"],
  ["E","5"],
  ["N","6"],
  ["D","7"],
  ["R","8"],
  ["S","9"]] )).toBeTruthy();
});

test('test 2: should return false', () => {
  expect(isCryptSolution(["TEN", "TWO", "ONE"],[["O","1"],
  ["T","0"],
  ["W","9"],
  ["E","5"],
  ["N","4"]])).toBeFalsy();
});

test('test 3: should return false', () => {
  expect(isCryptSolution(["ONE", "ONE", "TWO"],[["O","2"],
  ["T","4"],
  ["W","6"],
  ["E","1"],
  ["N","3"]])).toBeTruthy();
});

