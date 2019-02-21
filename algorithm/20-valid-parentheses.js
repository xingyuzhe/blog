var isValid = function(s) {
  let stack = []
  let leftParent = '([{'
  let rightParent = ')]}'

  let parentMap = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for (let i = 0; i < s.length; i++) {
    if (leftParent.indexOf(s[i]) > -1) {
      stack.push(s[i])
    } else if (rightParent.indexOf(s[i]) > -1) {
      if (parentMap[stack[stack.length - 1]] === s[i]) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return !stack.length
};   