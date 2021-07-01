// let vs. var
// local vs. global

// var - variables use function scope - when declared inside a block {}
// can be accessed from outside the block

{
    var x = 2;
}

console.log(x); // 2

// let - variables use block scope - when declared inside a block {}
    // can NOT be accessed from outside the block

{
    let y = 2;
}

console.log(y); // Error

// Variables Scope
// The scope of a variable is the region of the program
    // in which it is defined
// Global Scope - Global variables can be accessed from anywhere
    // in a JS function

// Seven primitive: 
    // Boolean, Null, Undefined, Number, String, Symbol, BigInt

// dynamic typing - variables in JS are not directly assoc.
    // with any particular value type

// Strings are immutable
    // interpolation - ${} embedded expressions

// undefined and null (non-existent and empty)
// Undefined and Null are equal in value but different in type:

// Summary
// There are 7 data types in JavaScript: Number, String, Symbol, Null, Undefined, Object, Boolean
// let has block scope, var has function scope
// With typeof we can receive the type of a variable
// Null is "nothing",  undefined exists, but is empty

// JS don't have numeric types
// Arrays and Objects
// Typeof operator
// data types Example: I have 5 apples in the bag.
// we know as humans that 5 is number
// I like how the number 8 is looking
// we know that 8 is just the symbol not the number, but pc don't

// in JS the variable don't have type
// we can put number, later re-assign and put string, etc.
// variable is just container for information
// ECMA Script 5
// ecma-262

// Data types in JS
// Primitive: numbers, strings, boolean, null, undefined
// Symbol, BigInt
// Composite/Non-Primitive: Objects, Arrays
// literal means how to write some type and the variable understand the type
// in the memory they are represented by different way
// var can be used out of block scope
// let can be inside block scope
// we can even use undeclared variables in JS
// name = "Pesho";
// console.log(name);
// it's very bad practice
// all the time we need a scope, some function and to declare variables in it

// variables with "_" is private variable

// Sting used to represent textual data
// each symbol occupies a position in the String
// the first element is at position 0
// Strings in JS are immutable, we can't modify it
// so we can't say change the first symbol with another
// let name = "Pesho";
// name[0] = "D";
// console.log(name); will be still Pesho
// we can change but with replace and in the memory will

// Two places where we save the variables
// Stack
// our script will use it
// in stack are primitive type of variables

// Heap
// is in RAM and OS wil use it
// Array and Object are referent types

// Interpolation
// `name: ${name}` - print: name: Pesho
// name.toLowerCase();
// name.toUpperCase();

// console.log(arguments); arguments in function
// ternary operator
// matchWord === secondWord ? console.log("Matched") : console.log("Not Matched");
// use three operands

// typeOf NaN; is a number

// 1000n typeOf 1000n "bigint"

// let bigIntMax = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(bigIntMax); 9007199254740991n

// bigIntMaxSqr = bigIntMax * bigIntMax;
// console.log(bigIntMaxSqr); 81129638414606663681390495662081n

function returnTypeOfNumber(sum) {
    let number = Number(sum);
    return sum % 1 === 0 ? "Integer" : "Float";
}

// Boolean
// true and false
// you can use Boolean() function to find out if an expression (or a variable) is true:
// Boolean(10 > 9) returns true
// or even easier
// (10 > 9) also returns true
// 10 > 9 also returns true
// with Boolean() can convert value and check if they are true or false
// here we can separate all values on truthy and falsy values
// Boolean([]); Boolean({}); are true wtf
// Boolean(""); is false

// result = result.includes("9"); string includes some character

// Arrays is a way to collect values
// Object is a way to collect key.value pairs

// typeof can be two way
// "typeof space "some value"""
// console.log(typeof ""); // string
// console.log(typeof "John"); // string
// console.log(typeof "John Doe"); // string
// console.log(typeof 0); // number

// typeof() like a function
// let n = 5;
// if (typeof(n) === 'number') {
//     console.log(n); // 5
// }

// Undefined
// let car; value is undefined, type is undefined
// let car = undefined;
// variable has been declared, but not defined yet

// Null
// Null is "nothing" it's supposed to be something that doesn't exist
// The typeof null is an object

// Null and Undefined are falsy values
// Undefined and Null are equal in value but different in type:
// null !== undefined // true
// null == undefined // true

// Boolean(Boolean) - true
// Boolean is function and in JS is referent type that's why is true

//  if (sum.toString().includes("9"))


// function stringTest(str) {
//     let strToString = str.toString();
//     // let strToString = str + "";

//     console.log(typeof str);
//     console.log(typeof strToString);
// }

// stringTest("5"); // print: string, string
// stringTest(5); // print: number, string

// try to avoid sums in JS


// interpolation transferring on new line
console.log(`${numberOfCenturies} centuries = ${years} `
    + `years = ${days} days = ${hours} hours`
        + ` = ${minutes} minutes`);

// Use parseInt() while dividing to get only integer numbers.
// function calcSumOfDigits(num) {
//     let sum = 0;
//     while (num > 0) {
//         sum += num % 10;
//         num = parseInt(num / 10); or Math.trunc or Math.floor
//     }
//     return sum;
// }

// let empty = null;
// let undefined = undefined;

// Variables Scope before ES2015
// Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope.

// Global Scope
// Variables declared Globally (outside any function) have Global Scope.

var carName = "Volvo";

// code here can use carName

function myFunction() {
    // code here can also use carName
}

// Global variables can be accessed from anywhere in a JavaScript program.

// Function Scope
// Variables declared Locally (inside a function) have Function Scope.

// code here can NOT use carName

function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName

// Local variables can only be accessed from inside the function where they are declared.


// JavaScript Block Scope
// Variables declared with the var keyword cannot have Block Scope.

// Variables declared inside a block {} can be accessed from outside the block.
{
    var x = 2;
}
// x CAN be used here

// Redeclaring Variables
// Redeclaring a variable using the var keyword can impose problems.

// Redeclaring a variable inside a block will also redeclare the variable outside the block:

var x = 10;
// Here x is 10
{
    var x = 2;
    // Here x is 2
}
// Here x is 2

// don't use undefined as value it's private value for JS

function townInfoExample(cityName, population, area) {
    let result = "";
    if (typeof cityName === "string" &&
        typeof population === "string" &&
        typeof area === "string") {
        result = `Town ${cityName} has population of ${population} and area ${area} square km.`;
    } else {
        cityName = cityName.toString();
        population = Number(population);
        area = Number(area);
        if (isNaN(population) || isNaN(area)) {
            console.log("Invalid input");
        } else {
            result = `Town ${cityName} has population of ${population} and area ${area} square km.`;
        }
    }
    console.log(result);
}

// solve with typeof checks

// 0 % 0 = 0


function primeNumber(number) {
    let result = "";
    for (let i = 2; i < number; i++) {
        let isNotPrime = false;

        if (number % i === 0) {
            result = isNotPrime;
            break;
        } else {
            isNotPrime = true;
            result = isNotPrime;
        }
    }
    console.log(result);
}

// primeNumber(6);
// primeNumber(7);
// primeNumber(8);
// primeNumber(81);

function primeNumberChecker(num) {
    let result = "";

    for (let i = 2; i <= Math.sqrt(num); i++) {
        isNotPrime = false;

        if (num % i === 0) {
            result = isNotPrime;
            break;
        } else {
            isNotPrime = true;
            result = isNotPrime;
        }
    }
    console.log(result);
}

function binaryToDecimal(binary) {
    let binaryNum = binary.toString();
    let toDecimal = 0;

    function returnDecimal() {
        let decimal = 0;
        let power = 0;
        for (let i = binaryNum.length - 1; i >= 0; i--) {
            // 00001001 start from last so 10010000 1 * 2^0 + 0 * 2^1 + 0 * 2^2 + 1 * 2^3
            decimal += parseInt(binaryNum[i]) * Math.pow(2, power);
            power += 1;
        }
        return decimal;
    }
    toDecimal = returnDecimal();
    console.log(toDecimal);
}

// integer or float
num % 1 === 0 ? "Integer" : "Float";

// making number a string and then check if includes something
if (sum.toString().includes("9")) {
    console.log(`${num} Amazing? True`);
} else {
    console.log(`${num} Amazing? False`);
}

// finds the last digit of a number
// or make it string and iterate over it and parse to Number on each iteration
num % 10

// typeOf verification
if (typeof ch1 !== "string" || typeof ch2 !== "string" || typeof ch3 !== "string") {
    ch1 = ch1.toString();
    ch2 = ch2.toString();
    ch3 = ch3.toString();
}

function townInfoExample(cityName, population, area) {
    let result = "";
    if (typeof cityName === "string" &&
        typeof population === "string" &&
        typeof area === "string") {
        result = `Town ${cityName} has population of ${population} and area ${area} square km.`;
    } else {
        cityName = cityName.toString();
        population = Number(population);
        area = Number(area);
        if (isNaN(population) || isNaN(area)) {
            console.log("Invalid input");
        } else {
            result = `Town ${cityName} has population of ${population} and area ${area} square km.`;
        }
    }
    console.log(result);
}

// lowercase check
// looks like second one is faster because is checking only one character,

if (ch1 === ch1.toLowerCase()) {}

if (ch1.charCodeAt(0) >= 60 &&
    ch1.charCodeAt(0) <= 90) {

}

function primeNumberChecker(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

