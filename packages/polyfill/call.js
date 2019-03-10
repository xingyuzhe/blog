Function.prototype.es3Call = function(context) {
  context = context || window
  context.fn = this

  var args = []

  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }

  var result = eval('context.fn(' + args + ')')

  delete context.fn

  return result
}

Function.prototype.es6Call = function (context, ...args) {
  context = context || window
  const fn = Symbol('fn')
  context[fn] = this

  const result = context[fn](...args)

  delete context[fn]

  return result
}

var foo = {
  name: 'tom'
}

var name = 'win'

function bar(age, sex) {
  console.log(this.name )
  console.log(age)
  console.log(sex)

  return age
}

console.log(bar.es3Call(foo, 'six', 'female'))
console.log(bar.es3Call(null, 'six', 'female'))
console.log(bar.es6Call(foo, 'six', 'female'))
console.log(bar.es6Call(null, 'six', 'female'))
