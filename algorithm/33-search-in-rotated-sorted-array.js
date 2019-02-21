var search = function(nums, target) {
  if (!nums || !nums.length) return -1

  let i = 0
  let j = nums.length - 1

  while (i < j) {
    let divide = i + Math.floor((j - i) / 2)
    let left = nums[i]
    let center = nums[divide]
    let right = nums[j]
    if (center >= left) {
      if (left <= target && target <= center) {
        j = divide
      } else {
        i = divide + 1
      }
    } else {
      if (center < target && target <= right) {
        i = divide + 1
      } else {
        j = divide
      }
    }
  }

  return nums[i] === target ? i : -1
};