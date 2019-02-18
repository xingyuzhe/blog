/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false

  let firstNode = head
  let secondNode = head.next

  while(firstNode && secondNode && secondNode.next) {
    if (firstNode === secondNode) {
      return true
    }

    firstNode = firstNode.next
    secondNode = secondNode.next.next
  }

  return false
};