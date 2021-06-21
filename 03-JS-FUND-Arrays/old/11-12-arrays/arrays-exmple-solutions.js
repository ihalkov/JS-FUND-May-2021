function check(matrix) {

    function getFirstSum(row) {
        let sum = 0;
        for (let i = 0; i < row.length; i++) {
            sum += row[i];
        }
        return sum;

    }

    let firstSum = getFirstSum(matrix[0]); // get the first sum from the 1st matrix row
    let isMagic = true;
    let currSumRow = 0;
    let currSumCol = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            currSumRow += matrix[i][j];
            currSumCol += matrix[j][i];
        }
        if (currSumRow !== firstSum || currSumCol !== firstSum) { // compare current row/col sum with the initial sum
            isMagic = false;
        }
        currSumRow = 0;
        currSumCol = 0;
    }
    console.log(isMagic);
}

// magic matrices
// check(
// [[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]
//    );
// check(
//     [[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]
//     );
// check(
//     [[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
//     );

// check(
// [[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5],
// [5, 5, 5]]
//    );

function magic(matrix) {

    function getRowSum(row) {
        let sum = 0;
        for (let i = 0; i < row.length; i++) {
            sum += row[i];
        }
        return sum;
    }

    let firstSum = getRowSum(matrix[0]);    // get 1st sum
    let currSumRow = 0;
    let currSumCol = 0;
    let isMagic = true;


    // get the sum by rows and cols together, we have square matrix so no problem
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            currSumRow += matrix[i][j];
            currSumCol += matrix[j][i];
        }
        if (currSumRow !== firstSum || currSumCol !== firstSum) {
            isMagic = false;
            break;
        }
        currSumRow = 0;
        currSumCol = 0;
    }
    console.log(isMagic);
}

// magic(
//     [[4, 5, 6],
//     [6, 5, 4],
//     [5, 5, 5]]
//    );
// magic(
//     [[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]
//     );
// magic(
//     [[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
//     );

function spiralMatrix([arr]) {
    printMatrix(getMatrix(arr));

    function getMatrix(arr) {
        let [rows, cols] = arr.split(' ')
                            .filter(x => x != '')
                            .map(Number);
        let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows-1, cols-1];
        let matrix = [];
        for (let r = 0; r < rows; r++) matrix[r] = [];
        while (count < maxCount) {
            for (let c = minCol; c <= maxCol && count < maxCount; c++)	matrix[minRow][c] = ++count;
            minRow++;
            for (let r = minRow; r <= maxRow && count < maxCount; r++)	matrix[r][maxCol] = ++count;
            maxCol--;
            for (let c = maxCol; c >= minCol && count < maxCount; c--)	matrix[maxRow][c] = ++count;
            maxRow--;
            for (let r = maxRow; r >= minRow && count < maxCount; r--)	matrix[r][minCol] = ++count;
            minCol++;
        }
        return matrix;
    }

    function printMatrix(matrix) {
        matrix.forEach(row => console.log(row.join(' ')));
        // console.log(matrix.map(row => row.join(' ')).join('\n'));
    }
}

// spiralMatrix(['5 5']);

// spiralMatrix(['3 3']);