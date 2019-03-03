/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }

  const queue = [root]
  let depth = 0
  let queueSize = 0

  while(queue.length) {
    queueSize = queue.length
    for (let i = 0; i < queueSize; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left) 
      if (node.right) queue.push(node.right) 
    }

    depth++
  }

  return depth
};