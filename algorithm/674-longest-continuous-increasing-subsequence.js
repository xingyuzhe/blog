var findLengthOfLCIS = function(nums) {
  if (!nums) return 0
  if (nums.length < 2) return nums.length

  let i = 0
  let j = nums.length - 1
  let count = 1
  let max = 1

  while (i < j) {
    if (nums[i + 1] > nums[i]) {
      count++
      max = Math.max(max, count)
    } else {
      count = 1
    }

    i++
  }

  return max
};