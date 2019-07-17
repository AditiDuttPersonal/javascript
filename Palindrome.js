const palindrome = str => {
    str = str.toLowerCase()
    let str1 = str.split('').reverse().join('')
    if(str1 === str) {
        console.log('true')
    } else {
        console.log('false')
    }

}

palindrome('abcd')