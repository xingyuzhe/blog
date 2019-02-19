var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
      return false
    }

    let originArr = Array(26).fill(0)
    let compareArr = Array(26).fill(0)
    
    let matchedCount = 0

    for (let i = 0; i < s1.length; i++) {
      originArr[transCharacter2Index(s1, i)]++
      compareArr[transCharacter2Index(s2, i)]++
    }

    originArr.map((num, i) => {
      if (num === compareArr[i]) matchedCount++
    })

    for (let i = s1.length; i < s2.length; i++) {
      if (matchedCount === 26) return true

      let leftIndex = transCharacter2Index(s2, i - s1.length)
      let rightIndex = transCharacter2Index(s2, i)

      if (compareArr[leftIndex] === originArr[leftIndex]) {
        matchedCount--
      }

      compareArr[leftIndex]--
      if (compareArr[leftIndex] === originArr[leftIndex]) {
        matchedCount++
      }


      if (compareArr[rightIndex] === originArr[rightIndex]) {
        matchedCount--
      }

      compareArr[rightIndex]++
      if (compareArr[rightIndex] === originArr[rightIndex]) {
        matchedCount++
      }
    }

    return matchedCount === 26
};

function transCharacter2Index(str, i) {
  return str.charCodeAt(i) - 'a'.charCodeAt(0)
}

checkInclusion('hello', 'ooolleoooleh')