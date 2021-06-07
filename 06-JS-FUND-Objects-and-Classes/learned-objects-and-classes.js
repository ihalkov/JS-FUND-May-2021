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