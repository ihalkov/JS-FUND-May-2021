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

// let col = extractColumn(numberMatrix, 0);

console.log();


// bomb coords
let x = 3;
let y = 3;


// start row col
numberMatrix = explodeBomb(x, y, numberMatrix);


function explodeBomb(x, y, numberMatrix) {
    const bombPower = numberMatrix[x][y];

    let startRow = x - 1;
    let startCol = y - 1;

    let row = startRow;
    let col = startCol;

    let rowLength = numberMatrix[0].length;
    let colLength = numberMatrix.length;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (row >= 0 && col >= 0 && row <= rowLength - 1 && col <= colLength - 1) {
                numberMatrix[row][col] = explodingBunny(row, col);
            }

            col += 1;
        }
        col = startCol;
        row += 1;
    }

    return numberMatrix;

    function explodingBunny(row, col) {
        let currentBunny = numberMatrix[row][col];
        let result = currentBunny - bombPower;
        if (result < 0) {
            result = 0;
        }

        return result;
    }
}
