function NewFactory(Func, ...args) {
  if (typeof Func !== 'function') {
    throw new TypeError('NewFactory: first param must be a function')
  }

  const obj = new Object()

  obj.__proto__ = Func.prototype

  const res = Func.call(obj, ...args)

  return typeof res !== 'object' ? obj :res
}
