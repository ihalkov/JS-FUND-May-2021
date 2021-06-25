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

// The syntax for accessing the value of a key is:
// assocArr['key'] // person['age']
// or
// assocArr[key] // key = 'age'; person[key]

// let age = assocArr[key];

// Iteration with for-in only for objects, with (for-of is not possible)
    // we have delete here like in maps but is very slow performance and is bad practice

let assocArr = {
    name: 'Pesho',
    age: 20
};

// for (const key in assocArr) {
//     console.log(`${key}: ${assocArr[key]}`);
// }

// forEach
    // is iteration through arrays
    // its not like map, because map is projected to another array, here we just iterate through arr
    // is not breakable
    // we have to go through all of the elements

// if the name of the key is with two words separated by space, or some symbol, they have to be called with parentheses
Object.entries(assocArr).forEach(el => {
    console.log(`${el[0]}: ${el[1]}`);
});

Object.keys(assocArr).forEach(key => {
    console.log(`${key}: ${assocArr[key]}`);
});

// Destructuring
// let [name, number] = input.shift().split(' ');

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

function print(arr = []) {
    return arr.length === 0
    ? 'Parking Lot is Empty'
    : arr.join('\n');

    // if (arr.length === 0) {
    //     return 'Parking Lot is Empty';
    // }

    // return arr.join('\n');
}

// let parking = {};
// for (const line of input) {
//     let [direction, carNumber] = line.split(', ');

//     parking[carNumber] = direction;
//     // if (direction === 'IN') {
//     //     parking.add(carNumber);
//     // } else if (direction === 'OUT') {
//     //     parking.delete(carNumber);
//     // }

