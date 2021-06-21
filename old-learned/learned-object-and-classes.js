// Classes are not so important in JS

// Objects are more important
// Definition, properties and methods
// Object methods
// Object iteration

// JSON
// JavaScript Object Notation

// Classes

// What are objects?
// collection of related data or functionality
// consist of several variables and functions called properties and methods
// obj are native to our nature
// prop (color, name)
// actions (dog barking, phone rings, birds are singing)
// Method functions() in context of obj (something which do something)
// in JS you can add more properties to given obj not only to definition

// Object literal
// let obj = {}; (this means empty obj)
let person = {
    name: 'Peter',
    age: 20,
    // height: 190
    // 0: 'neshto'

    sing: () => console.log('llalala'),
    shout() {
        console.log('shut up');
    },
};
console.log('wtf');
console.log(`${person.name} is at age ${person.age}`);

console.log(person);

// add dynamically property to object
// person.height = 190;
person['height'] = 190;

// console.log(person.height);
console.log(person['height']);

// name (key1), age (key2) its like variables
// you can add keys like strings
// properties are in some way indexes
// in single object we can pass different types of values
// type of collection
// in arrays you have indexes, here you have keys (variables)
// its not one to another

// in objects you can get just the name, in array you can't know in which index is if its too big

let propertyName = 'name';

// console.log(person.propertyName); undefined
console.log(person[propertyName]);

console.log(person);

// in some situations you can put keys (numbers)
// key describes value

// delete person.name; // delete propertyName
// not commonly used
// one key have one value
    // if you put another value, you rewrite it

// Object Methods
    // function inside property
    person.sayHello = () => {
        console.log('Hello');
    };

person.sayHello();
person.sing();
person.shout();

// Math.PI (obj Math, property PI)
// Math.floor (obj Math, prop is method floor)
// rewrite property person.keyName

// Object methods
    // Object.entries(person) (array of [key value] arrays)
    // Object.keys(person) (array of keys)
    // Object.values(person) (array of values)

    let personEntries = Object.entries(person);
    console.log(Object.fromEntries(personEntries));
    

// Iterate Through Keys
    // for-in loop
    for (const key in person) {
        console.log(`${key} ${person[key]}`);
    }

// JSON
    // JavaScript Object Notation
    // text format of data
    // translate text of data of effective way .xml
    // you have tags which are looking like html
    // you can translate only data text, you can functions
    // JSON is language independent, used for config
        // more strict format
        // keys are always with double quotes
    // built in functions to parse JSON so its easy to use

let personJSON = `{"name": "Pesho","age": 18,"height": 190}`;

let personObject = JSON.parse(personJSON);
    
console.log(personObject);

let personObj = {
    "name": "Pesho",
    "age": 18
};

let personToJSON = JSON.stringify(personObj);
console.log(personToJSON);

// caniuse.com (check for new features) (fromEntries)

// What are Classes?
    // extensible program-code-template for creating objects
    // functionality which creates objects
    // template which creates object
    // function which returns object, constructor functions
    // this (points to current instance of the class)
    // Example: we have person
        // every one have name, eyes
        // everyone is object (instancy)
        // instancy of Class is object
        // every class has a constructor which idea is to create object

        // class declaration (have to be noun)
        class Student {
            constructor(name, grade) {
                this.name = name;
                this.grade = grade;
            }
        }

        // class Human {
        //     constructor() {
        //         // this. means current object, instancy
        //         this.name = 'Pesho';
        //     }
        // }

        class Human {
            // public property, its for all of them the same
            weight = '3kg';

            constructor(firstName, age) {
                // this. means current object, instancy
                this.name = firstName;
                this.age = age;
                // this.sing = () => console.log('lqllqlq');
                // takes the more complex first to more global
            }

            sing() {
                console.log(`${this.name} - lqqlqlqlq`);
            }
        }

        // class make it easier to make objects
        let firstPerson = new Human('Pesho', '23');
        // firstPerson.name = 'Gosho';
        let secondPerson = new Human('Gosho');

        // console.log(firstPerson);
        console.table(firstPerson);
        // console.log(JSON.stringify(secondPerson));
        console.table(secondPerson);

        function createHuman(name, age) {
            let human = {
                name: name,
                age: age
            };

            return human;
        }

        // other way to create new Human
        let firstHuman = createHuman('Pesho', 18);
        let secondHuman = createHuman('Gosho', 20);

        // when you see String, you create new String, (when is with capital letter)

        firstPerson.sing();
        secondPerson.sing();


        // let songData = input[i].split('_');
        // // let [typeList, name, time] = input[i].split('_');
        // let typeList = songData[0];
        // let name = songData[1];
        // let time = songData[2];

// The Object.assign() method copies all enumerable
// own properties from one or more source objects
// to a target object. It returns the target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// target object - wants to apply the sources prop to, which is returned after modified.
// source - is obj containing the prop you want to apply
// Therefore it assigns properties, versus copying or defining new properties.


const myData = {
    name: 'Ivan',
    fName: 'Halkov',
    test: 4
}

const moreData = {
    midName: 'Stoyanov',
    age: '29',
    test: 7
}

// myData (target), moreData (source), test is updated from 4 to 7
const assignedObj = Object.assign(myData, moreData);
// return array of keys
let objKeys = Object.keys(assignedObj);
// arr of values
let objValues = Object.values(assignedObj);
// arr of key, values
let objEntries = Object.entries(assignedObj);

console.log(assignedObj);

let fruits = ['banana', 'apple', 'orange', 'kiwi'];

console.log('for-of');
for (const fruit of fruits) {
    // currFruit
    console.log(`el: ${fruit}`);
}

console.log('');
console.log('for-in');
for (const ind in fruits) {
    // indexes of fruits
    // by this indexes we can call particular fruit
    console.log(`ind: ${ind} => ${fruits[ind]}`);
}


// let el = JSON.parse(input[i]);
// let entry = Object.entries(el);
// dict[entry[0][0]] = entry[0][1];

// everything in constructor is like you want to do it at the moment
// methods can be out of constructor

// let [systemName, componentName, subComponentName] = input.shift().split(' | ');
// let sortedKeys = Object.keys(obj).sort((a, b) => {
//     let bValueLength = Object.keys(obj[b]).length;
//     let aValueLength = Object.keys(obj[a]).length;

// sortedKeys.forEach(key => {
//     let sortSubKeys = Object.keys(obj[key]).sort((a, b) => {
//         let bValueLength = Object.keys(obj[key][b]).length;
//         let aValueLength = Object.keys(obj[key][a]).length;
//         return bValueLength - aValueLength;

 // get returns current price of the laptop
//  get price() { return 800  - (this.info.age * 2) + (this.quality * 0.5); };

// Close Google Translate
// let ind = line.indexOf(' ');
//     let command = line.substring(0, ind);
//     let site = line.substring(ind += 1);