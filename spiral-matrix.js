function spiralMatrix(input = []) {
    return printMatrix(getMatrix(input));

    function getMatrix(arr) {
        let [rows, cols] = arr[0].split(' ').map(Number);
        let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows - 1, cols - 1];

        let matrix = [];
        for (let r = 0; r < rows; r++) {
            matrix[r] = [];
        }

        while (count < maxCount) {
            for (let c = minCol; c <= maxCol &&
                count < maxCount; c++) {
                matrix[minRow][c] = ++count;
            }
            minRow++;

            for (let r = minRow; r <= maxRow &&
                count < maxCount; r++) {
                matrix[r][maxCol] = ++count;
            }
            maxCol--;

            for (let c = maxCol; c >= minCol &&
                count < maxCount; c--) {
                matrix[maxRow][c] = ++count;
            }
            maxRow--;

            for (let r = maxRow; r >= minRow &&
                count < maxCount; r--) {
                matrix[r][minCol] = ++count;
            }
            minCol++;
        }
        return matrix;
    }

    function printMatrix(matrix) {
        let output = [];
        matrix.forEach(row => output.push(row.join(' ')));
        return output.join('\n');
    }
}

// console.log(spiralMatrix(['5 5']));
// console.log(spiralMatrix(['3 3']));