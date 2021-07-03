// array iteration
//  for-in and for-of loops

// collection of variables in one place

// in programming we always know how many parameters we have
// array is sequence of elements
// 0,1,2,3,4 indexes
// students[]
// multiple values in one variable
// elements begin at 0 to length - 1
// arrays can have variable size (C#/Java can't resize, have to make new array)

// let numbers = [1, 2, 3, 4, 5];
// let names = []; (literal for arrays)

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

// when we add new element new value is added to array (the array is not rewrite)
// best to use Number()

// input.shift() (removes the first element of array)
// input.pop() (removes the last element of array)

// Parse means taking string and convert to another data
// 80 to 120 cols


// function dayOfWeek(num) {
//     let days = [
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//         'Sunday'
//     ];

//     if (1 <= num && num <= 7) {
//         console.log(days[num - 1]);
//         return; that's smart
//     }
//         console.log("Invalid day!");
// }

// Array of different types
// Array holding numbers
// Array holding strings

// Array holding mixed data
// let mixedArray =
//     [20, new Date(), 'hello', {x: 5, y: 8}];
// better not

// Arrays better to be with one type data

// Replace an element value
// let arr = [10, 20, 30];
// arr[0] = 5; // Elements can be modified
// console.log(arr); // [5, 20, 30]

// Check if the array contains the specified element:
// console.log(arr.includes(20)); // false
// console.log(arr.includes(0)); // true

function solve3(grades) {
    const names = ['Pesho', 'Gosho', 'Stamat'];

    names[10] = 'Peter'; // will create 10th element and will do so many empty elements
    names[-5] = 'se taq';
    console.log(names);
    console.log(names.length);
}

// solve3();

// arr.push(); put element at the end of array

// better create new array for better readability is good practice

// for-in and for-off are used for iterations around arrays

// For-of Loop
// Iterates through all elements in a collection
// cannot access the current index

// for (const el of collection) {
//     // Process the value here
// }

// For-in Loop
// iterates through all indexes in a collection
// is useful in objects

// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
//     }
// }

// can be braked
// const is for protection just to not change the array

function printResult() {
    let result = "";
    // for (let i = 0; i < arrayOfStrings.length; i++) {
    //     result += arrayOfStrings[i] + " ";
    // }
    // for (let string of arrayOfStrings) {
    //     result += string + " ";
    // }
    for (const index in arrayOfStrings) {
        result += arrayOfStrings[index] + " ";
    }
    console.log(result);
}

//  HEAP
// 1000 + 8 * 0
// 1000 + 8 * 1
// here the PC allocates memory

// Turn on intellisense
function solve(data = []) {
    // data. something now we have intellisense
}

// map is method which creates new array

// imperative is when you write logic
// declarative is when you tell what to do and
// don't think how is done the problem

// For Arrays methods to use
// .map() (does one type operations to every element of array)
// map have second parameter index and increment it automatically
// .reduce() reduce all the values to one
// for-of

// .foreach() have no breaks and can fill the memory

function commonElemIncludes(arr1 = [], arr2 = []) {
    for (let i = 0; i < arr1.length; i++) {
        // for (let j = 0; j < arr2.length; j++) {
        if (arr2.includes(arr1[i])) {
            console.log(arr1[i]);
        }
        // }
    }
}

function solve5(arrayOfNums = []) {
    let output = arrayOfNums
        .map(Number)
        .map(number => number + 2);

    console.log(output, typeof output);
}
// can chain arrays a lot
// solve5([1, 2, 3, 4, 5, 6]);

function commonElemForEach(arr1 = [], arr2 = []) {
    arr1.forEach((elem) => {
        // for (let j = 0; j < arr2.length; j++) {
        if (arr2.includes(elem)) {
            console.log(elem);
        }
        // }
    });
}

// in programming 0 is even and odd number
// in math is only even

// console.log(resultArr.join(' - ')); (join the elements of the array with " - ")

function mergeArraysDeclarativeWay(strArrOne = [], strArrTwo = []) {
    let resultArr = [];

    strArrOne.map((element, i) => {
        i % 2 === 0 ?
            resultArr.push(Number(element) + Number(strArrTwo[i])) :
            resultArr.push(element + strArrTwo[i]);
    });
    console.log(resultArr.join(" - "));
}

// .slice() and .splice()
// isNan() bool return



// with .shift and .push we change the array
// slice is good brother
// 1st use slice, then in that copy of the array use splice
// .slice() return new array
// .splice() make change to arrays

// ladybugIndexes.splice(index, 1); remove element at particular position

// if have to many repeating code and don't know why... is wrong
// if you have repeating checks probably you're wrong
// do the hardest tasks, looking at people's solution
// then do it yourself again

// .unshift() put new element on first position

// let filtered = [12, 5, 8, 130, 44].filter(value => value >= 10);
// console.log(filtered); // 12, 130, 44

let add = function (x, y) {
    return x + y;
}

console.log(add(10, 20)); // 30

// arrow function
let addArrow = (x, y) => x + y;
console.log(addArrow(10, 20));

// numbers.filter()
function nonDecreasingSubSequenceDeclarative(numArr = []) {
    let numbers = numArr;
    let currentBiggest = Number.MIN_SAFE_INTEGER;
    let output = "";

    numbers = numbers.filter(number => {
        if (number >= currentBiggest) {
            currentBiggest = number;
            return true;
        }
    })
    numbers.forEach(number => output += number + " ");
    console.log(output);
}


// nonDecreasingSubSequenceDeclarative([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// nonDecreasingSubSequenceDeclarative([1, 2, 3, 4]);
// nonDecreasingSubSequenceDeclarative([20, 3, 2, 15, 6, 1]);

// let i = listOfGames.indexOf(game);
//                 listOfGames.splice(i, 1);
// takes from exact index to the next one in this case
// if i = 1, and one elem from i, [i, 1]


// Multidimensional Arrays
// mainly with 2 dimensional. The concept is as simple as working with a simple 1-dimensional array.
// It is just an array of arrays.

function print2DMatrix(matrix = []) {
    for (let row = 0; row < matrix.length; row++) {
        let outputRow = "";
        for (let col = 0; col < matrix[row].length; col++) {
            outputRow += matrix[row][col];
        }
        console.log(outputRow);
    }
}

function createMatrix(n) {
    let matrix = [];
    for (let row = 0; row < n; row++) {
        let currentArray = [];
        for (let col = 0; col < n; col++) {
            currentArray.push(row + col);
        }
        matrix.push(currentArray);
    }

    print2DMatrix(matrix);

    function print2DMatrix(matrix = []) {
        for (let row = 0; row < matrix.length; row++) {
            let outputRow = "";
            for (let col = 0; col < matrix[row].length; col++) {
                outputRow += matrix[row][col];
            }
            console.log(outputRow);
        }
    }
}

function emptyMatrix(rows, cols) {
    let empty = new Array(rows);
    for (let row = 0; row < rows; row++) {
        empty[row] = new Array(cols);
    }
    return empty;
}

// createMatrix();

// if we put new cols out of the length - 1 to the array it automatically goes bigger and its size change

//  function always is doing only one thing
//  do put the parameters always

// magicMatrix (i checked 1st rows then cols, they checked both together)

function createEmptyRows() {
    for (let r = 0; r < rows; r++) matrix[r] = [];
}

// assign length of for loop to variable could be a good idea, because we can manipulate it later
// can find shorter names of the variables, don't re-use declare the same names of the variables inside the function and in global

// create matrix and then make all of elements numbers
// let matrix = matrixRows.map(
// row => row.split(' ').map(Number));

function createMatrix(rows) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }
    return matrix;
}

function orbit([rows, cols, x, y]) {
    let matrix = emptyMatrix(rows, cols);

    let starRow = x;
    let starCol = y;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            matrix[r][c] = Math.max(Math.abs(r - starRow), Math.abs(c - starCol)) + 1;
        }
    }

    print2DMatrix(matrix);

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
                outputRow += matrix[row][col] + " ";
            }
            console.log(outputRow);
        }
    }
}

// orbit([4, 4, 0, 0]);
// orbit([5, 5, 2, 2]);
// orbit([3, 3, 2, 2]);

// array with given size filled with zeroes
// let newArr = new Array(fieldSize).fill(0);

// You can add an element to the end of the array:
let arr = [10, 20, 30];
arr[arr.length] = 40;
console.log(arr); // [10, 20, 30, 40]

// Reverse array of strings
function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let oldElement = arr[i];
        let previousIndex = arr.length - 1 - i;
        arr[i] = arr[previousIndex];
        arr[previousIndex] = oldElement;
    }
    console.log(arr.join(' '));
}

function dayOfWeek(num) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    if (num >= 1 && num <= 7) {
        return days[num - 1];
    }
    return 'Invalid day!';
}

function reverseNumbersOptimization(n, arr) {
    let numberElements = parseInt(n);
    let result = '';
    for (let i = numberElements; i > 0; i--) {
        result += arr[i - 1] + ' ';
    }
    return result.trim();
}

// console.log(reverseNumbersOptimization(3, [10, 20, 30, 40, 50]));
// console.log(reverseNumbersOptimization(4, [-1, 20, 99, 5]));
// console.log(reverseNumbersOptimization(2, [66, 43, 75, 89, 47]));

function swapElements(strArr) {
    for (let i = 0; i < strArr.length / 2; i++) {
        let currEl = strArr[i];
        let backInd = strArr.length - i - 1;

        strArr[i] = strArr[backInd];
        strArr[backInd] = currEl;
    }
    return strArr;
}

// Format one market line or multiple lines of code
// Ctrl + K + F

// Format whole document
// Alt + Shift + F


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

function condenseArrayOfNumbersOtherWay(numbers) {
    let repeats = numbers.length - 1;
    for (let i = 0; i < repeats; i++) {
        let condensed = [];
        for (let j = 0; j < numbers.length - 1; j++) {
            let currentElem = numbers[j] + numbers[j + 1];
            condensed.push(currentElem);
        }
        numbers = condensed;
    }
    return numbers[0];
}

// console.log(condenseArrayOfNumbersOtherWay([2, 10, 3]));
// console.log(condenseArrayOfNumbersOtherWay([5, 0, 4, 1, 2]));
// console.log(condenseArrayOfNumbersOtherWay([1]));