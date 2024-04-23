// https://leetcode.com/problems/string-to-integer-atoi/

function myAtoi(s) {
  s = s.trim()

  const signed = s[0] === '-' || s[0] === '+'
  const numbers = []

  for (let i = signed ? 1 : 0; i < s.length; i++) {
    if (/[0-9.]/g.test(s[i])) numbers.push(s[i])
    else break
  }

  let n = parseInt(numbers.join('')) || 0
  n = s[0] === '-' ? -n : n

  if (n > 2 ** 31 - 1) return 2 ** 31 - 1
  else if (n < -(2 ** 31)) return -(2 ** 31)

  return n
}

console.log(myAtoi('   -42'))
