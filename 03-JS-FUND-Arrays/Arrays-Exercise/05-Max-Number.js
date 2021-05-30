function maxNumber(input = []) {
    let top = [];
    for (let i = 0; i < input.length; i++) {
        let max = input[i];
        let isTop = true;
        for (let j = i + 1; j < input.length; j++) {
            let curr = input[j];
            if (max <= curr) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            top.push(max);
        }
    }
    return top.join(' ');
}
// console.log(maxNumber([1, 4, 3, 2]));
// console.log(maxNumber([14, 24, 3, 19, 15, 17]));
// console.log(maxNumber([41, 41, 34, 20]));
// console.log(maxNumber([27, 19, 42, 2, 13, 45, 48]));