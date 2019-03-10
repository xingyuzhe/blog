(function () {
  const watch = function(target, handler) {
    const proxy = new Proxy(target, {
      get(target, prop) {
        return target[prop]
      },

      set(target, prop, value) {
        target[prop] = value
        handler(prop, value)
      }
    })

    return proxy
  }

  this.watch = watch
})()
