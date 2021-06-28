const isCryptSolution = (crypt, solution) => {
  let hasLeadingZeros = false;
  const decrypted = crypt.map(word => {
      const number = word.split('').map(letter => solution.find(key => key[0] === letter)[1]).join('');
      if (number.startsWith('0') && number.length > 1) hasLeadingZeros = true;
      return Number.parseInt(number);
  });

  return !hasLeadingZeros && decrypted[0] + decrypted[1] === decrypted[2];
}

module.exports = isCryptSolution
