const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

Array.prototype.reduuce = function (red, initVal = 0) {
    let acc = this[0] + initVal;

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