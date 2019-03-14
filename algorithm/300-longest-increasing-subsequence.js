var lengthOfLIS2 = function (nums) {
  if (!nums) return 0
  if (nums.length <= 1) return nums.length

  const subMaxArr = []

  for (let i in nums) {
    subMaxArr[i] = recursion(subMaxArr, nums, i)
  }

  return Math.max(...subMaxArr)
};

function recursion(subMaxArr, nums, i) {
  if (i === 0) return 1
  if (subMaxArr[i] > 0) return subMaxArr[i]

  let max = 1

  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j]) {
      max = Math.max(max, 1 + recursion(subMaxArr, nums, j))
    }
  }

  return max
}

var lengthOfLIS = function (nums) {
  if (!nums) return 0
  if (nums.length <= 1) return nums.length

  const subMaxArr = []

  for (let i in nums) {
    subMaxArr.push(1)
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        subMaxArr[i] = Math.max(subMaxArr[j] + 1, subMaxArr[i])
      }
    }
  }

  return Math.max(...subMaxArr)
};
