var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
      let tmp = s[i]
      s[i] = s[j]
      s[j] = tmp
      i++
      j--
    }

    return s
};