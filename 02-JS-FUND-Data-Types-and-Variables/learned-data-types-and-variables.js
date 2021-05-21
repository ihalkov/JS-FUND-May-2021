// let vs. var
// local vs. global

// var - variables use function scope - when declared inside a block {} can be accessed from outside the block

{
    var x = 2;
}

console.log(x); // 2

// let - variables use block scope - when declared inside a block {} can NOT be accessed from outside the block

{
    let y = 2;
}

console.log(y); // Error

// Variables Scope
// The scope of a variable is the region of the program in which it is defined
// Global Scope - Global variables can be accessed from anywhere in a JS function

// Seven primitive: Boolean, Null, Undefined, Number, String, Symbol, BigInt

// dynamic typing - variables in JS are not directly assoc. with any particular value type

// Strings are immutable
// interpolation - ${} embedded expressions

// undefined and null (non-existent and empty)
// Undefined and Null are equal in value but different in type:

// Summary
// There are 7 data types in JavaScript: Number, String, Symbol, Null, Undefined, Object, Boolean
// let has block scope, var has function scope
// With typeof we can receive the type of a variable
// Null is "nothing",  undefined exists, but is empty