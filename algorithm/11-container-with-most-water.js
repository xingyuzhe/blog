var maxArea = function(height) {
    let left = 0, right = height.length - 1, maxArea = 0

    while (left < right) {
      maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left))

      if (height[left] < height[right]) {
        left++
      } else {
        right--
      }
    }

    return maxArea
};
