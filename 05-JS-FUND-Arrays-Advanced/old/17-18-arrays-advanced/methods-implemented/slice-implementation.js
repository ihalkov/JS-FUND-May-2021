// slice()
let numbers = [0, 1, 2, 3, 4, 5, 6, 7];
Array.prototype.sliice = function (start = 0, end = this.length) {
    let sliced = [];
    let slicedIndex = 0;
    for (let i = start; i < end; i++) {
        sliced[slicedIndex] = this[i];
        slicedIndex += 1;
    }

    return sliced;
}

let arrCopy = numbers.sliice();
let slicedArr = numbers.sliice(4);
let slicedArrFromTo = numbers.sliice(4, 7);

console.log(arrCopy);
console.log(slicedArr);
console.log(slicedArrFromTo);
console.log(numbers);
console.log(numbers);