/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid) return 0

  const m = obstacleGrid.length, n = obstacleGrid[0].length

  if (m === 0 || n === 0) return 0

  const cache = Array(m).fill(0).map(() => Array(n).fill(Infinity))

  return partial(m - 1, n - 1, cache, obstacleGrid)
};

function partial(m, n, cache, obstacleGrid) {
  if (m < 0 || n < 0) return 0
  if (m === 0 && n === 0) return 1 - obstacleGrid[0][0]
  if (cache[m][n] !== Infinity) return cache[m][n]
  if (obstacleGrid[m][n]) return 0

  const leftPaths = partial(m - 1, n, cache, obstacleGrid)
  const rightPaths = partial(m, n - 1, cache, obstacleGrid)

  cache[m][n] = leftPaths + rightPaths

  return cache[m][n]
}
