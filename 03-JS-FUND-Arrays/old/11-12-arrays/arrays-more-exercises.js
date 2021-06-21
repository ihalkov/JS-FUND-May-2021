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
        for (let c = minCol; c <= maxCol
            && startNumber <= maxNumber; c += 1) {
            matrix[minRow][c] = ++startNumber;
        }
        minRow += 1;
    }
    function moveDown() {
        for (let r = minRow; r <= maxRow
            && startNumber <= maxNumber; r += 1) {
            matrix[r][maxCol] = ++startNumber;
        }
        maxCol -= 1;
    }
    function moveLeft() {
        for (let c = maxCol; c >= minCol
            && startNumber <= maxNumber; c -= 1) {
            matrix[maxRow][c] = ++startNumber;
        }
        maxRow -= 1;
    }
    function moveUp() {
        for (let r = maxRow; r >= minRow
            && startNumber <= maxNumber; r -= 1) {
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
