var productExceptSelf = function(nums) {
    let max = 1
    let zeroCount = 0

    nums.map(num => {
      if (num) {
        max = max * num
      } else {
        zeroCount++
      }
    })

    return nums.map(num => {
      if (zeroCount > 1) return 0
      if (zeroCount === 1) return num ? 0 : max
      return max / num
    })
};

var productExceptSelf2 = function(nums) {
  if (!nums) return
  const ans = []

  let max = 1

  nums.map((num, i) => {
    ans[i] = max
    max *= num
  })

  let product = 1

  for (let i = nums.length - 1; i > -1; i--) {
    ans[i] *= product
    product *= nums[i]
  }

  return ans
}

