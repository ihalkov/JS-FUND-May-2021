function pascalCaseSplitter(str = '') {
    let strLength = str.length;
    let ch = str[0];
    let currWord = ch;
    let words = [];
    for (let i = 1; i < strLength; i++) {
        ch = str[i];

        if (ch === ch.toUpperCase()) {
            words.push(currWord);
            currWord = '';
        }
        currWord += ch;
    }
    words.push(currWord);
    return words.join(', ');
}

// console.log(pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'));
// console.log(pascalCaseSplitter('HoldTheDoor'));
// console.log(pascalCaseSplitter('ThisIsSoAnnoyingToDo'));