function equalNeighbors(input = []) {
    let matrix = input;

    let pairs = 0;

    pairs = getRowsPairs(matrix);
    pairs += getColsPairs(matrix);
    return pairs;

    function getRowsPairs(matrix) {
        let row = 0;
        let rows = matrix.length;
        let pairs = 0;

        while (row < rows) {
            matrix[row].map((el, ind) => {
                let next = matrix[row][ind + 1];
                if (el === next) {
                    pairs += 1;
                }
            });

            row += 1;
        }

        return pairs;
    }

    function getColsPairs(matrix) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let pairs = 0;

        for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows - 1; r++) {
                let curr = matrix[r][c];
                let next = matrix[r + 1][c];
                if (curr === next) {
                    pairs += 1;
                }
            }
        }

        return pairs;
    }
}

// equalNeighbors(
//     [['5', '5', '4', '7', '0'],
//     ['5', '0', '5', '5', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]
// );

// equalNeighbors(
//     [['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]
//     );

// equalNeighbors(
//     [['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]
//     );

// equalNeighbors([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']]);

function bunnyKill(input = []) {
    // Input
    // remove the spaces
    let coords = input.pop().split(' ');
    // return matrix each row is with the coords of bomb integer value 
    coords = coords.map(x => x.split(',').map(Number));

    // coords = getValidCoords(coords);

    let matrix = input;
    let numberMatrix = mapMatrixToNumbers(matrix);
    ///////////////////
    // Logic
    // let snowballDamage = 0;
    // let kills = 0;
    // bomb coords
    let kills = 0;
    let snowballDamage = 0;

    numberMatrix = explodeAllBombs(coords, numberMatrix);



    // iterate over row, iterate over column of this row ;)
    numberMatrix.map(row => row.map(el => {
        if (el > 0) {
            kills += 1;
            snowballDamage += el;
        }
    }));

    console.log(snowballDamage);
    console.log(kills);


    // Output
    // Print
    // snowballDamage
    // kills
    // return numberMatrix;

    function explodeAllBombs(coords, numberMatrix) {
        while (coords.length > 0) {
            let x = coords[0][0];
            let y = coords[0][1];
            coords.shift();

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
                        if (row >= 0 && col >= 0 && row < rowLength && col < colLength) {
                            numberMatrix[row][col] = explodingBunny(row, col, x, y);
                        }

                        col += 1;
                    }
                    col = startCol;
                    row += 1;
                }

                return numberMatrix;

                function explodingBunny(row, col, x, y) {
                    let currentBunny = numberMatrix[row][col];
                    let result = currentBunny - bombPower;
                    if (result < 0) {
                        result = 0;
                    } else if (row === x && col === y) {
                        // update kills and damage
                        kills += 1;
                        snowballDamage += currentBunny;
                    }

                    return result;
                }
            }
        }

        return numberMatrix;
    }

    function getValidCoords(coords) {
        // let coords = [[0, 0], [0, 1], [1, 1], [2, 2], [0, 3]];

        // coords = coords.map(curr => { // iterate over everything
        let index = 0;
        while (index < coords.length) {
            let curr = coords[index];
            let x = curr[0];
            let y = curr[1];

            let result = coords.filter(c => {
                let currX = c[0];
                let currY = c[1];
                // dont matter the arrangement of coords just we need the bombs to explode
                let diffX = Math.abs(x - currX);
                let diffY = Math.abs(y - currY);
                if (diffX > 1 || diffY > 1) {
                    return c;
                }
            });

            coords = [curr, ...result];
            index += 1;
        }

        return coords.reverse();
    }

    function mapMatrixToNumbers(arr) {
        return arr.map(row => row.split(' ').map(Number));
    }
}

// bunnyKill(['5 10 15 20',
//     '10 10 10 10',
//     '10 15 10 10',
//     '10 10 10 10',
//     '2,2 0,1']
// );

// bunnyKill(['10 10 10',
//     '10 10 10',
//     '10 10 10',
//     '0,0']
// );

// bunnyKill(['5 10 15 20',
//     '10 10 10 10',
//     '10 15 10 10',
//     '10 10 10 10',
//     '0,0 0,1']
// );


function airPollution(matrix, strArr) {
    let mapOfSofia = matrix.map(row => row.split(' ').map(Number));
    let forces = strArr;

    while (forces.length > 0) {
        let currentForce = forces.shift().split(' ');
        let word = currentForce[0];
        let index = Number(currentForce[1]);

        switch (word) {
            case 'breeze':
                mapOfSofia[index] = breeze(mapOfSofia, index);
                break;
            case 'gale':
                mapOfSofia = gale(mapOfSofia, index);
                break;
            case 'smog':
                mapOfSofia = smog(mapOfSofia, index);
                break;
        }
    }

    let pollutedBlocks = findPollutedBlocks(mapOfSofia);

    printResult(pollutedBlocks);

    function printResult(arr) {
        if (arr.length > 0) {
            console.log(`Polluted areas: ${arr.join(', ')}`);
        } else {
            console.log(`No polluted areas`);
        }
    }

    function findPollutedBlocks(arr) {
        let result = [];
        arr.map((row, rowInd) => row.map((col, colInd) => {
            if (col >= 50) {
                result.push(`[${rowInd}-${colInd}]`);
            }
        }));

        return result;
    }

    function breeze(matrix, ind) {
        let result = matrix[ind].map(x => {
            x = x - 15;
            if (x < 0) {
                x = 0;
            }

            return x;
        });

        return result;
    }

    function gale(arr, column) {
        let result = arr.map(x => {
            x = x[column] - 20;
            if (x < 0) {
                x = 0;
            }

            return x;
        });

        arr.map((x, ind) => x[column] = result[ind]);

        return arr;
    }

    function smog(arr, value) {
        let result = arr.map(row => row.map(col => {
            return col + value;
        }));

        return result;
    }
}

// airPollution(
//     ["5 7 72 14 4",
//         "41 35 37 27 33",
//         "23 16 27 42 12",
//         "2 20 28 39 14",
//         "16 34 31 10 24"],
//     ["breeze 1", "gale 2", "smog 25"]
// );

// airPollution(
//     ["5 7 3 28 32",
//     "41 12 49 30 33",
//     "3 16 20 42 12",
//     "2 20 10 39 14",
//     "7 34 4 27 24"],
//     ["smog 11", "gale 3", "breeze 1", "smog 2"]
// );
// airPollution(
//     ["5 7 2 14 4",
//     "21 14 2 5 3",
//     "3 16 7 42 12",
//     "2 20 8 39 14",
//     "7 34 1 10 24"],
//     ["breeze 1", "gale 2", "smog 35"]
// );

function janNotation(input = []) {
    let instructions = input.slice(0);
    let savedNumbers = [];
    while (instructions.length > 0) {
        let currentInstruction = instructions.shift();

        if (isNaN(currentInstruction)) {
            let operator = currentInstruction;
            let res = doCalc(savedNumbers, operator);

            if (isNaN(res)) {
                return res;
            }

            savedNumbers.push(res);
        } else {
            savedNumbers.push(currentInstruction);
        }
    }

    if (savedNumbers.length < 2) {
        return savedNumbers[0];
    }

    return 'Error: too many operands!';

    function doCalc(arr, op) {

        if (arr.length >= 2) {
            // because when pop we remove the last
            let num2 = arr.pop();
            let num1 = arr.pop();
            let result = 0;


            let sum = (a, b) => a + b;
            let subs = (a, b) => a - b;
            let mul = (a, b) => a * b;
            let div = (a, b) => a / b;

            switch (op) {
                case '+':
                    result = sum(num1, num2);
                    break;
                case '-':
                    result = subs(num1, num2);
                    break;
                case '*':
                    result = mul(num1, num2);
                    break;
                case '/':
                    result = div(num1, num2);
                    break;

            }
            return result;
        } else {
            return 'Error: not enough operands!';
        }
    }
}

// janNotation([3, 4, '+']);
// janNotation([5, 3, 4, '*', '-']);
// janNotation([7, 33, 8, '-']);
// janNotation([15, '/']);
// janNotation([31, 2, '+', 11, '/']);
// janNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);

function rosettaStone(input = []) {
    let numberMatrix = mapMatrixToNumbers(input);
    let tempMatLength = numberMatrix.shift();
    let tempMatrix = numberMatrix.splice(0, tempMatLength);
    let messageMatrix = numberMatrix.slice(0);

    let result = findMessage(messageMatrix, tempMatrix);
    return result;

    function findMessage(messageMatrix, tempMatrix) {
        let tempRows = tempMatrix.length;
        let rows = messageMatrix.length;
    
        let result = '';
        for (let row = 0; row < rows; row++) {
            let tempCols = tempMatrix[row % tempRows].length;
            let cols = messageMatrix[row].length;
            for (let col = 0; col < cols; col++) {
                let currTempEl = tempMatrix[row % tempRows][col % tempCols];
                let currMessEl = messageMatrix[row][col];
                let ch = decodingCh(currTempEl, currMessEl);
                result += ch;
            }        
        }
    
        return result.trim();
    }

    function decodingCh(tempX, messY) {
        let currNum = (tempX + messY) % 27;
        let ch = String.fromCharCode(currNum + 64);
        if (currNum === 0) {
            ch = ' ';
        }
        return ch;
    }
    
    function mapMatrixToNumbers(arr) {
        return arr.map(row => row.split(' ').map(Number));
    }
}

// rosettaStone([ '2',
// '59 36',
// '82 52',
// '4 18 25 19 8',
// '4 2 8 2 18',
// '23 14 22 0 22',
// '2 17 13 19 20',
// '0 9 0 22 22' ]
// );

// rosettaStone(['2',
//     '31 32',
//     '74 37',
//     '19 0 23 25',
//     '22 3 12 17',
//     '5 9 23 11',
//     '12 18 10 22']
// );

