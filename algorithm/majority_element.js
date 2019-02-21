var majorityElement = function(nums) {
  const numMap = new Map()
  nums.map(num => {
      if (numMap.has(num)) {
          numMap.set(num, numMap.get(num) + 1)
      } else {
          numMap.set(num, 1)
      }
  })
  
  return [...numMap].filter(obj => obj[1] > nums.length / 2)[0][0]
};