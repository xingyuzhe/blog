var reverseWords = function(str) {
    str = str.replace(/^\s|\s$/g, '')
    str = str.replace(/\s\s/g, ' ')

    return str.split(' ').reverse().join(' ')
};