const insertionSort = function(nums) {
  if (!nums) return
  if (nums.length < 2) return nums

  const l = nums.length

  for (let i = 1; i < l; i++) {
    const value = nums[i]

    let j = i - 1
    while(j >= 0 && value < nums[j] ) {
      nums[j+1] = nums[j]
      j--
    }

    nums[j+1] = value
  }

  return nums
}

console.log(insertionSort([5,7,4,1,1,-5,9,-2,5,2,3,9,11]))