class Solution {
  static mergeSort(nums) {
    if (!nums || nums.length <= 1) return nums
    const clone = nums.slice()
    this.recursive(nums, clone, 0, nums.length - 1)
  
    return nums
  }

  static recursive(origin, clone, start, end) {
    if (start >= end) return

    console.log(start, end)

    const middle = Math.ceil(start + ((end - start) / 2))

    console.log(middle)

    this.recursive(origin, clone, start, middle)
    this.recursive(origin, clone, middle + 1, end)
  
    this.merge(origin, clone, start, middle, end)
  }

  static merge(origin, clone, start, middle, end) {
    let i = start, j = middle + 1

    for (let k = start; k <= end; k++) {
      if (i > middle) {
        origin[k] = clone[j++]
      } else if (j > end) {
        origin[k] = clone[i++]
      } else if (clone[i] > clone[j]) {
        origin[k] = clone[i++]
      } else {
        origin[k] = clone[j++]
      }
    }
  }
}

console.log(Solution.mergeSort([5,7,4,1,1,-5,9,-2,-2,5,2,3,9,11]))
