var maxEnvelopes = function(envelopes) {
  if (!envelopes) return 0
  if (envelopes.length < 2) return envelopes.length

  envelopes.sort(compare)

  const heights = envelopes.map(obj => obj[1])

  return lengthOfLIS(heights)
};

function compare(arrA, arrB) {
  if (arrA[0] === arrB[0]) {
    return arrB[1] - arrA[1]
  } else {
    return arrA[0] - arrB[0]
  }
}

function lengthOfLIS(nums) {
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
