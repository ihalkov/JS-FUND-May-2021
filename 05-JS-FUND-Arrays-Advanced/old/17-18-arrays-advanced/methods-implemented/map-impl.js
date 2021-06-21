const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


Array.prototype.maap = function (call) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        newArr[i] = call(this[i]);
    }

    return newArr;
}

function addOneToX(x) {
    return x + 1;
}

const numbers = [1, 2, 3];
const newNumbers = numbers.maap(addOneToX);
const arrowNewNumbers = numbers.maap(x => x + 1);
console.log();