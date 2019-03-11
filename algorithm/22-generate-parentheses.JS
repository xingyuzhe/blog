/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = []
    backTrack(ans, '', 0, 0, n)
    return ans
}; 

function backTrack(ans, cur, open, close, max) {
  if (cur.length === max * 2) {
    ans.push(cur)
    return
  }

  if (open < max) {
    backTrack(ans, cur + '(', open + 1, close, max)
  }

  if (close < open) {
    backTrack(ans, cur + ')', open, close + 1, max)
  }
}
