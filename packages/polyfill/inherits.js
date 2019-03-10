function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
  }

  // 继承原型链, 指定constructor 
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })

  // 构造函数继承
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass

  // 静态属性方法继承
  Object.keys(superClass).map(key => {
    if (superClass.hasOwnProperty(key) && subClass[key] !== undefined) {
      subClass[key] = superClass[key]
    }
  })
}

function inherits(Child, Parent) {
  _inherits(Child, Parent)

  Child = function (...args) {
    if (!(this instanceof Child)) {
      throw new TypeError('Cannot call a class as a function')
    }

    if (Child.length - Parent.length < 0) {
      throw new Error(`Child's arguments length can not be less than Parent's`)
    }

    const parentArgs = args.slice(0, Parent.length)

    const callresult = Parent.apply(this, parentArgs)

    const childArgs = args.slice(Parent.length, Child.length - Parent.length)

    Child.apply(this, childArgs)

    return callresult && (typeof callresult === 'object' || typeof callresult === 'function') ? callresult : this
  }

  return Child
}
