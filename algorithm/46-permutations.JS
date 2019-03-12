//@STAR
var permute = function(nums) {
  return BFS(nums)
};

function BFS(nums) {
  if (!nums) return []
  if (nums.length <= 1) return [nums]

  const l = nums.length

  const queue = nums.map(num => [num])

  while(queue.some(arr => arr.length < l)) {
    const head = queue.shift()

    for (const num of nums) {
      if (head.includes(num)) continue
      queue.push(head.slice(0).concat(num))
    }
  }

  return queue
}

var permute2 = function(nums) {
  if (!nums) return []
  if (nums.length <= 1) return [nums]

  const l = nums.length
  const ans = []

  DFS([])

  return ans

  function DFS(cur) {
    if (cur.length === l) {
      ans.push(cur.slice())
      return
    }

    for (const num of nums) {
      if (cur.includes(num)) continue
      cur.push(num)
      DFS(cur)
      cur.pop()
    }
  }  
};
