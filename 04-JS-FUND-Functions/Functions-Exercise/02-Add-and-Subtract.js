function addAndSubtract(num1, num2, num3) {
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    return subtract(add(num1, num2), num3);
}

// console.log(addAndSubtract(23, 6, 10));
// console.log(addAndSubtract(1, 17, 30));
// console.log(addAndSubtract(42, 58, 100));