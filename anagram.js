const anagram = (word1, word2) => {
    var str1 = word1.toLowerCase().split('').sort().join('').trim();
    var str2 = word2.toLowerCase().split('').sort().join('').trim();
    
    if (str1 === str2) {
        console.log('true')
    } else {
        console.log('false')
    }
}

anagram('abcd','cdbj')