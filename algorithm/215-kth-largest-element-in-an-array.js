var findKthLargest = function (nums, k) {
  if (!k || !nums || !nums.length || k > nums.length) {
    return
  }

  const minHeap = new MinHeap()

  for (const num of nums) {
    if (minHeap.size < k + 1) {
      minHeap.push(num)
    } else {
      minHeap.pop(num)
    }
  }

  if (minHeap.size > k) {
    minHeap.pop(Infinity)
  }

  return minHeap.min
}

class MinHeap {
  constructor() {
    this.heap = []
  }

  get min() {
    return this.heap[0]
  }

  get size() {
    return this.heap.length
  }

  swap(nums, i, j) {
    [nums[j], nums[i]] = [nums[i], nums[j]]
  }

  parentIndex(i) {
    return Math.floor((i - 1) / 2)
  }

  parent(i) {
    return this.heap[this.parentIndex(i)]
  }

  childrenIndex(i) {
    return [2 * i + 1, 2 * i + 2]
  }

  children(i) {
    const heap = this.heap
    const [left, right] = this.childrenIndex(i)
    return [heap[left], heap[right]]
  }

  push(num) {
    this.heap.push(num)
    this.up(this.size - 1)
  }

  pop(num) {
    const min = this.heap[0]
    this.heap[0] = num
    this.down(0)
    return min
  }

  up(index) {
    let i = index

    while (i > 0 && this.heap[i] < this.parent(i)) {
      let parentIndex = this.parentIndex(i)
      this.swap(this.heap, i, parentIndex)
      i = parentIndex
    }
  }

  down(i) {
    while (i < this.size) {
      const [leftIndex, rightIndex] = this.childrenIndex(i)
      const [left, right] = this.children(i)

      if (leftIndex >= this.size) {
        break
      }

      let minIndex = leftIndex

      if (right !== undefined && right < left) {
        minIndex = rightIndex
      }

      if (this.heap[i] > this.heap[minIndex]) {
        this.swap(this.heap, i, minIndex)
        i = minIndex
      } else {
        break
      }
    }
  }
}

var findKthLargest2 = function(nums, k) {
  return partition(nums, 0, nums.length - 1, k)
}

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}

function partition(nums, start, end, k) {
  let storedIndex = start

  for (let i = start; i < end; i++) {
    if (nums[i] <= nums[end]) {
      swap(nums, i, storedIndex)
      storedIndex++
    }
  }

  swap(nums, storedIndex, end)

  const meet = end - storedIndex + 1

  if (meet === k) {
    return nums[storedIndex]
  }

  if (k < meet) {
    return partition(nums, storedIndex + 1, end, k)
  }

  return partition(nums, start, storedIndex - 1, k - meet)
}
