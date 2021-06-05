function sorting(input = []) {
    let descending = input.sort((a, b) => b - a);
    let arrLength = descending.length;
    let sorted = [];

    for (let i = 0; i < arrLength / 2; i++) {
        sorted.push(descending[i], descending[arrLength - 1 - i]);
    }

    if (arrLength % 2 !== 0) {
        sorted.pop();
    }
    console.log(sorted.join(' '));
}

// console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));
// console.log(sorting([1, 21, 3]));