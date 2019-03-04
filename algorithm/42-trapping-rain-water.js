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

/**
 * 动态规划
 * @param {*} height 
 */
var trap2 = function(height) {
  if (!height || !height.length) {
    return 0
  }

  const leftMax = []
  const rightMax = []
  const l = height.length

  leftMax[0] = height[0]

  for (let i = 1; i < l; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1])
  }

  rightMax[l - 1] = height[l - 1]

  for (let i = l - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1])
  }

  let ans = 0

  for (let i = 1; i < l - 1; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  return ans
}

/**
 * 使用stack
 * @param {*} height 
 */
var trap3 = function(height) {
  // @TODO
}


/**
 * 双指针
 * @param {*} height 
 */
var trap4 = function(height) {
  // @TODO
}

