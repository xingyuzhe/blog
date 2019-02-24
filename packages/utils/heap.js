const swap = (nums, i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]

class MaxHeap {
  constructor(nums) {
    this.nums = nums || []
    this.N = nums.length
  }

  getParent(k) {
    return Math.floor((k + 1) / 2)
  }

  swim(k) {
    let currert = k
    while (this.nums[k] > this.nums[this.getParent(currert)]) {
      swap(this.nums, k, parent)
      current = this.getParent(currert)
    }
  }

  sink(k) {
    let current = k

    while((2 * current + 2) < this.N) {
      const left = 2 * current + 1
      const right = 2 * current + 2
      let maxSon = this.nums(left) < this.nums(right) ? right : left

      if (this.nums[k] < this.nums[maxSon]) {
        swap(this.nums, k, maxSon)
        current = maxSon
      }
    }
  }

  insert(num) {
    this.nums.push(num)
    this.N++
    this.swim(this.N - 1)
  }

  delMax() {
    if (this.isEmpty()) return
    const max = this.nums[0]
    swap(this.nums, 0, this.N - 1)
    this.N--
    this.sink(0)
    return max
  }

  isEmpty() {
    return !this.N
  }
}
