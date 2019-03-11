/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(root, k) {
    if (!k || !root) return root

    let tail = root
    let head = root

    let l = 1

    while(tail.next) {
      tail = tail.next
      l++
    }

    tail.next = head

    let count = l - k % l

    while (count > 0) {
      tail = tail.next
      head = head.next
      count--
    }

    tail.next = null

    return head
};
