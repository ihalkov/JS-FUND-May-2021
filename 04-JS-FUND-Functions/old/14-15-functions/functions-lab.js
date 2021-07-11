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
    let total = 0;
    switch (product) {
        case "coffee":
            total = 1.50 * quantity;
            break;
        case "water":
            total = 1.00 * quantity;
            break;
        case "coke":
            total = 1.40 * quantity;
            break;
        case "snacks":
            total = 2.00 * quantity;
            break;
    }
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

