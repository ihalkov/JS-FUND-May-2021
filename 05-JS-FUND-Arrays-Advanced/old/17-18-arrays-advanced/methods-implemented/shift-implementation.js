// shift() removes first element, and return

let numbers = [1, 2, 3, 4];
let firstElem = numbers.shift(); 

console.log(firstElem);
console.log(numbers);

Array.prototype.shiift = function () {
    let firstElement = this[0];

    // make new Array with length old Array length - 1
    let newArrLength = this.length - 1;
    let newArr = new Array(newArrLength);

    // put values to newArr
    for (let i = 0; i < newArrLength; i++) {
        newArr[i] = this[i + 1];
    }

    // make old array with length - 1
    this.length = this.length - 1;
    // put change values to old array
    for (let j = 0; j < this.length; j++) {
        this[j] = newArr[j];
    }
    
    return firstElement;
}

Array.prototype.shiiift = function () {
    let firstElement = this[0];

    // change values
    for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
    }

    // make old array with length - 1
    this.length = this.length - 1;
    
    return firstElement;
}

let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
let fe = letters.shiiift();
console.log(fe);
console.log(letters);