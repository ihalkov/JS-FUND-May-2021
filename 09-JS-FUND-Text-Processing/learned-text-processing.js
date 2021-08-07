// strings in JS
// Manipulating strings
    // searching, substring
    // replace, trim
    // split
    // more functions
    // strings are enclosed in three type of quotes ("", '', ``)

    let string = "K'vo staa";
    let quote = '"Mudra misyul" Nqkoj si';

    // slowest
    let interpolation = `${string} - ${quote}`;

    // don't
    let text = `Hello World`;

    // concatenation operator '+' one of the sides should be string
    
    // Immutable
    text = 'K\'vo staa';
    text[1] = 'a';

    // returning the same value is not changed
    console.log(text);
    
    // think of string like value type
    // when add to the string, we rewrite it
    
    // Processing each of the items in a collection is a very common operation.
    // JavaScript provides a number of ways of iterating over a collection,
        // from simple for loops to map() and filter().

    // Iterators
        // In JavaScript an iterator is an object which defines a sequence
            // and potentially a return value upon its termination.
        // Once created, an iterator object can be iterated explicitly
            // by repeatedly calling next().

        // Iterating over an iterator is said to consume the iterator,
            // because it is generally only possible to do once.
        // After a terminating value has been yielded additional calls to next()
            // should continue to return {done: true}.
        // The most common iterator in JavaScript is the Array iterator,
            // which returns each value in the associated array in sequence.
        // While it is easy to imagine
            // that all iterators could be expressed as arrays,
            // this is not true.
        // Arrays must be allocated in their entirety,
            // but iterators are consumed only as necessary.
        // Because of this, iterators can express sequences of unlimited size,
            // such as the range of integers between 0 and Infinity.

        function stringIterator(str = '') {
            let result = str.split(' ');
            const iterator1 = result[Symbol.iterator]();
        
            // Once created,
                // an iterator object can be iterated explicitly
                // by repeatedly calling next().
            for (let i = 0; i < result.length; i++) {
                console.log(iterator1.next().value);
            }
        }
        
        // stringIterator('Et cillum do voluptate cillum ut cupidatat aliqua.');


        // Concat
        let lines = ['Hello', ' ', 'World', '!'];

        let message = ''.concat(...lines);
        console.log(message);

// indexOf() find first found, if not in string return -1
text = 'Az sym bylgarche obicham sym bylgarche';

// indexOf('searched word', startInd);
// if not given default is 0

// if (text.indexOf('s') >= 0) {
//      console.log('ima');
// } else {
//     console.log('nqma');
// }
// let index = text.indexOf('sym', 4);
// console.log(index); // -1

let index = text.indexOf('sym');
while (index >= 0) {
    console.log(index);
    // gives next index
    index = text.indexOf('sym', ++index);
}

// replace(search, replacement);
while (text.indexOf('bylgarche') >= 0) {
    text = text.replace('bylgarche', 'evropeiche');

}
console.log(text);

function removeOccurrences(word = '', text = '') {
    while (text.indexOf(word) >= 0) {
        text = text.replace(word, '');
    }
    // while (text.includes(word)) {
    //     text = text.replace(word, '');
    // }
    return text;
}

// removeOccurrences('ice', 'kicegiciceeb');
console.log('*'.repeat(5));

// Trim
// Trim start, Trim end
let username = '   Pesho    ';
console.log('|' + username + '|');
console.log('|' + username.trim() + '|');

// startsWith, endsWith
username = 'mr. Pesho';
// username.startsWith
if (username.endsWith('o')) {
    console.log(username);
}

// slice(begin, end)

// padStart, padEnd
let num = '101';
// padding just to fill to given length
console.log(num.padStart(8, 0));
console.log(num.padEnd(8, 0));

// if not journal with this ind,
    // create new arr and put the ind in the arr with given key
    journal[ch] = (journal[ch] || []).concat(ind);


// let seqLength = seq.length;

//     let ch = str[ind];
//     let chCode = ch.charCodeAt(0);

    // index of the number in seq
    let numInd = ind % seqLength;

    // str.indexOf(ch);
    // str.lastIndexOf(ch);

// strings are arr of character
// think of string like array
// you can always split and use array than string

let str = 'C:\\Projects\\Data-Structures\\LinkedList.cs';
let [file, ext] = str.substring(str.lastIndexOf('\\')+1).split('.');

// LinkedList cs
console.log(file + ' ' + ext);

function stringSubstring(word = '', text = '') {
    word = word.toLowerCase();
    text = text.toLowerCase();

    return word.split(' ').find(key => key === word) ?
        word : `${word} not found`;
}

// console.log(stringSubstring('javascript',
//     'JavaScript is the best programming language'));

console.log(filterExample());

function filterExample() {
    let str = 'aaaaabbbbbcddddeeeedsssaaa';
    let edited = str.split('').filter((ch, ind, arr) =>
        ch !== arr[ind + 1]).join('');
    return edited;
}

// letter.toLowerCase() !== letter
// output += ', ' + string[i]
// else
// output += string[i]

// use functions from older simpler task, to do the hard ones

// strings are immutable (read-only) sequences of characters

// let ch = str[2];
// ch = str.chartAt(2);
// Both declarations are the same

// text.replace(); replaces the first occurrence

function censoredWords(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    return text;
}

// startsWith()
// endsWith()

// padStart()
// padEnd()

function substring(string = '', startInd, count) {
    return string.substr(startInd, count);
}


// replace example
function censoredWords(text = '', word = '') {
    // let censor = text.replace(word, '*'.repeat(word.length));
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }

    return text;
}

function removeOccurrences(word = '', text = '') {
    while (text.includes(word)) {
        text = text.replace(word, '');
    }
    return text;
}

// removeOccurrences('ice', 'kicegiciceeb');


// next()
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

function stringSubstring(word, text) {
    word = word.toLowerCase();
    let arr = text.toLowerCase().split(' ');
    // let found = false;
    arr.forEach(x => {
        if (x === word) {
            // found = true;
            return word;
        }
    });

    // if (found) {
    //     return word;
    // }
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

function stringSubstring(word = '', text = '') {
    word = word.toLowerCase();
    text = text.toLowerCase();

    return word.split(' ').find(key => key === word) ?
        word : `${word} not found`;
}

// console.log(
//     stringSubstring(
//         '', 'JavaScript   is the best programming language'
//     )
// );

// console.log(
//     stringSubstring(
//         'javascript', 'JavaScript is the best programming language'
//     )
// );

// console.log(
//     stringSubstring(
//         '', 'JavaScript     is the best    programming language'
//     )
// );

// console.log(
//     stringSubstring(
//         'python', 'JavaScript is the best programming language'
//     )
// );

function replaceRepeatingChars(str = '') {
    let prevCh = str[0];
    let newStr = prevCh;
    // here is creating always new variable in the loop
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


function replaceRepeatingChars(str = '') {
    // try to assign default variables to not be confusing
    let output = '';
    let oldCh = '';

    // here not, but ch is also new variable
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

function pascalCaseSplitter(str = '') {
    let strLength = str.length;
    let ch = str[0];
    let currWord = ch;
    let words = [];
    for (let i = 1; i < strLength; i++) {
        ch = str[i];
        // here is not so good,
            // because first is making the char to uppercase
            // and then checking it
        // when is with chCode, first is finding charCode and then checking,
            // which is the same :D
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