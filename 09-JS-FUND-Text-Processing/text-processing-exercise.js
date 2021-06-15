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

function modernTimesOfHashTag(str = '') {
    let arr = str.split(' ');
    let validWords = [];
    arr.forEach(w => {
        if (w.includes('#') && isWord(w) && w.length > 1) {
            validWords.push(w.substring(1));
        }
    });
    return validWords.join('\n');

    // 97 to 122 lowercase
    function isWord(word) {
        word = word.toLowerCase();
        // start from ind 1, because 0 index should start with #
        for (let i = 1; i < word.length; i++) {
            let ch = word[i];
            if (ch < 97 || ch > 122) {
                return false;
            }
        }
        return true;
    }
}

// console.log(modernTimesOfHashTag(
//     'Nowadays everyone uses # to tag a #special word in #socialMedia'
// ));

function extractFile(str = '') {
    let backSlashInd = str.lastIndexOf('\\');
    let file = str.substring(backSlashInd + 1);
    let lastDotInd = file.lastIndexOf('.');
    let [name, extension] = [file.substring(0, lastDotInd), file.substring(lastDotInd + 1)];
    let output = [];
    output.push(`File name: ${name}`);
    output.push(`File extension: ${extension}`);
    return output.join('\n');
}

// console.log(extractFile('C:\\Internal\\training-internal\\Template.pptx'));
// console.log(extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs'));

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

function cutAndReverse(str = '') {
    let halfLength = str.length / 2;
    let [firstHalf, secondHalf] = [str.substring(0, halfLength), str.substring(halfLength)];
    firstHalf = firstHalf.split('').reverse().join('');
    secondHalf = secondHalf.split('').reverse().join('');
    return [firstHalf, secondHalf].join('\n');
}

// console.log(cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT'));
// console.log(cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI'));