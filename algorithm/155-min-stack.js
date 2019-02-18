class MinStack {
  constructor() {
    this.min = Infinity
    this.stack = []
    return this
  }

  push(x) {
    if (x <= this.min) {
      this.stack.push(this.min)
      this.min = x
    }
    
    this.stack.push(x)
  }

  pop() {
    const x = this.stack.pop()
    if (x === this.min) {
      this.min = this.stack.pop()
    }
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  getMin() {
    return this.min
  }
}

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/