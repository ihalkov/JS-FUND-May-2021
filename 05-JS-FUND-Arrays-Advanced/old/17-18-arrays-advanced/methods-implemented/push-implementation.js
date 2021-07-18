// push adds one or more elements to the end of tha array

let numbers = [1, 2, 3, 4, 5, 6];
// let le = numbers.push('cow', 7);
// console.log(le);
// console.log(numbers);
// console.log(typeof(numbers[7]));

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