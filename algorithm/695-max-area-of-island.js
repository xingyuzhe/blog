var maxAreaOfIsland = function(grid) {
    if (!grid || !grid.length) return 0

    const visited = grid.map(obj => {
      return Array(grid[0].length).fill(false)
    })

    const area = function(i, j) {
      if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || !grid[i][j] || visited[i][j]) {
        return 0
      }

      visited[i][j] = true

      return 1 + area(i - 1, j) + area(i + 1, j) + area(i, j - 1) + area(i, j + 1)
    }

    let res = 0

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        res = Math.max(res, area(i, j))
      }
    }

    return res
};

var maxAreaOfIsland2 = function(grid) {
  if (!grid || !grid.length) return 0

  const visited = grid.map(obj => {
    return Array(grid[0].length).fill(false)
  })

  const getAroundNode = function(i, j) {
    return [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1]
    ]
  }

  let res = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] && !visited[i][j]) {
        let shape = 0
        let stack = [[i, j]]
        visited[i][j] = true

        while(stack.length) {
          const node = stack.pop()
          shape++
          getAroundNode(node[0], node[1]).map(obj => {
            let m = obj[0]
            let n = obj[1]
            if (m >= 0 && m < grid.length && n >=0 && n < grid[0].length && grid[m][n] && !visited[m][n]) {
              stack.push(obj)
              visited[m][n] = true
            }
          })
        }

        res = Math.max(res, shape)
      }
    }
  }

  return res
}