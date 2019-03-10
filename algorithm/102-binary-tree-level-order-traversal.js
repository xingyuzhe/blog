/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
    const queue = [[root]]

    const ans = []

    while (queue.length) {
      const nodeWrap = queue.pop()
      const numWrap = []
      const newNodeWrap = []

      nodeWrap.map(node => {
        numWrap.push(node.val)
        if (node.left) {
          newNodeWrap.push(node.left)
        }
        if (node.right) {
          newNodeWrap.push(node.right)
        }
      })

      newNodeWrap.length && queue.push(newNodeWrap)
      numWrap.length && ans.push(numWrap)
    }

    return ans
}

// function TreeNode(val) {
//   this.val = val
//   this.left = this.right = null
// }

// function buildTree(list) {
//   const root = new TreeNode()

//   for (let num of list) {

//   }
// }

// levelOrder(buildTree([3,9,20,null,null,15,7]))
