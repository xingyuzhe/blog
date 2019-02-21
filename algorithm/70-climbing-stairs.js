/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 0) {
    return 0
  }

  if (n <= 2) {
    return n
  }

  let first = 1
  let second = 2

  let third = 0

  for (let i = 3; i <= n; i++) {
    third = first + second
    first = second
    second = third
  }

  return third
};