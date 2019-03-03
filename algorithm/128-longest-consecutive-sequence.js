var longestConsecutive = function(nums) {
    const set = new Set(nums)

    let max = 0

    nums.map(num => {
      if (!set.has(num - 1)) {
        let next = num + 1
        let tmp = 1
        while (set.has(next)) {
          tmp++
          next++
        }

        max = Math.max(max, tmp)
      }
    })

    return max
}
