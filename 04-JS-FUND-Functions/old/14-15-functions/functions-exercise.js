function printSmallest(firstNumber, secondNumber, thirdNumber) {
    let min = Math.min(firstNumber, secondNumber, thirdNumber);
    return min;
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

function addSubtract(num1, num2, num3) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let result = subtract(sum(num1, num2), num3);
    return result;
}

function charactersInRange(firstCh, secondCh) {
    let asciiIndex = ch => ch.charCodeAt(0);

    let firstChIndex = asciiIndex(firstCh);
    let secondChIndex = asciiIndex(secondCh);

    if (firstChIndex > secondChIndex) {
        let smallerIndex = secondChIndex;
        secondChIndex = firstChIndex;
        firstChIndex = smallerIndex;
    }

    let printCharacters = (firstChIndex, secondChIndex) => {
        let output = '';
        for (let i = firstChIndex + 1; i < secondChIndex; i++) {
            output += String.fromCharCode(i) + ' ';
        }
        return output;
    };

    return printCharacters(firstChIndex, secondChIndex);
}

function oddAndEvenSum(number) {
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

function palindromeIntegers(arrOfInt = []) {
    let arrOfStringNumbers = arrOfInt.map(String);

    let checkForPalindrome = x => {
        let isPalindrome = true;
        let numLength = x.length;
        for (let i = 0; i < numLength / 2; i += 1) {
            if (x[i] !== x[numLength - i - 1]) {
                isPalindrome = false;
                break;
            }
        }

        return isPalindrome;
    };

    let checkAllNumbers = (numbers) => {
        for (let i = 0; i < numbers.length; i++) {
            let result = checkForPalindrome(numbers[i]);
            console.log(result);
        }
    };

    checkAllNumbers(arrOfStringNumbers);
}

// palindromeIntegers([123,323,421,121]);
// palindromeIntegers([32,2,232,1010]);

function passwordValidator(input) {
    let pass = input;
    let isValid = true;

    checkLength(pass);
    checkLettersAndDigits(pass);
    checkDigits(pass);

    if (isValid) {
        console.log('Password is valid');
    }

    function checkLength(pass) {
        let length = pass.length;
        if (length < 6 || length > 10) {
            isValid = false;
            console.log('Password must be between 6 and 10 characters');
        }
    }

    function checkLettersAndDigits(pass) {
        checkAllElements(pass);

        function checkAllElements(pass) {
            let findCharCode = ch => {
                ch = ch.toLowerCase();
                let num = ch.charCodeAt(0);
                return num;
            };

            for (const ch of pass) {
                let charNumber = findCharCode(ch);
                if (isNaN(ch) === true &&
                    (charNumber >= 97 && charNumber <= 122) === false) {
                    isValid = false;
                    console.log('Password must consist only of letters and digits');
                    return;
                }
            }
        }
    }

    function checkDigits(pass) {
        let countDigits = 0;
        for (const elem of pass) {
            if (isNaN(elem) === false) {
                countDigits += 1;
                if (countDigits === 2) {
                    return;
                }
            }
        }

        isValid = false;
        console.log('Password must have at least 2 digits');
    }
}

// passwordValidator('logIn');
// passwordValidator('MyPass123');
// passwordValidator('Pa$s$s');

function nXnMatrix(n) {
    let matrix = emptyMatrix(n, n);
    print2DMatrix(matrix);

    function emptyMatrix(rows, cols) {
        let empty = new Array(rows).fill(rows);
        for (let row = 0; row < rows; row++) {
            empty[row] = new Array(cols).fill(cols);
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

// nXnMatrix(3);
// nXnMatrix(7);
// nXnMatrix(2);

function perfectNumber(input) {
    let number = input;
    let length = number / 2;

    let sumOfDivisors = findSum(number);
    if(sumOfDivisors === number) {
        return 'We have a perfect number!';
    }

    return 'It\'s not so perfect.';

    function findSum(number) {
        let sum = 0;
        for (let i = 1; i <= length; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }

        return sum;
    }
}

// perfectNumber(6);
// perfectNumber(28);
// perfectNumber(1236498);

function loadingBar(input) {
    let percentNumber = input;
    let percent = getPercent(percentNumber);
    let bar = getBar(percentNumber);
    let message = getMessage(percentNumber);

    printLoadingBar();

    function printLoadingBar() {
        if (percentNumber === 100) {
            console.log(`${percent} ${message}`);
            console.log(bar);
            return;
        }
        console.log(`${percent} ${bar}`);
        console.log(message);
    }

    function getMessage(percentNumber) {
        if (percentNumber < 100) {
            return 'Still loading...';
        }
        return 'Complete!';
    };
    
    function getBar(percentNumber) {
        let numOfPercents = percentNumber / 10;
        let numDots = 10 - numOfPercents;

        return '[' + '%'.repeat(numOfPercents) + '.'.repeat(numDots) + ']';
    }

    function getPercent(percentNumber) {
        return percentNumber + "%";
    };
}

// loadingBar(30);
// loadingBar(50);
// loadingBar(100);

function factorialDivision(firstNumber, secondNumber) {
    let resultOne = factorial(firstNumber);
    let resultTwo = factorial(secondNumber);
    
    let divide = (a, b) => a / b;
    let resultOfDivision = divide(resultOne, resultTwo);
    console.log(resultOfDivision.toFixed(2));

    function factorial(num) {
        let fact = 1;

        for (let i = 2; i <= num; i++) {
            fact *= i;
        }

        return fact;
    }
}

// factorialDivision(3, 10);
// factorialDivision(5, 2);
// factorialDivision(6, 2);

function factorialDivisionRecursion(firstNumber, secondNumber) {
    let resultOne = factorial(firstNumber);
    let resultTwo = factorial(secondNumber);
    
    let divide = (a, b) => a / b;
    let resultOfDivision = divide(resultOne, resultTwo);
    console.log(resultOfDivision.toFixed(2));

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

// factorialDivisionRecursion(5, 2);
// factorialDivisionRecursion(6, 2);