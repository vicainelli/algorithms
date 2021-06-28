const incorrectPasscodeAttempts = (passcode, attempts) => {
  let tries = 0

  attempts.map(atm => {
      if(tries >= 10) return
      if(atm === passcode) tries = 0
      else tries += 1
  })

  return tries >= 10 ? true : false
}

module.exports = incorrectPasscodeAttempts