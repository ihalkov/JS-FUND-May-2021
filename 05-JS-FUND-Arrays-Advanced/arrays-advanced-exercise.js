// LAB
function sumFirstLast(input = []) {
    let firstElement = Number(input[0]);
    let lastElement = Number(input[input.length - 1]);

    let sum = firstElement + lastElement;
    return sum;
}

function sumFirstLastMethods(input = []) {
    let firstElement = Number(input.shift());
    let lastElement = Number(input.pop());

    let sum = firstElement + lastElement;
    return sum;
}

function negativePositiveNumbers(input = []) {
    let arrInput = input;
    let newArr = [];

    while (arrInput.length > 0) {
        let firstElement = arrInput.shift();

        if (firstElement < 0) {
            newArr.unshift(firstElement);
            continue;
        }

        newArr.push(firstElement);
    }

    console.log(newArr.join('\n'));
}

// negativePositiveNumbers([7, -2, 8, 9]);
// negativePositiveNumbers([3, -2, 0, 1]);

function firstAndLastKNumbers(input = []) {
    let arr = input;
    let k = arr.shift();

    let firstElements = arr.slice(0, k);
    let lastElements = arr.slice(arr.length - k, arr.length);

    console.log(...firstElements);
    console.log(...lastElements);
}

function firstAndLastKNumbers(input = []) {
    let arr = input;
    let k = arr.shift();

    let firstElements = arr.slice(0, k);
    let lastElements = arr.slice(arr.length - k, arr.length);

    // two ways
    console.log(firstElements.join(' '));
    console.log(...lastElements);
}

// firstAndLastKNumbers([2, 2, 3, 4, 5]);

function lastKNumbersSequence(n, k) {
    let elementsInArray = n;
    let kElements = k;

    let numbers = [1];

    let result = addEachElement();

    return result.join(' ');

    function addEachElement() {
        for (let i = 1; i < elementsInArray; i++) {
            numbers.push(sumOfKSeq(kElements));
        }
        return numbers;
    }

    function sumOfKSeq(k) {
        let index = numbers.length - 1;
        let sum = 0;

        while (index >= numbers.length - k) {
            if (index < 0) {
                return sum;
            }

            sum += numbers[index];
            index -= 1;
        }

        return sum;
    }
}

// lastKNumbersSequence(6, 3);
// lastKNumbersSequence(8, 2);

function processOddNumbers(input = []) {
    let numbers = input;
    let result = numbers
        .filter(function (el, ind) {
            return ind % 2 !== 0;
        })
        .map(x => x * 2)
        .reverse();
    console.log(...result);
}


// processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);

function smallestTwoNumbers(input = []) {
    let numbers = input;

    let result = numbers.sort((a, b) => a - b).slice(0, 2);
    console.log(result.join(' '));
}

// smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

function listOfProducts(input = []) {
    let products = input;
    products.sort();

    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}.${products[i]}`);        
    }
}

// listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);

function arrayManipulations(input = []) {
    let numbers = input.shift().split(' ').map(Number);

    // read commands
    readCommands();

    console.log(numbers.join(' '));

    function readCommands() {
        let commands = input;
        let index = 0;

        while (index < commands.length) {
            let currentCommand = commands[index].split(' ');
            let num = Number(currentCommand[1]);

            switch (currentCommand[0]) {
                case 'Add':
                    add(num);
                    break;
                case 'Remove':
                    remove(num);
                    break;
                case 'RemoveAt':
                    removeAt(num);
                    break;
                case 'Insert':
                    insert(currentCommand, num);
                    break;
            }

            index += 1;
        }

        function insert(currentCommand, num) {
            numbers.splice(Number(currentCommand[2]), 0, num);
        }

        function removeAt(num) {
            numbers.splice(num, 1);
        }

        function remove(num) {
            numbers = numbers.filter(x => x !== num);
        }

        function add(num) {
            numbers.push(num);
        }
    }
}

// arrayManipulations(['4 19 2 53 6 43',
// 'Add 3',
// 'Remove 2',
// 'RemoveAt 1',
// 'Insert 8 3']
// );

// EXERCISE
function train(arr = []) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxCap = Number(arr.shift());

    for (const line of arr) {
        if (line.includes('Add')) {
            let [command, passengers] = line.split(' ');
            wagons.push(Number(passengers));
        } else {
            let passengers = Number(line);
            wagons = fillWagons(wagons, passengers, maxCap);
        }
    }

    return wagons.join(' ');

    function fillWagons(wagons, passengers, maxCap) {
        for (let i = 0; i < wagons.length; i++) {
            let currWagon = wagons[i];
            let addedPeople = currWagon + passengers;
            let hasSpace = addedPeople <= maxCap;

            if (hasSpace) {
                wagons[i] = addedPeople;
                break;
            }
        }
        return wagons;
    }
}

// console.log(train(
//     [
//         '32 54 21 12 4 0 23',
//         '75',
//         'Add 10',
//         'Add 0',
//         '30',
//         '10',
//         '75'
//     ]
// ));
// console.log(train(
//     [
//         '0 0 0 10 2 4',
//         '10',
//         'Add 10',
//         '10',
//         '10',
//         '10',
//         '8',
//         '6'
//     ]
// ));

function distinctArray(input = []) {
    let result = [];

    for (const num of input) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    return result.join(' ');
}

// console.log(distinctArray([1, 2, 3, 4]));
// console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));
// console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));

function houseParty(input = []) {
    let output = [];
    let names = [];

    for (const line of input) {
        let name = line.split(' ')[0];
        if (!line.includes('not')) {
            if (!names.includes(name)) {
                names.push(name);
            } else {
                output.push(`${name} is already in the list!`)
            }
        } else {
            if (!names.includes(name)) {
                output.push(`${name} is not in the list!`);
            } else {
                let ind = names.indexOf(name);
                names.splice(ind, 1);
            }
        }
    }
    output.push(...names);
    return output.join('\n');
}

// console.log(houseParty(
//     ['Allie is going!',
//         'George is going!',
//         'John is not going!',
//         'George is not going!'
//     ]
// ));
// console.log(houseParty(
//     ['Tom is going!',
//         'Annie is going!',
//         'Tom is going!',
//         'Garry is going!',
//         'Jerry is going!'
//     ]
// ));

function sorting(input = []) {
    let descending = input.sort((a, b) => b - a);
    let arrLength = descending.length;
    let sorted = [];

    for (let i = 0; i < arrLength / 2; i++) {
        sorted.push(descending[i], descending[arrLength - 1 - i]);
    }

    if (arrLength % 2 !== 0) {
        sorted.pop();
    }
    console.log(sorted.join(' '));
}

// console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));
// console.log(sorting([1, 21, 3]));

function sortAnArrayBy2Criteria(input = []) {
    let sorted = input.sort((a, b) => {
        let res = a.length - b.length;
        if (res === 0) {
            return a.localeCompare(b, 'en', {
                sensitivity: 'base'
            });
        }
        return res;
    });
    return sorted.join('\n');
}

// console.log(sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]));
// console.log(sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]));

function bombNumbers(numbers, bombInfo) {
    let [bombNum, bombPower] = [...bombInfo];

    while ((ind = numbers.indexOf(bombNum)) !== -1) {
        let [start, count] = findInd(ind);
        numbers.splice(start, count);
    }
    return numbers.length > 0 ? numbers.reduce((acc, curr) => acc + curr) : 0;

    function findInd(ind) {
        let start = ind - bombPower;
        let count = 1 + (bombPower * 2);

        if (start < 0 || start > numbers.length - 1) {
            start = 0;
        }
        return [start, count];
    }
}

// console.log(bombNumbers(
//     [1, 2, 2, 4, 2, 2, 2, 9],
//     [4, 2]
// ));
// console.log(bombNumbers(
//     [1, 4, 4, 2, 8, 9, 1],
//     [9, 3]
// ));
// console.log(bombNumbers(
//     [1, 7, 7, 1, 2, 3],
//     [7, 1]
// ));
// console.log(bombNumbers(
//     [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1]
// ));

// console.log(bombNumbers(
//     [1],
//     [1, 1]
// ));

function searchForANumber(numbers, instructions) {
    let [take, del, searchedNum] = [...instructions];
    let sequence = numbers.slice(0, take);
    sequence.splice(0, del);

    let count = 0;
    sequence.forEach(el => {
        if (el === searchedNum) {
            count += 1;
        }
    });

    return `Number ${searchedNum} occurs ${count} times.`;
}

// console.log(searchForANumber(
//     [5, 2, 3, 4, 1, 6],
//     [5, 2, 3]
// ));

function arrayManipulator(arrOfInt = [], arrOfStr = []) {
    let numbers = arrOfInt.slice(0);
    let commands = arrOfStr.slice(0);

    // process commands
    numbers = processCommands(numbers, commands);

    printArray(numbers);

    function processCommands(numbers, commands = []) {
        let currCommand = commands.shift();

        while (currCommand !== 'print') {
            let tokens = currCommand.split(' ');
            let command = tokens.shift();
            let ind = Number(tokens.shift());
            let elements = tokens.map(Number);

            switch (command) {
                case 'add':
                    numbers = add(numbers, ind, elements[0]);
                    break;
                case 'addMany':
                    numbers = addMany(numbers, ind, elements);
                    break;
                case 'contains':
                    console.log(numbers.indexOf(ind));
                    break;
                case 'remove':
                    numbers = remove(numbers, ind);
                    break;
                case 'shift':
                    numbers = shift(numbers, ind);
                    break;
                case 'sumPairs':
                    numbers = sumPairs(numbers);
                    break;
            }
            currCommand = commands.shift();
        }

        return numbers;

        function sumPairs(arr = []) {
            let output = [];
            while (arr.length > 0) {
                let a = arr.shift() || 0;
                let b = arr.shift() || 0;
                output.push(a + b);
            }

            return output;
        }

        function shift(arr = [], pos) {
            while (pos > 0) {
                let elem = arr.shift();
                arr.push(elem);
                pos -= 1;
            }

            return arr;
        }

        function remove(arr = [], ind) {
            if (ind >= 0 && ind <= arr.length - 1) {
                arr.splice(ind, 1);
            }

            return arr;
        }

        function addMany(arr = [], ind, elements) {
            arr.splice(ind, 0, ...elements);
            return arr;
        }

        function add(arr = [], ind, elem) {
            arr.splice(ind, 0, elem);
            return arr;
        }
    }

    function printArray(arr1 = []) {
        console.log(`[ ${arr1.join(', ')} ]`);
    }
}

// arrayManipulator([2, 2, 4, 2, 4],
//     ["add 1 4", "sumPairs", "print"]
//     );


// arrayManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
//     );

// // arrayManipulator([1, 2, 4, 5, 6],
// //     ['sumPairs', 'contains 1', 'contains 3', 'print']
// // );

// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
// );

function gladiatorInventory(arrStr = []) {
    // equipment names
    let inventory = arrStr.shift().split(' ');
    let commands = arrStr.slice(0);

    // process commands
    processCommands(commands);

    return inventory.join(' ');

    function processCommands(cmd = []) {
        let i = 0;
        let cmdLength = cmd.length;
        while (i < cmdLength) {
            currentCommand();
            i += 1;
        }

        function currentCommand() {
            let currStr = cmd[i].split(' ');
            let command = currStr[0];
            let equip = currStr[1];

            switch (command) {
                case 'Buy':
                    let buy = (x => {
                        if (!inventory.includes(x)) {
                            inventory.push(x);
                        }
                    });
                    buy(equip);
                    break;
                case 'Trash':
                    let trash = (x => {
                        if (inventory.includes(x)) {
                            let ind = inventory.indexOf(x);
                            inventory.splice(ind, 1);
                        }
                    });
                    trash(equip);
                    break;
                case 'Repair':
                    let repair = (x => {
                        if (inventory.includes(x)) {
                            let ind = inventory.indexOf(x);
                            inventory.splice(ind, 1);
                            inventory.push(x);
                        }
                    });
                    repair(equip);
                    break;
                case 'Upgrade':
                    let itemAndVersion = equip.split('-');
                    let item = itemAndVersion[0];
                    let version = itemAndVersion[1];

                    let upgrade = (x, v) => {
                        if (inventory.includes(x)) {
                            let ind = inventory.indexOf(x);
                            // put upgrade after the pos of x
                            inventory.splice(ind + 1, 0, `${x}:${v}`);
                        }
                    };
                    upgrade(item, version);
                    break;
            }
        }
    }
}

// gladiatorInventory(['SWORD Shield Spear',
//     'Buy Bag',
//     'Trash Shield',
//     'Repair Spear',
//     'Upgrade SWORD-Steel']
// );

// gladiatorInventory(['SWORD Shield Spear',
//     'Trash Bow',
//     'Repair Shield',
//     'Upgrade Helmet-V']
// );

function buildAWall(arrOfStr = []) {
    // heights of mile long sections
    const heights = arrOfStr.slice(0).map(Number);

    let currentHeights = heights.slice(0);
    const oneFootHeight = 195; // cubic yards of concrete
    const priceOfCubicYard = 1900; // pesos

    let dailyConcrete = [];
    dailyConcrete = constructTheWall();

    let totalConcrete = dailyConcrete.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0);

    let totalPrice = totalConcrete * priceOfCubicYard;

    console.log(dailyConcrete.join(', '));
    console.log(`${totalPrice} pesos`);

    function constructTheWall() {
        let currTeams = currentHeights.length;
        while (currTeams > 0) {
            let returnArr = getDailyConcrete();
            let currMaterial = returnArr[0];
            currTeams = returnArr[1];
            dailyConcrete.push(currMaterial);
        }

        dailyConcrete.pop();
        return dailyConcrete;
    }

    function getDailyConcrete() {
        let currMaterial = 0;
        currentHeights = currentHeights.filter(x => x !== 30).map(el => el + 1);
        let currTeams = currentHeights.length;
        currMaterial = currTeams * oneFootHeight;

        return [currMaterial, currTeams];
    }
}


// buildAWall(['21', '25', '28', '30']);
// buildAWall(['21', '25', '28']);

// buildAWall([17]);
// buildAWall([17, 22, 17, 19, 17]);

// MORE EXERCISE
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

