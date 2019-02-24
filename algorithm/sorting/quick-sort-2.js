const swap = (nums, i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]

const partition = (nums, start, end) => {
  let pivot = nums[end]
  let storeIndex = start
  for (let i = start; i < end; i++) {
    if (nums[i] <= pivot) {
      swap(nums, storeIndex, i);
      storeIndex++
    }
  }

  swap(nums, storeIndex, end);
  return storeIndex;
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

console.log(quickSort([5,7,4,1,1,-5,9,-2,5,2,3,9,11]))