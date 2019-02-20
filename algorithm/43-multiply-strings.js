function sumString(num1, num2) {  
  if (!num1 && !num2) return '0'
  if (!num1) return num2
  if (!num2) return num1
  let carry = 0

  let resStack = []
  let leftStack = num1.split('')
  let rightStack = num2.split('')

  while (leftStack.length || rightStack.length) {
    let leftVal = leftStack.length ? parseInt(leftStack.pop(), 10) : 0
    let rightVal = rightStack.length ? parseInt(rightStack.pop(), 10) : 0
    let sum = leftVal + rightVal + carry

    carry = Math.floor(sum / 10)
    resStack.push(sum % 10)
  }

  if (carry > 0) {
    resStack.push(carry)
  }

  return resStack.reverse().join('')
}

function simpleMutiply(num1, num2) {
  if (!num1 || !num2 || num1 === '0' || num2 === '0') return '0'

  num2 = parseInt(num2, 10)

  if (!num2) return 0

  
  let carry = 0
  let resStack = []

  for (let i = num1.length - 1; i > -1; i--) {
    let sum = parseInt(num1[i]) * num2 + carry
    carry = Math.floor(sum / 10)
    resStack.push(sum % 10)
  }

  if (carry > 0) {
    resStack.push(carry)
  }

  return resStack.reverse().join('')
}

function patchZero(num1, count) {
  if (!num1) return 0

  for (let i = 0; i < count; i++) {
    if (parseInt(num1, 10)) num1 += '0' 
  }

  return num1
}

var multiply = function(num1, num2) {
    if (!num1 || !num2 || num1 === '0' || num2 === '0') return '0'

    let res = '0'

    for (let i = num2.length - 1; i > -1; i--) {
      let curSum = simpleMutiply(num1, num2[i])
      res = sumString(res, patchZero(curSum, num2.length - i -1))
    }

    return res
};