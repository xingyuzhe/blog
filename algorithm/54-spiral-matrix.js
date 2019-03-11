var spiralOrder = function(matrix) {
  if (!matrix || !matrix.length) return []
  let x1 = 0
  let x2 = matrix[0].length - 1
  let y1 = 0
  let y2 = matrix.length - 1

  const ans = []

  while (x1 <= x2 && y1 <= y2) {
    for (let x = x1; x <= x2; x++) {
      ans.push(matrix[y1][x])
    }

    for (let y = y1 + 1; y <= y2; y++) {
      ans.push(matrix[y][x2])
    }

    if (x1 < x2 && y1 < y2) {
      for (let x = x2 - 1; x > x1; x--) {
        ans.push(matrix[y2][x])
      }

      for (let y = y2; y > y1; y--) {
        ans.push(matrix[y][x1])
      }
    }

    x1++
    y1++
    x2--
    y2--
  }

  return ans
};
