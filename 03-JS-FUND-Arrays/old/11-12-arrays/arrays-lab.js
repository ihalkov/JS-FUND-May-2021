function firstAndLastElement(input) {
    let firstNumberText = input[0];
    let lastNumberText = input[input.length - 1];

    let firstNumber = Number(firstNumberText);
    let lastNumber = Number(lastNumberText);
    let sum = firstNumber + lastNumber;
    console.log(sum);
}

// firstAndLastElement(['20', '30', '40']);
// firstAndLastElement(['10', '17', '22', '33']);
// firstAndLastElement(['11', '58', '69']);

function dayOfWeek(num) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    if (1 <= num && num <= 7) {
        console.log(days[num - 1]);
        return; // smart exit from the solution
        // it's not needed to make new result variable
    }
        console.log("Invalid day!");
}

// dayOfWeek(3);
// dayOfWeek(6);
// dayOfWeek(11);

function reverseNumbersOptimization(n, arr) {
    let numberElements = parseInt(n);
    let reversedNumbers = [];

    reverse();
    print();
    function reverse() {
        for (let i = numberElements; i > 0; i--) {
            reversedNumbers.push(arr[i - 1]);
        }
    }

    function print() {
        let result = "";
        for (let i = 0; i < reversedNumbers.length; i++) {
            result += reversedNumbers[i] + " ";
        }
        console.log(result);
    }
}

// reverseNumbers(3, [10, 20, 30, 40, 50]);
// reverseNumbers(4, [-1, 20, 99, 5]);
// reverseNumbers(2, [66, 43, 75, 89, 47]);

function reverseNumbersOptimization(n, arr) {
    let numberElements = parseInt(n);
    let reversedNumbers = [];

    reverse();
    // print();
    function reverse() {
        let index = 0;
        let result = '';
        for (let i = numberElements; i > 0; i--) {
            // reversedNumbers.push(arr[i - 1]);
            reversedNumbers[index] = arr[i - 1];
            result += reversedNumbers[index] + ' ';
        }
        console.log(result);
    }

    // function print() {
    //     let result = "";
    //     for (let i = 0; i < reversedNumbers.length; i++) {
    //         result += reversedNumbers[i] + " ";
    //     }
    //     console.log(result);
    // }
}

// reverseNumbersOptimization(3, [10, 20, 30, 40, 50]);
// reverseNumbersOptimization(4, [-1, 20, 99, 5]);
// reverseNumbersOptimization(2, [66, 43, 75, 89, 47]);

function reverseArrayOfStrings(strArr) {
    let arrayOfStrings = strArr;
    swapElements();
    printResult();

    function printResult() {
        let result = "";
        // for (let i = 0; i < arrayOfStrings.length; i++) {
        //     result += arrayOfStrings[i] + " ";
        // }
        // for (let string of arrayOfStrings) {
        //     result += string + " ";
        // }
        for (const index in arrayOfStrings) {
           result += arrayOfStrings[index] + " ";
        }
        console.log(result);
    }
    function swapElements() {
        for (let i = 0; i < arrayOfStrings.length / 2; i++) {
            let currentElement = arrayOfStrings[i];
            arrayOfStrings[i] = arrayOfStrings[arrayOfStrings.length - i - 1];
            arrayOfStrings[arrayOfStrings.length - i - 1] = currentElement;
        }
    }
}

// reverseArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
// reverseArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
// reverseArrayOfStrings(['33', '123', '0', 'dd']);

function sumEvenNumbers(strArr) {
    let sum = 0;

    for (let i = 0; i < strArr.length; i++) {
        let currentNum = Number(strArr[i]);
        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
    }
    console.log(sum);
}

// sumEvenNumbers(['1','2','3','4','5','6']);

function evenAndOddSubtraction(strArr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < strArr.length; i++) {
        let currentNum = Number(strArr[i]);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    let diff = evenSum - oddSum;
    console.log(diff);
}

function equalArrays(strArr1, strArr2) {
    let areEqual = true;
    for (let i = 0; i < strArr1.length; i++) {
        if (strArr1[i] !== strArr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }

    if (areEqual) {
        let sum = 0;
        for (let i = 0; i < strArr1.length; i++) {
            sum += Number(strArr1[i]);
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}


function condenseArrayOfNumbers(numbers) {
    let condensed = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        let currentElem = numbers[i] + numbers[i + 1];
        condensed.push(currentElem);
    }
    if (numbers.length === 1) {
        return console.log(numbers[0]);
    } else {
        numbers = condensed;
        return condenseArrayOfNumbers(numbers);
    }
}

// condenseArrayOfNumbers([2,10,3]);
// condenseArrayOfNumbers([5,0,4,1,2]);
// condenseArrayOfNumbers([1]);

function condenseArrayOfNumbersOtherWay(numbers) {
    let repeats = numbers.length - 1;
    for (let i = 0; i < repeats; i++) {
        let condensed = [];
        for (let j = 0; j < numbers.length - 1; j++) {
            let currentElem = numbers[j] + numbers[j + 1];
            condensed.push(currentElem);
        }
        numbers = condensed;
    }
    console.log(numbers[0]);
}

// condenseArrayOfNumbersOtherWay([2,10,3]);
// condenseArrayOfNumbersOtherWay([5,0,4,1,2]);
// condenseArrayOfNumbersOtherWay([1]);