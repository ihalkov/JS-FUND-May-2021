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
    let list = fillTheList(guests);
    let sortedList = [...list.vip, ...list.regular];

    for (const curr of came) {
        let ind = sortedList.indexOf(curr);
        sortedList.splice(ind, 1);
    }

    let notCome = sortedList.slice();
    let count = notCome.length;
    return `${count}\n${notCome.join('\n')}`;

    function fillTheList(guests = []) {
        let list = {
            vip: [],
            regular: []
        };

        for (const guest of guests) {
            let isVip = isNumber(guest[0]);
            if (isVip) {
                list.vip.push(guest);
            } else {
                list.regular.push(guest);
            }
        }
        return list;
    }

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
    let playersData = getPlayerData(input);
    let dataEntries = Object.entries(playersData);
    let players = {};
    for (const line of dataEntries) {
        let [name, dataSet] = [line[0], line[1]];
        let totalValue = getTotalValue(dataSet);
        players[name] = Number(totalValue);
    }

    let playersEntries = Object.entries(players);
    let output = [];
    for (const [name, value] of playersEntries) {
        output.push(`${name}: ${value}`);
    }
    return output.join('\n');

    function getPlayerData(input = []) {
        let obj = {};
        for (const line of input) {
            let [name, data] = line.split(': ');
            data = data.split(', ');

            if (!obj.hasOwnProperty(name)) {
                obj[name] = new Set();
            }
            data.forEach(item => obj[name].add(item));
        }
        return obj;
    }

    function getTotalValue(set) {
        let dataArr = Array.from(set);
        let power = {
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        };
        let type = {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        };

        let sum = 0;
        for (const line of dataArr) {
            let [p, t] = line.length === 3 ? [line.substring(0, 2), line.substring(2)] : line.split('');
            let currValue = Number(power[p]) * Number(type[t]);
            sum += currValue;
        }
        return sum;
    }
}

// console.log(cardGame(
//     [
//         'Peter: 2C, 4H, 9H, AS, QS',
//         'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//         'Andrea: QH, QC, QS, QD',
//         'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//         'Andrea: QH, QC, JS, JD, JC',
//         'Peter: JD, JD, JD, JD, JD, JD'
//     ]
// ));

function travelTime(input = []) {
    let destinations = {};

    for (const line of input) {
        let [country, town, travelCost] = line.split(' > ');
        travelCost = Number(travelCost);
        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
            destinations[country][town] = travelCost;
        } else if (!destinations[country].hasOwnProperty(town)) {
            destinations[country][town] = travelCost;
        }
        let oldCost = destinations[country][town];
        if (oldCost > travelCost) {
            destinations[country][town] = travelCost;
        }
    }

    let countries = Object.keys(destinations).sort((a, b) => a.localeCompare(b));
    let output = [];
    for (const country of countries) {
        let towns = destinations[country];
        let entries = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        let townsStrings = entries.map(x => `${x[0]} -> ${x[1]}`);
        output.push(`${country} -> ${townsStrings.join(' ')}`);
    }
    return output.join('\n');
}

// console.log(travelTime(
//     [
//         "Bulgaria > Sofia > 500",
//         "Bulgaria > Sopot > 800",
//         "France > Paris > 2000",
//         "Albania > Tirana > 1000",
//         "Bulgaria > Sofia > 200"
//     ]
// ));

function companyUsers(input = []) {
    let data = {};
    for (const line of input) {
        let [companyName, employeeId] = line.split(' -> ');
        if (!data.hasOwnProperty(companyName)) {
            data[companyName] = new Set();
        }
        data[companyName].add(employeeId);
    }

    let companies = Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]));
    return getOutput(companies);

    function getOutput(companies) {
        let output = [];
        for (const line of companies) {
            let [company, employees] = [line[0], line[1]];
            let employeesArr = Array.from(employees).map(x => `-- ${x}`);
            output.push(`${company}`);
            output.push(...employeesArr);
        }
        return output.join('\n');
    }
}

// console.log(companyUsers(
//     [
//         'SoftUni -> AA12345',
//         'SoftUni -> BB12345',
//         'Microsoft -> CC12345',
//         'HP -> BB12345'
//     ]
// ));
// console.log(companyUsers(
//     [
//         'SoftUni -> AA12345',
//         'SoftUni -> CC12344',
//         'Lenovo -> XX23456',
//         'SoftUni -> AA12345',
//         'Movement -> DD11111'
//     ]
// ));

function aMinerTask(input = []) {
    let stock = {};
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let qty = Number(input[i + 1]);

        if (!stock.hasOwnProperty(resource)) {
            stock[resource] = 0;
        }
        stock[resource] += qty;
    }

    let entries = Object.entries(stock).map(x => `${x[0]} -> ${x[1]}`);
    return entries.join('\n');
}

// console.log(aMinerTask(
//     [
//         'Gold',
//         '155',
//         'Silver',
//         '10',
//         'Copper',
//         '17'
//     ]
// ));
// console.log(aMinerTask(
//     [
//         'gold',
//         '155',
//         'silver',
//         '10',
//         'copper',
//         '17',
//         'gold',
//         '15'
//     ]
// ));