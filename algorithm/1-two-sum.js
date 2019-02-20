var twoSum = function(nums, target) {
    let numsMap = new Map()

    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i]

      if (numsMap.has(complement) && i !== numsMap.get(complement)) {
        return [numsMap.get(complement), i]
      }

      numsMap.set(nums[i], i)
    }

    return null
};

var solution2 = function(nums, target) {
  if (nums.length < 2) return null 
  const newNums = nums.slice(0).sort((a, b) => a - b)

  let i = 0;
  let j = newNums.length - 1

  let idx = null

  while (i < j) {
    const combined = newNums[i] + newNums[j]
    if (combined > target) j--
    if (combined < target) i++
    if (combined === target) {
      idx = [newNums[i], newNums[j]]
      break
    }
  }

  if (idx) {
    idx[0] = nums.indexOf(idx[0])
    idx[1] = nums.lastIndexOf(idx[1])
  }

  return idx
}