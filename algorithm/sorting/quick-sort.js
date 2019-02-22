var simpleQuickSort = function(nums) {
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

var swap = function (arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

var partition = function() {

}

var sort = function(nums, i, j) {
  if (i >= j) return

  const pivot = partition(nums, i, j)
  sort(nums, i, pivot - 1)
  sort(nums, pivot + 1, j)
}

var quickSort = function(nums) {
  sort(nums, 0, nums.length - 1)
}