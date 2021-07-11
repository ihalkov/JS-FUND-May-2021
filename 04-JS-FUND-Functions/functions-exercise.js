// LAB
function repeatString(str, n) {
    let output = "";
    for (let i = 0; i < n; i++) {
        output += str;
    }
    return output;
}

function grades(grade) {
    if (grade <= 2.99 && grade >= 2.00) {
        return "Fail";
    } else if (grade <= 3.49) {
        return "Poor";
    } else if (grade <= 4.49) {
        return "Good";
    } else if (grade <= 5.49) {
        return "Very good";
    } else if (grade <= 6.00) {
        return "Excellent";
    }
}

function mathPower(num, pow) {
    let result = 1;
    while (pow > 0) {
        result *= num;
        pow -= 1;
    }
    return result;
}

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

function simpleCalculator(n1, n2, operator) {
    switch (operator) {
        case 'multiply':
            let multiply = (n1, n2) => n1 * n2;
            console.log(multiply(n1, n2));
            break;
        case 'divide':
            let divide = (n1, n2) => n1 / n2;
            console.log(divide(n1, n2));
            break;
        case 'add':
            let add = (n1, n2) => n1 + n2;
            console.log(add(n1, n2));
            break;
        case 'subtract':
            let subtract = (n1, n2) => n1 - n2;
            console.log(subtract(n1, n2));
            break;
    }
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

// function wrongResult(numOne, numTwo, numThree) {
//     let result = "Positive";

//     let countNegative = 0;
//     let isZero = (a, b, c) => {
//         if (a === 0 || b === 0 || c === 0) {
//             return true;
//         }
//         return false;
//     };

//     if (numOne < 0) {
//         countNegative++;
//     }
//     if (numTwo < 0) {
//         countNegative++;
//     }
//     if (numThree < 0) {
//         countNegative++;
//     }
//     if (countNegative % 2 === 1 && isZero(numOne, numTwo, numThree) !== true) {
//         result = "Negative";
//     }

//     return result;
// }

// wrongResult(0, -12, 15);
// wrongResult(5, 12, 15);
// wrongResult(5, 12, -15);
// wrongResult(-6, -12, 14);
// wrongResult(-1, -2, -3);
// wrongResult(-1, 0, 1);

function wrongResultOptimize(numOne, numTwo, numThree) {
    let newArr = [numOne, numTwo, numThree];
    let isNegative = true;
    let result = "Positive";
    let countNegative = 0;

    for (const element of newArr) {
        if (element === 0) {
            isNegative = false;
            break;
        } else if (element < 0) {
            countNegative++;
        }
    }

    if (isNegative && countNegative % 2 === 1) {
        result = "Negative";
    }

    return result;
}

// wrongResultOptimize(0, -12, 15);
// wrongResultOptimize(5, 12, 15);
// wrongResultOptimize(5, 12, -15);
// wrongResultOptimize(-6, -12, 14);
// wrongResultOptimize(-1, -2, -3);
// wrongResultOptimize(-1, 0, 1);


// EXERCISE
function smallestOfThreeNumbers(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

function printSmallest2(firstNumber, secondNumber, thirdNumber) {
    const min = (a, b) => {
        if (a < b) {
            return a;
        }
        return b;
    };
    let currentMin = min(firstNumber, secondNumber);
    currentMin = min(currentMin, thirdNumber);
    // let min = Math.min(firstNumber, secondNumber, thirdNumber);
    return currentMin;
}

// console.log(smallestOfThreeNumbers(2, 5, 3));
// console.log(smallestOfThreeNumbers(600, 342, 123));
// console.log(smallestOfThreeNumbers(25, 21, 4));

function addAndSubtract(num1, num2, num3) {
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    return subtract(add(num1, num2), num3);
}

// console.log(addAndSubtract(23, 6, 10));
// console.log(addAndSubtract(1, 17, 30));
// console.log(addAndSubtract(42, 58, 100));

function charactersInRange(ch1 = '', ch2 = '') {
    // let asciiIndex = ch => ch.charCodeAt(0);
    // let [code1, code2] = [asciiIndex(ch1), asciiIndex(ch2)];

    let [code1, code2] = [ch1.charCodeAt(0), ch2.charCodeAt(0)];
    if (code2 < code1) {
        let temp = code2;
        code2 = code1;
        code1 = temp;
    }

    let output = [];
    for (let i = code1 + 1; i < code2; i++) {
        output.push(String.fromCharCode(i));
    }

    return output.join(' ');
}

// console.log(charactersInRange('a', 'd'));
// console.log(charactersInRange('#', ':'));
// console.log(charactersInRange('C', '#'));

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

function palindromeIntegers(input = []) {
    let output = [];

    for (let i = 0; i < input.length; i++) {
        if (isPalindrome(input[i])) {
            output.push(true);
        } else {
            output.push(false);
        }
    }
    return output.join('\n');

    function isPalindrome(num) {
        let str = num.toString();
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

// console.log(palindromeIntegers([123,323,421,121]));
// console.log(palindromeIntegers([32,2,232,1010]));

function passwordValidator(input = '') {
    let pass = input;
    let output = [];

    checkLength(pass);
    checkCorrectChars(pass);
    check2Digits(pass);

    if (output.length === 0) {
        output.push('Password is valid');
    }
    return output.join('\n');

    function check2Digits(str = '') {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            let chCode = str[i].charCodeAt(0);
            if (chCode >= 48 && chCode <= 57) {
                count += 1;
                if (count >= 2) {
                    return;
                }
            }
        }
        output.push("Password must have at least 2 digits");
    }

    function checkLength(str) {
        if (str.length >= 10 || str.length < 6) {
            output.push('Password must be between 6 and 10 characters');
        }
    }

    function checkCorrectChars(str = '') {
        str = str.toLowerCase();
        for (let i = 0; i < str.length; i++) {
            let chCode = str[i].charCodeAt(0);
            if ((chCode < 48 || chCode > 57) && (chCode < 97 || chCode > 122)) {
                output.push('Password must consist only of letters and digits');
                return;
            }
        }
    }
}

// console.log(passwordValidator('logIn'));
// console.log(passwordValidator('MyPass123'));
// console.log(passwordValidator('Pa$s$s'));

function nXnMatrix(num) {
    let row = `${num} `.repeat(num);
    let output = [];
    for (let i = 0; i < num; i++) {
        output.push(row);
    }
    return output.join('\n');
}

// console.log(nXnMatrix(3));
// console.log(nXnMatrix(7));
// console.log(nXnMatrix(2));

function perfectNumber(num) {
    let sum = 0;
    let length = num / 2;
    for (let i = 1; i <= length; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        return 'We have a perfect number!';
    }
    return 'It\'s not so perfect.';
}

// console.log(perfectNumber(6));
// console.log(perfectNumber(28));
// console.log(perfectNumber(1236498));

function loadingBar(num) {
    if (num < 100) {
        return num + '% ' + '[' + '%'.repeat(num / 10) + '.'.repeat((100 - num) / 10) + ']' + '\n' + 'Still loading...';
    } else {
        return '100% Complete!' + '\n' + '%'.repeat(10);
    }
}

// console.log(loadingBar(30));
// console.log(loadingBar(50));
// console.log(loadingBar(100));

function factorialDivision(num1, num2) {
    let fact1 = getFactorial(num1);
    let fact2 = getFactorial(num2);

    let divide = (a, b) => a / b;
    let result = divide(fact1, fact2);
    return result.toFixed(2);

    function getFactorial(num) {
        let fact = 1;
        while (num > 1) {
            fact *= num--;
        }
        return fact;
    }
}

// console.log(factorialDivision(5, 2));
// console.log(factorialDivision(6, 2));

function factorialDivisionRecursion(firstNumber, secondNumber) {
    let resultOne = factorial(firstNumber);
    let resultTwo = factorial(secondNumber);

    let divide = (a, b) => a / b;
    let resultOfDivision = divide(resultOne, resultTwo);
    console.log(resultOfDivision.toFixed(2));

    function factorial(num) {
        if (num === 0) {
            return 1;
        }
        if (num === 1) {
            return num;
        }

        return num * factorial(num - 1);
    }
}

// factorialDivisionRecursion(5, 2);
// factorialDivisionRecursion(6, 2);

// MORE EXERCISE
function carWash(arrOfCommands = []) {
    let washingCommands = arrOfCommands;
    let washingValue = 0;

    let putSoap = x => x + 10;
    let putWater = x => x + (x * 0.2);
    let getVacuumCleaner = x => x + (x * 0.25);
    let hadMud = x => x - (x * 0.1);

    washingValue = washing(washingCommands, washingValue);
    printResult(washingValue);

    function printResult(res) {
        console.log(`The car is ${res.toFixed(2)}% clean.`);
    }

    function washing(commands, value) {
        let numOfCommands = commands.length;

        for (let i = 0; i < numOfCommands; i++) {
            let currentCommand = commands[i];
            switch (currentCommand) {
                case 'soap':
                    value = putSoap(value);
                    break;
                case 'vacuum cleaner':
                    value = getVacuumCleaner(value);
                    break;
                case 'mud':
                    value = hadMud(value);
                    break;
                case 'water':
                    value = putWater(value);
                    break;
            }

        }

        return value;
    }
}

// carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);

function numberModification(input) {
    let inputNumber = input;

    let average = getAverageOfDigits(inputNumber);
    while (average <= 5) {
        inputNumber = appendNine(inputNumber);
        average = getAverageOfDigits(inputNumber);
    }

    console.log(inputNumber);

    function appendNine(num) {
        num = num + "9";
        num = Number(num);
        return num;
    }

    function getAverageOfDigits(num) {
        let count = 0;
        let sum = 0;

        while (num > 0) {
            let digit = getDigit(num);
            sum += digit;
            num = updateNum(num);
            count += 1;
        }

        return sum / count;
    }

    function updateNum(num) {
        num /= 10;
        return Math.floor(num);
    }

    function getDigit(num) {
        let digit = num % 10;
        return digit;
    }
}

// numberModification(101);
// numberModification(5835);

function pointsValidation(input) {
    // two points [x1, y1, x2, y2]

    let x1 = input[0];
    let y1 = input[1];

    let x2 = input[2];
    let y2 = input[3];

    let pointOneToZero = isValidDistance(x1, y1, 0, 0);
    let pointTwoToZero = isValidDistance(x2, y2, 0, 0);
    let pointOneToTwo = isValidDistance(x1, y1, x2, y2);

    printResult();

    function printResult() {
        console.log(`{${x1}, ${y1}} to {0, 0} is ${pointOneToZero}`);
        console.log(`{${x2}, ${y2}} to {0, 0} is ${pointTwoToZero}`);
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${pointOneToTwo}`);
    }

    function isValidDistance(x1, y1, x2, y2) {
        let distance = distanceBetweenPoints(x1, y1, x2, y2);
        let copyOfDistance = parseInt(distance);
        if (distance !== copyOfDistance) {
            return 'invalid';
        }

        return 'valid';
    }

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
}

// pointsValidation([3, 0, 0, 4]);
// pointsValidation([2, 1, 1, 1]);

function printDNA(input) {
    let dnaLength = input;
    let symbols = [
        'A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'
    ];

    let stars = 2;
    let dashes = 0;
    let symIndex = 0;
    for (let i = 0; i < dnaLength; i++) {
        if (i % 5 === 0) {
            symIndex = 0;
        }
        if ((i + 1) % 4 === 0) {
            printRowEveryFourth();
            stars = 2;
            dashes = 0;
        } else {
            printRow();
            stars -= 1;
            dashes += 2;
        }

        symIndex += 2;
    }

    function printRow() {
        console.log('*'.repeat(stars) +
            symbols[symIndex] + '-'.repeat(dashes) +
            symbols[symIndex + 1] + '*'.repeat(stars));
    }

    function printRowEveryFourth() {
        console.log('*' + symbols[symIndex] +
            '--' + symbols[symIndex + 1] + '*');
    }
}

// printDNA(4);
// printDNA(10);