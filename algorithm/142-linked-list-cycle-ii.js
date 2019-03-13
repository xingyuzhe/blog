var detectCycle1 = function (head) {
  if (!head) return null

  const nodeMap = new Map()

  let current = head

  while(current && !(nodeMap.has(current))) {
    nodeMap.set(current, 1)
    current = current.next
  }

  return nodeMap.get(current) ? current : null
};

var detectCycle = function(head) {
  if (!head) return null

  let fast = head
  let slow = head

  while(slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      while(head !== slow) {
        head = head.next
        slow = slow.next
      }

      return head
    }
  }

  return null
}
