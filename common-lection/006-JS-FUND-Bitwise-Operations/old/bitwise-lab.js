function binaryDigitsCount(intNum, binDigit) {
    let binaryArr = intNum.toString(2).split('').map(Number);
    let numOfBinaryDigits = binaryArr.filter(x => x === binDigit);
    return numOfBinaryDigits.length;
}

// console.log(binaryDigitsCount(20, 0));
// console.log(binaryDigitsCount(15, 1));
// console.log(binaryDigitsCount(10, 0));

function firstBit(num) {
    let binNum = num.toString(2);
    let bitAtPos1 = binNum[binNum.length - 2];
    return bitAtPos1;
}

// console.log(firstBit(2));
// console.log(firstBit(51));
// console.log(firstBit(13));
// console.log(firstBit(24));

function firstBitAlg(num) {
    let pos = 1;
    // shift the number and check what is on pos 0
    let bitAtPos1 = (num >> pos) & 1;
    return bitAtPos1;
}

// console.log(firstBitAlg(2));
// console.log(firstBitAlg(51));
// console.log(firstBitAlg(13));
// console.log(firstBitAlg(24));

// 11101
// &
// 00001
// 00001
// that way we check what is on pos


function pThBitAlg(num, p) {
    let pos = p;
    let bitAtPos1 = (num >> pos) & 1;
    return bitAtPos1;
}

// console.log(pThBitAlg(2145, 5));
// console.log(pThBitAlg(512, 0));
// console.log(pThBitAlg(111, 8));
// console.log(pThBitAlg(255, 7));

// 1 & 0 -> 0
// 0 & 0 -> 0

function bitDestroyer(num, p) {
    let mask = ~(1 << p);
    let newNum = num & mask;

    return newNum;
}

// console.log(bitDestroyer(1313, 5));
// console.log(bitDestroyer(231, 2));
// console.log(bitDestroyer(111, 6));

function oddTimes(numbers = []) {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        result = result ^ numbers[i];
    }

    console.log(result);
}

// oddTimes([1, 5, 5]);
// oddTimes([5, 7, 2, 7, 5, 2, 5]);

function triBitSwitch(num, p) {
    let mask = (7 << p);
    let newNum = num ^ mask;

    return newNum;
}

// console.log(triBitSwitch(1234, 7));
// console.log(triBitSwitch(44444, 4));