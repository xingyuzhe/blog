Function.prototype.es3Apply = function(context) {
  context = context || window
  context.fn = this

  var result = eval('context.fn(arguments[1])')

  delete context.fn

  return result
}

Function.prototype.es6Apply = function (context, args) {
  context = context || window
  const fn = Symbol('fn')
  context[fn] = this

  const result = context[fn](args)

  delete context[fn]

  return result
}

var foo = {
  name: 'tom'
}

var name = 'win'

function bar(params) {
  console.log(this.name )
  console.log(params[0])
  console.log(params[1])

  return params[0]
}

console.log(bar.es3Apply(foo, ['six', 'female']))
console.log(bar.es3Apply(null, ['six', 'female']))
console.log(bar.es6Apply(foo, ['six', 'female']))
console.log(bar.es6Apply(null, ['six', 'female']))
