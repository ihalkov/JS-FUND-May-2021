// [24, 51, 1, 3, 5, 1, 6, 19]
// [59, 21, 1, 53, 21, 49]

// 15

// which sum of two numbers are close to 15

// which do they need to be

// do they need to be one after another
// Ask questions if you can't solve the problem ask questions...

let first = [1, 8, 5];
let second = [4, 9, 2];

let target = 7;

// search for template

function solve(firstArr, secondArr, target) {
    firstArr.sort((a, b) => a - b);
    secondArr.sort((a, b) => a - b);

    let x = firstArr.length - 1;
    let y = 0;
    let minDiff = Number.MAX_SAFE_INTEGER;
    let result = [];

    while(x > 0 && y < secondArr.length) {
        let sum = Math.abs(firstArr[x] + secondArr[y]);

        let diff = Math.abs(sum - target);
        if (diff < minDiff) {
            result = [firstArr[x], secondArr[y]];
            minDiff = diff;
        }
        if(sum >= target) {
            x--; // moving to the left
        } else {
            y++; // moving down
        }

        // only that two directions, because we start with upper left corner
    }
    
    console.log(result);
}

solve([1, 8, 5], [4, 9, 2], 7);