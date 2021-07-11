// naming of variables to be descriptive, can be 3-4 words even
// don't try to make them short

// don't use the parameter directly, but do make local variable
// can have two functions with the same name and JS use the last writen in the code
// 80 to 120 cols for displaying code on one row

// in programming 0 is even and odd number
// in math is only even

// Format one market line or multiple lines of code
// Ctrl + K + F

// Format whole document
// Alt + Shift + F

//  function always is doing only one thing
//  do put the parameters always

// assign length of for loop to variable could be a good idea, because we can manipulate it later
// can find shorter names of the variables,
    // don't re-use declare the same names of the variables inside the function and in global scope

// if have to many repeating code and don't know why... is wrong
// if you have repeating checks probably you're wrong
// do the hardest tasks, looking at people's solution
// then do it yourself again

// imperative is when you write logic
// declarative is when you tell what to do and
    // don't think how is done the problem

// Turn on intellisense
    function solve(data = []) {
        // data. something now we have intellisense
    }
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

// Parse means taking string and convert to another data
    // best to use Number() when parsing
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
        // let undefined = undefined;
        // don't use undefined as value it's private value for JS


// Null
    // Null is "nothing" it's supposed to be something that doesn't exist
    // The typeof null is an object
    // let empty = null;


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


// use parseInt() while dividing to get only integer numbers
function calcSumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = parseInt(num / 10); // or Math.trunc or Math.floor
    }
    return sum;
}

// Global Scope
    // Variables declared Globally (outside any function)
        // have Global Scope.

    var carName = "Volvo";

    // code here can use carName

    function myFunction() {
        // code here can also use carName
    }

    // Global variables can be accessed from anywhere in a JS program.

// Function Scope
    // Variables declared Locally (inside a function) have Function Scope.

    function myFunction() {
        var carName = "Volvo";
        // code here CAN use carName
    }
    
    // code here can NOT use carName
    
    // Local variables can only be accessed from
        // inside the function where they are declared.

// JavaScript Block Scope
    // Variables declared with the var keyword
        // cannot have Block Scope.
    
    // Variables declared inside a block {} can be accessed from outside the block.
    {
        var x = 2;
    }
    // x CAN be used here

    // Re-declaring Variables
        // Re-declaring a variable using the var keyword
            // can impose problems.

        // Re-declaring a variable inside a block
            // will also redeclare the variable outside the block:

            var x = 10;
            // Here x is 10
            {
                var x = 2;
                // Here x is 2
            }
            // Here x is 2

// typeOf verification
    if (typeof ch1 !== "string" || typeof ch2 !== "string" || typeof ch3 !== "string") {
        ch1 = ch1.toString();
        ch2 = ch2.toString();
        ch3 = ch3.toString();
    }

    function townInfoExample(cityName, population, area) {
        if (typeof cityName === "string" &&
            typeof population === "string" &&
            typeof area === "string") {
        } else {
            cityName = cityName.toString();
            population = Number(population);
            area = Number(area);
            if (isNaN(population) || isNaN(area)) {
                return 'Invalid input';
            }
        }
        return `Town ${cityName} has population of ${population} and area ${area} square km.`;
    }

// lowercase check
    // 1. Variant
        if (ch1 === ch1.toLowerCase()) {}

    // 2. Variant
        if (ch1.charCodeAt(0) >= 60 &&
            ch1.charCodeAt(0) <= 90) {
        }

// Modulus / modul
// 0 % 0 = 0

// Prime Numbers Check / Find
// slow one
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


// faster
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

// faster and clean
    function primeNumberChecker(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
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
    return toDecimal;
}

// integer or float
    num % 1 === 0 ? "Integer" : "Float";

// making number a string and then check if includes something
    if (sum.toString().includes("9")) {
        return `${num} Amazing? True`;
    } else {
        return `${num} Amazing? False`;
    }

// finds the last digit of a number
    // num % 10

// object instead of if else statement
function shoppingList(input = []) {
    let list = input.shift().split('!');

    for (const line of input) {
        if (line === 'Go Shopping!') {
            break;
        }
        let data = line.split(' ');
        let command = data[0];
        let item = data[1];

        let obj = {
            'Urgent': function (list, item) {
                if (!list.includes(item)) {
                    list.unshift(item)
                }
                return list;
            },
            'Unnecessary': function (list, item) {
                if ((ind = list.indexOf(item)) !== -1) {
                    list.splice(ind, 1);
                }
                return list;
            },
            'Correct': function (list, item) {
                let newItem = data[2];
                if ((ind = list.indexOf(item)) !== -1) {
                    list[ind] = newItem;
                }
                return list;
            },
            'Rearrange': function (list, item) {
                if ((ind = list.indexOf(item)) !== -1) {
                    list.splice(ind, 1);
                    list.push(item);
                }
                return list;
            },
        }

        list = obj[command](list, item);
    }
    return list.join(', ');
}


// console.log(shoppingList(
//     [
//         'Tomatoes!Potatoes!Bread',
//         'Unnecessary Milk',
//         'Urgent Tomatoes',
//         'Go Shopping!'
//     ]
// ));
// console.log(shoppingList(
//     [
//         'Milk!Pepper!Salt!Water!Banana',
//         'Urgent Salt',
//         'Unnecessary Grapes ',
//         'Correct Pepper Onion',
//         'Rearrange Grapes',
//         'Correct Tomatoes Potatoes',
//         'Go Shopping!'
//     ]
// ));

// ARRAYS
    // collection of variables in one place
    // array is sequence of elements
    // 0,1,2,3,4 indexes
    // students[]
    // multiple values in one variable
    // elements begin at 0 to length - 1
    // arrays can have variable size (C#/Java can't resize, have to make new array)
        function solve3(grades) {
            const names = ['Pesho', 'Gosho', 'Stamat'];
        
            names[10] = 'Peter'; // will create 10th element and will put empty elements to fill the cells created
            names[-5] = 'se taq';
            console.log(names);
            console.log(names.length);
        }
    // when we add new element new value is added to array (the array is not rewrite)
    // in programming we always know how many parameters we have
    // let numbers = [1, 2, 3, 4, 5];
    // let names = []; (literal for arrays)
    // create new array for better readability is good practice
    // we can chain arrays a lot
        function solve5(arrayOfNums = []) {
            let output = arrayOfNums
                .map(Number)
                .map(number => number + 2);

            return output, typeof output;
        }
        console.log(solve5([1, 2, 3, 4, 5, 6])); //object

    // array iteration
        //  for-in and for-of loops
        // const is for protection just to not change the array
            // For-of Loop
                // Iterates through all elements in a collection
                // cannot access the current index

                for (const el of collection) {
                    // Process the value here
                }
                
            // For-in Loop
                // the slowest
                // iterates through all indexes in a collection
                // is useful in objects
                // can be braked
                for (const key in object) {
                    if (object.hasOwnProperty(key)) {
                        const element = object[key];
                    }
                }

    // Arrays better to be with one type data
        // Array of different types
            // Array holding numbers
            // Array holding strings

            // Array holding mixed data
            let mixedArray = [20, new Date(), 'hello', {x: 5, y: 8}];

    // Replace an element value
        let arr = [10, 20, 30];
        arr[0] = 5; // Elements can be modified
        console.log(arr); // [5, 20, 30]

function solve2(input) {
    let names = ["Pesho", "Gosho"];

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]); // undefined
    // console.log();

    names[2] = "Ivan"; // adding new value to the array
    // the array is getting resized, bigger ;)
    console.log(names[2]);
}

// ARRAYS METHODS
    // input.shift() (removes the first element of array)
    // input.pop() (removes the last element of array)
    // map is method which creates new array
        // .map() (does one type operations to every element of array)
        // map have second parameter index and increment it automatically
    // arr.includes()
        // Check if the array contains the specified element:
        console.log(arr.includes(20)); // false
        console.log(arr.includes(0)); // true

        function commonElemIncludes(arr1 = [], arr2 = []) {
            for (let i = 0; i < arr1.length; i++) {
                // for (let j = 0; j < arr2.length; j++) {
                if (arr2.includes(arr1[i])) {
                    console.log(arr1[i]);
                }
                // }
            }
        }

    // arr.push(); put element at the end of array
    // .reduce() reduce all the values to one
    // .foreach() have no breaks and can fill the memory
        // can use return to break a foreach
    // resultArr.join(' - '); (join the elements of the array with " - ")
    // .slice() and .splice()
        // slice is good brother
        // 1st use slice, then in that copy of the array use splice
        // .slice() return new array
        // .splice() make change to arrays
        // ladybugIndexes.splice(index, 1); remove element at particular position
    // isNan() bool return
    // with .shift and .push we change the array
    // .unshift() put new element on first position
    // .filter()
        // let filtered = [12, 5, 8, 130, 44].filter(value => value >= 10);
        // console.log(filtered); // 12, 130, 44
        numbers = numbers.filter(num => {
            if (num >= currBiggest) {
                currBiggest = num;
                return true;
            }
        });

        // filter everything different than '' empty string
            let [rows, cols] = arr.split(' ')
            .filter(x => x != '')
            .map(Number);

    // array with given size filled with zeroes
        let newArr = new Array(fieldSize).fill(0);

    // You can add an element to the end of the array:
        let arr = [10, 20, 30];
        arr[arr.length] = 40;
        console.log(arr); // [10, 20, 30, 40]

    function mergeArraysDeclarativeWay(strArrOne = [], strArrTwo = []) {
        let resultArr = [];
    
        strArrOne.map((element, i) => {
            i % 2 === 0 ?
                resultArr.push(Number(element) + Number(strArrTwo[i])) :
                resultArr.push(element + strArrTwo[i]);
        });
        console.log(resultArr.join(" - "));
    }
    
    console.log(mergeArraysDeclarativeWay(['1', '2', '3'], ['4', '3', '5'])); // 5 - 23 - 8
    
// arrow function
    let addArrow = (x, y) => x + y;
    console.log(addArrow(10, 20));

// Multidimensional Arrays
    // mainly with 2 dimensional. The concept is as simple as working with a simple 1-dimensional array.
    // It is just an array of arrays.

    function emptyMatrix(rows, cols) {
        let empty = new Array(rows);
        for (let row = 0; row < rows; row++) {
            empty[row] = new Array(cols);
        }
        return empty;
    }

    function print2DMatrix(matrix = []) {
        for (let row = 0; row < matrix.length; row++) {
            let outputRow = "";
            for (let col = 0; col < matrix[row].length; col++) {
                outputRow += matrix[row][col];
            }
            return outputRow;
        }
    }

    // if we put new cols out of the length - 1 to the array it automatically goes bigger and its size change

    function createEmptyRows() {
        for (let r = 0; r < rows; r++) matrix[r] = [];
    }

    // let matrix = [];
    // let rows = 10;
    // for (let r = 0; r < rows; r++) matrix[r] = new Array(r + 1).fill(r + 1);
    // console.log(matrix);

    // from Orbit problem
    matrix[r][c] = Math.max(Math.abs(r - starRow), Math.abs(c - starCol)) + 1;

    function swapElements(strArr) {
        for (let i = 0; i < strArr.length / 2; i++) {
            let currEl = strArr[i];
            let backInd = strArr.length - i - 1;
    
            strArr[i] = strArr[backInd];
            strArr[backInd] = currEl;
        }
        return strArr;
    }


// Recursion
function condenseArrayOfNumbers(numbers) {
    let condensed = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        let currEl = numbers[i] + numbers[i + 1];
        condensed.push(currEl);
    }
    if (numbers.length === 1) {
        return numbers[0];
    } else {
        numbers = condensed;
        return condenseArrayOfNumbers(numbers);
    }
}

// console.log(condenseArrayOfNumbers([2, 10, 3]));
// console.log(condenseArrayOfNumbers([5, 0, 4, 1, 2]));
// console.log(condenseArrayOfNumbers([1]));

function factorialDivisionRecursion(firstNumber, secondNumber) {
    let resultOne = factorial(firstNumber);
    let resultTwo = factorial(secondNumber);
    
    let divide = (a, b) => a / b;
    let resultOfDivision = divide(resultOne, resultTwo);
    return resultOfDivision.toFixed(2);

    function factorial(num) {
        if(num === 0) {
            return 1;
        }
        if (num === 1) {
            return num;
        }

        return num * factorial(num - 1);
    }
}

// console.log(factorialDivisionRecursion(5, 2));
// console.log(factorialDivisionRecursion(6, 2));

function addOrSubtractFunctional(data = []) {
    let resultArray = [];
    let originalSum = 0;
    let resultSum = 0;

    data.map((number, index) => {
        number % 2 === 0 ? number += index : number -= index;
        resultArray.push(number);
    });

    console.log(resultArray);
    console.log(originalSum = data.reduce((a, b) => {
        a += b;
        return a;
    }, 0));
    console.log(resultSum = resultArray.reduce((a, b) => a + b, 0));
}

// addOrSubtractFunctional([5, 15, 23, 56, 35]);
// addOrSubtractFunctional([-5, 11, 3, 0, 2]);

function ladybugs(input = []) {
    let fieldSize = Number(input[0]);
    let indexes = input[1].split(' ').map(Number);

    let initialField = putBugsInPosition(fieldSize, indexes);

    for (let i = 2; i < input.length; i++) {
        let line = input[i];
        initialField = moveBug(line, initialField);
    }
    return initialField.join(' ');

    function putBugsInPosition(fieldSize, indexes) {
        let arr = [];
        arr.length = fieldSize;
        arr.fill(0);

        for (let i = 0; i < fieldSize; i++) {
            // let currInd = indexes.shift();
            if (indexes.includes(i)) {
                arr[i] = 1;
            }
        }
        return arr;
    }

    function moveBug(line, initialField) {
        let [firstPosition, command, flyLength] = line.split(' ');
        firstPosition = Number(firstPosition);
        flyLength = Number(flyLength);

        // is bug position always with bug
        let isBug = initialField[firstPosition] === 1;
        if (!isBug) {
            return initialField;
        }

        initialField[firstPosition] = 0;

        let currPosition = firstPosition;
        while (currPosition >= 0 &&
            currPosition <= initialField.length - 1) {

            let obj = {
                'left': currPosition - flyLength,
                'right': currPosition + flyLength
            };
            currPosition = obj[command];
            if (initialField[currPosition] === 0) {
                initialField[currPosition] = 1;
                break;
            }
        }
        return initialField;
    }
}

// console.log(ladybugs(
//     [
//         3,
//         '0 1',
//         '0 right 1',
//         '2 right 1'
//     ]
// ));
// console.log(ladybugs(
//     [
//         3,
//         '0 1 2',
//         '0 right 1',
//         '1 right 1',
//         '2 right 1'
//     ]
// ));
// console.log(ladybugs(
//     [
//         5,
//         '3',
//         '3 left 2',
//         '1 left -2'
//     ]
// ));

function spiralMatrix(input = []) {
    return printMatrix(getMatrix(input));

    function getMatrix(arr) {
        let [rows, cols] = arr[0].split(' ').map(Number);
        let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows - 1, cols - 1];

        let matrix = [];
        for (let r = 0; r < rows; r++) {
            matrix[r] = [];
        }

        while (count < maxCount) {
            for (let c = minCol; c <= maxCol &&
                count < maxCount; c++) {
                matrix[minRow][c] = ++count;
            }
            minRow++;

            for (let r = minRow; r <= maxRow &&
                count < maxCount; r++) {
                matrix[r][maxCol] = ++count;
            }
            maxCol--;

            for (let c = maxCol; c >= minCol &&
                count < maxCount; c--) {
                matrix[maxRow][c] = ++count;
            }
            maxRow--;

            for (let r = maxRow; r >= minRow &&
                count < maxCount; r--) {
                matrix[r][minCol] = ++count;
            }
            minCol++;
        }
        return matrix;
    }

    function printMatrix(matrix) {
        let output = [];
        matrix.forEach(row => output.push(row.join(' ')));
        return output.join('\n');
    }
}

// console.log(spiralMatrix(['5 5']));
// console.log(spiralMatrix(['3 3']));

function getFactorial(num) {
    let fact = 1;
    while (num > 1) {
        fact *= num--;
    }
    return fact;
}

// FUNCTIONS
function orders(product, quantity) {
    // switch (product) {
    //     case "coffee":
    //         total = 1.50 * quantity;
    //         break;
    //     case "water":
    //         total = 1.00 * quantity;
    //         break;
    //     case "coke":
    //         total = 1.40 * quantity;
    //         break;
    //     case "snacks":
    //         total = 2.00 * quantity;
    //         break;
    // }

    let menu = {
        "coffee": 1.50,
        "water": 1.00,
        "coke": 1.40,
        "snacks": 2.00
    }
    let price = menu[product];
    let total = price * quantity;
    return total.toFixed(2);
}

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

// console.log(simpleCalculatorExample(5, 5, 'multiply'));
// console.log(simpleCalculatorExample(40, 8, 'divide'));
// console.log(simpleCalculatorExample(12, 19, 'add'));
// console.log(simpleCalculatorExample(50, 13, 'subtract'));

// smart functions
// assign function to variable and then choose to assign it to another variable
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

// console.log(simpleCalculatorOptimize(5, 5, 'multiply'));
// console.log(simpleCalculatorOptimize(40, 8, 'divide'));
// console.log(simpleCalculatorOptimize(12, 19, 'add'));
// console.log(simpleCalculatorOptimize(50, 13, 'subtract'));

function simpleCalculatorOptimize2(firstNumber, secondNumber, operationName) {
    let mathOperations = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b
    }
    return mathOperations[operationName](firstNumber, secondNumber);
}

// console.log(simpleCalculatorOptimize2(5, 5, 'multiply'));
// console.log(simpleCalculatorOptimize2(40, 8, 'divide'));
// console.log(simpleCalculatorOptimize2(12, 19, 'add'));
// console.log(simpleCalculatorOptimize2(50, 13, 'subtract'));

