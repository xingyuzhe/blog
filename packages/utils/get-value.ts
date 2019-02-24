function isObject(obj:any) {
  return obj && typeof obj === 'object' && !Array.isArray(obj)
}

function isValidObject(val:any) {
  return isObject(val) || Array.isArray(val) || typeof val === 'function';
}

export function getValue(obj: object, ...args: string[]) {
  if (!obj || !args.length) throw new TypeError(`getValue: param can not be empty`)
  if (!isValidObject(obj)) throw new TypeError(`getValue: expected object`)

  return args.map((key: string) => {
    if (!key) return
    if (typeof key !== 'string') throw new TypeError(`getValue: expected string`)
    key = key.replace(/\[/g, '.').replace(/\]/g, '')
 
    return key.split('.').reduce((tmpvalue, tmpkey) => {
      if (tmpvalue && isValidObject(tmpvalue)) {
        return tmpvalue[tmpkey]
      } else {
        return undefined
      }
    }, obj)

  })
}

const obj = { a: { b: { c: { d: 'foo' } } } };

console.log(getValue(obj, 'a'));       //=> { b: { c: { d: 'foo' } } }
console.log(getValue(obj, 'a.b'));     //=> { c: { d: 'foo' } }
console.log(getValue(obj, 'a.b.c'));   //=> { d: 'foo' }
console.log(getValue(obj, 'a.b.c.d')); //=> 'foo'

const obj1 = { a: { b: [['foo']], c: [{d: 'foo'}] }};

console.log(getValue(obj1, 'a')); 
console.log(getValue(obj1, 'a.b[0]')); 
console.log(getValue(obj1, 'a.b[0][0]')); 
console.log(getValue(obj1, 'a.c[0].d')); 
