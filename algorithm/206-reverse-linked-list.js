var reverseList = function(head) {
  let prev = null

  while (head) {
    let next = head.next
    next.next = head
    head = next
    prev = head
  }

  return prev
};