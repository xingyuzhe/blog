class Solution {
  static mergeSort(nums) {
    if (!nums || nums.length <= 1) return nums
    const clone = Array(nums.length)
    this.recursive(nums, clone, 0, nums.length - 1)
  
    return nums
  }

  static recursive(origin, clone, start, end) {
    if (start >= end) return

    // 如果是ceil, 这里出现0, 1的情况时就会无限循环
    const middle = Math.floor((start + end) / 2)

    this.recursive(origin, clone, start, middle)
    this.recursive(origin, clone, middle + 1, end)
  
    this.merge(origin, clone, start, middle, end)
  }

  static merge(origin, clone, start, middle, end) {
    let i = start, j = middle + 1

    // 每次都要把上次排过的copy到临时数组中
    for (let x = start; x <= end; x++) {
      clone[x] = origin[x]
    }

    for (let k = start; k <= end; k++) {
      if (i > middle) {
        origin[k] = clone[j++]
      } else if (j > end) {
        origin[k] = clone[i++]
      } else if (clone[i] < clone[j]) { // 把小的排前面
        origin[k] = clone[i++]
      } else {
        origin[k] = clone[j++]
      }
    }
  }
}

console.log(Solution.mergeSort([5,7,4,1,1,-5,9,-2,-2,5,2,3,9,11]))
