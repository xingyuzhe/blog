// @STAR

var subsets2 = function(nums) {
  if (!nums || !nums.length) return [[]]

  const ans = []
  
  findSubset(0, [])

  return ans

  function findSubset(index, cur) {
    ans.push(cur.slice())
  
    for (let i = index; i < nums.length; i++) {
      cur.push(nums[i])
      findSubset(i + 1, cur)
      cur.pop()
    }
  }
}

var subsets = function(nums) {
  if (!nums || !nums.length) return [[]]

  const ans = []
  
  findSubset(0, [])

  return ans

  function findSubset(i, cur) {
    if (i === nums.length) {
      ans.push(cur.slice())
    } else {
      findSubset(i + 1, cur)
      cur.push(nums[i])
      findSubset(i + 1, cur)
      cur.pop()
    }
  }
}
