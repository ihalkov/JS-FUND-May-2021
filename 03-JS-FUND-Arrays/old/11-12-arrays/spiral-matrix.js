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