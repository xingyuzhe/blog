function isArrayLike(target) {
  return target && target[Symbol.isConcatSpreadable]
}

function each(target, callback) {
  if (!target) return

  if (isArrayLike(target)) {
    for (let i = 0; i < target.length; i++) {
      if (callback.call(target[i], i, target[i]) === false) {
        break
      }
    }

    return
  }

  for (let i in target) {
    if (callback.call(target[i], i, target[i]) === false) {
      break
    }
  }
}
