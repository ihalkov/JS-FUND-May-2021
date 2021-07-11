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