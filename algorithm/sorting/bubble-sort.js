const swap = (nums, i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]

const bubbleSort = function(nums) {
  if (!nums) return
  if (nums.length < 2) return nums 

  const l = nums.length

  for (let i = 1; i < l; i++) {
    let flag = true
    for (let j = l - 1; j > i - 1; j--) {
      if (nums[j] < nums[j - 1]) {
        swap(nums, j, j - 1)
        flag = false
      }
    }

    if (flag) {
      break
    }
  }

  return nums
}

console.log(bubbleSort())
console.log(bubbleSort([]))
console.log(bubbleSort([1]))
console.log(bubbleSort([5,7,4,1,1,-5,9,-2,5,2,3,9,11]))