var addTwoNumbers = function(l1, l2) {
    if (!l1 && !l2) return null

    let carry = 0
    let head = new ListNode()
    let curNode = head

    let leftNode = l1
    let rightNode = l2

    while(leftNode || rightNode) {
      let leftVal = (leftNode && leftNode.val) || 0
      let rightVal = (rightNode && rightNode.val) || 0
      let sum = leftVal + rightVal + carry

      carry = Math.floor( sum / 10)
      curNode.val = sum % 10
      
      if (leftNode) leftNode = leftNode.next
      if (rightNode) rightNode = rightNode.next

      if (leftNode || rightNode) {
        curNode.next = new ListNode()
        curNode = curNode.next
      }
    }

    if (carry > 0) {
      curNode.next = new ListNode(carry)
    }

    return head
};