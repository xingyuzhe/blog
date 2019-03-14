var sortList = function(head) {
  if (!head) return head
  return mergeSort(head)
};

function mergeSort(head) {

  if (!head.next) return head

  let slow = head
  let fast = head
  let prev = null

  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }

  prev.next = null

  let left = mergeSort(head)
  let right = mergeSort(slow)

  return merge(left, right)
}

function merge(left, right) {
  let dummy = new ListNode()
  let head = dummy

  while(left && right) {
    if (left.val < right.val) {
      head.next = left
      head = head.next
      left = left.next
    } else {
      head.next = right
      head = head.next
      right = right.next
    }
  }

  if (left) {
    head.next = left
  }

  if (right) {
    head.next = right
  }

  return dummy.next
}
