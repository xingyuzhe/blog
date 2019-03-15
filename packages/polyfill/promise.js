// referrence: https://github.com/whinc/es6-promise/blob/master/src/es6-promise.js

const State = {
  pending: Symbol('PromiseA:pending'),
  fullfilled: Symbol('PromiseA:fullfilled'),
  rejected: Symbol('PromiseA:rejected')
}

class PromiseA {
  constructor(executor) {
    if (!(this instanceof PromiseA)) throw Error(`${this.constructor.name}: constructor can not be called without new`)
    if (typeof executor !== 'function') throw Error(`${this.constructor.name}: first argument must be a function`)
    this._state = State.pending
    this._value = undefined
    this._callbacks = []
    this._init(executor)
  }

  _init(executor) {
    try {
      executor(this._transition.bind(this, State.fullfilled), this._transition.bind(this, State.rejected))
    } catch(e) {
      this.reject(e)
    }
  }

  // 2.1.1 When pending, a promise:may transition to either the fulfilled or rejected state.
  // 2.1.2 When fulfilled, a promise: must not transition to any other state. must have a value, which must not change.
  // 2.1.3 When rejected, a promise:must not transition to any other state.must have a reason, which must not change.
  _transition(newState, value) {
    if (this._state === State.pending) {
      this._state = newState
      this._value = value

      this._callbacks.forEach(fn => fn())
    }
  }

  then(onFulfilled, onRejected) {
    // 2.2.4 onFulfilled or onRejected must not be called until the execution context stack contains only platform code
    
    // 2.2.2.1 it must be called after promise is fulfilled, with promise’s value as its first argument.
    // 2.2.7.3 If onFulfilled is not a function and promise1 is fulfilled, promise2 must be fulfilled with the same value as promise1.
    onFulfilled = isFunction(onFulfilled) ? onFulfilled : value => value

    // 2.2.3.1 it must be called after promise is rejected, with promise’s reason as its first argument.
    // 2.2.7.4 If onRejected is not a function and promise1 is rejected, promise2 must be rejected with the same reason as promise1.
    onRejected = isFunction(onRejected) ? onRejected : err => { throw err }

    const onResolvedCallback = (resolve, reject, newPromise) => {
      setTimeout(() => {
        try {
          const newResult = onFulfilled(this._value)
          resolvePromise({ newPromise, newResult, resolve, reject })
        } catch(e) {
          reject(e)
        }
      }, 0)
    }

    const onRejectedCallback = (resolve, reject, newPromise) => {
      setTimeout(() => {
        try {
          const newResult = onRejected(this._value)
          resolvePromise({ newPromise, newResult, resolve, reject })
        } catch(e) {
          reject(e)
        }
      }, 0)
    }

    return new PromiseA((resolve, reject) => {
      if (this._state === State.fullfilled) {
        onFulfilledCallback(resolve, reject, this)
      }

      if (this._state === State.rejected) {
        onRejectedCallback(resolve, reject, this)
      }

      // 2.2.6 then may be called multiple times on the same promise.
      // 2.2.6.1 If/when promise is fulfilled, all respective onFulfilled callbacks must execute in the order of their originating calls to then.
      // 2.2.6.2 If/when promise is rejected, all respective onRejected callbacks must execute in the order of their originating calls to then.
      if (this._state === State.pending) {
        this._onResolvedCallbacks.push(() => {
          onResolvedCallback(resolve, reject, this)
        })
        
        this._onRejectedCallbacks.push(() => {
          onRejectedCallback(resolve, reject, this)
        })
      }
    })
  }

  catch(onRejected) {
    this.then(undefined, onRejected)
  }
}

function isFunction(func) {
  return typeof func === 'function'
}

// function resolvePromise(newPromise, newResult, resolve, reject) {
//   if ()
// }


function resolvePromise(promise2, x, resolve, reject){
  if(x === promise2){
    return reject(new TypeError('Chaining cycle detected for promise'));
  }
  let called;
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then;
      if (typeof then === 'function') { 
        then.call(x, y => {
          if(called)return;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, err => {
          if(called)return;
          called = true;
          reject(err);
        })
      } else {
        resolve(x);
      }
    } catch (e) {
      if(called)return;
      called = true;
      reject(e); 
    }
  } else {
    resolve(x);
  }
}
//resolve方法
Promise.resolve = function(val){
  return new Promise((resolve,reject)=>{
    resolve(val)
  });
}
//reject方法
Promise.reject = function(val){
  return new Promise((resolve,reject)=>{
    reject(val)
  });
}
//race方法 
Promise.race = function(promises){
  return new Promise((resolve,reject)=>{
    for(let i=0;i<promises.length;i++){
      promises[i].then(resolve,reject)
    };
  })
}
//all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
Promise.all = function(promises){
  let arr = [];
  let i = 0;
  function processData(index,data){
    arr[index] = data;
    i++;
    if(i == promises.length){
      resolve(arr);
    };
  };
  return new Promise((resolve,reject)=>{
    for(let i=0;i<promises.length;i++){
      promises[i].then(data=>{
        processData(i,data);
      },reject);
    };
  });
}

