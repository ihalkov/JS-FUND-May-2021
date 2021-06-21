// [24, 51, 1, 3, 5, 1, 6, 19]
// [59, 21, 1, 53, 21, 49]

// target 15
// which sumPair from 1st and 2nd is closest to 15


let first = [1, 8, 5];
let second = [3, 2, 1, 4];

first.sort((a, b) => a - b);
second.sort((a, b) => a - b);

let x = first.length - 1;
let y = 0;
let minDiff = Number.MAX_SAFE_INTEGER;
let result = [];
let target = 4;

while (x > 0 && y < second.length) {
    let sum = Math.abs(first[x] + second[y]);
    let diff = Math.abs(sum - target);

    if (diff < minDiff) {
        minDiff = diff;
        result = [first[x], second[y]];
    }

    if (sum >= target) {
        x--;
    } else {
        y++;
    }
}


console.log(result);