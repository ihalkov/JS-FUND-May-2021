function addAndSubtract(input) {
    //     •	If the number is even - add to its value its index position
    // •	If the number is odd - subtract to its value its index position

    let newSum = 0;
    let oldSum = 0;

    for (let i = 0; i < input.length; i++) {
        let currNum = input[i];
        oldSum += currNum;

        if (currNum % 2 === 0) {
            currNum += i;
        } else {
            currNum -= i;
        }

        input[i] = currNum;
        newSum += currNum;
    }

    return getOutput();

    function getOutput() {
        let output = [];
        output.push(`[ ${input.join(', ')} ]`);
        output.push(oldSum);
        output.push(newSum);
        return output.join('\n');
    }
}

// console.log(addAndSubtract([5, 15, 23, 56, 35]));
// console.log(addAndSubtract([-5, 11, 3, 0, 2]));

function commonElements(arr1, arr2) {
    let output = [];
    for (const item1 of arr1) {
        for (const item2 of arr2) {
            if (item1 === item2) {
                output.push(item1);
            }
        }
    }
    return output.join('\n');
}

// console.log(commonElements(
//     ['Hey', 'hello', 2, 4, 'Peter', 'e'],
//     ['Petar', 10, 'hey', 4, 'hello', '2']
// ));
// console.log(commonElements(
//     ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
//     ['s', 'o', 'c', 'i', 'a', 'l']
// ));

function mergeArrays(arr1, arr2) {
    let output = [];
    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];
        let el2 = arr2[i];
        if (i % 2 === 0) {
            output.push(Number(el1) + Number(el2));
            continue;
        }
        output.push(el1 + el2);
    }
    return output.join(' - ');
}

// console.log(mergeArrays(
//     ['5', '15', '23', '56', '35'],
//     ['17', '22', '87', '36', '11']
// ));
// console.log(mergeArrays(
//     ['13', '12312', '5', '77', '4'],
//     ['22', '333', '5', '122', '44']
// ));

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