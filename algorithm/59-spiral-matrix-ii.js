/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let x1 = 0
  let x2 = n - 1
  let y1 = 0
  let y2 = n - 1

  const ans = Array(n).fill(0).map(() => [])

  let begin = 1

  while (x1 <= x2 && y1 <= y2) {
    for (let x = x1; x <= x2; x++) {
      ans[y1][x] = begin++
    }

    for (let y = y1 + 1; y <= y2; y++) {
      ans[y][x2] = begin++
    }

    if (x1 < x2 && y1 < y2) {
      for (let x = x2 - 1; x > x1; x--) {
        ans[y2][x] = begin++
      }

      for (let y = y2; y > y1; y--) {
        ans[y][x1] = begin++
      }
    }

    x1++
    y1++
    x2--
    y2--
  }

  return ans
};
