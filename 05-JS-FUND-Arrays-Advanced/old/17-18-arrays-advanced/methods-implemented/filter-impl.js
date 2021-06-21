// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word, ind) => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// function isBigEnough(value) {
//     return value >= 10
// }

// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

Array.prototype.fiilter = function (isTrue) {
    let filtered = [];
    let ind = arguments[1];
    let count = 0;
    for (let i = 0; i < this.length; i++) {
        ind = i;
        let res = isTrue(this[i]);
        if (res === true) {
            filtered[count] = this[i];
            count += 1;
        }
    }

    return filtered;
}

// function fill() {
//     return 1;
// }
function func(x) {
    let isTrue = false;

    if (x > 10) {
        return true;
    }
}

let numbers = [1, 3, 28, 11, 5, 103, 132];
// let result = numbers.fiilter(func);
let otg = numbers.fiilter((x, ind) => x > ind);

console.log(otg);

// filter index
// to return current index