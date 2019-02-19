var restoreIpAddresses = function(s) {
  const solutions = []
  if (!s || !s.length || s.length < 4 || s.length > 12) return solutions

  restoreIp(s, solutions, '', 0, 0)
  return solutions    
}


function restoreIp(originIp, solutions, solution, idx, depth) {
  const l = originIp.length
  if (idx > l || depth > 4) return
  if (depth === 4 && idx === l) {
    solutions.push(solution)
    return
  }

  for (let i = 1; i < 4; i++) {
    const newIdx = idx + i
    if (newIdx > l) break
    const nextPart = originIp.substring(idx, newIdx)
    if ((nextPart[0] === '0' && nextPart.length > 1) || (i ===3 && parseInt(nextPart, 10) > 255)) continue
    const tail = depth === 3 ? '' : '.'
    restoreIp(originIp, solutions, solution + nextPart + tail, newIdx, depth + 1);
  }
}