/**
 * 暴力硬解
 * @param {*} height 
 */
var trap1 = function(height) {

    let ans = 0

    for (let i = 1; i < height.length - 1; i++) {
      let leftMax = 0
      let rightMax = 0

      for (let j = i; j < height.length; j++) {
        rightMax = Math.max(height[j], rightMax)
      }

      for (let k = i; k >= 0; k--) {
        leftMax = Math.max(height[k], leftMax)
      }

      ans+= Math.min(leftMax, rightMax) - height[i]
    }

    return ans
};

var trap = function(right) {

}
