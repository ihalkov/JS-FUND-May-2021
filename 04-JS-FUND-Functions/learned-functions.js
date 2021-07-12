// function
// black box which have certain input
// and will return some result

// function is a subprogram designed to perform a particular task
// we can say to them methods
// values can be passed into functions and used within the function

// camelCase naming
// parameter is the input
function printStars(count) {
    console.log("*".repeat(count));
}

// command is one row of execution

// Why use functions?
// split large problems into small pieces
// to make one problem and make it on to pieces
// better organization of the program
// improves code readability and understandability

// Avoiding repeating code
// DRY (do not repeat yourself)

// if we write code and after we want to copy it then we need to have a function

// Function Without Parameters
//      executes the code between the brackets
function multiplyNumbers() {
    let result = 5 * 5;
    console.log(result);
}

// multiplyNumbers(); // Expected output: 25

// Declaring Function (statement)
// functions can have several parameters
// functions always return a value (custom or default)
// if we don't put return, the function returns undefined

function funcCombination(input) {
    console.log(input);

    // return input[0];
}
// solve("Pesho");
let functionResult = funcCombination("Pesho"); // print: "Pesho"
console.log(functionResult);    // then print the variable return input[0] or "P"

// function always return something

// Function Declaration can be used before declaration (function hoisting, intepretator makes fast look before)
// Function Expression (variable on which we assign function) (don't have hoisting)
let printText = function(text) {
    console.log(text);
};

const sumDigits = function(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
};

let addNumbers = function(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);

    return addNumbers;
};

// here we declare function with name and we can use the variable name like a function
let returnedValue = addNumbers(2, 4);
returnedValue(5, 10);

// in function declaration we have parameters
// when invoking function we have arguments

// itself (recursion)
// function crash() {
//     crash();
// }

function funcCombination(name) {
    console.log(name);

    return name;
}

// let returnedValue = solve("Pesho");

//      Code Structure and Code Formatting

//  make sure to use correct indentation
//  leave a blank line between functions, after loops and after if statements
//  always use curly braces for loops and if statements
//  avoid long lines and complex expressions

{
    let name = "Pesho";
    {
        let name = "Gosho";
        console.log(name); // Gosho
    }
    console.log(name); // Pesho
}

// Arrow Functions
// special syntax
// accept fixed number of arguments

let increment = (x) => x + 1;
console.log(increment(5)); // 6
// => is like return

// same as

// let increment = function(x) {
//     return x + 1;
// }

// function multiply(a, b) {
//     return a * b;
// }

// instead of function(a, b) {}, we put (a, b) => {}
// let multiply = (a, b) => {
//     return a * b;
// };

let result = multiply(2, 3);
console.log(result);

// more shorter, like ternary operator
multiply = (a, b) => a * b;
console.log(multiply(4, 3));



// let multiply = (a) => a * a;

// this function combine the value and operation, but know nothing about them
function funcCombination(num, operation) {
    let result = operation(num);
    console.log(result);
}

// both are the same
funcCombination(5, multiply);
funcCombination(5, (a) => a * a); // with one param we can remove ()
funcCombination(2, x => x++);

function simpleCalculatorExample(firstNumber, secondNumber, operation) {
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    switch (operation) {
        case 'multiply':
            return multiply(firstNumber, secondNumber);
        case 'divide':
            return divide(firstNumber, secondNumber);
        case 'add':
            return add(firstNumber, secondNumber);
        case 'subtract':
            return subtract(firstNumber, secondNumber);
    }
}

// simpleCalculatorExample(5, 5, 'multiply');
// simpleCalculatorExample(40, 8, 'divide');
// simpleCalculatorExample(12, 19, 'add');
// simpleCalculatorExample(50, 13, 'subtract');

function simpleCalculatorOptimize(firstNumber, secondNumber, operationName) {
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    let operation;
    switch (operationName) {
        case 'multiply':
            operation = multiply;
            break;
        case 'divide':
            operation = divide;
            break;
        case 'add':
            operation = add;
            break;
        case 'subtract':
            operation = subtract;
            break;
    }
    return operation(firstNumber, secondNumber);
}

function wrongResultOptimize(numOne, numTwo, numThree) {
    let newArr = [numOne, numTwo, numThree];
    let countNegative = 0;

    for (const element of newArr) {
        if (element === 0) {
            return "Positive";
        } else if (element < 0) {
            countNegative++;
        }
    }

    if (countNegative % 2 === 1) {
        return "Negative";
    }

    return "Positive";
}

// function incNumber(number) {
//     ++number;
//     console.log('From function: ' + number);
// }

// let number = 5;
// incNumber(number);
// console.log('Outside the function: ' + number);

function incNumber(numbers) {
    ++numbers[0];
    console.log('From function: ' + numbers);
}

let numbers = [1, 2, 3, 4];
incNumber(numbers);
console.log('Outside the function: ' + numbers);

// value types are in steak (only copy the value if its used in function)
// reference type are in heap (Array, Object, Function)
    // (here is not copying the value of array, but is changing it, because is refers to address)

// Func parameters
// [Noun] or [adj.] + [Noun]
// speedKmh, firstNumber

// have to read the code like newspaper
function printReceipt() {
    printHeader();
    printBody();
    printFooter();
}

// const arr = reference stay the same, but you can change the values inside the array

// all the functions needs to be outside from main function

// recursion self-invoking
function countDown(x) {
    console.log(x);
    if (x > 0) {
        countDown(x - 1);
    }
}

// countDown(10); // useful just have to have always exit point

// function without parameters (result is always the same), unless it reads data from outside of it

function swapElements(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        swap(arr, i, arr.length - 1 - i);
    }

    function swap(elements, i, j) {
        let temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
    }
    return arr;
}

// console.log(swapElements([1, 2, 3, 4, 5]));

// function arrow(a, b) { return a + b; }
// console.log(arrow(5, 4));

// arrow = (a, b) => a + b;

// code structure and code formatting
// make sure to use correct indentation
function sum() {
    // some code...
    // some more code...
}

// leave a blank line between functions and after blocks
// always use curly brackets for conditional and loop bodies
// avoid long lines and complex expressions

