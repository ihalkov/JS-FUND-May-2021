// be sure that you can solve the problem with the algorithmic way
// Array operations
    // push, pop, shift, unshift

// CAN WE IMPLEMENT THIS FUNCTIONALITY???

// filtering and transforming elements
// Arrays sorting

// Advanced Overview
    // push() - add to the end
    // pop() - remove from the end
        // if pop() on an empty array, it returns undefined
    // unshift() - add to the beginning
    // shift() - remove from the beginning
    // slice() - remove a range of elements
    // splice() - insert at position/delete from position

// pop()
    // if pop() on an empty array, it returns undefined
// method is also function
let numbers = [1, 2, 3, 4, 5, 6];
let lastElement = numbers.pop();

console.log(numbers);
console.log(lastElement);



// shift()
// remove first

// ...elements give me like array
// delete can delete element from array, and element of Object
// delete removes only the value

// slice() part of array, do not change the array
// immutable function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// slice from 4 elem to end
let n = numbers.slice(4);

// give me till some number
let slicePortion = numbers.slice(4, 7);
let numbersCopy = numbers.slice();

console.log(numbersCopy);
console.log(n);
console.log(slicePortion);
console.log(numbers);

// original (immutable array)
// mutable when you change the original array

// Splice: cut and insert array elements
// Note: Removing elements with splice() receives two parameters:
// •	Start Index
// •	Count of elements you want to remove
// Note: Inserting elements with splice() receives three parameters:
// •	Start Index
// •	Count of elements to remove – if none enter 0
// •	Elements to insert at that position

// mutable function
// start number, delete count, elements for input
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// on fourth positions adds 6
// not delete
// console.log(numbers);
let returnSpliced = numbers.splice(4, 0, 6);
// console.log(numbers);
returnSpliced = numbers.splice(4, 2, 6);

let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// ...[50, 60] (: spread operator spread the array to separate values :)
let spliced = nums.splice(0, 3, ...[50, 60]);
// from element count elements
console.log(nums);
console.log(spliced);

// JS don't have method overloading
// solve(firstNumber)
// solve(firstNumber, secondNumber)

// this is similar to function overloading
// start, deleteCount = 0, ...items
function splice(start, deleteCount = 0, ...items) {
    console.log(start);
    console.log(deleteCount);
    console.log(items);
}

// splice(10);

// Filtering and transforming elments
// .join()
// is trying to make string
// two ways
// console.log(firstElements.join(' '));
// console.log(...lastElements);

// let numbersCopy = numbers.slice();

function copyArr() {
    let nmbrs = [1, 2, 3];
    let nmbrsCopy = nmbrs.slice();
    nmbrsCopy[0] = 10;

    console.log(nmbrs);
    console.log(nmbrsCopy);
}
// copyArr();

// Filter
// needs a function to return true or false
function filterArr() {
    let numbers = [1, 2, 3, 4, 5];
    // let oddNumbers = numbers.filter(checkOdd);
    let oddNumbers = numbers.filter(x => x % 2 !== 0);
    console.log(oddNumbers);
}

function checkOdd(number) {
    if (number % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

// filterArr();

// Map and Filter are immutable
// Map Implementation
// map will return all elements transformed
// let nums = [1, 2, 3];
// let doubled = nums.map(x => x * 2);

// Sort Implementation

// let newArray = arr.filter(callback(currentValue[, index, [array]]) {
//     // return element for newArray, if true
//   }[, thisArg]);

  
function processOddNumbers(input = []) {
    let numbers = input;
    let result = numbers
        .filter((el, ind) => ind % 2 !== 0)
        .map(x => x * 2)
        .reverse();
    console.log(...result);
}

// processOddNumbers([10, 20, 30, 40, 50]);


// JavaScript Demo: Expressions - Destructuring assignment
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

let commands = ['Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'];

for (let i = 0; i < commands.length; i++) {
    let [command, firstNum, secondNum]
        = commands[i].split(' ');

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    console.log(`${command} ${firstNum} ${secondNum}`);
}

// let arrOfStrings = input.map(x => x.toLowerCase());

// locale compare
let arrStr = ['jvan', 'ivan'];

let compare = arrStr[0].localeCompare(arrStr[1]);

let sorted = arrStr.sort((a, b) => a.localeCompare(b));
// return -1 when first is smaller
// return 0 when they are the same
// return +1 when first is bigger

console.log(compare);

// Get random number from arr of numbers
// let numbers = [3, 5, 8, 1, 2, 9, 4, 7, 6];
// let randomIndex = Math.floor(Math.random() * (numbers.length - 1));
// let number = numbers[randomIndex];

// Have to use clone (copy) of the input array
const sheeps = ['🐑', '🐑', '🐑'];

// Old way
const cloneSheeps = sheeps.slice();

// ES6 way
const cloneSheepsES6 = [...sheeps];

// let filtering an transforming elements
let nums = ['one', 'two', 'three', 'four'];
console.log(nums.join('|')); // one|two|three|four

let filteredNums = nums.filter(x => x.startsWith('t'));
console.log(filteredNums.join('|')); // two|three

let lengths = nums.map(x => x.length);
console.log(lengths.join('|')); // 3|3|5|4

// let lengths = nums.map(x => [x.length, x[0]]); return length of elem and first letter of elem
console.log(lengths.join('|')); // 3,o|3,t|5,t|4,f

// filter, map and reduce always are called with functions
// filter returns condition, have to return true or false
// in sort you need to write always a function, its difficult to debug

// Sorting arrays
const sheeps = ['🐑', '🐑', '🐑'];

// Old way
const cloneSheeps = sheeps.slice();

// ES6 way
const cloneSheepsES6 = [...sheeps];

let numbers = [1, 2, 3, 4, 5];

let cloneNumbers = numbers.slice();
cloneNumbers.pop();
console.log(cloneNumbers);
let cloneNumbersES6 = [...numbers];
cloneNumbersES6.pop();
console.log(cloneNumbersES6);

console.log(numbers);

// functions have to return something always, but not console.log

// in JS Array is object, can be index -1 with value, but did not change the length

// sort()
// always some of
//  return a.localeCompare(b);
//  or
//  return a.length - b.length;


sortingNumbers();

function sortingNumbers() {
    const numbers = [1, 3, 5, 8, 7];
    let cloneNumbers = numbers.slice(0);

    // ascending
    cloneNumbers.sort((a, b) => a - b); // [1, 3, 5, 7, 8]
    console.log(cloneNumbers);

    // descending
    cloneNumbers.sort((a, b) => b - a); // [8, 7, 5, 3, 1]

    console.log(cloneNumbers);
}

// sorting strings
sortingStrings();

function sortingStrings() {
    const str = ['Apple', 'Orange', 'Lemon', 'wiski', 'beer', 'cola', 'beers', 'apples', 'oranges'];
    let cloneStr = str.slice(0);

   
    // console.log(lengthAndAlphabetical(cloneStr));
    // console.log(alphabeticalAndLength(cloneStr));


    function lengthAndAlphabetical(str) {
        str.sort((a, b) => {
            if (a.length - b.length === 0) {
                return a.localeCompare(b);
            }
            return a.length - b.length;
        });

        return str;
    }

    function alphabeticalAndLength(str) {
        str.sort((a, b) => {
            if (a === b) {
                return a.length - b.length;
            }
            return a.localeCompare(b);
        });

        return str;
    }
}

function reduceSum() {
    let numbers = [1, 2, 3, 5, 7, 9];

    let sum = numbers.reduce((acc, curr) =>{
        acc += curr;
        return acc;
        }, 0);

    return sum;
}

// reducer function which you provide on each element of the array, resulting on single output value
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// Output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// 5 is initial value and is the starter of the accumulation and is putted like argument
// is not part of the array

// Output: 15

// The reducer function takes four arguments:

// Accumulator (acc)
// Current Value (cur)
// Current Index (idx)
// Source Array (src)

// Your reducer function's returned value is assigned to the accumulator,
// whose value is remembered across each iteration throughout the array,
// and ultimately becomes the final, single resulting value.

// let countOccurrence = takenNumbers.reduce((acc, curr) => {
//     if (curr === searchedNumber) {
//         acc += 1;
//     }

//     return acc;
// }, 0);

// A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.
// numArr.map((el, ind) => el + ind);

// Array always have to be cloned, in new function also
// let inventory = [1, 2, 4];

// function solve(equip = []) {
//     equip = inventory.slice(0);
//     equip.pop();
//     console.log(equip);
// }

// solve(inventory);
// console.log(inventory);

// let peopleInWagons = input.shift().split(' ').map(Number);
// let maxCapacity = + input.shift(); to Number

// console.log(numbers.indexOf(ind)); if we have that element will return index of it
// if not will return -1

// let a = arr.shift() || 0; if not return 0

// let matrix =
//     ['5 10 15 20',
//     '10 10 10 10',
//     '10 15 10 10',
//     '10 10 10 10'];

// function mapMatrixToNumbers(arr) {
//     return arr.map(row => row.split(' ').map(Number));
// }

// let numberMatrix = mapMatrixToNumbers(matrix);

// function extractColumn(arr, column) {
//     return arr.map(x => x[column])
// }

// let col = extractColumn(matrix, 0);

// console.log();

// iterate over row, iterate over column of this row ;)
// numberMatrix.map(row => row.map(col => {
//     if (col > 0) {
//         count += 1;
//         damage += col;
//     }
// }));


// iterate over two matrices
// let currTempEl = tempMatrix[row % tempRows][col % tempCols];
// let currMessEl = messageMatrix[row][col];

// CAN WE IMPLEMENT THIS FUNCTIONALITY???

// indexOf() - returns -1 if the value is not found

let numbers = [5, 10, 15, 20, 25, 30];
// index, delete count, add items if needed
numbers.splice(3, 2, 'twenty', 'twenty-five');
console.log(numbers.join(' | '));

function firstLastKElements(arr) {
    let k = arr.shift();
    let output = [];
    output.push(arr.slice(0, k).join(' '));
    output.push(arr.slice(arr.length - k, arr.length).join(' '));
    return output.join('\n');
}

// console.log(firstLastKElements([2, 7, 8, 9]));
// console.log(firstLastKElements([3, 6, 7, 8, 9]));

function sumLastKNumbersSequence(n, k) {
    let seq = [ 1 ];
    for (let i = 2; i <= n; i++) {
        let end = Math.max(0, seq.length - k);
        let currNum = addNewNumber(seq.length - 1, end, seq);
        seq.push(currNum);
    }
    return seq.join(' ');

    function addNewNumber(start, end, seq) {
        let num = 0;
        for (let i = start; i >= end; i--) {
            num += seq[i];
        }
        return num;
    }
}

// console.log(sumLastKNumbersSequence(6, 3));
// console.log(sumLastKNumbersSequence(8, 2));
// console.log(sumLastKNumbersSequence(9, 5));

// filter elements

let arr = [1, 2, 3];

arr.splice(1, 5);
console.log(arr);

let hasSpace = addedPeople <= maxCap;

            if (hasSpace) {
                wagons[i] = addedPeople;
                break;
            }


function sortAnArrayBy2Criteria(input = []) {
    let sorted = input.sort((a, b) => {
        let res = a.length - b.length;
        if (res === 0) {
            return a.localeCompare(b, 'en', {
                sensitivity: 'base'
            });
        }
        return res;
    });
    return sorted.join('\n');
}

function processOddNumbers(input = []) {
    let numbers = input;
    let result = numbers
        .filter(function (el, ind) {
            return ind % 2 !== 0;
        })
        .map(x => x * 2)
        .reverse();
    console.log(...result);
}


// processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);

 // iterate over row, iterate over column of this row ;)
 numberMatrix.map(row => row.map(el => {
    if (el > 0) {
        kills += 1;
        snowballDamage += el;
    }
}));

// Methods Implemented
// FILTER IMPLEMENTATION
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter((word, ind) => word.length > 6);

    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]

    // function isBigEnough(value) {
    //     return value >= 10
    // }

    // let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
    // filtered is [12, 130, 44]

    Array.prototype.fiilter = function (isTrue) {
        let filtered = [];
        let ind = arguments[1];
        let count = 0;
        for (let i = 0; i < this.length; i++) {
            ind = i;
            let res = isTrue(this[i]);
            if (res === true) {
                filtered[count] = this[i];
                count += 1;
            }
        }

        return filtered;
    }

    // function fill() {
    //     return 1;
    // }
    function func(x) {
        let isTrue = false;

        if (x > 10) {
            return true;
        }
    }

    let numbers = [1, 3, 28, 11, 5, 103, 132];
    // let result = numbers.fiilter(func);
    let otg = numbers.fiilter((x, ind) => x > ind);

    console.log(otg);

    // filter index
    // to return current index

// PUSH IMPLEMENTATION
    // push adds one or more elements to the end of tha array
    let numbers = [1, 2, 3, 4, 5, 6];
    // let le = numbers.push('cow', 7);
    // console.log(le);
    // console.log(numbers);
    // console.log(typeof(numbers[7]));

    Array.prototype.puuush = function () {
        let startIndex = this.length;
        let newLength = this.length = this.length + numOfElements;

        let argsIndex = 0;
        for (let i = startIndex; i < newLength; i++) {
            this[i] = arguments[argsIndex];
            argsIndex += 1;
        }

        return newLength;
    }

    let numOfElems = numbers.puuush(1, 2, 'osem');
    console.log(numbers);
    console.log(numOfElems);

    // other way
    function push(arr, ...elements) {
        // ...elements give me like array, rest operator
    
        let arrLength = arr.length + elements.length;
        for (let i = 0; i < arrLength; i++) {
           arr[arr.length] = elements[i];
        }
        
        return arr.length;
    }
    
    push([1, 2, 3], 'a', 3);



// POP IMPLEMENTATION
    // pop()
    // method is also function
    let numbers = [1, 2, 3, 4, 5, 6];

    let lastElement = numbers.pop();

    console.log(numbers);
    console.log(lastElement);

    // pop implementation
    function pop(arr) {
        // type check, defensive programming
        // if (!Array.isArray(arr)) {
        //     return;
        // }
        let lastElement = arr[arr.length - 1];
        arr.length = arr.length - 1;
        // let newArr = new Array(newArrLength);

        // for (let i = 0; i < newArrLength; i++) {
        //     newArr[i] = arr[i];
        // }

        // arr.pop();

        return lastElement;
    }

    let le = pop(numbers);
    console.log(numbers);
    console.log(le);

    // mutation function
    Array.prototype.poop = function () {
        let lastElement = this[this.length - 1];

        this.length = this.length - 1;

        return lastElement;
    }

    let n = [1, 2, 3, 4, 5];
    let lee = n.poop();
    console.log(n);
    console.log(le);



// MAP IMPLEMENTATION
    const array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);

    console.log(map1);
    // expected output: Array [2, 8, 18, 32]


    Array.prototype.maap = function (call) {
        let newArr = [];

        for (let i = 0; i < this.length; i++) {
            newArr[i] = call(this[i]);
        }

        return newArr;
    }

    function addOneToX(x) {
        return x + 1;
    }

    const numbers = [1, 2, 3];
    const newNumbers = numbers.maap(addOneToX);
    const arrowNewNumbers = numbers.maap(x => x + 1);
    console.log();



// REDUCE IMPLEMENTATION
    const array1 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));
    // expected output: 10

    // 5 + 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer, 5));
    // expected output: 15

    Array.prototype.reduuce = function (red, initVal = 0) {
        let acc = this[0] + initVal;

        for (let i = 1; i < this.length; i++) {
            let curr = this[i];
            acc = red(acc, curr);
        }

        return acc;
    }

    const numbers = [1, 2, 3, 4];
    const reduceer = (accumulator, currentValue) => accumulator + currentValue;

    console.log(numbers.reduuce(reduceer));
    console.log(numbers.reduuce(reduceer, 5));



// SHIFT IMPLEMENTATION
    // shift() removes first element, and return
    let numbers = [1, 2, 3, 4];
    let firstElem = numbers.shift(); 

    console.log(firstElem);
    console.log(numbers);

    Array.prototype.shiift = function () {
        let firstElement = this[0];

        // make new Array with length old Array length - 1
        let newArrLength = this.length - 1;
        let newArr = new Array(newArrLength);

        // put values to newArr
        for (let i = 0; i < newArrLength; i++) {
            newArr[i] = this[i + 1];
        }

        // make old array with length - 1
        this.length = this.length - 1;
        // put change values to old array
        for (let j = 0; j < this.length; j++) {
            this[j] = newArr[j];
        }
        
        return firstElement;
    }

    Array.prototype.shiiift = function () {
        let firstElement = this[0];

        // change values
        for (let i = 1; i < this.length; i++) {
            this[i - 1] = this[i];
        }

        // make old array with length - 1
        this.length = this.length - 1;
        
        return firstElement;
    }

    let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
    let fe = letters.shiiift();
    console.log(fe);
    console.log(letters);



// SLICE IMPLEMENTATION
    // slice()
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7];
    Array.prototype.sliice = function (start = 0, end = this.length) {
        let sliced = [];
        let slicedIndex = 0;
        for (let i = start; i < end; i++) {
            sliced[slicedIndex] = this[i];
            slicedIndex += 1;
        }

        return sliced;
    }

    let arrCopy = numbers.sliice();
    let slicedArr = numbers.sliice(4);
    let slicedArrFromTo = numbers.sliice(4, 7);

    console.log(arrCopy);
    console.log(slicedArr);
    console.log(slicedArrFromTo);
    console.log(numbers);
    console.log(numbers);