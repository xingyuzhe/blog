/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let ans = null

  for (let list of lists) {
    ans = merge2Lists(ans, list)
  }

  return ans
};

function merge2Lists(listA, listB) {
  const ans = new ListNode()

  let head = ans
  let headA = listA
  let headB = listB

  while (headA && headB) {
    if (headA.val < headB.val) {
      head.next = headA
      headA = headA.next
    } else {
      head.next = headB
      headB = headB.next
    }

    head = head.next
  }

  if (headA) {
    head.next = headA
  }

  if (headB) {
    head.next = headB
  }

  return ans.next
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function transArray2LinkLists(lists) {
  return lists.map(list => {
    let fakeNode = new ListNode()
    let head = fakeNode
    for (let num of list) {
      head.next = new ListNode(num)
      head = head.next
    }

    return fakeNode.next
  })
}

mergeKLists(transArray2LinkLists([
  [1, 4, 5],
  [1, 3, 4],
  [2, 6]
]))
