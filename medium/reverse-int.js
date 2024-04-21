// https://leetcode.com/problems/reverse-integer/

function reverse(x) {
  const xStr = x.toString()
  let signed = false

  if (xStr[0] === '-') signed = true

  const result = signed
    ? parseInt('-' + xStr.match(/[0-9]/g).reverse().join(''))
    : parseInt(xStr.split('').reverse().join(''))

  return result > 2 ** 31 - 1 || result < -(2 ** 31) ? 0 : result
}

console.log(reverse(1534236469))
