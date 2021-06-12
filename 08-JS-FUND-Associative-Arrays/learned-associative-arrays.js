// map, set

// Associative Array
// array indexed by string keys
// hold a set of pair [key => value]
    // the key is a string
    // the value can be of any type
// an associative array in JS is just an Object
// for in loop to iterate over keys

let obj = {
    name: 'Ivan',
    lastName: 'Halkov',
    age: 29
};

// Quotes are used if the key contains special characters

// delete obj['age'];
// console.log(obj);

// let entries = Object.entries(obj);
// entries.sort(([keyA, valueA],[keyB, valueB]) => keyA.localeCompare(keyB));
// console.log(entries);

// Map
// a map collection stores its elements in insertion order
// a for-of loop returns an array of [key, value] for each iteration

// Maps have advantages in some cases:
    // You may use any data type as key
    // They are iterable
    // They have a size property

// pure JS objects are like Maps in that both let you:
    // assign values to keys
    // detect whether something is stored in a key
    // delete keys

// let map = new Map();
// .set(key, value) - adds a new key-value pair
    // map.set(1, 'one'); // key - 1, value - one
    // map.set(2, 'two'); // key - 2, value - two

// .get(key) - returns the value of the given key
    // map.get(2); // two
    // map.get(1); // one

// .size - property, holding the number of stored entries
// .has(key)
// .delete(key)
// .clear() - remove all key-value pairs
// Array.from()

// Set
// storing unique values of any type, whether primitive values or object references

// return a.localeCompare(b, 'en', {
//     sensitivity: 'base'
// });

function isNumber(ch = '') {
    let code = ch.charCodeAt(0);
    if (code >= 48 && code <= 57) {
        return true;
    }
    return false;
}