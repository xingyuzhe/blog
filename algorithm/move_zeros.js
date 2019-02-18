var moveZeroes = function(nums) {
  let l = nums.length
  let i = 0
  
  while(i < l) {
    if (!nums[i]) {
      nums.push(nums.splice(i, 1)[0])
      l--  
    } else {
      i++
    }
  }

  return nums
}


var nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums)