// var uniquePaths = function(m, n) {
    
// };

var uniquePathsDFS = function(m, n) {
  const martrix = Array(m).fill(0).map(() => {
    return Array(n).fill(0)
  })

  let ans = 0

  const dfs = (i, j) => {
    if (i >= m || j >= n) return
    if (i === m - 1 && j === n - 1) {
      ans++
      return
    }

    if ((i + 1) < m && !martrix[i + 1, j]) {
      martrix[i + 1, j] = 1
      dfs(i + 1, j)
      martrix[i + 1, j] = 0
    }

    if ((j + 1) < n && !martrix[i, j + 1]) {
      martrix[i, j + 1] = 1
      dfs(i, j + 1)
      martrix[i, j + 1] = 0
    }
  }

  dfs(0, 0)

  return ans
}

var uniquePaths = function (m, n) {
  const cache = Array(m).fill(0).map(() => Array(n).fill(0))

  return partial(m, n, cache)
}

function partial(m, n, cache) {
  if (cache[m - 1][n - 1]) return cache[m - 1][n - 1]
  if (m === 1 || n === 1) return 1

  const leftPaths = partial(m - 1, n, cache)
  const rightPaths = partial(m, n - 1, cache)

  cache[m - 1][n - 1] = leftPaths + rightPaths

  return cache[m - 1][n - 1]
}
