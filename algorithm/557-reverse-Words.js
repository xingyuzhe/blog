/**
 * @param {string} s
 * @return {string}
 */

var reverseString = function(s) {
  let i = 0;
  let j = s.length - 1;

  let res = ''

  for (let i = s.length - 1; i > - 1; i--) {
    res += s[i]
  }

  return res
};

var reverseWords = function(s) {
    if (!s) {
      return ''
    }
    let arr = s.split(' ')
    let res = ''
    for (let i = 0 ; i < arr.length; i++) {
      res += reverseString(arr[i])
      if (i !== arr.length - 1) {
        res += ' '
      }
    }

    return res
};