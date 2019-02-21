var anagramMappings = function (A, B) {
  let map = {}
  B.map((num, i) => {
    map[num] = i
  })

  return A.map(num => map[num])
}