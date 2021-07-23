// LINKS
    // caniuse.com (check for new features) (fromEntries)


// let songData = input[i].split('_');
        // let [typeList, name, time] = input[i].split('_');
        // let typeList = songData[0];
        // let name = songData[1];
        // let time = songData[2];

// naming of variables to be descriptive, can be 3-4 words even
// don't try to make them short

// don't use the parameter directly, but do make local variable
// can have two functions with the same name and JS use the last writen in the code
// 80 to 120 cols for displaying code on one row

// in programming 0 is even and odd number
// in math is only even

// be sure that you can solve the problem with the algorithmic way
// Array operations
    // push, pop, shift, unshift
    // CAN WE IMPLEMENT THIS FUNCTIONALITY???

// Format one market line or multiple lines of code
// Ctrl + K + F

// Format whole document
// Alt + Shift + F

// value types are in steak (only copy the value if its used in function)
// reference type are in heap (Array, Object, Function)
    // (here is not copying the value of array, but is changing it, because is refers to address)

// Func parameters
// [Noun] or [adj.] + [Noun]
// speedKmh, firstNumber

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

// ARRAYS INFO
    // let peopleInWagons = input.shift().split(' ').map(Number);
    // let maxCapacity = + input.shift(); to Number

    // console.log(numbers.indexOf(ind)); if we have that element will return index of it
    // if not will return -1

    // let a = arr.shift() || 0; if not return 0

    // Array always have to be cloned, in new function also
    // let inventory = [1, 2, 4];

    // function solve() {
    //     let equip = inventory.slice(0);
    //     equip.pop();
    //     console.log(equip);
    // }

    // solve(inventory);
    // console.log(inventory);

    // in JS Array is object, can be index -1 with value, but did not change the length
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

// DESTRUCTURING ASSIGNMENT
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

// ARRAYS METHODS
// original (immutable array)
// mutable when you change the original array
    // ...elements give me like array - spread operator
    // delete can delete element from array, and element of Object
        // delete removes only the value
    // push() - add to the end
    // pop() - remove from the end
        // if pop() on an empty array, it returns undefined
        let numbers = [1, 2, 3, 4, 5, 6];
        let lastElement = numbers.pop();

        console.log(numbers);
        console.log(lastElement);
    // unshift() - add to the beginning
    // shift() - remove from the beginning
    // slice() - remove a range of elements
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

        // Have to use clone (copy) of the input array
        const sheeps = ['🐑', '🐑', '🐑'];

        // Old way
        const cloneSheeps = sheeps.slice();

        // ES6 way
        const cloneSheepsES6 = [...sheeps];

    // splice() - insert at position/delete from position
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

        let numbers = [5, 10, 15, 20, 25, 30];
        // index, delete count, add items if needed
        numbers.splice(3, 2, 'twenty', 'twenty-five');
        console.log(numbers.join(' | '));

    // map is method which creates new array
        // .map() (does one type operations to every element of array)
        // map have second parameter index and increment it automatically
        // map will return all elements transformed
        // let nums = [1, 2, 3];
        // let doubled = nums.map(x => x * 2);
        // A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.
        // numArr.map((el, ind) => el + ind);




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

    // .foreach() have no breaks and can fill the memory
        // can use return to break a foreach
    // .join()
        // is trying to make string
        // two ways
        // console.log(firstElements.join(' '));
        // console.log(...lastElements);
        // resultArr.join(' - '); (join the elements of the array with " - ")
    // .slice() and .splice()
        // let numbersCopy = numbers.slice();
        // slice is good brother
        // 1st use slice, then in that copy of the array use splice
        // .slice() return new array
        // .splice() make change to arrays
        // ladybugIndexes.splice(index, 1); remove element at particular position
    // isNan() bool return
    // with .shift and .push we change the array
    // .unshift() put new element on first position
    // .filter()
        // Filter is immutable
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

            let nums = ['one', 'two', 'three', 'four'];
            console.log(nums.join('|')); // one|two|three|four

            let filteredNums = nums.filter(x => x.startsWith('t'));
            console.log(filteredNums.join('|')); // two|three

        // locale compare
            let arrStr = ['jvan', 'ivan'];

            let compare = arrStr[0].localeCompare(arrStr[1]);

            let sorted = arrStr.sort((a, b) => a.localeCompare(b));
            // return -1 when first is smaller
            // return 0 when they are the same
            // return +1 when first is bigger

            console.log(compare);

        // sort()
            // always some of
            //  return a.localeCompare(b);
            //  or
            //  return a.length - b.length;

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

            // Math.random()
                // Get random number from arr of numbers
                // let numbers = [3, 5, 8, 1, 2, 9, 4, 7, 6];
                // let randomIndex = Math.floor(Math.random() * (numbers.length - 1));
                // let number = numbers[randomIndex];

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

// METHODS IMPLEMENTED
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
        if (x > 10) {
            return true;
        }
        return false;
    }
    
    let numbers = [1, 3, 28, 11, 5, 103, 132];
    // let result = numbers.fiilter(func);
    let otg = numbers.fiilter((x, ind) => {
        if (x % 2 === 0) {
            return true;
        }
        return false;
    });
    
    console.log(otg);
    
    // filter index
    // to return current index

// PUSH IMPLEMENTATION
    // push adds one or more elements to the end of the array
    let numbers = [1, 2, 3, 4, 5, 6];
    let countOfElements = numbers.push('cow', 7); // adds to the end of array
    // console.log(le);
    // console.log(numbers);
    // console.log(typeof(numbers[7])); // number
    // console.log(typeof(numbers[6])); // string

    Array.prototype.puuush = function () {
        let startIndex = this.length;
        let numOfElements = arguments.length;
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

// POP IMPLEMENTATION
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
        let acc = initVal;

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
    // shift() removes first element, and return it
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

    // Math.Max()
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

    // map Matrix to Numbers
        let matrix =
            ['5 10 15 20',
            '10 10 10 10',
            '10 15 10 10',
            '10 10 10 10'];

        function mapMatrixToNumbers(arr) {
            return arr.map(row => row.split(' ').map(Number));
        }

        let numberMatrix = mapMatrixToNumbers(matrix);

        function extractColumn(arr, column) {
            return arr.map(x => x[column])
        }

        let col = extractColumn(matrix, 0);

    // iterate over row, iterate over column of this row ;)
        numberMatrix.map(row => row.map(col => {
            if (col > 0) {
                count += 1;
                damage += col;
            }
        }));

    // iterate over two matrices
        let currTempEl = tempMatrix[row % tempRows][col % tempCols];
        let currMessEl = messageMatrix[row][col];

    // coordinates example
        let coords = [[0, 0], [0, 1], [1, 1], [2, 2], [0, 3]];
        coords = getValidCoords(coords);
        
        function getValidCoords(coords) {
        
            // coords = coords.map(curr => { // iterate over everything
            let index = 0;
            while (index < coords.length) {
                let curr = coords[index];
                let x = curr[0];
                let y = curr[1];
        
                let result = coords.filter(c => {
                    let currX = c[0];
                    let currY = c[1];
                    // dont matter the arrangement of coords just we need the bombs to explode
                    let diffX = Math.abs(x - currX);
                    let diffY = Math.abs(y - currY);
                    if (diffX > 1 || diffY > 1) {
                        return c;
                    }
                });
        
                coords = [curr, ...result];
                index += 1;
            }
        
            return coords.reverse();
        }

    // iterate over a bomb in matrix
        let matrix =
        ['5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10'];

        function mapMatrixToNumbers(arr) {
            return arr.map(row => row.split(' ').map(Number));
        }

        let matrixOfNumbers = mapMatrixToNumbers(matrix);

        function extractColumn(arr, column) {
            return arr.map(x => x[column])
        }

        // let col = extractColumn(matrixOfNumbers, 0);

        console.log();


        // bomb coords
        let x = 3;
        let y = 3;


        // start row col
        matrixOfNumbers = explodeBomb(x, y, matrixOfNumbers);


        function explodeBomb(x, y, matrixOfNumbers) {
            const bombPower = matrixOfNumbers[x][y];

            let startRow = x - 1;
            let startCol = y - 1;

            let row = startRow;
            let col = startCol;

            let rowLength = matrixOfNumbers[0].length;
            let colLength = matrixOfNumbers.length;

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (row >= 0 && col >= 0 && row <= rowLength - 1 && col <= colLength - 1) {
                        matrixOfNumbers[row][col] = explodingBunny(row, col);
                    }

                    col += 1;
                }
                col = startCol;
                row += 1;
            }

            return matrixOfNumbers;

            function explodingBunny(row, col) {
                let currentBunny = matrixOfNumbers[row][col];
                let result = currentBunny - bombPower;
                if (result < 0) {
                    result = 0;
                }

                return result;
            }
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

// function
    // black box which have certain input
    // and will return some result
    // function is a subprogram designed to perform a particular task
    // we can say to them methods
    // values can be passed into functions and used within the function
    // in function declaration we have parameters
    // when invoking function we have arguments
    // functions have to return something always, but not console.log

    // const arr = reference stay the same, but you can change the values inside the array
    // all the functions needs to be outside from main function

    // have to read the code like newspaper
        function printReceipt() {
            printHeader();
            printBody();
            printFooter();
        }

    // camelCase naming
    // parameter is the input
    function printStars(count) {
        console.log("*".repeat(count));
    }

    
    // command is one row of execution

// Why use functions?
    // split large problems into small pieces
    // better organization of the program
    // improves code readability and understandability
    // Avoiding repeating code
    // DRY (do not repeat yourself)
    // if we write code and after we want to copy it then we need to have a function

// Function Without Parameters
    // executes the code between the brackets
    // function without parameters (result is always the same), unless it reads data from outside of it
    function multiplyNumbers() {
        let result = 5 * 5;
        console.log(result);
    }

    // multiplyNumbers(); // Expected output: 25

    // RECURSION
        // itself (recursion)
        // function crash() {
        //     crash();
        // }

        // recursion self-invoking
        function countDown(x) {
            console.log(x);
            if (x > 0) {
                countDown(x - 1);
            }
        }
        // countDown(10); // useful just have to have always exit point


// Declaring Function (statement)
    // functions can have several parameters
    // functions always return a value (custom or default)
    // if we don't put return, the function returns undefined
    function funcCombination(input) {
        console.log(input);
    
        // return input[0];
    }

    let functionResult = funcCombination("Pesho"); // print: "Pesho"
    console.log(functionResult);    // then print the variable return input[0] or "P"

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


//  Code Structure and Code Formatting
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



    
// Examples / Tasks / Problems
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

function oddAndEvenSumModulus(num) {
    let oddSum = 0;
    let evenSum = 0;

    while (num > 0) {
        let curr = num % 10;
        num = Math.floor(num / 10);
        if (curr % 2 === 0) {
            evenSum += curr;
        } else {
            oddSum += curr;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

// console.log(oddAndEvenSum(1000435));
// console.log(oddAndEvenSum(3495892137259234));

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

function oddAndEvenSumString(number) {
    let digits = number.toString().split('').map(Number);

    let oddSum = 0;
    let evenSum = 0;

    let oddNum = x => {
        if (x % 2 === 1) {
            return true;
        }
        return false;
    };

    let calcSums = () => {
        for (const d of digits) {
            if (oddNum(d)) {
                oddSum += d;
                continue;
            }
            evenSum += d;
        }
        return [oddSum, evenSum];
    };

    let sum = calcSums();
    return `Odd sum = ${sum[0]}, Even sum = ${sum[1]}`;
}

// console.log(oddAndEvenSum(1000435));
// console.log(oddAndEvenSum(3495892137259234));

// this function combine the value and operation, but know nothing about them
function funcCombination(num, operation) {
    let result = operation(num);
    console.log(result);
}

// both are the same
// funcCombination(5, multiply);
funcCombination(5, (a) => a * a); // with one param we can remove ()
funcCombination(2, x => ++x);

// empty arrow function, have to return some value
funcCombination(5, () => 10);

// each function can be written like arrow function
// const when we assign function to variable

function sum(x, y) {
    'use strict';
    return x + y;
}
console.log(sum(2, 3)); // 5

let sum1 = (a, b) => {
    return a + b;
};

console.log(sum1(2, 2)); // 4

let sum2 = (a, b) => (a + b);
console.log(sum2(3, 3)); // 6

let multiply = (a) => a * a;


// OBJECTS and CLASSES

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

// ASSIGN METHOD
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
    
// LOOPS
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

