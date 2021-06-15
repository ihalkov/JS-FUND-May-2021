function revealWords(str1, str2) {
    let givenWords = str1.split(', ');
    let textArr = str2.split(' ');
    let newText = textArr.slice();

    textArr.forEach((word, tempInd) => {
        let template = '*'.repeat(word.length);
        if (word === template) {
            newText = replaceWord(givenWords, newText, template, tempInd);
        }
    });

    function replaceWord(givenWords, newText, template, tempInd) {
        for (const currWord of givenWords) {
            if (currWord.length === template.length) {
                newText[tempInd] = currWord;
                break;
            }
        }
        return newText;
    }
    return newText.join(' ');
}

// console.log(revealWords(
//     'great',
//     'softuni is ***** place for learning new programming languages'
// ));
// console.log(revealWords(
//     'great, learning',
//     'softuni is ***** place for ******** new programming languages'
// ));