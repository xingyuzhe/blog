var getPermutation = function (n, k) {
  let nums = Array(9).fill(0).map((num, i) => i + 1)
  const sums = getFactorialNums(n)

  let ans = ''
  let pos = 0
  
  k--

  while (n--) {
    let sum = sums[n]
    pos = 0 | (k / sum)
    ans += nums[pos]
    k = k % sum
    nums.splice(pos, 1)
  }

  return ans
}

function getFactorialNums(n) {
  let sum = 1
  return Array(n + 1).fill(1).map((num, i) => {
    return i > 0 ? (sum = sum * i) : num
  })
}
