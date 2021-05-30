function arrayRotation(numbers, rotations) {
    let length = numbers.length;
    rotations = rotations % length;

    for (let i = 1; i <= rotations; i++) {
        let firstEl = numbers.shift();
        numbers.push(firstEl);
    }
    return numbers.join(' ');
}
// console.log(arrayRotation([51, 47, 32, 61, 21], 2));
// console.log(arrayRotation([32, 21, 61, 1], 4));
// console.log(arrayRotation([2, 4, 15, 31], 5));