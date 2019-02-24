const swap = (nums, i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]

const partition = (nums, start, end) => {
  let pivotIndex = start + Math.floor(end - start / 2)
  let pivot = nums[pivotIndex]

  let i = start
  let j = end

  while (i < j) {
    while(nums[i] < pivot) i++
    while(nums[j] > pivot) j--

    if (i < j) {
      swap(nums, i++, j--)
    }
  }

  return pivotIndex
};

const sort = function(nums, i, j) {
  if (i >= j) return

  const pivot = partition(nums, i, j)
  sort(nums, i, pivot - 1)
  sort(nums, pivot + 1, j)
}

const quickSort = function(nums) {
  sort(nums, 0, nums.length - 1)
  return nums
}

console.log(quickSort([5,7,4,1,1,-5,9,-2,-2,5,2,3,9,11]))