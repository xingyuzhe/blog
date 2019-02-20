/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0
  let max = -Infinity

  let l = nums.length

  for (let i = 0 ; i < l; i++) {
    if (sum < 0) {
      sum = nums[i]
    } else {
      sum+= nums[i]
    }

    max = Math.max(max, sum)
  }

  return max
};