const swap = (nums, i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]

const selectSort = function(nums) {
  if (!nums) return
  if (nums.length < 2) return nums 

  const l = nums.length

  for (let i = 0; i < l; i++) {
    let min = i
    for (let j = i + 1; j < l; j++) {
      if (nums[j] < nums[min])
      min = j
    }

    if (min !== i) {
      swap(nums, i, min)
    }
  }

  return nums
}

console.log(selectSort([5,7,4,1,1,-5,9,-2,5,2,3,9,11]))