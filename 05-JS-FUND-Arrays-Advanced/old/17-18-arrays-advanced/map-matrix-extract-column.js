let matrix =
    ['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10'];

function mapMatrixToNumbers(arr) {
    return arr.map(row => row.split(' ').map(Number));
}

let numberMatrix = mapMatrixToNumbers(matrix);

function extractColumn(arr, column) {
    return arr.map(x => x[column])
}

let col = extractColumn(numberMatrix, 0);

console.log();