function wordsTracker(input = []) {
    let searchedWords = input.shift().split(' ');
    let countWords = createCountObj(searchedWords);
    let allWords = input.slice();

    for (let curr of allWords) {
        if (countWords.hasOwnProperty(curr)) {
            countWords[curr] += 1;
        }
    }

    let sort = Object.entries(countWords).sort((a, b) => b[1] - a[1]);
    let output = [];
    sort.forEach(line => output.push(`${line[0]} - ${line[1]}`));
    return output.join('\n');

    function createCountObj(searchedWords) {
        let obj = {};
        for (const word of searchedWords) {
            obj[word] = 0;
        }
        return obj;
    }
}

// another way
function wordsTracker(array) {
    let wantedWords = array.shift().split(' ');
    let wantedWordsCounts = {};
    wantedWords.forEach(word => wantedWordsCounts[word] = 0);
    array.forEach(word => word in wantedWordsCounts && wantedWordsCounts[word]++);
    wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
    wantedWords.forEach(word => console.log(`${word} - ${wantedWordsCounts[word]}`));
}

// console.log(wordsTracker(
//     [
//         'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
//     ]
// ));

function oddOccurrences(input = '') {
    let words = input.toLowerCase().split(' ');
    let map = new Map();

    for (const word of words) {
        if (map.has(word)) {
            let value = map.get(word);
            map.set(word, value + 1);
        } else {
            map.set(word, 1);
        }
    }

    let entries = Array.from(map);
    let output = [];
    for (const [key, value] of entries) {
        if (value % 2 !== 0) {
            output.push(key);
        }
    }

    return output.join(' ');
}

// console.log(oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));

function piccolo(input = []) {

    return;
}

console.log(piccolo(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ]
));
console.log(piccolo(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'OUT, CA1234TA'
    ]
));