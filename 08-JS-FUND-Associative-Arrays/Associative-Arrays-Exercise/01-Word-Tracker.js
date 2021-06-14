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