function maxSeqOfEqualElements(input = []) {
    let maxLength = 0;
    let currLength = 0;
    let symbol = input[0];
    let equalSymbols = true;

    for (let i = 0; i < input.length - 1; i++) {
        let curr = input[i];
        let next = input[i + 1];

        currLength += 1;

        if (currLength > maxLength) {
            maxLength = currLength;
            symbol = curr;
        }

        if (curr !== next) {
            currLength = 0;
            equalSymbols = false;
        }
    }
    if (equalSymbols) {
        maxLength += 1;
    }
    return `${symbol} `.repeat(maxLength).trim();

}
// console.log(maxSeqOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
// console.log(maxSeqOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]));
// console.log(maxSeqOfEqualElements([4, 4, 4, 4]));
// console.log(maxSeqOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]));