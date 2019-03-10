function flatten(arr = []) {
  while (arr.some(obj => Array.isArray(obj))) {
    ans = [].concat(...arr)
  }

  return arr
}
