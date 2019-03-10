function carry(fn, ...args) {
  if (!fn) return

  return fn.length <= args.length ? fn(...args) : carry.bind(null, fn, ...args)
}
