const swap = (nums, i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]

const heapSort = function (nums) {
  if (!nums) return
  if (nums.length < 2) return nums

  const l = nums.length

  // 构建堆
  for (let i = Math.floor(l / 2); i >= 0; i--) {
    buildHeap(nums, n, i)
  }

  // n-1次交换和构建
  for (let i = l - 1; i >= 0; i--) {
    swap(nums, 0, i)
    buildHeap(nums, i, 0)
  }
}

function buildHeap(nums, end, start) {
  const leftSon = start * 2 + 1
  const rightSon = start * 2 + 2
  const largest = start

  if (leftSon < n && nums[leftSon] > nums[largest]) {
    largest = leftSon
  }

  if (rightSon < n && nums[rightSon] > nums[largest]) {
    largest = rightSon
  }

  if (largest !== start) {
    swap(nums, i, largest)
    buildHeap(nums, end, largest)
  }
}
