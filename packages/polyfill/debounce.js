function debounce(handler, delay, immediate) {
  let timer, result

  const debounceFunction = function(...args) {
    clearTimeout(timer)
    const context = this
    if (immediate) {
      if (!timer) result = handler.apply(context, args)
      timer = setTimeout(() => {
        timer = null
      }, delay)
    } else {
      timer = setTimeout(() => {
        handler.apply(context, args)
      }, delay)
    }

    return result
  }
  
  debounceFunction.cancel = () => {
    clearTimeout(timer)
    timer = null
  }

  return debounceFunction
}
