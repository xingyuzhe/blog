var repeatedNTimes = function(A) {
  let cache = []
  let res
  A.some(num => {
    if (cache[num]) {
      res = num
      return true
    } else {
      cache[num] = true
      return false
    }
  })

  return res
};