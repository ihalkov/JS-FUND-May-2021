let phoneBook = new Map();
let obj = {
    name: 'Ernesti',
    age: '69'
};

// for (const key in obj) {
//     console.log(key);
// }

if (obj.name) {
    console.log(true);
}
// console.log(phoneBook);

phoneBook.set(true, '0888696966');
phoneBook.set('Pesho', '0888664466');
phoneBook.set('Gosho', '0888696966');

console.log(phoneBook);
console.log(phoneBook.get('Pesho'));
console.log(phoneBook.has('Pesho'));
// phoneBook.delete('Pesho');
// console.log(phoneBook.keys());
// console.log(phoneBook.clear());
// console.log(phoneBook instanceof Map);

let entries = phoneBook.entries();
// direct destructuring
for (const [name, phone] of phoneBook) {
    console.log(typeof name);
    console.log(name + ' ' + phone);
}

// let iterable = Array.from(phoneBook.entries());
// console.log(iterable);


let phoneBookObj = Object.fromEntries(phoneBook.entries());
console.log(phoneBookObj);

let phoneBookMap = new Map(Object.entries(phoneBookObj));
console.log(phoneBookMap);

let set = new Set([1, 2, 3, 4, 5]);
console.log(set);
console.log(set.has(1));

// set keeps unique values
let numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(3);
numbers.add(4);
numbers.add(5);

console.log(numbers);
console.log(numbers.has(30));
