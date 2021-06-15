function stringSubstring(word, text) {
    word = word.toLowerCase();
    let arr = text.toLowerCase().split(' ');
    let found = false;
    arr.forEach(x => {
        if (x === word) {
            found = true;
            return;
        }
    });

    if (found) {
        return word;
    }
    return `${word} not found!`;
}

// console.log(stringSubstring(
//     'javascript',
//     ' is the best programming language JavaScript'
// ));
// console.log(stringSubstring(
//     'python',
//     'JavaScript is the best programming language'
// ));
// console.log(stringSubstring(
//     '',
//     'JavaScript is the best programming language'
// ));