function throttle(handler, interval) {
  let prevTime = +new Date(), timer

  const later = (context, ...args) => {
    prevTime = +new Date()
    handler.apply(context, args)
    if (timer) clearTimeout(timer)
    timer = null
  }

  const throttled = function(...args) {
    let now = +new Date()
    let remain = interval - (now - prevTime)
    let context = this
    if (remain <= 0 || remain > interval) {
      later(context, ...args)
    } else {
      timer = setTimeout(() => {
        later(context, ...args)
      }, interval)
    }
  }

  throttled.cancel = () => {
    clearTimeout(timer)
    timer = null
    prevTime = +new Date()
  }

  return throttled
}
