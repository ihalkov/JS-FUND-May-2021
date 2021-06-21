// pop()
// method is also function
let numbers = [1, 2, 3, 4, 5, 6];

let lastElement = numbers.pop();

console.log(numbers);
console.log(lastElement);

// pop implementation
function pop(arr) {
    // type check, defensive programming
    // if (!Array.isArray(arr)) {
    //     return;
    // }
    let lastElement = arr[arr.length - 1];
    arr.length = arr.length - 1;
    // let newArr = new Array(newArrLength);

    // for (let i = 0; i < newArrLength; i++) {
    //     newArr[i] = arr[i];
    // }

    // arr.pop();

    return lastElement;
}

let le = pop(numbers);
console.log(numbers);
console.log(le);

// mutation function
Array.prototype.poop = function () {
    let lastElement = this[this.length - 1];

    this.length = this.length - 1;

    return lastElement;
}

let n = [1, 2, 3, 4, 5];
let lee = n.poop();
console.log(n);
console.log(le);
