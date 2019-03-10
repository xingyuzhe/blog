function extend(isDeep, target, ...args) {
  if (typeof target !== 'object') {
    return
  }

  target = target || {}

  isDeep = typeof isDeep === 'boolean' ? isDeep : false

  for (let arg of args) {
    if (!arg) continue

    for (let attr in arg) {
      const src = target[attr]
      const copy = arg[attr]
      if (src === copy) continue
      if (typeof copy === 'object') {
        extend(true, src, copy)
      } else if (arg[attr] !== 'undefined') {
        target[attr] = copy
      }
    }
  }

  return target
}
