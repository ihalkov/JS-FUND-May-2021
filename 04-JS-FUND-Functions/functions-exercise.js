function smallestOfThreeNumbers(num1, num2, num3) {
    return Math.min(num1, num2, num3);
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

function oddAndEvenSum(num) {
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
        let str = num + '';
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
    for (let i = 1; i <= num / 2; i++) {
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
    let result = fact1 / fact2;
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