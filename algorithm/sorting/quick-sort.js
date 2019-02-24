var quickSort = function(nums) {
  if (!nums) return []
  if (nums.length < 2) return nums

  let pivot = Math.floor(nums.length / 2)

  const leftNums = []
  const rightNums = []

  const center = nums[pivot]

  for (let i = 0; i < nums.length; i++) {
    if (center < nums[i]) {
      leftNums.push(nums[i])
    } else if (i !== pivot) {
      rightNums.push(nums[i])
    }
  }

  return quickSort(leftNums).concat([center], quickSort(rightNums))
}