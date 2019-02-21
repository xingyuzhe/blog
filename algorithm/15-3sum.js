var threeSum = function(nums) {
  if (!nums || nums.length < 3) return []
  const newNums = nums.slice(0).sort((a, b) => a - b)
  const matched = []

  for (let i = 0; i < newNums.length - 2; i++) {
    const num = newNums[i]
    if (i === 0 || (i > 0 && num !== newNums[i - 1])) {
      let m = i + 1
      let n = newNums.length - 1
      while (m < n) {
        let complement = -num
        let combined = newNums[m] + newNums[n]
        if (combined === complement) {
          matched.push([num, newNums[m], newNums[n]])
          while(m < n && newNums[m] === newNums[m + 1]) m++
          while(m < n && newNums[n] === newNums[n - 1]) n--
          m++
          n--
        } else if (combined > complement) {
          n--
        } else {
          m++
        }
      }
    }
  }

  return matched
};