/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let nodeA = headA
  let nodeB = headB
  while (nodeA !== nodeB) {
    nodeA = nodeA ? nodeA.next : headB
    nodeB = nodeB ? nodeB.next : headA
  }

  return nodeA
};