function magicSum(numbers, sum) {
    let output = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let currSum = numbers[i] + numbers[j];
            if (currSum === sum) {
                output.push(`${numbers[i]} ${numbers[j]}`);
            }
        }
    }
    return output.join('\n');
}

// console.log(magicSum(
//     [1, 7, 6, 2, 19, 23],
//     8
// ));
// console.log(magicSum(
//     [14, 20, 60, 13, 7, 19, 8],
//     27
// ));
// console.log(magicSum(
//     [1, 2, 3, 4, 5, 6],
//     6
// ));