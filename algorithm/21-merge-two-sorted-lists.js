/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let fakeNode = new ListNode()

    let node1 = l1
    let node2 = l2

    let lastNode = fakeNode

    while(node1 && node2) {
      if (node1.val < node2.val) {
        lastNode.next = node1
        node1 = node1.next
      } else {
        lastNode.next = node2
        node2 = node2.next
      }

      lastNode = lastNode.next
    }

    if (!node1) {
      lastNode.next = node2
    }

    if (!node2) {
      lastNode.next = node1
    }

    return fakeNode.next
};