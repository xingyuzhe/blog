/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// @ TODO rejected!
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid) return 0

  const m = obstacleGrid.length - 1, n = obstacleGrid[0].length - 1

  if (m < 0 || n < 0) return 0

  if (obstacleGrid[0][0]) return 0

  const cache = new Map()

  return partial(m, n, cache, obstacleGrid)
};

function partial(m, n, cache, obstacleGrid) {
  const key = m + '-' + n
  console.log(m, n, cache, obstacleGrid)
  if (cache.has(key)) return cache.get(key)
  if (m < 0 || n < 0) return 0
  if (obstacleGrid[m][n]) return 0
  if (m === 0 || n === 0) return 1

  const leftPaths = partial(m - 1, n, cache, obstacleGrid)
  const rightPaths = partial(m, n - 1, cache, obstacleGrid)

  cache.set(key, leftPaths + rightPaths)

  return cache.get(key)
}
