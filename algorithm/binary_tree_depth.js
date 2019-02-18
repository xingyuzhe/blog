// [3,9,20,null,null,15,7],
function getDepth(root) {
  if (!root) {
    return 0
  }

  const queue = [root]

  let queueSize = 0
  let depth = 0

  while(queue.length) {
    queueSize = queue.length
    for (let i = 0; i < queueSize; i++) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    depth++
  }

  return depth
}