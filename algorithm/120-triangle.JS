//@STAR
var minimumTotal = function(triangle) {
  if (!triangle || !triangle.length) return 0
  
  const n = triangle.length

  const mini = triangle[n - 1]

  for (let i = n - 2; i > -1; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      mini[j] = triangle[i][j] + Math.min(mini[j], mini[j + 1])
    }
  }

  return mini[0]
};
