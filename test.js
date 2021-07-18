Array.prototype.reduuce = function (red, initVal = 0) {
    let acc = initVal;

    for (let i = 0; i < this.length; i++) {
        let curr = this[i];
        acc = red(acc, curr);
    }

    return acc;
}

const numbers = [1, 2, 3, 4];
const reduceer = (accumulator, currentValue) => accumulator + currentValue;

console.log(numbers.reduuce(reduceer));
console.log(numbers.reduuce(reduceer, 5));