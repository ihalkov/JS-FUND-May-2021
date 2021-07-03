// LAB
function firstAndLastElement(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[input.length - 1]);
    let sum = firstNum + lastNum;
    return sum;
}

// console.log(firstAndLastElement(['20', '30', '40']));
// console.log(firstAndLastElement(['10', '17', '22', '33']));
// console.log(firstAndLastElement(['11', '58', '69']));

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

    if (num >= 1 && num <= 7) {
        return days[num - 1];
    }
    return 'Invalid day!';
}

// console.log(dayOfWeek(3));
// console.log(dayOfWeek(6));
// console.log(dayOfWeek(11));

function reverseNumbers(n, arr) {
    let numberElements = parseInt(n);
    let reversedNumbers = [];

    reverse();
    return print();

    function reverse() {
        for (let i = numberElements; i > 0; i--) {
            reversedNumbers.push(arr[i - 1]);
        }
    }

    function print() {
        let result = '';
        for (let i = 0; i < reversedNumbers.length; i++) {
            result += reversedNumbers[i] + " ";
        }
        return result;
    }
}

// console.log(reverseNumbers(3, [10, 20, 30, 40, 50]));
// console.log(reverseNumbers(4, [-1, 20, 99, 5]));
// console.log(reverseNumbers(2, [66, 43, 75, 89, 47]));

function reverseNumbersOptimization(n, arr) {
    let numberElements = parseInt(n);
    let result = '';
    for (let i = numberElements; i > 0; i--) {
        result += arr[i - 1] + ' ';
    }
    return result.trim();
}

// console.log(reverseNumbersOptimization(3, [10, 20, 30, 40, 50]));
// console.log(reverseNumbersOptimization(4, [-1, 20, 99, 5]));
// console.log(reverseNumbersOptimization(2, [66, 43, 75, 89, 47]));

function reverseArrayOfStrings(strArr) {
    let arrayOfStrings = swapElements(strArr);
    return arrayOfStrings.join(' ');

    function swapElements(strArr) {
        for (let i = 0; i < strArr.length / 2; i++) {
            let currEl = strArr[i];
            let backInd = strArr.length - i - 1;

            strArr[i] = strArr[backInd];
            strArr[backInd] = currEl;
        }
        return strArr;
    }
}

// console.log(reverseArrayOfStrings(['a', 'b', 'c', 'd', 'e']));
// console.log(reverseArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']));
// console.log(reverseArrayOfStrings(['33', '123', '0', 'dd']));

function sumEvenNumbers(strArr) {
    let sum = 0;

    for (let i = 0; i < strArr.length; i++) {
        let currentNum = Number(strArr[i]);
        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
    }
    return sum;
}

// console.log(sumEvenNumbers(['1','2','3','4','5','6']));

function evenAndOddSubtraction(strArr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < strArr.length; i++) {
        let currentNum = Number(strArr[i]);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
            continue;
        }
    }
    return evenSum - oddSum;
}

function equalArrays(strArr1, strArr2) {
    let sum = 0;
    // gonna use the same loop and calc the sum if are identical
    for (let i = 0; i < strArr1.length; i++) {
        let currNum = Number(strArr1[i]);
        if (strArr1[i] !== strArr2[i]) {
            return `Arrays are not identical. Found difference at ${i} index`;
        }
        sum += currNum;
    }
    return `Arrays are identical. Sum: ${sum}`;
}


function condenseArrayOfNumbers(numbers) {
    let condensed = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        let currEl = numbers[i] + numbers[i + 1];
        condensed.push(currEl);
    }
    if (numbers.length === 1) {
        return numbers[0];
    } else {
        numbers = condensed;
        return condenseArrayOfNumbers(numbers);
    }
}

// console.log(condenseArrayOfNumbers([2, 10, 3]));
// console.log(condenseArrayOfNumbers([5, 0, 4, 1, 2]));
// console.log(condenseArrayOfNumbers([1]));

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
    return numbers[0];
}

// console.log(condenseArrayOfNumbersOtherWay([2, 10, 3]));
// console.log(condenseArrayOfNumbersOtherWay([5, 0, 4, 1, 2]));
// console.log(condenseArrayOfNumbersOtherWay([1]));

// EXERCISE
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

// position
// fly length

// command
// 0 right 1
// fly one index to right

// if there on upcoming index is a ladybug then the ladybug continues to fly
// with the same command

// if fly out of the field / arr then is gone

// if fly left and is ind < 0
// then is also gone

// first check for valid index, then check if there is ladybug on it
function ladybugs(input = []) {
    let fieldSize = Number(input[0]);
    let indexes = input[1].split(' ').map(Number);

    let initialField = putBugsInPosition(fieldSize, indexes);

    for (let i = 2; i < input.length; i++) {
        let line = input[i];
        initialField = moveBug(line, initialField);
    }
    return initialField.join(' ');

    function putBugsInPosition(fieldSize, indexes) {
        let arr = [];
        arr.length = fieldSize;
        arr.fill(0);

        for (let i = 0; i < fieldSize; i++) {
            // let currInd = indexes.shift();
            if (indexes.includes(i)) {
                arr[i] = 1;
            }
        }
        return arr;
    }

    function moveBug(line, initialField) {
        let [firstPosition, command, flyLength] = line.split(' ');
        firstPosition = Number(firstPosition);
        flyLength = Number(flyLength);

        // is bug position always with bug
        let isBug = initialField[firstPosition] === 1;
        if (!isBug) {
            return initialField;
        }

        initialField[firstPosition] = 0;

        let currPosition = firstPosition;
        while (currPosition >= 0 &&
            currPosition <= initialField.length - 1) {

            let obj = {
                'left': currPosition - flyLength,
                'right': currPosition + flyLength
            };
            currPosition = obj[command];
            if (initialField[currPosition] === 0) {
                initialField[currPosition] = 1;
                break;
            }
        }
        return initialField;
    }
}

// console.log(ladybugs(
//     [
//         3,
//         '0 1',
//         '0 right 1',
//         '2 right 1'
//     ]
// ));
// console.log(ladybugs(
//     [
//         3,
//         '0 1 2',
//         '0 right 1',
//         '1 right 1',
//         '2 right 1'
//     ]
// ));
// console.log(ladybugs(
//     [
//         5,
//         '3',
//         '3 left 2',
//         '1 left -2'
//     ]
// ));

// MORE EXERCISE
function printNthElem(strArray = []) {
    let step = Number(strArray[strArray.length - 1]);
    let output = "";
    for (let i = 0; i < strArray.length - 1; i += step) {
        output += strArray[i] + " ";
    }
    console.log(output);
}

// printNthElem(['5', '20', '31', '4', '20', '2']);
// printNthElem(['dsa', 'asd', 'test', 'test', '2']);
// printNthElem(['1', '2', '3', '4', '5', '6']);

function addAndRemove(commands = []) {
    let numbers = [];
    let initialNumber = 1;
    let index = 0;
    while (index < commands.length) {
        let currentCommand = commands[index];
        if (currentCommand === "add") {
            numbers.push(initialNumber);
        } else if (currentCommand === "remove") {
            numbers.pop();
        }
        index++;
        initialNumber += 1;
    }
    print();

    function print() {
        let output = "";
        if (numbers.length === 0) {
            output = "Empty";
        }
        for (const number of numbers) {
            output += number + " ";
        }
        console.log(output);
    }
}

// addAndRemove(['add', 'add', 'add', 'add']);
// addAndRemove(['add', 'add', 'remove', 'add', 'add']);
// addAndRemove(['remove', 'remove', 'remove']);

function rotateArray(strArr = []) {
    let elements = strArr;
    let length = elements.length;
    let currentRotation = 1;
    let rotations = parseInt(elements[length - 1]);

    while (currentRotation <= rotations && isNaN(rotations) === false) {
        let lastIndex = length - 2;
        let lastElement = elements[lastIndex];

        for (let i = lastIndex; i >= 0; i -= 1) {
            if (i === 0) {
                elements[i] = lastElement;
                break;
            }
            elements[i] = elements[i - 1];
        }
        currentRotation += 1;
    }
    print();

    function print() {
        let output = "";
        if (isNaN(rotations)) {
            output = "Empty";
        } else {
            for (let i = 0; i < elements.length - 1; i += 1) {
                output += elements[i] + " ";
            }
        }
        console.log(output);
    }
}

// rotateArray(['1', '2', '3', '4', '2']);
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
// rotateArray(['remove', 'remove', 'remove']);

function rotateArrayDeclarative(arr = []) {
    let elements = arr;
    let rotations = parseInt(elements.pop());
    let currentRotation = 1;

    while (currentRotation <= rotations && isNaN(rotations) === false) {
        let lastElement = elements.pop();
        elements.unshift(lastElement);

        currentRotation += 1;
    }
    print();

    function print() {
        let output = "";
        if (isNaN(rotations)) {
            output = "Empty";
        } else {
            for (let i = 0; i < elements.length; i += 1) {
                output += elements[i] + " ";
            }
        }
        console.log(output);
    }
}

// rotateArrayDeclarative(['1', '2', '3', '4', '2']);
// rotateArrayDeclarative(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
// rotateArrayDeclarative(['remove', 'remove', 'remove']);


function nonDecreasingSubSequence(numArr = []) {
    let numbers = numArr;
    let currentBiggest = Number.MIN_SAFE_INTEGER;
    let output = "";
    for (const number of numbers) {
        if (number >= currentBiggest) {
            currentBiggest = number;
            output += number + " ";
        }
    }
    console.log(output);
}

// nonDecreasingSubSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// nonDecreasingSubSequence([1, 2, 3, 4]);
// nonDecreasingSubSequence([20, 3, 2, 15, 6, 1]);

function nonDecreasingSubSequenceDeclarative(numArr = []) {
    let numbers = numArr;
    let currentBiggest = Number.MIN_SAFE_INTEGER;
    let output = "";

    numbers = numbers.filter(num => {
        if (num >= currentBiggest) {
            currentBiggest = num;
            return true;
        }
    })
    numbers.forEach(number => output += number + " ");
    console.log(output);
}


// nonDecreasingSubSequenceDeclarative([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// nonDecreasingSubSequenceDeclarative([1, 2, 3, 4]);
// nonDecreasingSubSequenceDeclarative([20, 3, 2, 15, 6, 1]);

function tseamAccount(strArr) {
    let input = strArr;
    let listOfGames = input[0].toString().split(' ');

    let index = 1;
    let currentCommandString = input[index];
    while (currentCommandString !== "Play!") {
        let cmd = currentCommandString.toString().split(' ');
        let command = cmd[0];
        let game = cmd[1];

        if (command === "Install") {
            install(listOfGames);
        } else if (command === "Uninstall") {
            uninstall(listOfGames);
        } else if (command === "Update") {
            update(listOfGames);
        } else if (command === "Expansion") {
            expansion(listOfGames, game);
        }

        function expansion(listOfGames = [], game) {
            let arrGame = game.toString().split('-');
            let forGame = arrGame[0];
            let expansion = arrGame[1];

            if (listOfGames.includes(forGame)) {
                let i = listOfGames.indexOf(forGame);
                // let theGame = listOfGames.splice(i, i).toString();
                listOfGames.splice(i + 1, 0, `${forGame}:${expansion}`);
            }
        }

        function update(listOfGames = []) {
            if (listOfGames.includes(game)) {
                let i = listOfGames.indexOf(game);
                let theGame = listOfGames.splice(i, 1).toString();
                listOfGames.push(theGame);
            }
        }

        function uninstall(listOfGames = []) {
            if (listOfGames.includes(game)) {
                let i = listOfGames.indexOf(game);
                listOfGames.splice(i, 1);
            }
        }

        function install(listOfGames = []) {
            if (listOfGames.includes(game)) {
                return;
            }
            listOfGames.push(game);
        }

        index += 1;
        currentCommandString = input[index];
    }
    print();

    function print() {
        let output = "";
        for (const game of listOfGames) {
            output += game + " ";
        }
        console.log(output);
    }
}

// tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
// tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);

function magicMatrices(arr = []) {
    let matrix = arr;
    let isMagic = true;
    let targetSum = 0;

    checkRows();
    if (isMagic === true) {
        checkCols();
    }

    function checkCols() {
        let rows = matrix.length;
        let row = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            let currentSum = 0;
            for (let r = row; r < rows; r++) {
                currentSum += matrix[r][col];
            }
            if (targetSum !== currentSum) {
                isMagic = false;
                break;
            }
        }
    }

    function checkRows() {
        let rows = matrix.length; // number of rows
        for (let row = 0; row < rows; row++) {
            let currentSum = 0;
            for (let col = 0; col < matrix[row].length; col++) {
                currentSum += matrix[row][col];
            }
            if (row === 0) {
                targetSum = currentSum;
            }
            if (targetSum !== currentSum) {
                isMagic = false;
                break;
            }
        }
    }
    console.log(isMagic);
}

function createMatrix(n) {
    let matrix = [];
    for (let row = 0; row < n; row++) {
        let currentArray = [];
        for (let col = 0; col < n; col++) {
            currentArray.push(row + col);
        }
        matrix.push(currentArray);
    }

    print2DMatrix(matrix);

    function print2DMatrix(matrix = []) {
        for (let row = 0; row < matrix.length; row++) {
            let outputRow = "";
            for (let col = 0; col < matrix[row].length; col++) {
                outputRow += matrix[row][col];
            }
            console.log(outputRow);
        }
    }
}

// createMatrix();

// magicMatrices(
// [[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]
//    );
// magicMatrices(
//     [[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]
//     );
// magicMatrices(
//     [[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
//     );

// matrix.length gives length of main array

function spiralMatrix(rows, cols) {
    let matrix = emptyMatrix(rows, cols);

    let startNumber = 0;
    let maxNumber = rows * cols;
    let minRow = 0;
    let minCol = 0;
    let maxRow = rows - 1;
    let maxCol = cols - 1;

    while (startNumber < maxNumber) {
        moveRight();
        moveDown();
        moveLeft();
        moveUp();
    }
    print2DMatrix(matrix);

    function moveRight() {
        for (let c = minCol; c <= maxCol &&
            startNumber <= maxNumber; c += 1) {
            matrix[minRow][c] = ++startNumber;
        }
        minRow += 1;
    }

    function moveDown() {
        for (let r = minRow; r <= maxRow &&
            startNumber <= maxNumber; r += 1) {
            matrix[r][maxCol] = ++startNumber;
        }
        maxCol -= 1;
    }

    function moveLeft() {
        for (let c = maxCol; c >= minCol &&
            startNumber <= maxNumber; c -= 1) {
            matrix[maxRow][c] = ++startNumber;
        }
        maxRow -= 1;
    }

    function moveUp() {
        for (let r = maxRow; r >= minRow &&
            startNumber <= maxNumber; r -= 1) {
            matrix[r][minCol] = ++startNumber;
        }
        minCol += 1;
    }

    function emptyMatrix(rows, cols) {
        let empty = new Array(rows);
        for (let row = 0; row < rows; row++) {
            empty[row] = new Array(cols);
        }
        return empty;
    }

    function print2DMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            let outputRow = "";
            for (let col = 0; col < matrix[row].length; col++) {
                outputRow += matrix[row][col] + " ";
            }
            console.log(outputRow);
        }
    }
}

// spiralMatrix(5, 5);
// spiralMatrix(3, 3);

function diagonalAttack(arr = []) {
    let matrix = parseMatrixToNumbers(arr);
    let diagSum = calcDiagonalsSum(matrix);
    let diag1Sum = diagSum[0];
    let diag2Sum = diagSum[1];

    if (diag1Sum === diag2Sum) {
        // put sum to elements diff than diag
        matrix = changedMatrix(matrix, diag1Sum);
    }
    print2DMatrix(matrix);


    function calcDiagonalsSum(matrix) {
        let [d1Sum, d2Sum] = [0, 0];
        let rowLength = matrix.length - 1;

        for (let i = 0; i <= rowLength; i++) {
            d1Sum += matrix[i][i];
            d2Sum += matrix[i][rowLength - i];
        }
        return [d1Sum, d2Sum];
    }
    // let matrix = matrixRows.map(
    // row => row.split(' ').map(Number));
    function parseMatrixToNumbers(matrix = []) {
        let newMatrix = [];
        for (let row = 0; row < matrix.length; row++) {
            let currentRow = matrix[row].split(' ');
            let numArr = [];
            for (let col = 0; col < currentRow.length; col++) {
                numArr.push(Number(currentRow[col]));
            }
            newMatrix.push(numArr);
        }
        return newMatrix;
    }

    function print2DMatrix(matrix = []) {
        for (let row = 0; row < matrix.length; row++) {
            let outputRow = "";
            for (let col = 0; col < matrix[row].length; col++) {
                outputRow += matrix[row][col] + " ";
            }
            console.log(outputRow);
        }
    }

    function changedMatrix(matrix = [], sum = 0) {
        let changedMatrix = matrix;
        let length = changedMatrix.length - 1;

        for (let i = 0; i <= length; i++) {
            let row1 = i;
            let col2 = length - i;
            for (let j = 0; j <= length; j++) {
                let col1 = j;
                if (row1 !== col1 && col1 !== col2) {
                    changedMatrix[row1][col1] = sum;
                }
            }
        }
        return changedMatrix;
    }
}

// diagonalAttack(
//     ['5 3 12 3 1',
//         '11 4 23 2 5',
//         '101 12 3 21 10',
//         '1 4 5 2 2',
//         '5 22 33 11 1']
// );
// diagonalAttack(
//     ['1 1 1',
//         '1 1 1',
//         '1 1 0']
// );

function orbit([rows, cols, x, y]) {
    let matrix = emptyMatrix(rows, cols);

    let starRow = x;
    let starCol = y;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            matrix[r][c] = Math.max(Math.abs(r - starRow), Math.abs(c - starCol)) + 1;
        }
    }

    print2DMatrix(matrix);

    function emptyMatrix(rows, cols) {
        let empty = new Array(rows);
        for (let row = 0; row < rows; row++) {
            empty[row] = new Array(cols);
        }
        return empty;
    }

    function print2DMatrix(matrix = []) {
        for (let row = 0; row < matrix.length; row++) {
            let outputRow = "";
            for (let col = 0; col < matrix[row].length; col++) {
                outputRow += matrix[row][col] + " ";
            }
            console.log(outputRow);
        }
    }
}

// orbit([4, 4, 0, 0]);
// orbit([5, 5, 2, 2]);
// orbit([3, 3, 2, 2]);