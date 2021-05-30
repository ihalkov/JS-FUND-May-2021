function equalSums(input = []) {
    for (let i = 0; i < input.length; i++) {
        let currInd = i;
        let leftSum = getSum(0, currInd);
        let rightSum = getSum(currInd + 1, input.length);

        if (leftSum === rightSum) {
            return currInd;
        }
    }
    return 'no';

    function getSum(begin, end) {
        let sum = 0;
        for (let i = begin; i < end; i++) {
            sum += input[i];
        }
        return sum;
    }
}

// console.log(equalSums([1, 2, 3, 3]));
// console.log(equalSums([1, 2]));
// console.log(equalSums([1]));
// console.log(equalSums([1, 2, 3]));
// console.log(equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]));