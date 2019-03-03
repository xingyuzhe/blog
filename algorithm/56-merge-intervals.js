/**
 * time nlogn
 * space n
 * @param {*} intervals 
 */
var merge = function (intervals) {
  if (!intervals || !intervals.length) return []

  const list = intervals.slice(0).sort((a, b) => {
    return a.start !== b.start ? a.start - b.start : a.end - b.end
  })

  let prev = list[0]
  const ans = [prev]

  for (const current of list) {
    if (current.start <= prev.end) {
      prev.end = Math.max(current.end, prev.end)
    } else {
      ans.push(current)
      prev = current
    }
  }

  return ans
}
