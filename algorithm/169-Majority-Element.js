/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let majorNum = nums[0]
   let count = 1
   
   for (let i = 1; i < nums.length; i++) {
    if (!count) {
      majorNum = nums[i]
      count++
    } else if (majorNum === nums[i]) {
      count++
    } else {
      count--
    }
   }

   return majorNum
};