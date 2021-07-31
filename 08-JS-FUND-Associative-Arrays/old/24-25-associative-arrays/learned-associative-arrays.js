// key => value pairs
    // key - integer or string
    // value - can be any type, even arr, object, etc.

// let object = {
//     name: 'Pesho',
//     age: 20
// };

// let object = {};
// object.name = 'Pesho';
// object.age = 20;

// when we want dynamically to update
// let object = {};
// object['name'] = 'Pesho';
// object['age'] = 20;
// console.log(object);

let assocArr = {
    name: 'Pesho',
    age: 20
};

// The syntax for accessing the value of a key is:
person['age'];
// or
assocArr[key];

let age = assocArr[key];

// Iteration with for-in only for objects, with (for-of is not possible)
    // we have delete here like in maps but is very slow performance
        // and is bad practice

    for (const key in assocArr) {
        console.log(`${key}: ${assocArr[key]}`);
    }

    // forEach
        // is iteration through arrays
        // its not like map, because map is projected to another array,
            // here we just iterate through arr
        // is not breakable
        // we have to go through all of the elements

// if the name of the key is with two words separated by space, or some symbol,
    // they have to be called with parentheses
Object.entries(assocArr).forEach(el => {
    console.log(`${el[0]}: ${el[1]}`);
});

Object.keys(assocArr).forEach(key => {
    console.log(`${key}: ${assocArr[key]}`);
});

// Destructuring
    let [name, number] = input.shift().split(' ');

// Map()
    // Storing Key-Value pairs
    // stores its elements in insertion order
    // a for-of loop returns an array of [key, value] for each iteration
    // with objects we can only for-in
    // pure JS objects are like Maps in that both let you:
        // set keys to values
        // delete keys
        // detect whether something is stored in a key
        // let phoneBook = new Map();
        
        // like object has a name
        // if (obj.name) {
        //     console.log(true);
        // }
        
        // phoneBook.set('Pesho', '0888664466'); with set we put in map
        // with get we have
        // console.log(phoneBook.get('Pesho'));
        // is it phoneBook a Map()
            // console.log(phoneBook instanceof Map);
        // Map() is key sensitive
        // phoneBook.delete('Pesho');
        // console.log(phoneBook);
        // console.log(phoneBook.clear()); delete all info
        
        // let entries = phoneBook.entries();
        // // direct destructuring
        // for (const [name, phone] of phoneBook) {
        //     console.log(name + ' ' + phone);
        // }

        // map is storing the data in the way its added
            // in objects we can store (string and number)
            // here we can use another types
        // map is used very rarely
        // let iterable = Array.from(phoneBook.entries());
        // console.log(iterable);
        // from map to object, middle man is array

// Set is like an array
    // store unique values of any type, whether primitive values or object references
    // set objects are collections of values
    // can iterate through the elements of a set in insertion order

    // let set = new Set([1, 2, 3, 4, 5]);
    // console.log(set);
    // console.log(set.has(1));

    // // set keeps unique values
    // let numbers = new Set();
    // numbers.add(1);
    // numbers.add(2);
    // numbers.add(3);
    // numbers.add(3);
    // numbers.add(4);
    // numbers.add(5);

    // console.log(numbers);
    // console.log(numbers.has(30));
    // keeps only unique values if we add the same value its just checked for it and not rewrited
    // (it stays in its original order)
    // they keep only values
    // set and array have only values and have different methods
    // objects and maps have [key, value] pairs
    
    // better use
    // for (const line of input) {
    //     let tokens = line.split(' ');
        // than
        // while(input.length > 0) {
            // input.shift().split(' ');
        // }
        
          // taking entries from Map()
    // let iterator = Array.from(storage.entries());

    // // taking keys from Map()
    // let iterator = Array.from(storage.keys());
    // let sorted = iterator.sort((a, b) => a.localeCompare(b));

    // print(sorted, storage);

    // function print(arr, assocArr) {
    //     // taking key from the sorted array
    //     // print the value of that key from the storage
    //     for (const key of arr) {
    //         console.log(`${key} -> ${assocArr.get(key)}`);
    //     }
    // }

    // let aAvg = getAvg(gradA);
    // let bAvg = getAvg(gradB);

    // // if (aAvg < bAvg) {
    // //     return -1;
    // // } else if (aAvg > bAvg) {
    // //     return 1;
    // // }

    // // return 0;
    // return aAvg - bAvg;

    // if (map.has(neighborhood)) {
    //     // let people = map.get(neighborhood);
    //     map.get(neighborhood).push(person)

    //     // people.push(person);
    //     // map.set(neighborhood, people);
    // }

       // here we get the array and put the person in the back of it and is updated directly in the map
            // this work because we take the reference to the array
            // map.get(neighborhood).push(person);

        // .sort((a, b) => sortDescending(a[1], b[1]) || sortAlphabetically(a[0], b[0]))

function ternaryExample(arr = []) {
    return arr.length === 0
    ? 'Parking Lot is Empty'
    : arr.join('\n');

    // if (arr.length === 0) {
    //     return 'Parking Lot is Empty';
    // }

    // return arr.join('\n');
}

let parking = {};
for (const line of input) {
    let [direction, carNumber] = line.split(', ');

    parking[carNumber] = direction;
    if (direction === 'IN') {
        parking.add(carNumber);
    } else if (direction === 'OUT') {
        parking.delete(carNumber);
    }
}

function printStorage(input = []) {
    let storage = new Map();

    for (const line of input) {
        let [item, qty] = line.split(' ').map(x => isNaN(x) ? x : Number(x));
        if (curr = storage.get(item)) {
            qty += curr;
        }

        storage.set(item, qty);
    }

    let output = [];
    for (const [key, value] of storage) {
        output.push(`${key} -> ${value}`);
    }

    return output.join('\n');
}

// printStorage(
//     ['tomatoes 10',
//     'coffee 5',
//     'olives 100',
//     'coffee 40']
// );

// MAP EXAMPLE
function addressBook(input = []) {
    let storage = new Map();

    for (const line of input) {
        let [name, address] = line.split(':');
        storage.set(name, address);
    }

    // taking keys from Map()
    let iterator = Array.from(storage.keys());
    let sorted = iterator.sort((a, b) => a.localeCompare(b));

    return print(sorted, storage);

    function print(arr, assocArr) {
        // taking key from the sorted array
        // print the value of that key from the storage
        let output = [];
        for (const key of arr) {
            output.push(`${key} -> ${assocArr.get(key)}`);
        }
        return output.join('\n');
    }
}

// addressBook([
//     'Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd'
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


// neighborhoods, map. has / get / set
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

// with object
function wordsTracker(input = []) {
    let searchedWords = input.shift().split(' ');
    let countWords = createCountObj(searchedWords);
    let allWords = input.slice();

    for (const curr of allWords) {
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
    // check if the word exist in array and if so then update the object
    array.forEach(word => word in wantedWordsCounts &&
        wantedWordsCounts[word]++);
    wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
    wantedWords.forEach(word =>
        console.log(`${word} - ${wantedWordsCounts[word]}`));
}

// wordsTracker(
//     [
//         'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
//     ]
// );

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