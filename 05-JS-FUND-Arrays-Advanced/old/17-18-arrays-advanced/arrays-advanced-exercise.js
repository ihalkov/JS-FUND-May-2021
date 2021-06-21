function train(input = []) {
    let peopleInWagons = input.shift().split(' ').map(Number);
    let maxCapacity = + input.shift();

    let index = 0;
    let commands = input;

    while (index < commands.length) {
        let currentCommand = commands[index].split(' ');
        index += 1;
        if (currentCommand.length === 2) {
            addWagonsWithPeople(currentCommand);
            continue;
        }

        fillWagons(currentCommand, peopleInWagons);
    }

    return peopleInWagons.join(' ');

    function fillWagons(currentCommand, peopleInWagons) {
        for (let i = 0; i < peopleInWagons.length; i++) {
            let currentWagon = peopleInWagons[i];
            let passengersToAdd = Number(currentCommand[0]);
            let totalInWagon = currentWagon + passengersToAdd;

            if (totalInWagon <= maxCapacity) {
                peopleInWagons[i] = totalInWagon;
                break;
            }

        }

    }

    function addWagonsWithPeople(currentCommand) {
        peopleInWagons.push(Number(currentCommand[1]));
    }
}

// train(['32 54 21 12 4 0 23',
// '75',
// 'Add 10',
// 'Add 0',
// '30',
// '10',
// '75']
// );

// train(['0 0 0 10 2 4',
// '10',
// 'Add 10',
// '10',
// '10',
// '10',
// '8',
// '6']
// );

function distinctArray(input = []) {
    // let numbers = input;
    let output = [];

    output = processElements(input);
    console.log(output.join(' '));

    // process each elem
    function processElements(arr1) {
        let index = 0;
        let uniqueNumbers = [];

        while (index < arr1.length) {
            if (!uniqueNumbers.includes(arr1[index])) {
                uniqueNumbers.push(arr1[index]);
            }

            index += 1;
        }

        return uniqueNumbers;
    }
}

// distinctArray([1, 2, 3, 4]);
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
// distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);

function houseParty(input = []) {
    let arrOfStrings = input;

    let listArr = [];
    let resultForPrint = [];

    listArr = processEachString(arrOfStrings);

    printResult();

    function printResult() {
        for (const elem of resultForPrint) {
            console.log(elem);
        }

        for (const name of listArr) {
            console.log(name);
        }
    }

    function processEachString(strArr = []) {
        let index = 0;
        let length = strArr.length;
        let list = [];


        while (index < length) {
            let currentString = strArr[index].split(' ');
            let currentStringLength = currentString.length;
            let name = currentString[0];

            checkIsGoing(currentStringLength, name);
            checkIsNotGoing(currentStringLength, name);
            index += 1;
        }

        return list;

        function checkIsNotGoing(currentStringLength, name) {
            if (currentStringLength === 4) {
                removeFromTheList(name);
            }
        }

        function removeFromTheList(name) {
            if (list.includes(name)) {
                // remove from index
                let i = list.indexOf(name);
                list.splice(i, 1);
            } else {
                resultForPrint.push(`${name} is not in the list!`);
            }
        }

        function checkIsGoing(currentStringLength, name) {
            if (currentStringLength === 3) {
                checkTheList(name);
            }

            function checkTheList(name) {
                if (list.includes(name)) {
                    resultForPrint.push(`${name} is already in the list!`);
                } else {
                    list.push(name);
                }
            }
        }
    }
}

// houseParty(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!']
// );
// houseParty(['Tom is going!',
//     'Annie is going!',
//     'Tom is going!',
//     'Garry is going!',
//     'Jerry is going!']
// );

function sorting(input = []) {
    let numbers = input.sort((a, b) => a - b);
    let result = [];

    processTheNumbers();
    printTheResult();

    function printTheResult() {
        console.log(result.join(' '));
    }

    function processTheNumbers() {
        for (let i = 0; i < numbers.length / 2; i += 1) {
            result.push(numbers[numbers.length - 1 - i], numbers[i]);
        }

        if (numbers.length % 2 !== 0) {
            result.pop();
        }
    }
}

// sorting([3, 8, 5, 1, 13, 32]);
// sorting([3, 8, 5, 1, 13]);
// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

function sortingExample(input = []) {
    let sorted = input.sort((a, b) => b - a);
    let output = [];

    while (sorted.length > 0) {
        output.push(sorted.shift());
        output.push(sorted.pop());
    }
    // processTheNumbers();
    // printTheResult();

    // function printTheResult() {
    //     console.log(result.join(' '));
    // }

    // function processTheNumbers() {
    //     for (let i = 0; i < numbers.length / 2; i += 1) {
    //         result.push(numbers[numbers.length - 1 - i], numbers[i]);
    //     }

    //     if (numbers.length % 2 !== 0) {
    //         result.pop();
    //     }
    // }
    // return ;
    console.log(output.join(' '));
}

function sortAnArrayBy2Criteria(input = []) {
    let arrOfStrings = input.map(x => x.toLowerCase());
    // let sorted = arrOfStrings.sort((a, b) => a.length - b.length);
    let sorted = arrOfStrings.slice();
    sorted.sort(twoCriteriaSort);

    console.log(sorted.join('\n'));

    function twoCriteriaSort(cur, next) {
        let result = cur.length - next.length;

        if (result < 0) {
            return result;
        } else if (result === 0) {
            return cur.localeCompare(next);
        } else {
            return result;
        }
    }
}

function sortBy2CriteriaExample(input = []) {
    return input.slice(0).sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    });
}

// console.log(sortAnArrayBy2Criteria(

// ));
// sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
// sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
// sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George", "Ivan", "Ivana"]);

function bombNumbers(seqOfNumbers = [], cmd = []) {
    let numbers = seqOfNumbers.slice();
    let bombNumber = cmd[0];
    let bombPower = cmd[1];

    while (numbers.includes(bombNumber)) {
        let index = numbers.indexOf(bombNumber);
        let explosionRange = (bombPower * 2) + 1;

        if (index < bombPower) {
            numbers.splice(0, explosionRange);
        } else {
            numbers.splice(index - bombPower, explosionRange);
        }
    }

    let sumOfNumbers = giveSum();
    return sumOfNumbers;

    function giveSum() {
        let sum = 0;
        for (const num of numbers) {
            sum += num;
        }
        return sum;
    }
}

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
//     [4, 2]
//     );

// bombNumbers([1, 4, 4, 2, 8, 9, 1],
//     [9, 3]
//     );

// bombNumbers([1, 7, 7, 1, 2, 3],
//     [7, 2]
//         );

// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1]  
//     );

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
//     [4, 0]
//     );

function searchForANumber(arr1 = [], arr2 = []) {
    let numbers = arr1.slice(0);
    let commands = arr2.slice(0);

    let numbersToTake = commands[0];
    let takenNumbers = numbers.splice(0, numbersToTake);

    let numbersToDelete = commands[1];
    deleteNumbers(numbersToDelete);

    let searchedNumber = commands[2];
    // let countOccurrence = 0;

    let countOccurrence = takenNumbers.reduce((acc, curr) => {
        if (curr === searchedNumber) {
            acc += 1;
        }

        return acc;
    }, 0);

    printResult(searchedNumber, countOccurrence);

    function printResult(searched, count) {
        console.log(`Number ${searched} occurs ${count} times.`);
    }

    function deleteNumbers(numbersToDelete) {
        takenNumbers.splice(0, numbersToDelete);
    }
}

// searchForANumber([5, 2, 3, 4, 3, 1, 6],
//     [5, 2, 3]
// );

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