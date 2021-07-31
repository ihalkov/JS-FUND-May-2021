// LAB
function phoneBook(input = []) {
    let phoneBook = {};

    while (input.length > 0) {
        let [name, number] = input.shift().split(' ');
        phoneBook[name] = number;
    }

    // for (const name in phoneBook) {
    //     console.log(`${name} -> ${phoneBook[name]}`);
    // }

    Object.keys(phoneBook).forEach(key => console.log(`${key} -> ${phoneBook[key]}`));
}

// phoneBook([
//     'Tim 0834212554',
//     'Peter 0877547887',
//     'Bill 0896543112',
//     'Tim 0876566344'
// ]);

function printStorage(input = []) {
    let storage = new Map();

    for (const line of input) {
        let [item, qty] = line.split(' ').map(x => isNaN(x) ? x : Number(x));
        qty = Number(qty);

        if (storage.has(item)) {
            qty += storage.get(item);
        }

        storage.set(item, qty);
    }

    for (const [key, value] of storage) {
        console.log(`${key} -> ${value}`);
    }
}

// printStorage(
//     ['tomatoes 10',
//     'coffee 5',
//     'olives 100',
//     'coffee 40']
// );

function manageMeetings(input = []) {
    let meetings = new Map();

    for (const line of input) {
        let [day, name] = line.split(' ');

        if (meetings.has(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        }

        meetings.set(day, name);
        console.log(`Scheduled for ${day}`);
    }

    print(meetings);

    function print(assocArr) {
        for (const [day, name] of assocArr) {
            console.log(`${day} -> ${name}`);
        }
    }
}

// manageMeetings([
//     'Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim'
// ]);

function addressBook(input = []) {
    let storage = new Map();

    for (const line of input) {
        let [name, address] = line.split(':');

        storage.set(name, address);
    }

    // taking keys from Map()
    let iterator = Array.from(storage.keys());
    let sorted = iterator.sort((a, b) => a.localeCompare(b));

    print(sorted, storage);

    function print(arr, assocArr) {
        // taking key from the sorted array
        // print the value of that key from the storage
        for (const key of arr) {
            console.log(`${key} -> ${assocArr.get(key)}`);
        }
    }
}

// addressBook([
//     'Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd'
// ]);

function schoolGrades(input = []) {
    let register = new Map();

    for (const line of input) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (register.has(name)) {
            let currGrades = register.get(name).map(Number);
            grades.unshift(...currGrades);
        }

        register.set(name, grades);
    }

    let entries = Array.from(register.entries());
    let sorted = entries.sort(sortByAvg);

    print(sorted);

    function print(arr) {
        // print [key, value] pairs from sorted array entries
        for (const [key, value] of arr) {
            console.log(`${key}: ${value.join(', ')}`);
        }
    }

    function sortByAvg(a = [], b = []) {
        let gradA = a[1];
        let gradB = b[1];

        let aAvg = getAvg(gradA);
        let bAvg = getAvg(gradB);

        // if (aAvg < bAvg) {
        //     return -1;
        // } else if (aAvg > bAvg) {
        //     return 1;
        // }

        // return 0;
        return aAvg - bAvg;


        function getAvg(arr = []) {
            let length = arr.length;
            let sum = arr.reduce((acc, curr) => acc + curr);

            return sum / length;
        }
    }
}

// schoolGrades([
//     'Lilly 4 6 6 5',
//     'Tim 5 6',
//     'Tammy 2 4 3',
//     'Tim 6 6'
// ]);

function wordOccurrences(input = []) {
    let map = new Map();
    for (const word of input) {
        if (!map.has(word)) {
            map.set(word, 1);
            continue;
        }
        let currCount = map.get(word);
        map.set(word, ++currCount);
    }

    let entries = Array.from(map.entries());
    let sorted = entries.sort((a, b) => b[1] - a[1]);

    return print(sorted);

    function print(arr) {
        let output = [];
        for (const [key, value] of arr) {
            output.push(`${key} -> ${value} times`);
        }
        return output.join('\n');
    }
}

// console.log(
//     wordOccurrences(
//         ["Here", "is", "the", "first", "sentence",
//         "Here", "is", "another", "sentence",
//         "And", "finally", "the", "third", "sentence"]
//     )
// );

function printNeighborhoods(input = []) {
    let map = new Map();
    let neighborhoods = input.shift().split(', ');

    for (const each of neighborhoods) {
        map.set(each, []);
    }

    for (const line of input) {
        let [neighborhood, person] = line.split(' - ');

        if (map.has(neighborhood)) {
            // here we get the array and put the person in the back of it and is updated directly in the map
            // this work because we take the reference to the array
            map.get(neighborhood).push(person);
        }
    }

    let entries = Array.from(map.entries());
    // sort by count of inhabitants
    let sorted = entries.sort((a, b) => b[1].length - a[1].length);

    print(sorted);

    function print(arr) {
        for (const [neigh, ppl] of arr) {
            console.log(`${neigh}: ${ppl.length}`);
            for (const p of ppl) {
                console.log(`--${p}`);
            }
        }
    }
}

// printNeighborhoods([
//     'Abbey Street, Herald Street, Bright Mews',
//     'Bright Mews - Garry',
//     'Bright Mews - Andrea',
//     'Invalid Street - Tommy',
//     'Abbey Street - Billy'
// ]);


// EXERCISE
// with object
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

// with map
function wordsTracker(input = []) {
    let searched = input.shift().split(' ');
    let map = new Map();

    for (const word of searched) {
        map.Map(word, 0);
    }

    for (const word of input) {
        if (map.has(word)) {
            let count = map.get(word) + 1;
            map.set(word, count);
        }
    }

    let entries = Array.from(map.entries());
    let sorted = entries.sort((a, b) => b[1] - a[1]);

    print(sorted);

    function print(arr) {
        for (const [key, value] of arr) {
            console.log(`${key} - ${value}`);
        }
    }
}

// wordsTracker([
//     'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
//     , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ]);

function legendaryFarming(input = '') {
    let [map, legendary] = fillTheMap(input);

    let legendaryItem = getLegendaryItem(legendary);

    let allMaterials = Array.from(map.entries());
    let keyMaterial = allMaterials.splice(0, 3);
    let junk = allMaterials;

    let keySorted = keyMaterial.sort((a, b) => {
        let qtyDescSort = b[1] - a[1];
        if (qtyDescSort === 0) {
            return a[0].localeCompare(b[0]);
        }

        return qtyDescSort;
    });

    let junkSorted = junk.sort((a, b) => a[0].localeCompare(b[0]));

    print();

    function print() {
        console.log(`${legendaryItem} obtained!`);
        printArr(keySorted);
        printArr(junkSorted);

        function printArr(arr) {
            for (const kvp of arr) {
                console.log(`${kvp[0]}: ${kvp[1]}`);
            }
        }
    }

    function getLegendaryItem(legendary) {
        let item = '';
        switch (legendary) {
            case 'fragments':
                item = 'Valanyr';
                break;
            case 'shards':
                item = 'Shadowmourne';
                break;
            case 'motes':
                item = 'Dragonwrath';
                break;
        }

        return item;
    }

    function fillTheMap(input) {
        let map = new Map();
        let inventory = input.split(' ');
        let legendary = '';

        let keyItems = ['shards', 'fragments', 'motes'];

        // set key items first three
        map = setKeyItems(keyItems);

        for (let i = 0; i < inventory.length; i += 2) {
            let qty = Number(inventory[i]);
            let material = (inventory[i + 1]).toString().toLowerCase();

            if (map.has(material)) {
                let currQty = map.get(material);

                qty += currQty;
            }

            map.set(material, qty);

            if ((keyItems.includes(material)) && qty >= 250) {
                legendary = material;
                updateLegendary(material);
                break;
            }
        }

        return [map, legendary];

        function setKeyItems(keyItems) {
            for (const item of keyItems) {
                map.set(item, 0);
            }

            return map;
        }

        function updateLegendary(material) {
            let newQty = map.get(material) - 250;
            map.set(material, newQty);
        }
    }
}

// legendaryFarming(
//     '3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'
// );
// legendaryFarming(
//     '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
// );

function arenaTier(input = []) {
    let gladiatorPool = new Map();

    for (const line of input) {
        if (line === 'Ave Cesar') {
            break;
        }

        let splitChar = getSplitChar(line);
        if (splitChar === ' -> ') {
            gladiatorPool = addGladiator(line, splitChar, gladiatorPool);
        } else if (splitChar === ' vs ') {
            gladiatorPool = duel(line, splitChar, gladiatorPool);
        }
    }

    printResult();

    function sortTech(obj) {
        let entries = Object.entries(obj);
        let sorted = entries.sort((a, b) => {
            let skillDescSort = b[1] - a[1];
            if (skillDescSort === 0) {
                // name sort
                return a[0].localeCompare(b[0]);
            }

            return skillDescSort;
        });

        return sorted;
    }

    function sortGlads(map) {
        let entries = Array.from(map.entries());
        let sorted = entries.sort((a, b) => {
            let skillDescSort = b[1].totalSkill - a[1].totalSkill;
            if (skillDescSort === 0) {
                // name sort
                return a[0].localeCompare(b[0]);
            }

            return skillDescSort;
        });

        return sorted;
    }

    function printResult() {
        let sortedGlads = sortGlads(gladiatorPool);
        for (const glad of sortedGlads) {
            console.log(`${glad[0]}: ${glad[1].totalSkill} skill`);

            let sortedTechniques = sortTech(glad[1]);
            for (const techData of sortedTechniques) {
                if (techData[0] !== 'totalSkill') {
                    console.log(`- ${techData[0]} <!> ${techData[1]}`);
                }
            }
        }
    }

    function duel(line, splitChar, map) {
        let [glad1, glad2] = line.split(splitChar);

        if (!map.has(glad1) || !map.has(glad2)) {
            return map;
        }

        let glad1Tech = Object.keys(map.get(glad1));
        let glad2Tech = Object.keys(map.get(glad2));

        for (const tech of glad1Tech) {
            if (glad2Tech.includes(tech) && tech !== 'totalSkill') {
                map = fightThem(gladiatorPool, glad1, glad2);
                break;
            }
        }

        return map;
    }

    function fightThem(map, glad1, glad2) {
        let glad1TotSkill = map.get(glad1).totalSkill;
        let glad2TotSkill = map.get(glad2).totalSkill;

        if (glad1TotSkill > glad2TotSkill) {
            map.delete(glad2);
        } else if (glad2TotSkill > glad1TotSkill) {
            map.delete(glad1);
        }

        return map;
    }

    function addGladiator(str, ch, map) {
        let [name, technique, skill] = str.split(ch);
        skill = Number(skill);

        if (!map.has(name)) {
            map.set(name, {
                totalSkill: 0
            });
        }

        let currObj = map.get(name);
        currObj = updateCurrObj(currObj, technique, skill);
        map.set(name, currObj);
        return map;
    }

    function updateCurrObj(currObj, technique, skill) {
        if (!currObj.hasOwnProperty(technique)) {
            currObj[technique] = skill;
            currObj['totalSkill'] += skill;
        }

        let currSkill = currObj[technique];
        skill = updateSkill(skill, currSkill);

        currObj[technique] += skill;
        currObj['totalSkill'] += skill; // to correct
        return currObj;
    }

    function updateSkill(skill, currSkill) {
        let update = 0;
        if (skill > currSkill) {
            update = skill - currSkill;
        }

        return update;
    }

    function getSplitChar(str) {
        if (str.includes(' -> ')) {
            return ' -> ';
        } else if (str.includes(' vs ')) {
            return ' vs ';
        }
    }
}

// arenaTier([
//         'Pesho -> Duck -> 400',
//         'Julius -> Shield -> 150',
//         'Gladius -> Heal -> 200',
//         'Gladius -> Support -> 250',
//         'Gladius -> Shield -> 250',
//         'Pesho vs Gladius',
//         'Gladius vs Julius'
// ]);

// arenaTier([
//     'Pesho -> BattleCry -> 400',
//     'Gosho -> PowerPunch -> 300',
//     'Stamat -> Duck -> 200',
//     'Stamat -> Tiger -> 250',
//     'Ave Cesar'
// ]);

// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 400',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Dack -> 100',
//     // 'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ]);

// arenaTier([
//     'Pesho -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
// ]);

function oddOccurrences(input = '') {
    let words = input.toLowerCase().split(' ');
    let map = new Map();

    for (const word of words) {
        if (map.has(word)) {
            let value = map.get(word);
            map.set(word, ++value);
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

    let sortedCars = Array.from(parking).
        sort((a, b) => a.localeCompare(b));
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
    function fillTheList(guests = []) {
        let list = {
            vip: [],
            regular: []
        };

        for (const guest of guests) {
            let isVip = isFirstCharNumber(guest);
            if (isVip) {
                list.vip.push(guest);
                continue;
            }

            list.regular.push(guest);
        }

        return list;
    }

    function isFirstCharNumber(str = '') {
        let ch = str[0];
        let code = ch.charCodeAt(0);
        if (code >= 48 && code <= 57) {
            return true;
        }

        return false;
    }

    let partyInd = input.indexOf('PARTY');
    let [guests, came] = [input.slice(0, partyInd),
        input.slice(partyInd + 1)];

    let list = fillTheList(guests);
    let sortedList = [...list.vip, ...list.regular];

    for (const curr of came) {
        let ind = sortedList.indexOf(curr);
        sortedList.splice(ind, 1);
    }

    let notCome = sortedList.slice();
    let count = notCome.length;
    return `${count}\n${notCome.join('\n')}`;
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
            let [p, t] = line.length === 3 ? [line.substring(0, 2),
                line.substring(2)] : line.split('');
            let currValue = Number(power[p]) * Number(type[t]);
            sum += currValue;
        }

        return sum;
    }

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
            continue;
        } else if (!destinations[country].hasOwnProperty(town)) {
            destinations[country][town] = travelCost;
            continue;
        }
        
        let oldCost = destinations[country][town];
        if (oldCost > travelCost) {
            destinations[country][town] = travelCost;
        }
    }

    let countries = Object.keys(destinations)
        .sort((a, b) => a.localeCompare(b));
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
    function getOutput(companies) {
        let output = [];
        for (const line of companies) {
            let [company, employees] = [line[0], line[1]];
            let employeesArr = Array.from(employees)
                .map(x => `-- ${x}`);
            output.push(`${company}`);
            output.push(...employeesArr);
        }
        return output.join('\n');
    }

    let data = {};
    for (const line of input) {
        let [companyName, employeeId] = line.split(' -> ');
        if (!data.hasOwnProperty(companyName)) {
            data[companyName] = new Set();
        }
        data[companyName].add(employeeId);
    }

    let companies = Object.entries(data)
        .sort((a, b) => a[0].localeCompare(b[0]));
    return getOutput(companies);
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

// MORE EXERCISE
function garage(input = []) {
    function print(storage) {
        let output = [];
        for (const [garageNumber, cars] of storage) {
            output.push(`Garage № ${garageNumber}`);
            for (const car of cars) {
                output.push(`--- ${car.join(', ')}`);
            }
        }
        return output.join('\n');
    }

    function putNewCar(carProperties, number) {
        let currCarr = [];
        for (const curr of carProperties) {
            let [key, value] = curr.split(': ');
            currCarr.push(`${key} - ${value}`);
        }

        storage.get(number).push(currCarr);
        return storage;
    }

    function addGarage(number) {
        if (!storage.has(number)) {
            storage.set(number, []);
        }

        return storage;
    }

    let storage = new Map();
    for (const line of input) {
        let [number, carProperties] = line.split(' - ');
        storage = addGarage(number);
        carProperties = carProperties.split(', ');
        storage = putNewCar(carProperties, number);
    }

    return print(storage);
}

// console.log(garage(
//     [
//         '1 - color: blue, fuel type: diesel',
//         '1 - color: red, manufacture: Audi',
//         '2 - fuel type: petrol',
//         '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
//     ]
// ));

function armiesBetterVersion(input = []) {
    function result() {
        let output = [];
        for (const [gladName, currObj] of sortByTotal) {
            let total = currObj.totalCount;
            let objEntries = Object.entries(currObj);
            let sortEntries = objEntries.sort((a, b) => {
                return b[1] - a[1];
            });

            output.push(`${gladName}: ${total}`);
            for (const [army, count] of sortEntries) {
                if (army !== 'totalCount' && army !== 'increaseTotal') {
                    output.push(`>>> ${army} - ${count}`);
                }
            }
        }

        return output.join('\n');
    }

    function sortByTotalCount(map) {
        let entries = Array.from(map.entries());
        let sorted = entries.sort((a, b) => b[1].totalCount - a[1].totalCount);
        return sorted;
    }

    function addCount(line, armies) {
        if (line.includes('+')) {
            let [searchedArmy, count] = line.split(' + ');
            count = Number(count);

            for (const [glad, armyData] of armies.entries()) {
                // let glad = kvp[0];
                // let armyData = kvp[1];

                for (const currArmy in armyData) {
                    // let currArmy = key;
                    let armyCount = armyData[currArmy];
                    if (currArmy === searchedArmy) {
                        armyCount += count;
                        armies.get(glad)[currArmy] = armyCount;
                        armies.get(glad).increaseTotal(count);
                    }
                }
            }
        }

        return armies;
    }

    function addArmy(line, armies) {
        let [leader, str] = line.split(': ');
        if (armies.has(leader)) {
            let [armyName, armyCount] = str.split(', ');
            armyCount = Number(armyCount);
            armies.get(leader)[armyName] = armyCount;

            armies.get(leader).increaseTotal(armyCount);
        }

        return armies;
    }

    function defeated(line, armies) {
        if (line.includes('defeated')) {
            let leader = line.split(' defeated')[0];
            if (armies.has(leader)) {
                armies.delete(leader);
            }
        }

        return armies;
    }

    function addLeader(line, armies) {
        let leader = line.split(' arrives')[0];
        armies.set(leader, {
            totalCount: 0,
            increaseTotal: function (count) {
                this.totalCount += count;
            }
        });

        return armies;
    }

    let armies = new Map();
    for (const line of input) {
        if (line.includes('arrives')) {
            armies = addLeader(line, armies);
        } else if (line.includes(':')) {
            armies = addArmy(line, armies);
        } else if (line.includes('+')) {
            armies = addCount(line, armies);
        } else if (line.includes('defeated')) {
            armies = defeated(line, armies);
        }
    }

    let sortByTotal = sortByTotalCount(armies);
    return result();
}

// console.log(
//     armiesBetterVersion(
//         [
//             'Rick Burr arrives',
//             'Fergus: Wexamp, 30245',
//             'Rick Burr: Juard, 50000',
//             'Findlay arrives',
//             'Findlay: Britox, 34540',
//             'Wexamp + 6000',
//             'Juard + 1350',
//             'Britox + 4500',
//             'Porter arrives',
//             'Porter: Legion, 55000',
//             'Legion + 302',
//             'Rick Burr defeated',
//             'Porter: Retix, 3205'
//         ]
//     )
// );

function processComments(input = []) {
    let users = [];
    let articles = [];
    let comments = new Map();

    for (const line of input) {
        if (line.includes('user')) {
            users = addUser(line, users);
        } else if (line.includes('article')) {
            articles = addArticle(line, articles);
        } else if (line.includes('posts on')) {
            comments = storeComment(comments, line, users, articles);
        }
    }



    console.log();


    function printResult() {

    }

    function storeComment(comments, line, users, articles) {
        let [userName, post] = line.split(' posts on ');
        let [articleName, commentData] = post.split(': ');
        let [title, content] = commentData.split(', ');

        let condOne = hasUser(userName, users);
        let condTwo = hasArticle(articleName, articles);

        if (!condOne || !condTwo) {
            return comments;
        }

        comments = putComment(comments, userName, articleName, comments);
        return comments;


        function putComment(comments, userName, articleName, comments) {
            if (!comments.has(articleName)) {
                comments.set(articleName, {
                    totalComments: 0
                });
            }

            if (!comments.get(articleName).hasOwnProperty(userName)) {
                comments.get(articleName)[userName] = [];
            }

            comments.get(articleName)[userName].push([title, content]);
            comments.get(articleName)[totalComments] += 1;
            return comments;
        }

        function hasArticle(name, articles) {
            if (articles.includes(name)) {
                return true;
            }

            return false;
        }

        function hasUser(name, users) {
            if (users.includes(name)) {
                return true;
            }

            return false;
        }
    }

    function addArticle(line, articles) {
        let articleName = line.split('article ')[1];
        if (!articles.includes(articleName)) {
            articles.push(articleName);
        }

        return articles;
    }

    function addUser(line, users) {
        let userName = line.split('user ')[1];
        if (!users.includes(userName)) {
            users.push(userName);
        }

        return users;
    }
}

// processComments([
//     'user aUser123',
//     'someUser posts on someArticle: NoTitle, stupidComment',
//     'article Books',
//     'article Movies',
//     'article Shopping',
//     'user someUser',
//     'user uSeR4',
//     'user lastUser',
//     'uSeR4 posts on Books: I like books, I do really like them',
//     'uSeR4 posts on Movies: I also like movies, I really do',
//     'someUser posts on Shopping: title, I go shopping every day',
//     'someUser posts on Movies: Like, I also like movies very much'
// ]);