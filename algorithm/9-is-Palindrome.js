/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (!x) {
      return true
    }

    x = String(x)

    let i = 0;
    let j = x.length-1;

    let flag = true

    while (i < j) {
      if (x[i] !== x[j]) {
        flag = false
        break
      }

      i++;
      j--
    }

    return flag
};