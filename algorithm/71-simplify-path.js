var simplifyPath = function(path) {
    const tokens = path.split('/').filter(token => !['', '.'].includes(token))

    const stack = []

    tokens.map(token => {
      if (token === '..') {
        stack.pop()
      } else {
        stack.push(token)
      }
    })

    return '/' + stack.join('/')
};