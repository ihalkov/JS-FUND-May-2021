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

// console.log(countStringOccurrences("This is a word and it also is a sentence", "is"));

function stringIterator(str = '') {
    let result = str.split(' ');
    const iterator1 = result[Symbol.iterator]();

    // Once created, an iterator object can be iterated explicitly by repeatedly calling next().
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

removeOccurrences('ice', 'kicegiciceeb');