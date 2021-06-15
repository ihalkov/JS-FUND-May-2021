function replaceRepeatingChars(str = '') {
    let prevCh = str[0];
    let newStr = prevCh;
    for (let i = 1; i < str.length; i++) {
        let currCh = str[i];
        if (currCh !== prevCh) {
            newStr += currCh;
        }
        prevCh = currCh;
    }
    return newStr;
}

// console.log(replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'));
// console.log(replaceRepeatingChars('qqqwerqwecccwd'));