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
    // Object.entries(person) (array of [key, value] arrays)
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
        // let [typeList, name, time] = input[i].split('_');
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

// in JS at run time you can add and remove properties of any object

function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = Number(age);

    return person;
}

// console.log(personInfo('Ivan', 'Halkov', 29));

class Person {
    constructor(name, LName, age) {
        this.name = name;
        this.LName = LName;
        this.age = Number(age);
    }
}

// let p = new Person('Ivan', 'Halkov', 29);
// console.log(p);

// Methods of Objects

// // functions within JS object are called methods
// let person = {
//     sayHello: function () {
//         console.log('Hi, guys');
//     }
// };
// let person = {
//     sayHello() {
//         console.log('Hi, guys');
//     }
// };
// let person = {
//     name: 'Peter',
//     age: 20
// };
// person.sayHello = () => console.log('Hi, guys');

// Iterate through keys

let obj = {
    name: 'Peter',
    age: '18',
    grade: '5.50'
};

for (const key of Object.keys(obj)) {
    console.log(`${key}: ${obj[key]}`);
}

// Object entries
// for (const [key, value] of entries) {

// }

// Value vs. Reference Types
// memory stack and heap
// JS has 7 data types that are copied by value:
// Boolean, String, Number, null, undefined, Symbol, BigInt
// these are primitive types

// JS has 3 data types that are copied by having their reference copied:
// Array, Objects and Functions
// these are all technically Objects, so we'll refer to them collectively as Objects

// convert to JSON string
// let test = JSON.stringify(obj);

// we can convert JSON string into object using JSON.parse(text)
// let obj = JSON.parse(text);

// Classes
// object models

// extensible program-code-template for creating objects
// provides initial values for the state of an object
// an object created by the class pattern is called an instance of the class
// a class has a constructor - subroutine called to create an object
// it prepares the new object for use
class Student {
    constructor(name) {
        this.name = name;
    }
}

// this keyword is used to set a property of the objects to a given value
// instance of the class with keyword new
// classes can also have functions as property, called, methods
// we access the method as a regular property

function catInfo(input = []) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        sayMeow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        };
    }

    for (const line of input) {
        let [name, age] = line.split(' ');
        cats.push(new Cat(name, age));
    }

    return cats.forEach(cat => cat.sayMeow());
}

// catInfo(['Mellow 2', 'Tom 5']);

function storeProvision(stock, ordered) {
    let totalStock = [...stock, ...ordered];
    let output = [];
    let storage = {};
    storage = putDataInObj(totalStock);

    Object.entries(storage).forEach(([product, quantity]) => {
        output.push(`${product} -> ${quantity}`);
    });

    return output.join('\n');

    function putDataInObj(arr) {
        let obj = {};
        for (let i = 0; i < arr.length; i += 2) {
            let product = arr[i];
            let qty = Number(arr[i + 1]);

            if (!obj.hasOwnProperty(product)) {
                obj[product] = qty;
            } else {
                obj[product] += qty;
            }
        }
        return obj;
    }
}

class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
        this.parts.quality = this.parts.engine * this.parts.power;
    }

    drive(decrease) {
        this.fuel -= decrease;
    }
}

// let parts = {
//     engine: 6,
//     power: 100
// };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);

function classStorage() {

    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = []; // we don't know what will storage so empty []
            this.totalCost = 0; // we know that we will sum so default 0, if multiply 1
        }
    
        addProduct(product) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += product.quantity * product.price;
        }
    
        getProducts() {
            let output = [];
            for (let i = 0; i < this.storage.length; i++) {
                output.push(JSON.stringify(this.storage[i]));
            }
            return output.join('\n');
        }
    }
    
    let productOne = { name: 'Cucumber', price: 1.50, quantity: 15 };
    let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
    let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
    // create storage obj
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    storage.getProducts();
    console.log(storage.capacity);
    console.log(storage.totalCost);
    
    console.log();
}

movieName = line.split('addMovie ')[1];

// Object.assign()
    // The Object.assign() method copies all enumerable own properties
    // from one or more source objects to a target object.
    // It returns the modified target object.
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);

    console.log(target);
    // expected output: Object { a: 1, b: 4, c: 5 }

    console.log(returnedTarget);
    // expected output: Object { a: 1, b: 4, c: 5 }


    // instead of this
    function makeADictionary(input = []) {
        let dict = {};
        for (const line of input) {
            let currObj = JSON.parse(line);
            let entries = Object.entries(currObj);
            let [term, description] = [entries[0][0], entries[0][1]];
            dict[term] = description;
        }
        return getOutput(dict);
    }

    // do this
    function makeADictionary(input = []) {
        let dict = {};

        for (const el of input) {
            let obj = JSON.parse(el);
            dict = Object.assign(dict, obj);
        }
        return;
    }

// Getting first Letter of the group
let firstLetter = productName[0];

// GOOD EXAMPLE USING FUNCTIONS
function systemRegister(input = []) {
    function addSystem(systemName) {
        if (!obj.hasOwnProperty(systemName)) {
            obj[systemName] = {};
        }
    }

    function addComponent(systemName, componentName) {
        if (!obj[systemName].hasOwnProperty(componentName)) {
            obj[systemName][componentName] = [];
        }
    }

    function addSubComponent(systemName, componentName, subComponentName) {
        if (obj[systemName].hasOwnProperty(componentName)) {
            obj[systemName][componentName].push(subComponentName);
        }
    }

    function addAll(systemName, componentName, subComponentName) {
        addSystem(systemName);
        addComponent(systemName, componentName);
        addSubComponent(systemName, componentName, subComponentName);
    }

    function getOutput(sortedKeys) {
        let output = [];
        sortedKeys.forEach(key => {
            let sortSubKeys = Object.keys(obj[key]).sort((a, b) => {
                let bValueLength = Object.keys(obj[key][b]).length;
                let aValueLength = Object.keys(obj[key][a]).length;
                return bValueLength - aValueLength;
            });
    
            output.push(key);
            sortSubKeys.forEach(subKey => {
                output.push(`|||${subKey}`);
                obj[key][subKey].forEach((subComponent => {
                    output.push(`||||||${subComponent}`);
                }));
            });
        });
        return output.join('\n');
    }

    let obj = {};
    while (input.length > 0) {
        let [systemName, componentName, subComponentName] = input.shift().split(' | ');
        addAll(systemName, componentName, subComponentName);
    }

    let sortedKeys = Object.keys(obj).sort((a, b) => {
        let bValueLength = Object.keys(obj[b]).length;
        let aValueLength = Object.keys(obj[a]).length;

        if (bValueLength - aValueLength === 0) {
            return a.localeCompare(b);
        }

        return bValueLength - aValueLength;
    });

    return getOutput(sortedKeys);
}

// console.log(
//     systemRegister(
//         [
//             'SULS | Main Site | Home Page',
//             'SULS | Main Site | Login Page',
//             'SULS | Main Site | Register Page',
//             'SULS | Judge Site | Login Page',
//             'SULS | Judge Site | Submittion Page',
//             'Lambda | CoreA | A23',
//             'SULS | Digital Site | Login Page',
//             'Lambda | CoreB | B24',
//             'Lambda | CoreA | A24',
//             'Lambda | CoreA | A25',
//             'Lambda | CoreC | C4',
//             'Indice | Session | Default Storage',
//             'Indice | Session | Default Security',
//         ]
//     )
// );

function schoolRegister(input = []) {
    function print(register) {
        let output = [];
        for (const grade in register) {
            output.push(`${grade} Grade `);

            let listOfStudents = Object.keys(register[grade]);
            output.push('List of students: ' + listOfStudents.join(', '));

            let listOfScores = Object.values(register[grade]);
            let sumOfScores = listOfScores.reduce((acc, curr) => {
                return acc + curr;
            });
            let avgAnnual = sumOfScores / listOfScores.length;
            output.push(`Average annual grade from last year: ${avgAnnual.toFixed(2)}`);
        }
        return output.join('\n');
    }

    function makeNewRegister(input, obj) {
        while (input.length > 0) {
            let currStudent = input.shift().split(', ');
            let [name, grade, avgScore] = currStudent.map(x => isNaN(x = x.split(': ')[1]) ? x : Number(x));

            if (avgScore < 3) {
                continue;
            }

            grade += 1;
            if (!obj.hasOwnProperty(grade)) {
                obj[grade] = {}
            }

            obj[grade][name] = avgScore;
        }

        return obj;
    }

    let register = {};
    register = makeNewRegister(input, register);
    return print(register);
}

// console.log(
//     schoolRegister(
//         [
//             "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//             "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//             "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//             "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//             "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//             "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//             "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//             "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//             "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//             "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//             "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//             "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//             "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
//         ]
//     )
// );

function classLaptop() {
    class Laptop {
        constructor(info, quality) {
            this.info = info;
            this.quality = quality;
            this.isOn = false;
        }

        turnOn() { this.isOn = true; this.quality -= 1; };
        turnOff() { this.isOn = false; this.quality -= 1; };
        showInfo() { return JSON.stringify(this.info); };
        // get returns current price of the laptop
        get price() { return 800 - (this.info.age * 2) + (this.quality * 0.5); };
    }

    let info = { producer: "Dell", age: 2, brand: "XPS" }
    let laptop = new Laptop(info, 10)
    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    console.log(laptop.quality)
    laptop.turnOn()
    console.log(laptop.isOn)
    console.log(laptop.price)
}

function flightSchedule(input = []) {
    function createSchedule(allFlights) {
        let listOfFlights = allFlights.slice(0);
        let obj = {};

        while (listOfFlights.length > 0) {
            let [flightNum, dest] = listOfFlights.shift().split(' ');
            obj[flightNum] = {
                dest: dest,
                status: 'Ready to fly'
            }
        }

        return obj;
    }

    function updateSchedule(obj, changedStatuses) {
        let updated = Object.assign({}, obj);

        while (changedStatuses.length > 0) {
            let [flNum, status] = changedStatuses.shift().split(' ');
            if (updated.hasOwnProperty(flNum) === true) {
                updated[flNum].status = status;
            }
        }

        return updated;
    }

    function printByStatus(flights, status) {
        let output = [];
        for (const num in flights) {
            if (flights[num].status === status) {
                output.push(`{ Destination: '${flights[num].dest}', Status: '${flights[num].status}' }`);
            }
        }
        return output.join('\n');
    }

    let [allFlights, changedStatuses, flightStatus] = input;
    flightStatus = flightStatus[0]; // because is from array

    let schedule = createSchedule(allFlights);
    let updated = updateSchedule(schedule, changedStatuses);

    return printByStatus(updated, flightStatus);
}

// console.log(
//     flightSchedule(
//         [
//             ['WN269 Delaware',
//                 'FL2269 Oregon',
//                 'WN498 Las Vegas',
//                 'WN3145 Ohio',
//                 'WN612 Alabama',
//                 'WN4010 New York',
//                 'WN1173 California',
//                 'DL2120 Texas',
//                 'KL5744 Illinois',
//                 'WN678 Pennsylvania'
//             ],
//             ['DL2120 Cancelled',
//                 'WN612 Cancelled',
//                 'WN1173 Cancelled',
//                 'SK430 Cancelled'
//             ],
//             ['Cancelled']
//         ]
//     )
// );

// console.log(
//     flightSchedule(
//         [
//             ['WN269 Delaware',
//                 'FL2269 Oregon',
//                 'WN498 Las Vegas',
//                 'WN3145 Ohio',
//                 'WN612 Alabama',
//                 'WN4010 New York',
//                 'WN1173 California',
//                 'DL2120 Texas',
//                 'KL5744 Illinois',
//                 'WN678 Pennsylvania'
//             ],
//             ['DL2120 Cancelled',
//                 'WN612 Cancelled',
//                 'WN1173 Cancelled',
//                 'SK330 Cancelled'
//             ],
//             ['Ready to fly']
//         ]
//     )
// );


// Split and Map to Number needed
    let currStudent = input.shift().split(', ');
    let [name, grade, avgScore] = currStudent.map(x => isNaN(x = x.split(': ')[1]) ? x : Number(x));

    // LOOPS (for-of and for-in)
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

