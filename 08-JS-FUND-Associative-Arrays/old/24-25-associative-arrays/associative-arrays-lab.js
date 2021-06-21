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
        let [item, qty] = line.split(' ');
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
    // case sensitive or not
    for (const word of input) {
        let counter = 1;
        if (map.has(word)) {
            counter += map.get(word);
        }

        map.set(word, counter);
    }

    let entries = Array.from(map.entries());
    let sorted = entries.sort((a, b) => b[1] - a[1]);

    print(sorted);

    function print(arr) {
        for (const [key, value] of arr) {
            console.log(`${key} -> ${value} times`);
        }
    }
}

// wordOccurrences(
//     ["Here", "is", "the", "first", "sentence",
//     "Here", "is", "another", "sentence",
//     "And", "finally", "the", "third", "sentence"]
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

