var reverseList = function(head) {
    let prev = null

    while(head) {
      const next = head.next
      head.next = prev
      prev = head
      head = next
    }
};