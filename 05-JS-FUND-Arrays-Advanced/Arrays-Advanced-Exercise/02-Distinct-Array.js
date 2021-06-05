function distinctArray(input = []) {
    let result = [];

    for (const num of input) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    return result.join(' ');
}

// console.log(distinctArray([1, 2, 3, 4]));
// console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));
// console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));