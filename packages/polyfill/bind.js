Function.prototype.fakeBind = function(context, ...args1) {
  const fn = this

  if (typeof this !== 'function') {
    throw new Error('Function.prototype.fakeBind: what to be bind must be a function')
  }

  const fnNoop = function() {}

  const fnBound = function(...args2) {
    return fn.call(this instanceof fnBound ? this : context, ...args1.concat(args2))
  }

  fnNoop.prototype = this.prototype
  fnBound.prototype = new fnNoop()

  return fnBound
}

var foo = {
  name: 'tom'
}

function bar(name, ...args) {
  this.name = name
  console.log(...args)
  console.log(this.isNice)
  return this.name
}

bar.prototype.isNice = true

var bindFoo = bar.fakeBind(foo, 'six', 'female')

console.log(bindFoo())

var bindFoo2 = bar.fakeBind(foo, 'marry')

var nb = new bindFoo2('six', 'female')

console.log(nb)
