function revealWords(words = '', text = '') {
    wordsArr = words.split(', ');

    // word length
    for (const word of wordsArr) {
        let wordLength = word.length;
        let stars = '*'.repeat(wordLength);
        text = text.replace(stars, word);
    }
    return text;
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
    let words = str.split(' ');
    let output = [];
    for (const word of words) {
        // 97 to 122
        if (word.startsWith('#') && word.length > 1) {
            let lowercaseWord = word.toLowerCase().slice(1);
            let isValid = (word) => {
                for (const ch of word) {
                    if (ch.charCodeAt(0) < 97 || ch.charCodeAt(0) > 122) {
                        return false;
                    }
                }
                return true;
            };

            if (isValid(lowercaseWord)) {
                output.push(word.slice(1));
            }
        }
    }
    return output.join('\n');
}

// console.log(modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia'));

function extractFile(str = '') {
    let path = str.slice();

    let pathArr = path.split('\\');
    let file = pathArr[pathArr.length - 1];
    let splitInd = file.lastIndexOf('.');
    let name = file.slice(0, splitInd);
    let extension = file.slice(++splitInd);

    return `File name: ${name} \nFile extension: ${extension}`;
}

// console.log(extractFile('C:\\Internal\\training-internal\\template.bak.pptx'));
// console.log(extractFile('C:\\Internal\\training-internal\\Template.pptx'));
// console.log(extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs'));

// function stringSubstring(word = '', text = '') {
//     text = text.toLowerCase();
//     word = word.toLowerCase();
//     if (text.indexOf(word) >= 0 && word !== ' ') {
//         return word;
//     }
//     return `${word} not found!`;
// }

function stringSubstring(word = '', text = '') {
    word = word.toLowerCase();
    text = text.toLowerCase();
    let words = text.split(' ');

    for (const w of words) {
        if (w === word) {
            return word;
        }
    }
    // if (text.indexOf(word) >= 0) {
    //     return word;
    // }
    return `${word} not found!`;
}

function stringSubstring(word = '', text = '') {
    word = word.toLowerCase();
    text = text.toLowerCase();

    return word.split(' ').find(key => key === word) ? word : `${word} not found`;
}
// console.log(stringSubstring('', 'JavaScript   is the best programming language'));
// console.log(stringSubstring('javascript', 'JavaScript is the best programming language'));
// console.log(stringSubstring('', 'JavaScript     is the best    programming language'));
// console.log(stringSubstring('python', 'JavaScript is the best programming language'));

function replaceRepeatingChars(str = '') {
    let output = '';
    let oldCh = '';

    for (const ch of str) {
        if (oldCh !== ch) {
            oldCh = ch;
            output += ch;
        }
    }
    return output;
}

// console.log(replaceRepeatingChars(''));
// console.log(replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'));
// console.log(replaceRepeatingChars('qqqwerqwecccwd'));

function pascalCaseSplitter(text = '') {
    text = text.trim();
    let words = getSplittedWords(text);
    return words.join(', ');

    function getSplittedWords(str) {
        let splitted = [];
        // because later should start from 0, and we updated it if statement below
        let wordInd = -1;
        // letter.toLowerCase() !== letter
        // output += ', ' + string[i]
        // else
        // output += string[i]
        for (const ch of str) {
            let chCode = ch.charCodeAt(0);
            if (chCode >= 65 && chCode <= 90) {
                wordInd++;
                splitted[wordInd] = ch;
            } else {
                splitted[wordInd] += ch;
            }
        }
        return splitted;
    }
}


// console.log(pascalCaseSplitter('   Hold   '));
// console.log(pascalCaseSplitter('   HoldTheDoor   '));

// console.log(pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'));
// console.log(pascalCaseSplitter('HoldTheDoor'));
// console.log(pascalCaseSplitter('ThisIsSoAnnoyingToDo'));

function cutAndReverse(str = '') {
    str = str.split('').reverse().join('');
    let halfLength = str.length / 2;
    let firstHalf = str.slice(0, halfLength);
    let secondHalf = str.slice(halfLength);

    return `${secondHalf}\n${firstHalf}`;
}

// console.log(cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT'));
// console.log(cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI'));

function hardWords(input = []) {
    // ['', []]
    let letter = input[0];
    let unknownWords = input[1];

    // find the holes and add the proper words
    // find the beginning index of hole
    let holeInd = letter.indexOf('_');
    while (holeInd >= 0) {
        let getHole = (ind) => {
            let hole = '';
            for (let i = ind; i < letter.length; i++) {
                if (letter[i] !== '_') {
                    break;
                }
                hole += '_';
            }
            return hole;
        };

        let currHole = getHole(holeInd);
        let holeLength = currHole.length;
        let word = findCorrectWord(unknownWords, holeLength);
        letter = letter.replace(currHole, word);
        holeInd = letter.indexOf('_');
    }
    return letter;

    function findCorrectWord(words = [], givenLength) {
        for (const word of words) {
            let wordLength = word.length;
            if (wordLength === givenLength) {
                return word;
            }
        }
    }
}

// console.log(hardWords([
//     'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
//     ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
// ]));

function passwordGenerator(input = []) {
    // The first two strings will be at least 10 characters long, the third one will be one word.
    let concatStr = input[0] + input[1];
    let word = input[2];

    let wordStr = getWordStr(concatStr, word);
    let password = getPassword(concatStr, wordStr);
    return `Your generated password is ${password}`;

    function getWordStr(concatStr, word) {
        let concatStrLength = concatStr.length;
        let wordLength = word.length;
        let repeats = Math.ceil(concatStrLength / wordLength);
        return word.repeat(repeats);
    }

    function getPassword(concatStr, wordStr) {
        let password = concatStr;
        let ind = 0;
        for (const ch of concatStr) {
            if (checkVowel(ch)) {
                password = password.replace(ch, wordStr[ind].toUpperCase());
                ind += 1;
            }
        }
        return password.split('').reverse().join('');
    }

    function checkVowel(ch) {
        let code = ch.charCodeAt(0);
        if (code === 97 || code === 101 || code === 105 || code === 111 || code === 117 ||
            code === 65 || code === 69 || code === 73 || code === 79 || code === 85) {
            return true;
        }
        return false;
    }
}

// console.log(passwordGenerator([
//     'ilovepizza', 'ihatevegetables',
//     'orange'
// ]));
// console.log(passwordGenerator([
//     'easymoneyeazylife', 'atleasttencharacters', 'absolute'
// ]));
// console.log(passwordGenerator([
//     'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
// ]));


function letterChangeNumbers(input = '') {
    let totalSum = 0;
    let strSeq = input.split(' ');

    for (const currStr of strSeq) {
        if (currStr !== '') {
            totalSum += getResult(currStr);
        }
    }
    return totalSum.toFixed(2);

    function getResult(str) {
        let ch1 = str[0];
        let lastInd = str.length - 1;
        let num = Number(str.slice(1, lastInd));
        let ch2 = str[lastInd];

        let result = calcFirst(ch1, num);
        result = calcSecond(ch2, result);
        return result;

        function calcFirst(ch, num) {
            let isUppercase = checkForUppercase(ch);
            let chPos = ch.toLowerCase().charCodeAt(0) - 96;

            if (isUppercase) {
                return num / chPos;
            }
            return num * chPos;
        }

        function calcSecond(ch, resultedNum) {
            let isUppercase = checkForUppercase(ch);
            let chPos = ch.toLowerCase().charCodeAt(0) - 96;

            if (isUppercase) {
                return resultedNum - chPos;
            }
            return resultedNum + chPos;
        }

        function checkForUppercase(ch) {
            let chCode = ch.charCodeAt(0);
            if (chCode >= 65 && chCode <= 90) {
                return true;
            } else if (chCode >= 97 && chCode <= 122) {
                return false;
            }
        }
    }
}


// console.log(letterChangeNumbers('A12b s17G'));
// console.log(letterChangeNumbers('  P34562Z q2576f      H456z'));
// console.log(letterChangeNumbers('P34562Z q2576f   H456z'));
// console.log(letterChangeNumbers('a1A'));