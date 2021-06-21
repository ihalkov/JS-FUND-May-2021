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

// this function combine the value and operation, but know nothing about them
function funcCombination(num, operation) {
    let result = operation(num);
    console.log(result);
}

funcCombination(5, multiply);

// function funcCombination(num, operation) {
//     let result = operation(num);
//     console.log(result);
// }

// // both are the same
// // funcCombination(5, multiply);
// funcCombination(5, (a) => a * a); // with one param we can remove ()
// funcCombination(2, x => ++x);

// empty arrow function, have to return some value
funcCombination(5, () => 10);

// each function can be written like arrow function
// const when we assign function to variable
