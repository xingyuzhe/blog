var findCircleNum = function(M) {
  const visited = []
  
  let total = 0

  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      dfs(M, visited, i)
      total++
    }
  }

  return total
};

function dfs(M, visited, i) {
  for (let j = 0; j < M.length; j++) {
    if (!visited[j] && M[i][j]) {
      visited[j] = 1
      dfs(M, visited, j)
    }
  }
}
