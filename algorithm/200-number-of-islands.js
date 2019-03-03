var numIslands = function(grid) {
    if (!grid || !grid.length) return 0 

    let count = 0
    let m = grid.length
    let n = grid[0].length

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === '1') {
          dfs(grid, i, j, m, n)
          count++
        }
      }
    }

    return count
};

function dfs(grid, i, j, m, n) {
  if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] !== '1') return 
  grid[i][j] = '0'
  dfs(grid, i + 1, j, m, n)
  dfs(grid, i - 1, j, m, n)
  dfs(grid, i, j + 1, m, n)
  dfs(grid, i, j - 1, m, n)
}
