var addTwoNumbers = function(l1, l2) {
    if (!l1 && !l2) return null

    const leftStack = []
    const rightStack = []
    const resStack = []

    let leftNode = l1
    let rightNode = l2

    while(leftNode) {
      leftStack.push(leftNode.val)
      leftNode = leftNode.next
    }

    while(rightNode) {
      rightStack.push(rightNode.val)
      rightNode = rightNode.next
    }

    let carry = 0

    while (leftStack.length || rightStack.length) {
      let leftVal = leftStack.length ? leftStack.pop() : 0
      let rightVal = rightStack.length ? rightStack.pop() : 0
      let sum = leftVal + rightVal + carry
      carry = Math.floor(sum / 10)
      resStack.push(sum % 10)
    }

    if (carry > 0) {
      resStack.push(carry)
    }

    return array2LinkList(resStack)
};

// function ListNode(val) {
//   this.val = val
//   this.next = null
// }

function array2LinkList(resStack) {
  let resNode = new ListNode()
  let curNode = resNode

  while (resStack.length) {
    curNode.val = resStack.pop()
    if (resStack.length) {
      curNode.next = new ListNode()
      curNode = curNode.next
    }
  }

  return resNode
}