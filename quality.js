// LINKS
    // caniuse.com (check for new features) (fromEntries)
    // regexr.com
    // regex101.com

// let songData = input[i].split('_');
        // let [typeList, name, time] = input[i].split('_');
        // let typeList = songData[0];
        // let name = songData[1];
        // let time = songData[2];

// naming of variables to be descriptive, can be 3-4 words even
// don't try to make them short

// comments have to be used when you have not understandable code

// write console.log in judge to check the zero tests

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

// find the end of the input, in1, in2, in3, ... end, ... here can be something
    // (but we take only before end)
// let racers = input.slice(0, input.indexOf('end of race'));

// set and array have only values and have different methods
// objects and maps have [key, value] pairs

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

// JS KEYWORDS
    // Keyword 'in'
    const car = { make: 'Honda', model: 'Accord', year: 1998 };

    console.log('make' in car);
    // expected output: true

    delete car.make;

    if ('make' in car === false) {
    car.make = 'Suzuki';
    }

    console.log(car.make);
    // expected output: "Suzuki"

// Parse means taking string and convert to another data
    // best to use Number() when parsing
    // use parseFloat() to remove trailing zeroes
        // num = parseFloat(num.toFixed(precision));

// Ternary operator
    // if-else
    // return check ? "yes" : "no";
    function ternaryExample(arr = []) {
        return arr.length === 0
        ? 'Parking Lot is Empty'
        : arr.join('\n');

        // if (arr.length === 0) {
        //     return 'Parking Lot is Empty';
        // }

        // return arr.join('\n');
    }

// Parse Input
    // "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    let [name, grade, avgScore] = currStudent.map(x => isNaN(x = x.split(': ')[1]) ? x : Number(x));

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

                // better use
                for (const line of input) {
                    let tokens = line.split(' ');
                    // than
                    while(input.length > 0) {
                        input.shift().split(' ');
                    }
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

    let [name, number] = input.shift().split(' ');


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
    // is iteration through arrays
        // its not like map, because map is projected to another array,
            // here we just iterate through arr
        // is not breakable
        // we have to go through all of the elements
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
            // .sort((a, b) => sortDescending(a[1], b[1]) || sortAlphabetically(a[0], b[0]))

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


// better use
    for (const line of input) {
        let tokens = line.split(' ');
        // than
        while(input.length > 0) {
            input.shift().split(' ');
        }
    }

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
    //  leave a blank line (space) between functions, after loops and after if statements
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
// in JS at run time you can add and remove properties of any object

// Object default values
// good example to make object and put default values in the keys of object with
    reduce((acc, curr) => { acc[curr] = 0; return acc; }, {});

// this keyword is used to set a property of the objects to a given value

// JSON
    // JavaScript Object Notation
    // convert to JSON string
    let test = JSON.stringify(obj);

    // we can convert JSON string into object using JSON.parse(text)
    let obj = JSON.parse(text);

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

// OBJECT WITH functions inside (useful instead of if-else statements (switch case) and is more clear and smart)
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
    // provides initial values for the state of an object

    // functionality which creates objects
    // template which creates object
    // function which returns object, constructor functions
    // an object created by the class pattern is called an instance of the class
    // a class has a constructor - subroutine called to create an object
    // it prepares the new object for use
    class Student {
        constructor(name) {
            this.name = name;
        }
    }

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

        
    // everything in constructor is like you want to do it at the moment
        // methods can be out of constructor
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

        // everything in constructor is like you want to do it at the moment
        // methods can be out of constructor

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

        // Another class example
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

// ASSIGN METHOD
    // The Object.assign() method copies all enumerable
    // own properties from one or more source objects
    // from one or more source objects to a target object.
    // It returns the modified target object.

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

 // get returns current price of the laptop
    //  get price() { return 800  - (this.info.age * 2) + (this.quality * 0.5); };


    // Object
    function personInfo(firstName, lastName, age) {
        let person = {};
        person.firstName = firstName;
        person.lastName = lastName;
        person.age = Number(age);
    
        return person;
    }
    
    // console.log(personInfo('Ivan', 'Halkov', 29));
    
    // Class
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = Number(age);
        }
    }

    let p = new Person('Ivan', 'Halkov', 29);
    console.log(p);

// Methods of Objects
    // functions within JS object are called methods
    let person = {
        sayHello: function () {
            console.log('Hi, guys');
        }
    };

    let person = {
        sayHello() {
            console.log('Hi, guys');
        }
    };

    let person = {
        name: 'Peter',
        age: 20
    };
    person.sayHello = () => console.log('Hi, guys');

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
for (const [key, value] of entries) {
}

// Value vs. Reference Types
    // memory stack and heap
    // JS has 7 data types that are copied by value:
    // Boolean, String, Number, null, undefined, Symbol, BigInt
    // these are primitive types

// JS has 3 data types that are copied by having their reference copied:
    // Array, Objects and Functions
    // these are all technically Objects, so we'll refer to them collectively as Objects

    
// GOOD Object EXAMPLE USING FUNCTIONS
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

    let info = { producer: "Dell", age: 2, brand: "XPS" };
    let laptop = new Laptop(info, 10);
    laptop.turnOn();
    console.log(laptop.showInfo());
    laptop.turnOff();
    console.log(laptop.quality);
    laptop.turnOn();
    console.log(laptop.isOn);
    console.log(laptop.price);
}


// ASSOCIATIVE ARRAYS
    // key => value pairs
    // key - integer or string
    // value - can be any type, even arr, object, etc.

    // let object = {
    //     name: 'Pesho',
    //     age: 20
    // };

    // let object = {};
    // object.name = 'Pesho';
    // object.age = 20;

    // when we want dynamically to update
    // let object = {};
    // object['name'] = 'Pesho';
    // object['age'] = 20;
    // console.log(object);

    let assocArr = {
        name: 'Pesho',
        age: 20
    };

    // The syntax for accessing the value of a key is:
    person['age'];
    // or
    assocArr[key];

    let age = assocArr[key];
    // if the name of the key is with two words separated by space, or some symbol,
        // they have to be called with parentheses

// Iteration with for-in only for objects, with (for-of is not possible)
    // we have delete here like in maps but is very slow performance
        // and is bad practice

    for (const key in assocArr) {
        console.log(`${key}: ${assocArr[key]}`);
    }

    // forEach
    Object.entries(assocArr).forEach(el => {
        console.log(`${el[0]}: ${el[1]}`);
    });
    
    Object.keys(assocArr).forEach(key => {
        console.log(`${key}: ${assocArr[key]}`);
    });

// Map()
    // Storing Key-Value pairs
    // stores its elements in insertion order
    // a for-of loop returns an array of [key, value] for each iteration
    // with objects we can only for-in
    // pure JS objects are like Maps in that both let you:
        // set keys to values
        // delete keys
        // detect whether something is stored in a key
        // let phoneBook = new Map();
        
        // like object has a name
            if (obj.name) {
                console.log(true);
            }
        
        // with set we put in map
            phoneBook.set('Pesho', '0888664466');
            
        // with get we have
            console.log(phoneBook.get('Pesho'));

        // is it phoneBook a Map()
            console.log(phoneBook instanceof Map);

        // Map() is key sensitive
        phoneBook.delete('Pesho');
        console.log(phoneBook);
        console.log(phoneBook.clear()); // delete all info
        
        let entries = phoneBook.entries();

        // direct destructuring
        for (const [name, phone] of phoneBook) {
            console.log(name + ' ' + phone);
        }

        // map is storing the data in the way its added
            // in objects we can store (string and number)
            // here we can use another types
        // map is used very rarely
            let iterable = Array.from(phoneBook.entries());
            console.log(iterable);
        // from map to object, middle man is array

        // taking entries from Map()
        let iterator = Array.from(storage.entries());

        // taking keys from Map()
            let iterator = Array.from(storage.keys());
            let sorted = iterator.sort((a, b) => a.localeCompare(b));
            funcPrint(sorted, storage);

            function funcPrint(arr, assocArr) {
                // taking key from the sorted array
                // print the value of that key from the storage
                for (const key of arr) {
                    console.log(`${key} -> ${assocArr.get(key)}`);
                }
            }

        if (map.has(neighborhood)) {
            // let people = map.get(neighborhood);
            map.get(neighborhood).push(person)
    
            // people.push(person);
            // map.set(neighborhood, people);

            // here we get the array and put the person in the back of it and is updated directly in the map
            // this work because we take the reference to the array
            // map.get(neighborhood).push(person);
        }


// Set() is like an array
    // keeps only unique values, if we add the same value
        // its just checked for it and not re-write
    // keep only values


    // store unique values of any type,
        // whether primitive values or object references
    // set objects are collections of values
    // can iterate through the elements of a set in insertion order
        // (it stays in its original order)
        let set = new Set([1, 2, 3, 4, 5]);
        console.log(set);
        console.log(set.has(1));

    // set keeps unique values
        let numbers = new Set();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(3);
        numbers.add(4);
        numbers.add(5);

        console.log(numbers); // 1, 2, 3, 4, 5
        console.log(numbers.has(30));

        let parking = {};
        for (const line of input) {
            let [direction, carNumber] = line.split(', ');
        
            parking[carNumber] = direction;
            if (direction === 'IN') {
                parking.add(carNumber);
            } else if (direction === 'OUT') {
                parking.delete(carNumber);
            }
        }

        let input = ['apples 6', 'oranges 6', 'apples 10'];

        function printStorage(input = []) {
            let storage = new Map();
        
            for (const line of input) {
                let [item, qty] = line.split(' ').map(x => isNaN(x) ? x : Number(x));
                if (curr = storage.get(item)) {
                    qty += curr;
                }
        
                storage.set(item, qty);
            }
        
            let output = [];
            for (const [key, value] of storage) {
                output.push(`${key} -> ${value}`);
            }
        
            return output.join('\n');
        }
        
        // console.log(
        //     printStorage(
        //         input
        //     )
        // );

// MAP EXAMPLE
    function addressBook(input = []) {
        let storage = new Map();

        for (const line of input) {
            let [name, address] = line.split(':');
            storage.set(name, address);
        }

        // taking keys from Map()
        let iterator = Array.from(storage.keys());
        let sorted = iterator.sort((a, b) => a.localeCompare(b));

        return print(sorted, storage);

        function print(arr, assocArr) {
            // taking key from the sorted array
            // print the value of that key from the storage
            let output = [];
            for (const key of arr) {
                output.push(`${key} -> ${assocArr.get(key)}`);
            }
            return output.join('\n');
        }
    }

    // addressBook([
    //     'Tim:Doe Crossing',
    //     'Bill:Nelson Place',
    //     'Peter:Carlyle Ave',
    //     'Bill:Ornery Rd'
    // ]);

// neighborhoods, map. has / get / set
    for (const each of neighborhoods) {
        map.set(each, []);
    }

    for (const line of input) {
        let [neighborhood, person] = line.split(' - ');

        if (map.has(neighborhood)) {
            // here we get the array and put the person in the back of it and is updated directly in the map
            // this work because we take the reference to the array
            map.get(neighborhood).push(person);
        }
    }

// with object
    function wordsTracker(input = []) {
        let searchedWords = input.shift().split(' ');
        let countWords = createCountObj(searchedWords);
        let allWords = input.slice();

        for (const curr of allWords) {
            if (countWords.hasOwnProperty(curr)) {
                countWords[curr] += 1;
            }
        }

        let sort = Object.entries(countWords).sort((a, b) => b[1] - a[1]);
        let output = [];
        sort.forEach(line => output.push(`${line[0]} - ${line[1]}`));
        return output.join('\n');

        function createCountObj(searchedWords) {
            let obj = {};
            for (const word of searchedWords) {
                obj[word] = 0;
            }
            return obj;
        }
    }

// another way
function wordsTracker(array) {
    let wantedWords = array.shift().split(' ');
    let wantedWordsCounts = {};
    wantedWords.forEach(word => wantedWordsCounts[word] = 0);
    // check if the word exist in array and if so then update the object
    array.forEach(word => word in wantedWordsCounts &&
        wantedWordsCounts[word]++);
    wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
    wantedWords.forEach(word =>
        console.log(`${word} - ${wantedWordsCounts[word]}`));
}

// wordsTracker(
//     [
//         'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
//     ]
// );

function partyTime(input = []) {
    function fillTheList(guests = []) {
        let list = {
            vip: [],
            regular: []
        };

        for (const guest of guests) {
            let isVip = isFirstCharNumber(guest);
            if (isVip) {
                list.vip.push(guest);
                continue;
            }

            list.regular.push(guest);
        }

        return list;
    }

    function isFirstCharNumber(str = '') {
        let ch = str[0];
        let code = ch.charCodeAt(0);
        if (code >= 48 && code <= 57) {
            return true;
        }
        
        return false;
    }

    let partyInd = input.indexOf('PARTY');
    let [guests, came] = [input.slice(0, partyInd),
        input.slice(partyInd + 1)];

    let list = fillTheList(guests);
    let sortedList = [...list.vip, ...list.regular];

    for (const curr of came) {
        let ind = sortedList.indexOf(curr);
        sortedList.splice(ind, 1);
    }

    let notCome = sortedList.slice();
    let count = notCome.length;
    return `${count}\n${notCome.join('\n')}`;
}

// console.log(partyTime(
//     [
//         '7IK9Yo0h',
//         '9NoBUajQ',
//         'Ce8vwPmE',
//         'SVQXQCbc',
//         'tSzE5t0p',
//         'PARTY',
//         '9NoBUajQ',
//         'Ce8vwPmE',
//         'SVQXQCbc'
//     ]
// ));
// console.log(partyTime(
//     [
//         'm8rfQBvl',
//         'fc1oZCE0',
//         'UgffRkOn',
//         '7ugX7bm0',
//         '9CQBGUeJ',
//         '2FQZT3uC',
//         'dziNz78I',
//         'mdSGyQCJ',
//         'LjcVpmDL',
//         'fPXNHpm1',
//         'HTTbwRmM',
//         'B5yTkMQi',
//         '8N0FThqG',
//         'xys2FYzn',
//         'MDzcM9ZK',
//         'PARTY',
//         '2FQZT3uC',
//         'dziNz78I',
//         'mdSGyQCJ',
//         'LjcVpmDL',
//         'fPXNHpm1',
//         'HTTbwRmM',
//         'B5yTkMQi',
//         '8N0FThqG',
//         'm8rfQBvl',
//         'fc1oZCE0',
//         'UgffRkOn',
//         '7ugX7bm0',
//         '9CQBGUeJ'
//     ]
// ));

function cardGame(input = []) {
    function getPlayerData(input = []) {
        let obj = {};
        for (const line of input) {
            let [name, data] = line.split(': ');
            data = data.split(', ');

            if (!obj.hasOwnProperty(name)) {
                obj[name] = new Set();
            }
            data.forEach(item => obj[name].add(item));
        }
        return obj;
    }

    function getTotalValue(set) {
        let dataArr = Array.from(set);
        let power = {
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        };

        let type = {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        };

        let sum = 0;
        for (const line of dataArr) {
            let [p, t] = line.length === 3 ? [line.substring(0, 2),
                line.substring(2)] : line.split('');
            let currValue = Number(power[p]) * Number(type[t]);
            sum += currValue;
        }
        
        return sum;
    }

    let playersData = getPlayerData(input);
    let dataEntries = Object.entries(playersData);
    let players = {};
    for (const line of dataEntries) {
        let [name, dataSet] = [line[0], line[1]];
        let totalValue = getTotalValue(dataSet);
        players[name] = Number(totalValue);
    }

    let playersEntries = Object.entries(players);
    let output = [];
    for (const [name, value] of playersEntries) {
        output.push(`${name}: ${value}`);
    }
    return output.join('\n');
}

// console.log(cardGame(
//     [
//         'Peter: 2C, 4H, 9H, AS, QS',
//         'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//         'Andrea: QH, QC, QS, QD',
//         'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//         'Andrea: QH, QC, JS, JD, JC',
//         'Peter: JD, JD, JD, JD, JD, JD'
//     ]
// ));

function garage(input = []) {
    function print(storage) {
        let output = [];
        for (const [garageNumber, cars] of storage) {
            output.push(`Garage № ${garageNumber}`);
            for (const car of cars) {
                output.push(`--- ${car.join(', ')}`);
            }
        }
        return output.join('\n');
    }

    function putNewCar(carProperties, number) {
        let currCarr = [];
        for (const curr of carProperties) {
            let [key, value] = curr.split(': ');
            currCarr.push(`${key} - ${value}`);
        }

        storage.get(number).push(currCarr);
        return storage;
    }

    function addGarage(number) {
        if (!storage.has(number)) {
            storage.set(number, []);
        }

        return storage;
    }

    let storage = new Map();
    for (const line of input) {
        let [number, carProperties] = line.split(' - ');
        storage = addGarage(number);
        carProperties = carProperties.split(', ');
        storage = putNewCar(carProperties, number);
    }

    return print(storage);
}

// console.log(garage(
//     [
//         '1 - color: blue, fuel type: diesel',
//         '1 - color: red, manufacture: Audi',
//         '2 - fuel type: petrol',
//         '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
//     ]
// ));

function armiesBetterVersion(input = []) {
    function result() {
        let output = [];
        for (const [gladName, currObj] of sortByTotal) {
            let total = currObj.totalCount;
            let objEntries = Object.entries(currObj);
            let sortEntries = objEntries.sort((a, b) => {
                return b[1] - a[1];
            });

            output.push(`${gladName}: ${total}`);
            for (const [army, count] of sortEntries) {
                if (army !== 'totalCount' && army !== 'increaseTotal') {
                    output.push(`>>> ${army} - ${count}`);
                }
            }
        }

        return output.join('\n');
    }

    function sortByTotalCount(map) {
        let entries = Array.from(map.entries());
        let sorted = entries.sort((a, b) => b[1].totalCount - a[1].totalCount);
        return sorted;
    }

    function addCount(line, armies) {
        if (line.includes('+')) {
            let [searchedArmy, count] = line.split(' + ');
            count = Number(count);

            for (const [glad, armyData] of armies.entries()) {
                // let glad = kvp[0];
                // let armyData = kvp[1];

                for (const currArmy in armyData) {
                    // let currArmy = key;
                    let armyCount = armyData[currArmy];
                    if (currArmy === searchedArmy) {
                        armyCount += count;
                        armies.get(glad)[currArmy] = armyCount;
                        armies.get(glad).increaseTotal(count);
                    }
                }
            }
        }

        return armies;
    }

    function addArmy(line, armies) {
        let [leader, str] = line.split(': ');
        if (armies.has(leader)) {
            let [armyName, armyCount] = str.split(', ');
            armyCount = Number(armyCount);
            armies.get(leader)[armyName] = armyCount;

            armies.get(leader).increaseTotal(armyCount);
        }

        return armies;
    }

    function defeated(line, armies) {
        if (line.includes('defeated')) {
            let leader = line.split(' defeated')[0];
            if (armies.has(leader)) {
                armies.delete(leader);
            }
        }

        return armies;
    }

    function addLeader(line, armies) {
        let leader = line.split(' arrives')[0];
        armies.set(leader, {
            totalCount: 0,
            increaseTotal: function (count) {
                this.totalCount += count;
            }
        });

        return armies;
    }

    let armies = new Map();
    for (const line of input) {
        if (line.includes('arrives')) {
            armies = addLeader(line, armies);
        } else if (line.includes(':')) {
            armies = addArmy(line, armies);
        } else if (line.includes('+')) {
            armies = addCount(line, armies);
        } else if (line.includes('defeated')) {
            armies = defeated(line, armies);
        }
    }

    let sortByTotal = sortByTotalCount(armies);
    return result();
}

// console.log(
//     armiesBetterVersion(
//         [
//             'Rick Burr arrives',
//             'Fergus: Wexamp, 30245',
//             'Rick Burr: Juard, 50000',
//             'Findlay arrives',
//             'Findlay: Britox, 34540',
//             'Wexamp + 6000',
//             'Juard + 1350',
//             'Britox + 4500',
//             'Porter arrives',
//             'Porter: Legion, 55000',
//             'Legion + 302',
//             'Rick Burr defeated',
//             'Porter: Retix, 3205'
//         ]
//     )
// );


// TEXT PROCESSING

// Manipulating strings
    // searching, substring
    // replace, trim
    // split
    // more functions
    // strings are enclosed in three type of quotes ("", '', ``)

    // Both declarations are the same
        let ch = str[2];
        ch = str.chartAt(2);

    let string = "K'vo staa";
    let quote = '"Mudra misyul" Nqkoj si';

    // slowest
    let interpolation = `${string} - ${quote}`;

    // don't
    let text = `Hello World`;

    // concatenation operator '+' one of the sides should be string
    
    // Immutable
    text = 'K\'vo staa';
    text[1] = 'a';

    // returning the same value is not changed
    console.log(text);

    // think of string like value type
    // when add to the string, we rewrite it
    
    // Processing each of the items in a collection is a very common operation.
    // JavaScript provides a number of ways of iterating over a collection,
        // from simple for loops to map() and filter().

    
    // Iterators
        // In JavaScript an iterator is an object which defines a sequence
            // and potentially a return value upon its termination.
        // Once created, an iterator object can be iterated explicitly
            // by repeatedly calling next().

        // Iterating over an iterator is said to consume the iterator,
            // because it is generally only possible to do once.
        // After a terminating value has been yielded additional calls to next()
            // should continue to return {done: true}.
        // The most common iterator in JavaScript is the Array iterator,
            // which returns each value in the associated array in sequence.
        // While it is easy to imagine
            // that all iterators could be expressed as arrays,
            // this is not true.
        // Arrays must be allocated in their entirety,
            // but iterators are consumed only as necessary.
        // Because of this, iterators can express sequences of unlimited size,
            // such as the range of integers between 0 and Infinity.

        function stringIterator(str = '') {
            let result = str.split(' ');
            const iterator1 = result[Symbol.iterator]();
        
            // Once created,
                // an iterator object can be iterated explicitly
                // by repeatedly calling next().
            for (let i = 0; i < result.length; i++) {
                console.log(iterator1.next().value);
            }
        }
        
        // stringIterator('Et cillum do voluptate cillum ut cupidatat aliqua.');
    
    // Concat
        // better with "+"
        let lines = ['Hello', ' ', 'World', '!'];

        let message = ''.concat(...lines);
        console.log(message);

    // indexOf() find first found, if not in string return -1
        text = 'Az sym bylgarche obicham sym bylgarche';

        // indexOf('searched word', startInd);
        // if not given default is 0

        // if (text.indexOf('s') >= 0) {
        //      console.log('ima');
        // } else {
        //     console.log('nqma');
        // }
        // let index = text.indexOf('sym', 4);
        // console.log(index); // -1

        let index = text.indexOf('sym');
        while (index >= 0) {
            console.log(index);
            // gives next index
            index = text.indexOf('sym', ++index);
        }

    // replace(search, replacement);
        // replaces the first occurrence
        while (text.indexOf('bylgarche') >= 0) {
            text = text.replace('bylgarche', 'evropeiche');
        }

        console.log(text);

        function censoredWords(text, word) {
            while (text.includes(word)) {
                text = text.replace(word, '*'.repeat(word.length));
            }
            return text;
        }

        function removeOccurrences(word = '', text = '') {
            while (text.indexOf(word) >= 0) {
                text = text.replace(word, '');
            }
            // while (text.includes(word)) {
            //     text = text.replace(word, '');
            // }
            return text;
        }
        
        // removeOccurrences('ice', 'kicegiciceeb');

    // Trim
    // Trim start, Trim end
        let username = '   Pesho    ';
        console.log('|' + username + '|');
        console.log('|' + username.trim() + '|');

    // startsWith, endsWith
        username = 'mr. Pesho';
        // username.startsWith
        if (username.endsWith('o')) {
            console.log(username);
        }

    // slice(begin, end)

    // padStart, padEnd
        let num = '101';
        // padding just to fill to given length
        console.log(num.padStart(8, 0));
        console.log(num.padEnd(8, 0));

    // if not journal with this ind,
        // create new arr and put the ind in the arr with given key
        journal[ch] = (journal[ch] || []).concat(ind);

    // .length
        let seqLength = seq.length;

    // take character from string
        let ch = str[ind];

    // get charCode from character
        let chCode = ch.charCodeAt(0);

    // str.indexOf(ch);
    // str.lastIndexOf(ch);
        let str = 'C:\\Projects\\Data-Structures\\LinkedList.cs';
        let [file, ext] = str.substring(str.lastIndexOf('\\')+1).split('.');
        console.log(file + ' ' + ext); // LinkedList cs

    // arr.find() / 
    function stringSubstring(word = '', text = '') {
        word = word.toLowerCase();
        text = text.toLowerCase();
    
        // ternary
        return word.split(' ').find(key => key === word) ?
            word : `${word} not found`;
    }
    
    // console.log(stringSubstring('javascript',
    //     'JavaScript is the best programming language'));


    // .filter()
        console.log(filterExample());

        function filterExample() {
            let str = 'aaaaabbbbbcddddeeeedsssaaa';
            let edited = str.split('').filter((ch, ind, arr) =>
                ch !== arr[ind + 1]).join('');
            return edited;
        }

    // .substr()
        function substring(string = '', startInd, count) {
            return string.substr(startInd, count);
        }

        function removeOccurrences(word = '', text = '') {
            while (text.includes(word)) {
                text = text.replace(word, '');
            }
            return text;
        }
        
        // removeOccurrences('ice', 'kicegiciceeb');

    // next()
        function stringIterator(str = '') {
            let result = str.split(' ');
            const iterator1 = result[Symbol.iterator]();

        // Once created, an iterator object can be iterated
            // explicitly by repeatedly calling next().
            for (let i = 0; i < result.length; i++) {
                console.log(iterator1.next().value);
            }
            
            for (let i = 0; i < result.length; i++) {
                console.log(iterator1.next().value);
            }
        }

        // stringIterator('Et cillum do voluptate cillum ut cupidatat aliqua.');

        
        // STRING METHODS EXAMPLES
        function valueOfAString([str, check]) {
            let sum = 0;

            for (const ch of str) {
                let chCode = ch.charCodeAt(0);
                if (check === 'UPPERCASE' && (chCode >= 65 && chCode <= 90)) {
                    sum += chCode;
                    continue;
                } else if (check === 'LOWERCASE' && (chCode >= 97 && chCode <= 122)) {
                    sum += chCode;
                }
            }
            return `The total sum is: ${sum}`;
        }

        // console.log(valueOfAString(
        //     ['HelloFromMyAwesomePROGRAM',
        //     'LOWERCASE']
        // ));
        // console.log(valueOfAString(
        //     ['AC/DC',
        //     'UPPERCASE']
        // ));

        function serializeString([str = '']) {
            let journal = {};

            for (const ind in str) {
                let ch = str[ind];
                // if not journal with this ind,
                    // create new arr and put the ind in the arr with given key
                journal[ch] = (journal[ch] || []).concat(ind);
            }

            let entries = Object.entries(journal);
            let output = [];
            for (const [ch, value] of entries) {
                output.push(`${ch}:${value.join('/')}`);
            }
            return output.join('\n');
        }

        // console.log(serializeString(
        //     ['abababa']
        // ));

        // console.log(serializeString(
        //     ['avjavamsdmcalsdm']
        // ));

        function revealWords(words = '', text = '') {
            wordsArr = words.split(', ');

            // word length
            for (const word of wordsArr) {
                // let wordLength = word.length;
                let stars = '*'.repeat(word.length);
                text = text.replace(stars, word);
            }
            return text;
        }

        // console.log(revealWords(
        //     'great',
        //     'softuni is ***** place for learning new programming languages'
        // ));

        // console.log(revealWords(
        //     'great, learning',
        //     'softuni is ***** place for ******** new programming languages'
        // ));


        function modernTimesOfHashTag(str = '') {
            function isValid(word) {
                word = word.toLowerCase().slice(1);
                for (const ch of word) {
                    if (ch.charCodeAt(0) < 97 || ch.charCodeAt(0) > 122) {
                        return false;
                    }
        
                }
        
                return true;
            };
        
            let words = str.split(' ');
            let output = [];
            for (const word of words) {
                // 97 to 122
                if (word.startsWith('#') && word.length > 1) {
                    // let lowercaseWord = word.toLowerCase().slice(1);
        
                    if (isValid(word)) {
                        output.push(word.slice(1));
                    }
                }
            }
        
            return output.join('\n');
        }
        
        // console.log(
        //     modernTimesOfHashTag(
        //         'Nowadays everyone uses # to tag a #special word in #socialMedia'
        //     )
        // );
        
        function stringSubstring(word, text) {
            word = word.toLowerCase();
            let arr = text.toLowerCase().split(' ');
            // let found = false;
            arr.forEach(x => {
                if (x === word) {
                    // found = true;
                    return word;
                }
            });
        
            // if (found) {
            //     return word;
            // }
            return `${word} not found!`;
        }
        
        // console.log(stringSubstring(
        //     'javascript',
        //     ' is the best programming language JavaScript'
        // ));
        // console.log(stringSubstring(
        //     'python',
        //     'JavaScript is the best programming language'
        // ));
        // console.log(stringSubstring(
        //     '',
        //     'JavaScript is the best programming language'
        // ));

        function replaceRepeatingChars(str = '') {
            let prevCh = str[0];
            let newStr = prevCh;
            // here is creating always new variable in the loop
            for (let i = 1; i < str.length; i++) {
                let currCh = str[i];
                if (currCh !== prevCh) {
                    newStr += currCh;
                }
                prevCh = currCh;
            }
            return newStr;
        }
        
        // console.log(replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'));
        // console.log(replaceRepeatingChars('qqqwerqwecccwd'));
        
        
        function replaceRepeatingChars(str = '') {
            // try to assign default variables to not be confusing
            let output = '';
            let oldCh = '';
        
            // here not, but ch is also new variable
            for (const ch of str) {
                if (oldCh !== ch) {
                    oldCh = ch;
                    output += ch;
                }
            }
            return output;
        }
        
        // console.log(replaceRepeatingChars(''));
        // console.log(replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'));
        // console.log(replaceRepeatingChars('qqqwerqwecccwd'));


        function pascalCaseSplitter(str = '') {
            let strLength = str.length;
            let ch = str[0];
            let currWord = ch;
            let words = [];
            for (let i = 1; i < strLength; i++) {
                ch = str[i];
                // here is not so good,
                    // because first is making the char to uppercase
                    // and then checking it
                // when is with chCode, first is finding charCode and then checking,
                    // which is the same :D
                if (ch === ch.toUpperCase()) {
                    words.push(currWord);
                    currWord = '';
                }
                currWord += ch;
            }
            words.push(currWord);
            return words.join(', ');
        }
        
        // console.log(pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'));
        // console.log(pascalCaseSplitter('HoldTheDoor'));
        // console.log(pascalCaseSplitter('ThisIsSoAnnoyingToDo'));

// REGULAR EXPRESSIONS (RegEx)
    // Regular Expressions Language Syntax
    // string editing is very important for programmers
    // last time we used the string methods
    // string operations with regex

    // 1. Regular Expressions Syntax
        // Definition and Pattern
            // has own syntax
        // Predefined Character Classes
    // 2. Quantifiers and Grouping
    // 3. Backreferences
    // 4. Regular Expressions in JS

    // Regular Expressions
        // Definition and Classes
        // pros and cons

        // What are regular expressions?
            // Regular expressions (regex)
            // Match text by pattern
        // Patterns are defined by special syntax, e.g.
            // [0-9]+ matches non-empty sequence of digits
            // [A-Z][a-z]* matches a capital + small letters
        // regexr.com
        // regex101.com

    // Pros
        // very easy finding substrings in strings
        // vim in Linux, can increase performance with regex
        // very often is used for validation
        // rarely used
        // fast alternative is to write it ourselves

    // Cons
        // slow performance
        // its not easy readable
        // hard to edit and find mistakes

// comments have to be used when you have not understandable code
        

// just letters
// what we write will match it
// will find every match
// direct match (a, b, by, ' is', 'is')

// Expression Pattern Example
    // [ai] - matches any character of these in parentheses,
        // find me all occurrences of a and i
    // ai - is finding exactly ai occurrence

// Range (I search for one letter in this range)
    // [aueio] - every one separately, 
    // [1234567890]
    // [0-9] - range of letters 0 to 9
    // [0-2] - from 0 to 2
    // [0-9]b - any digit and after it b '3b'
    // [a-z] - from a to z lowercase
    // [a-z][0-9] - give me from 'a' to 'z' and after from '0' to '9'
    // ranges matches only single character
    // [a-zA-Z0-9] - matches letters and numbers
    // [0-37-9] - matches
    // b[1-9]
    // [0-9][0-9] - combination of two digits
    // [a-d0-4] - from a to d and from 0 to 4
    // [^0-9] - ^ (carrot sign) means (not), match everything which is different
    // [^abc] - is case sensitive
    // [а-яА-Я] - Иван [А-я]
    // [a-z0-9] - lowercase letter or digit (one letter)
    // [a-z][0-9] - letter + digit (combination letter and digit)

// Predefined Classes (escape character '\')
    // \w - matches any word character (a-z, A-Z, 0-9, _) [a-zA-Z0-9_]
        // underscores are also word characters

    // \W - matches any non-word character (opposite of \w) [^a-zA-Z0-9_] (symbols, space)

    // \s - matches any white-space character [     ]
    // \S - matches any non-white-space character (opposite of \s)

    // \d - matches any decimal digit (0-9)
    // \D - matches any non-digit decimal character (the opposite of \d)

    // \wu - 
    // \d\d - match two digits

// Quantifiers (\w+)
    // \d+ (matches previous element one or more times)
    // '*' (match previous element 0 or more times)
    // Pesho\d*
        // Pesho3
        // Pesho6
        // Pesho

    // '?' (match 0 or 1 element)
    // {3} (matches the previous element exactly 3 times)
    // \d{2,4} (custom range) from 2 to 4, if found 4 gives 4 and so on

// Grouping
    // (subexpression) - captures the matched subexpression as numbered group
        // \d{2}-(\w{3})-\d{4}
            // 22-Jan-2015
        // (?:subexpression) - defines a non-capturing group
        // ?: non capturing
        // ha+ (ha, ha ha, ha ha ha, haaaaaaa)
        // (ha)+ (match ha, haha, hahahahahahaha)
            // exactly this combination one or more times
        // ()

// To prevent capturing of letters across new lines,
    // put "\b" at the beginning and at the end of your regex. 

// Note: You should put "/" before and after the pattern
    // so that it is interpreted as a RegEx pattern.
    // Also, place the 'g' (global) flag after it,
    // so that you get all the matches in the text.

// The exec() method executes a search for a match in a specified string.
    // Returns a result array, or null.
    const regex1 = RegExp('foo*', 'g');
    const str1 = 'table football, foosball';
    let array1;
    
    while ((array1 = regex1.exec(str1)) !== null) {
        console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
        // expected output: "Found foo. Next starts at 9."
        // expected output: "Found foo. Next starts at 19."
    }
    
// match() method
    // The match() method searches a string for a match against a regex,
        // and returns the matches, as an Array object.
    const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
    const regex = /[A-Z]/g;
    const found = paragraph.match(regex);
    
    console.log(found);
    // expected output: Array ["T", "I"]

    let text = 'Lorem Pesho ipsum dolor pesho@abv.bg sit amet@gmail.com, ' +
    'consectetur adipisicing elit. Pesho Eligendi non quis exercitationem ' +
    'culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab ' + 
    'temporibus asperiores quasi cupiditate. ' + 
    'Voluptatum ducimus voluptates voluptas?';

    // without global returns more info about the group
    let pattern = /(?<username>\w+)@\w+\.\w+/g;

    // over given string we have match method and give it RegExp
        // or RegExp given as a string
    // without global method gives the first result
        // match is good for one result
    // with global returns an array of results

    let result = text.match(pattern);
    // text.split(by regex);
    // text.replace(email, with something)

    // ['Lorem', 'Pesho', 'Pesho', 'Eligendi', 'Voluptatum']
    console.log(result.groups.username);

    // \w+
    // _ (Underscores) are also word characters!

    // \d{1,2}-\w{3}-\d{4}
    // I am born on 30-Dec-1994.
    // My father is born on the 9-Jul-1955.
    // 01-July-2000 is not a valid date.

    // \b\w+@[a-zA-Z]+\.[a-zA-Z]+
    // valid123@email.bg

    // invalid*name@emai1.bg

    // \d{2}\/\d{2}\/\d{4}
    // 01/02/1992

// Backreferences
    // Number Capturing Croups
    // \1
    // \number (matches the value of a number captured group)
    // ((\w+)@\w+\.[a-z]+)
    // valid123@email.com

    // <\w+>.+<\/\w+>
    // Some random text before <h1>Hello World!</h1> after.

    // <(\w+)>.*<\/\1>
    // Some random text before <h1>Hello World!</h1> after.

    // <h1> sadasd </h1>
    // <h1> sadasd </h2>

    // <(?:\w+)>.*<\/\1> (non capturing group, can be repeated but not used)
    // <(?<tag>\w+)>.*<\/\k<tag>> (name capturing group)

// Regular Expression in JS
    // has literal for it in JS

    // RegExp methods
    // exec() (executes a search for a match in a string.
        // It returns an array of information or null on a mismatch)
    // test() (test for a match in a string. It returns true or false.)
    let text =
        'Lorem Pesho ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Pesho Eligendi non quis exercitationem culpa nesciunt nihil aut ' +
        'nostrum explicabo reprehenderit optio amet ab temporibus asperiores ' +
        'quasi cupiditate. Voluptatum ducimus voluptates voluptas?';
    let pattern = /[A-Z][a-z]+/g;

    // if you have variables then use this
    let pattern2 = new RegExp('Pesho', 'g');

    // console.log(typeof pattern); // object
    // console.log(pattern instanceof RegExp); // true

    // method of RegExp, test if exist
    // let result = pattern.test(text);
    // console.log(result);
        // returns find pattern, index: 64,
        // input:  'Lorem Pesho ipsum dolor sit amet,
        // consectetur adipisic...', groups: undefined

    // exec keep the returned result and
        // starts next time from the place where was last time
    // let result = pattern.exec(text);
    // console.log(result);
    // result = pattern.exec(text);
    // console.log(result);
    // result = pattern.exec(text);
    // console.log(result);
    // result = pattern.exec(text);
    // console.log(result);
    // result = pattern.exec(text);
    // console.log(result);
    let result = pattern.exec(text);

    while (result !== null) {
        console.log(result);
        result = pattern.exec(text);
    }

// String methods
    let text =
    'Lorem Pesho ipsum dolor pesho@abv.bg sit amet@gmail.com, consectetur ' +
    'adipisicing elit. Pesho Eligendi non quis exercitationem culpa nesciunt ' +
    'nihil aut nostrum explicabo reprehenderit optio amet ab temporibus ' +
    'asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?';
    
    // without global returns more info about the group
    let pattern = /(?<username>\w+)@\w+\.\w+/g;
    // If the regular expression does not include the g flag,
        // str.match() will return the same result as RegExp.exec().

    // over given string we have match method and give it RegExp or RegExp given as a string
    // without global gives the first result
    // match is good for one result
    let result = text.match(pattern);
    // text.split(by regex);
    // text.replace(email, with something)

    // ['Lorem', 'Pesho', 'Pesho', 'Eligendi', 'Voluptatum']
    console.log(result.groups.username);

    function matchDates(dates) {
        // 0 group match the whole
        // 1st group match the <day>
        // 2nd group match the separator
        // 3rd group match the <month>
        // 4th group match the <year>
    
        let pattern = /\b(?<day>\d{2})([(\/\-\.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
        let output = [];
        let validDate; // is array
        // exec return the first match, but also remember where was the last position, so can be used for the next, match
        while ((validDate = pattern.exec(dates)) !== null) {
            let day = validDate.groups['day'];
            let month = validDate.groups['month'];
            let year = validDate.groups['year'];
            output.push(`Day: ${day}, Month: ${month}, Year: ${year}`);
        }
        return output.join('\n');
    }
    
    console.log(matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"));
    // 13/Jul/1928, 10-Nov-1934, 25.Dec.1937	01/Jan-1951, 23/sept/1973, 1/Feb/2016

    // if some problem check ascii table
    // put non-capturing group if you are not interested in the data
        // (?:something)

// In 1st case the program is possible to try to make match on null,
    // but in second one is checked and can't be
// let keyCode = currStr.match(pattern).length;
let keyCode = currStr.match(pattern) && currStr.match(pattern).length;

// ALWAYS check for not valid matches, NULL always check for null

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12


let participants = input
.shift()
.split(', ')
.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
}, {});

// distPattern is finding all of digit
// make them numbers and adding it to accumulator
// and then distance is keeping, the accumulated value
const distPattern = /\d/gm;
let distance = line.match(distPattern).map(Number).reduce((a, c) => a + c);


// regex describe a search pattern
    // used to find / extract / replace / split data from text by pattern

// validating string by pattern
    // the method test(string, text)
    // regex.test(text)

// check for matches
    // method match(regex)
    // text.match(regex)
    // returns an array of all matches (strings)

// using the exec() method
    // exec(string, text)
    // works with a pointer & returns the groups

// replace(regex, stringReplacement)
// replaces all the strings that match the pattern with the provided replacement

while ((validName = pattern.exec(input)) !== null) {
    validNames.push(validName[0]);
}

// matchAll(regexp)
    // returns an iterator of all results matching a string
    // against a regular expression, including capturing groups

    const regexp = /t(e)(st(\d?))/g;
    const str = 'test1test2';

    const array = [...str.matchAll(regexp)];

    console.log(array[0]);
    // expected output: Array ["test1", "e", "st1", "1"]

    console.log(array[1]);
    // expected output: Array ["test2", "e", "st2", "2"]

    
// split(regex)

// match()
function matchFullName(names = '') {
    // names = names.toString();
    // two words
    // ([A-Z]{1}\[a-z]+){2, } Capital{1}\[a-z]+
    // regex = /\b([A-Z]{1}[a-z]{2,} [A-Z]{1}[a-z]{2,})\b/gm
    // Note: You should put "/" before and after the pattern
        // so that it is interpreted as a RegEx pattern.
        // Also, place the 'g' (global) flag after it,
        // so that you get all the matches in the text.
    // exec()
    let pattern = /\b([A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,})\b/g;

    let validNames;
    validNames = names.match(pattern);

    // // current is different from null
    // while ((validName = pattern.exec(names)) !== null) {
    //     validNames.push(validName[0]);
    // }
    return validNames.join(' ');
}

console.log(
    matchFullName(
        'Ivan Ivanov, Ivan ivanov, ivan Ivanov,' +
        ' IVan Ivanov, Test Testov, Ivan	Ivanov'
    )
);
// Ivan Ivanov

// exec()
function matchDates(dates) {
    // 0 group match the whole
    // 1st group match the <day>
    // 2nd group match the separator
    // 3rd group match the <month>
    // 4th group match the <year>

    let pattern =
        /\b(?<day>\d{2})([(\/\-\.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let output = [];
    let validDate; // is array

    // exec return the first match,
        // but also remember where was the last position,
        // so can be used for the next, match
    while ((validDate = pattern.exec(dates)) !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        output.push(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }

    return output.join('\n');
}

console.log(matchDates('13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f' + 
    ' 25.Dec.1937 23/09/1973, 1/Feb/2016'));
    
    // 13/Jul/1928, 10-Nov-1934, 25.Dec.1937
    // 01/Jan-1951, 23/sept/1973, 1/Feb/2016


    function furniture(input = []) {
        let boughtFurniture = [];
        let moneySpend = 0;
    
        let pattern =
            />>(?<furnitureName>\w+)<<(?<price>[0-9]+(\.{1}[0-9]+)?)!(?<quantity>[0-9]+)/;
        for (const line of input) {
            let isValid = line.match(pattern);
            if (isValid !== null) {
                let name = isValid.groups.furnitureName;
                let price = Number(isValid.groups.price);
                let quantity = Number(isValid.groups.quantity);
    
                boughtFurniture.push(name);
                moneySpend += price * quantity;
            }
        }
    
        return getOutput(boughtFurniture, moneySpend);
    
        function getOutput(boughtFurniture, moneySpend) {
            let output = [];
            output.push('Bought furniture:')
            if (boughtFurniture.length > 0) {
                output.push(boughtFurniture.join('\n'));
                // or
                // output.push(...boughtFurniture);
            }
            output.push(`Total money spend: ${moneySpend.toFixed(2)}`);
            return output.join('\n');
        }
    }
    
    // console.log(furniture(
    //     [
    //         '>>Sofa<<312.23!3',
    //         '>>TV<<300!5',
    //         '>Invalid<<!5',
    //         'Purchase'
    //     ]
    // ));

    function softUniBarIncome(input = []) {
        let pattern =
        /%(?<customerName>[A-Z][a-z]+)%[^\|\$%\.]*<(?<product>\w+)>[^\|\$%\.]*\|(?<count>[0-9]+)\|[^\|\$%\.0-9]*(?<price>[0-9]+(\.[0-9]+)?)\$/;
        let totalIncome = 0;
        let output = [];
    
        for (const line of input) {
            if (line === 'end of shift') {
                break;
            }
            let curr = line.match(pattern);
            if (curr !== null) {
                let [customerName, product, count, price] = [curr.groups.customerName, curr.groups.product, curr.groups.count, curr.groups.price];
                let totalProductPrice = Number(count) * Number(price);
                totalIncome += totalProductPrice;
                output.push(`${customerName}: ${product} - ${totalProductPrice.toFixed(2)}`);
            }
        }
        output.push(`Total income: ${totalIncome.toFixed(2)}`);
        return output.join('\n');
    }
    
    // console.log(softUniBarIncome(
    //     [
    //         '%George%<Croissant>|2|10.3$',
    //         '%Peter%<Gum>|1|1.3$',
    //         '%Maria%<Cola>|1|2.4$',
    //         'end of shift'
    //     ]
    // ));
    // console.log(softUniBarIncome(
    //     [
    //         '%InvalidName%<Croissant>|2|10.3$',
    //         '%Peter%<Gum>1.3$',
    //         '%Maria%<Cola>|1|2.4',
    //         '%Valid%<Valid>valid|10|valid20$',
    //         'end of shift'
    //     ]
    // ));

    // Grouping

    let pat1 = /([#$%\*&\.])(?<capitals>[A-Z]+)\1/;
        let curr = firstPart.match(pat1);
        return curr.groups['capitals'].split('');