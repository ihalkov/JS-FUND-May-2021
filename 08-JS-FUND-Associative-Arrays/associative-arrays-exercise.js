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
    let parking = new Set();
    for (const line of input) {
        let [command, plateNumber] = line.split(', ');
        if (command === 'IN') {
            parking.add(plateNumber);
            continue;
        }
        parking.delete(plateNumber);
    }

    if (parking.size === 0) {
        return 'Parking Lot is Empty';
    }

    let sortedCars = Array.from(parking).sort((a, b) => a.localeCompare(b));
    return sortedCars.join('\n');
}

// console.log(piccolo(
//     [
//         'IN, CA2844AA',
//         'IN, CA1234TA',
//         'OUT, CA2844AA',
//         'IN, CA9999TT',
//         'IN, CA2866HI',
//         'OUT, CA1234TA',
//         'IN, CA2844AA',
//         'OUT, CA2866HI',
//         'IN, CA9876HH',
//         'IN, CA2822UU'
//     ]
// ));
// console.log(piccolo(
//     [
//         'IN, CA2844AA',
//         'IN, CA1234TA',
//         'OUT, CA2844AA',
//         'OUT, CA1234TA'
//     ]
// ));

function partyTime(input = []) {
    let partyInd = input.indexOf('PARTY');
    let [guests, came] = [input.slice(0, partyInd), input.slice(partyInd + 1)];
    let list = {
        vip: [],
        regular: []
    };

    for (const guest of guests) {
        if (!came.includes(guest)) {
            let isVip = isNumber(guest[0]);
            if (isVip) {
                list.vip.push(guest);
            } else {
                list.regular.push(guest);
            }
        }
    }

    let output = [...list.vip, ...list.regular];
    let count = output.length;
    return `${count}\n${output.join('\n')}`;

    function isNumber(ch = '') {
        let code = ch.charCodeAt(0);
        if (code >= 48 && code <= 57) {
            return true;
        }
        return false;
    }
}

// console.log(partyTime(
//     [
//         '7IK9Yo0h',
//         '9NoBUajQ',
//         'Ce8vwPmE',
//         'SVQXQCbc',
//         'tSzE5t0p',
//         'PARTY',
//     ]
// ));
// console.log(partyTime(
//     [
//         '7IK9Yo0h',
//         '9NoBUajQ',
//         'Ce8vwPmE',
//         'SVQXQCbc',
//         'tSzE5t0p',
//         'PARTY',
//         '9NoBUajQ',
//         'Ce8vwPmE',
//         'SVQXQCbc'
//     ]
// ));
// console.log(partyTime(
//     [
//         'm8rfQBvl',
//         'fc1oZCE0',
//         'UgffRkOn',
//         '7ugX7bm0',
//         '9CQBGUeJ',
//         '2FQZT3uC',
//         'dziNz78I',
//         'mdSGyQCJ',
//         'LjcVpmDL',
//         'fPXNHpm1',
//         'HTTbwRmM',
//         'B5yTkMQi',
//         '8N0FThqG',
//         'xys2FYzn',
//         'MDzcM9ZK',
//         'PARTY',
//         '2FQZT3uC',
//         'dziNz78I',
//         'mdSGyQCJ',
//         'LjcVpmDL',
//         'fPXNHpm1',
//         'HTTbwRmM',
//         'B5yTkMQi',
//         '8N0FThqG',
//         'm8rfQBvl',
//         'fc1oZCE0',
//         'UgffRkOn',
//         '7ugX7bm0',
//         '9CQBGUeJ'
//     ]
// ));

function cardGame(input = []) {
    // {personName}: {PT, PT, PT,… PT}
    // Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. 
    // The name can contain any ASCII symbol except ':'
    // A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. 
    // The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. 
    // Powers 2 to 10 have the same value and J to A are 11 to 14. 
    // Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).

    // Finally print out the total value each player has in his hand in the format:
    // {personName}: {value}

    let playersData = {};
    for (const line of input) {
        let [name, data] = line.split(': ');
        let totalValue = getTotalValue(data);

        //  first collect all the data for each player, then find total

        // if (playersData.hasOwnProperty(name)) {
        //     playersData[name] += totalValue;
        // }
        return;
    }
    return;

    function getTotalValue(str = '') {
        let dataArr = str.split(', ');
        let power = {
            '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
        };
        let type = {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        };

        let values = new Set();
        for (const line of dataArr) {
            let [p, t] = line.split('');
            let currValue = power[p] * type[t];
            values.add(currValue);
        }
        let total = Array.from(values).reduce((a, c) => a + c);
        return total;
    }
}

console.log(cardGame(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
));