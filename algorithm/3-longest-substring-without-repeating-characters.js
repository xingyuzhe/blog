/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLength = 0
  let cacheMap = new Map()

  for (let j = 0, i = 0; j < s.length; j++) {
    if (cacheMap.has(s[j])) {
      i = Math.max(cacheMap.get(s[j]), i)
    }

    maxLength = Math.max(maxLength, j - i + 1)
    cacheMap.set(s[j], j + 1)
  }
  
  console.log(maxLength)

  return maxLength
};

lengthOfLongestSubstring('abcabcbb') // 3

lengthOfLongestSubstring('abba') // 2