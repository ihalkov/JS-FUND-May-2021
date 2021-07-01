// naming of variables to be descriptive, can be 3-4 words even
// don't try to make them short

// don't use the parameter directly, but do make local variable
// can have two functions with the same name and JS use the last writen in the code

// incrementation inside the condition for loop
    // for (let i = 0; i < arr.length; i++) {
// incrementation outside the condition while loop
    // while (a < 5) {
    //     a++;
    // }

// Debugging
// F10 step over (gives next step, but not goes in)
// F11 step into (goes in, deeply)
// Shift + F11 step out

//  Ctrl + D can mark all the occurrence of marked word, symbol etc.
//  Shift + Alt + I put cursors at the end of marked rows
// i % 2 !== 0 check for odd number

// switch can be changed with Object
// '*'.repeat(5);
// return string of '*****'

// use parseFloat() to remove trailing zeroes
    // num = parseFloat(num.toFixed(precision));

// Ternary operator
// return check ? "yes" : "no";

function getDate(year, month, day) {
    let dt = new Date(year, month, day);
    let y = dt.getFullYear();
    let m = dt.getMonth();
    let d = dt.getDate();
    return `${d}-${m}-${y}`;
}

// console.log(getDate(1991, 7, 7));

// can put all the chars to one string and print the line in the end
// let output = "";
// for (let i = 0; i < 5; i++) {
//     output += `${i}`;
// }

function distanceBetweenPoints(x1, y1, x2, y2) {
    // we will use pythagorean theorem
    // a^2 + b^2 = c^2
    // a & b are both sides of 90 deg triangle
    // c = Math.Sqrt(x^2 + b^2)
    // is the hypotenuse
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);

    // distance is "c"
    let distance = Math.sqrt((a * a) + (b * b));
    return distance;
}

// distanceBetweenPoints(2, 4, 5, 0);
// distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);

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
    // we can change but with replace and in the memory will be

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

// ternary operator
    // matchWord === secondWord ? console.log("Matched") : console.log("Not Matched");
    // use three operands

// The parameters are the aliases for the values that will be passed to the function. The arguments are the actual values.
    var foo = function( a, b, c ) {}; // a, b, and c are the parameters
    foo( 1, 2, 3 ); // 1, 2, and 3 are the arguments

// typeOf NaN; is a number
// 1000n typeOf 1000n "bigint"

// bigIntMaxSqr = bigIntMax * bigIntMax;
// console.log(bigIntMaxSqr); 81129638414606663681390495662081n

function returnTypeOfNumber(num) {
    num = Number(num);
    return num % 1 === 0 ? "Integer" : "Float";
}

// Boolean
    // true and false
    // you can use Boolean() function to find out
        // if an expression (or a variable) is true:
    // Boolean(10 > 9) returns true
    console.log(Boolean(10 > 9)); // true
    // or even easier
    // (10 > 9) also returns true
    // 10 > 9 also returns true
    // with Boolean() we can convert value and check if they are true or false
    // here we can separate all values on truthy and falsy values
    // Boolean([]); Boolean({}); are true
    // Boolean(""); is false

    // false
    console.log(Boolean(""));
    console.log(false == "");

// includes - check if some character exist in string or array
    // result = result.includes("9"); string includes some character
    //  if (sum.toString().includes("9"))

// Arrays is a way to collect values
// Object is a way to collect key.value pairs

// typeof
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
    // variable has been declared, but not defined yet
        // let car; value is undefined, type is undefined
        // let car = undefined;

// Null
    // Null is "nothing" it's supposed to be something that doesn't exist
    // The typeof null is an object

// Null and Undefined are falsy values
    // Undefined and Null are equal in value but different in type:
    // null !== undefined // true
    // null == undefined // true

// Boolean(Boolean) - true
    // Boolean is function and in JS is referent type that's why is true

function stringTest(str) {
    let strToString = str.toString();
    // let strToString = str + "";

    console.log(typeof str);
    console.log(typeof strToString);
}

// stringTest("5"); // print: string, string
// stringTest(5); // print: number, string

// interpolation transferring on new line
console.log(`${numberOfCenturies} centuries = ${years} `
    + `years = ${days} days = ${hours} hours`
        + ` = ${minutes} minutes`);

