// LAB
function printChars(str) {
    for (const ch of str) {
        console.log(ch);
    }
}

function substring(string = '', startInd, count) {
    return string.substr(startInd, count);
}

function censoredWords(text = '', word = '') {
    // let censor = text.replace(word, '*'.repeat(word.length));
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }

    return text;
}

// console.log(censoredWords("A small sentence with some words small", "small"));

function countStringOccurrences(text = '', searched = '') {
    let arr = text.split(' ');
    let count = 0;

    for (const curr of arr) {
        if (curr === searched) {
            count += 1;
        }
    }
    return count;
}

// console.log(countStringOccurrences(
    // "This is a word and it also is a sentence", "is"));

function stringIterator(str = '') {
    let result = str.split(' ');
    const iterator1 = result[Symbol.iterator]();

    // Once created, an iterator object can be iterated
        // explicitly by repeatedly calling next().
    for (let i = 0; i < result.length; i++) {
        console.log(iterator1.next().value);
    }

    for (let i = 0; i < result.length; i++) {
        console.log(iterator1.next().value);
    }
}

// stringIterator('Et cillum do voluptate cillum ut cupidatat aliqua.');

function removeOccurrences(word = '', text = '') {
    while (text.includes(word)) {
        text = text.replace(word, '');
    }
    return text;
}

// removeOccurrences('ice', 'kicegiciceeb');


// EXERCISE
function revealWords(words = '', text = '') {
    wordsArr = words.split(', ');

    // word length
    for (const word of wordsArr) {
        // let wordLength = word.length;
        let stars = '*'.repeat(word.length);
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
    function isValid(word) {
        word = word.toLowerCase().slice(1);
        for (const ch of word) {
            if (ch.charCodeAt(0) < 97 || ch.charCodeAt(0) > 122) {
                return false;
            }

        }

        return true;
    };

    let words = str.split(' ');
    let output = [];
    for (const word of words) {
        // 97 to 122
        if (word.startsWith('#') && word.length > 1) {
            // let lowercaseWord = word.toLowerCase().slice(1);

            if (isValid(word)) {
                output.push(word.slice(1));
            }
        }
    }

    return output.join('\n');
}

// console.log(
//     modernTimesOfHashTag(
//         'Nowadays everyone uses # to tag a #special word in #socialMedia'
//     )
// );

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


// MORE EXERCISE
function valueOfAString([str, check]) {
    let sum = 0;

    for (const ch of str) {
        let chCode = ch.charCodeAt(0);
        if (check === 'UPPERCASE' && (chCode >= 65 && chCode <= 90)) {
            sum += chCode;
            continue;
        } else if (check === 'LOWERCASE' && (chCode >= 97 && chCode <= 122)) {
            sum += chCode;
        }
    }
    return `The total sum is: ${sum}`;
}

// console.log(valueOfAString(
//     ['HelloFromMyAwesomePROGRAM',
//     'LOWERCASE']
// ));
// console.log(valueOfAString(
//     ['AC/DC',
//     'UPPERCASE']
// ));

function serializeString([str = '']) {
    let journal = {};

    for (const ind in str) {
        let ch = str[ind];
        // if not journal with this ind,
            // create new arr and put the ind in the arr with given key
        journal[ch] = (journal[ch] || []).concat(ind);
    }
    let entries = Object.entries(journal);

    let output = [];
    for (const [ch, value] of entries) {
        output.push(`${ch}:${value.join('/')}`);
    }
    return output.join('\n');
}

// console.log(serializeString(
//     ['abababa']
// ));

// console.log(serializeString(
//     ['avjavamsdmcalsdm']
// ));

function deserializeString(input = []) {
    let result = [];
    for (const line of input) {
        if (line === 'end') {
            break;
        }

        let [ch, indexes] = line.split(':');
        indexes = indexes.split('/');
        result = fillIndexes(ch, indexes, result);
    }

    return result.join('');

    function fillIndexes(ch, indexes, update) {
        let arr = update.slice(0);
        for (const ind of indexes) {
            arr[ind] = ch;
        }
        return arr;
    }
}

// console.log(deserializeString([
// 'a:0/2/4/6',
// 'b:1/3/5',
// 'end'
// ]));
// console.log(deserializeString([
// 'a:0/3/5/11',
// 'v:1/4',
// 'j:2',
// 'm:6/9/15',
// 's:7/13',
// 'd:8/14',
// 'c:10',
// 'l:12',
// 'end'
// ]));

function asciiSumator([ch1, ch2, randomStr]) {
    let sum = 0;
    let begin = ch1.charCodeAt(0);
    let end = ch2.charCodeAt(0);
    if (begin > end) {
        let temp = begin;
        begin = end;
        end = temp;
    }

    for (const currCh of randomStr) {
        let chCode = currCh.charCodeAt(0);

        if (chCode > begin && chCode < end) {
            sum += chCode;
        }
    }
    return sum;
}

// console.log(asciiSumator([
//     '.',
//     '@',
//     'dsg12gr5653feee5'
// ]));

// console.log(asciiSumator([
//     '?',
//     'E',
//     '@ABCEF'
// ]));

// console.log(asciiSumator([
//     'a',
//     '1',
//     'jfe392$#@j24ui9ne#@$'
// ]));

function treasureFinder(input = []) {
    let numbers = input.shift().split(' ').map(Number);
    let output = [];

    for (const line of input) {
        if (line === 'find') {
            break;
        }

        let decryptedLine = decryptLine(line, numbers);
        let [type, coords] = getTreasure(decryptedLine);
        output.push(`Found ${type} at ${coords}`);
    }
    return output.join('\n');


    function getTreasure(str = '') {
        let type = getType(str);
        let coords = getCoords(str);

        return [type, coords];

        function getType(str) {
            let ind1 = str.indexOf('&');
            let ind2 = str.indexOf('&', ++ind1);
            let type = str.slice(ind1, ind2);
            return type;
        }

        function getCoords(str) {
            let ind1 = str.indexOf('<');
            let ind2 = str.indexOf('>');
            let coords = str.slice(++ind1, ind2);
            return coords;
        }
    }

    function decryptLine(str = '', seqOfNumbers = []) {
        let decrypted = '';
        let seqLength = seqOfNumbers.length;

        for (const ind in str) {
            let ch = str[ind];
            let chCode = ch.charCodeAt(0);
            // index of the number in seq
            let numInd = ind % seqLength;
            let newChCode = chCode - seqOfNumbers[numInd];
            decrypted += String.fromCharCode(newChCode);
        }
        return decrypted;
    }
}

// console.log(treasureFinder([
//     "1 2 1 3",
//     "ikegfp'jpne)bv=41P83X@",
//     "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
//     "find"
// ]));

function melrahShake([str = '', pattern = '']) {
    // 'shake off', 
        // remove first and last match of the pattern you find in the string
    let firstInd = str.indexOf(pattern);
    let lastInd = str.lastIndexOf(pattern);
    let output = [];

    while (pattern.length > 0 && firstInd >= 0 &&
        lastInd >= 0 && firstInd !== lastInd) {
        str = updateString(str, lastInd, pattern);
        pattern = updatePattern(pattern);
        output.push('Shaked it.');

        // update indexes
        firstInd = str.indexOf(pattern);
        lastInd = str.lastIndexOf(pattern);
    }

    // if (str.length > 0) {
    if (str.length > 0 || pattern.length === 0) {
        output.push('No shake.');
        output.push(str);
    }
    return output.join('\n');

    function updateString(str, lastInd, pattern) {
        let p1 = str.slice(0, lastInd);
        let p2 = str.slice(lastInd);
        p1 = p1.replace(pattern, '');
        p2 = p2.replace(pattern, '');
        str = p1 + p2;
        return str;
    }

    function updatePattern(pattern = '') {
        let ind = pattern.length / 2;
        let [p1, p2] = [pattern.slice(0, ind), pattern.slice(++ind)];
        return p1 + p2;
    }
}

// console.log(melrahShake([
//     'astaa baby',
//     'sta'
// ]));

// console.log(melrahShake([
//     'astalavista baby',
//     'sta'
// ]));

// console.log(melrahShake([
//     '##mtm!!mm.mm*mtm.#',
//     'mtm'
// ]));

// console.log(melrahShake([
//     'stastasasssastasta', 'sta'
// ]));

// 'sta sas ssa sta', 'sa'
