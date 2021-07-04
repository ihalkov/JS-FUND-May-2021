function addOrSubtract(arrayOfNumbers) {
    let numbers = arrayOfNumbers;
    let modifiedNumbers = [];
    let originalSum = 0;
    let newSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = Number(numbers[i]);
        originalSum += currentNumber;
        if (currentNumber % 2 === 0) {
            currentNumber += i;
        } else {
            currentNumber -= i;
        }
        modifiedNumbers.push(currentNumber);
        newSum += currentNumber;
    }
    console.log(modifiedNumbers);
    console.log(originalSum);
    console.log(newSum);
}

// addOrSubtract([5, 15, 23, 56, 35]);
// addOrSubtract([-5, 11, 3, 0, 2]);

function addOrSubtractFunctional(data = []) {
    let resultArray = [];
    let originalSum = 0;
    let resultSum = 0;

    data.map((number, index) => {
        number % 2 === 0 ? number += index : number -= index;
        resultArray.push(number);
    });

    console.log(resultArray);
    console.log(originalSum = data.reduce((a, b) => {
        a += b;
        return a;
    }, 0));
    console.log(resultSum = resultArray.reduce((a, b) => a + b, 0));
}

// addOrSubtractFunctional([5, 15, 23, 56, 35]);
// addOrSubtractFunctional([-5, 11, 3, 0, 2]);

function solve(data = []) {
    // data. something now we have intellisense
}

function commonElements(arr1 = [], arr2 = []) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
            }
        }
    }
}

function commonElemIncludes(arr1 = [], arr2 = []) {
    for (let i = 0; i < arr1.length; i++) {
        // for (let j = 0; j < arr2.length; j++) {
        if (arr2.includes(arr1[i])) {
            console.log(arr1[i]);
        }
        // }
    }
}

function commonElemForEach(arr1 = [], arr2 = []) {
    arr1.forEach((elem) => {
        // for (let j = 0; j < arr2.length; j++) {
        if (arr2.includes(elem)) {
            console.log(elem);
        }
        // }
    });
}

function commonElemDeclarative(arr1 = [], arr2 = []) {
    arr1.map((element) => {
        if (arr2.includes(element)) {
            console.log(element);
        }
    })
}

function mergeArrays(strArrOne = [], strArrTwo = []) {
    let resultArr = [];
    // let output = "";

    for (let i = 0; i < strArrOne.length; i++) {
        let elemArrOne = strArrOne[i];
        let elemArrTwo = strArrTwo[i];
        if (i % 2 === 0) {
            resultArr.push(Number(elemArrOne) + Number(elemArrTwo));
        } else {
            resultArr.push(elemArrOne + elemArrTwo);
        }
        // output += resultArr[i];
        // if (i !== strArrOne.length - 1) {
        //     output += " - ";
        // }
    }
    console.log(resultArr.join(' - '));
}

function mergeArraysDeclarativeWay(strArrOne = [], strArrTwo = []) {
    let resultArr = [];

    strArrOne.map((element, i) => {
        i % 2 === 0 ?
            resultArr.push(Number(element) + Number(strArrTwo[i])) :
            resultArr.push(element + strArrTwo[i]);
    });
    console.log(resultArr.join(" - "));
}

function arrayRotation(arr = [], rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }
    console.log(arr.join(' '));
}

// arrayRotation([51, 47, 32, 61, 21], 2);
// arrayRotation([32, 21, 61, 1], 4);
// arrayRotation([2, 4, 15, 31], 5);

function arrayRotationDeclarative(array = [], rotations) {
    let resultArray = array.slice();
    resultArray.map((element, index) => {
        if (index < rotations) {
            resultArray.shift();
            resultArray.push(element);
        }
    });
    console.log(resultArray.join(' '));
}

// arrayRotationDeclarative([51, 47, 32, 61, 21], 2);
// arrayRotationDeclarative([32, 21, 61, 1], 4);
// arrayRotationDeclarative([2, 4, 15, 31], 5);

function maxNumber(array = []) {
    let isTop = true;
    let output = "";

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (currentNumber <= array[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            output += `${currentNumber} `;
        }
        isTop = true;
    }
    console.log(output);
}

// maxNumber([1, 4, 3, 2]);
// maxNumber([14, 24, 3, 19, 15, 17]);
// maxNumber([41, 41, 34, 20]);
// maxNumber([27, 19, 42, 2, 13, 45, 48]);

function maxNumberDeclarative(array = []) {
    // let isTop = true;
    // let output = "";

    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let isTopInt = true;
        let currentNumber = array[i];
        // take the old array 0 index is 1st index in new array
        let rightElementArray = array.slice(i + 1);

        for (let j = 0; j < rightElementArray.length; j++) {
            if (currentNumber <= rightElementArray[j]) {
                isTopInt = false;
                break;
            }
        }
        if (isTopInt === true) {
            resultArray.push(currentNumber);
        }
    }
    console.log(resultArray.join(' '));
}

// maxNumberDeclarative([1, 4, 3, 2]);
// maxNumberDeclarative([14, 24, 3, 19, 15, 17]);
// maxNumberDeclarative([41, 41, 34, 20]);
// maxNumberDeclarative([27, 19, 42, 2, 13, 45, 48]);

function equalSums(array = []) {
    let foundEquals = false;
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        let leftPart = array.slice(0, i);
        let rightPart = array.slice(i + 1, array.length);

        leftSum = findSum(leftPart);
        rightSum = findSum(rightPart);

        if (leftSum === rightSum) {
            console.log(i);
            foundEquals = true;
            break;
        }

        function findSum(arr = []) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }
    }
    if (!foundEquals) {
        if (array.length <= 1) {
            console.log(0);
        } else {
            console.log('no');
        }
    }
}


// equalSums([1, 2, 3, 3]);
// equalSums([1, 2]);
// equalSums([1]);
// equalSums([1, 2, 3]);
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

function maxSequenceOfEqualElements(array = []) {
    let longestSequence = "";
    let currentSequence = array[0] + " ";
    let sequenceLength = 1;
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i - 1] !== array[i]) {
            sequenceLength = 1;
            currentSequence = array[i] + " ";
            continue;
        }
        sequenceLength += 1;
        currentSequence += array[i] + " ";
        if (longestSequence.length < currentSequence.length) {
            longestSequence = currentSequence;
        }
    }
    console.log(longestSequence);
}

// maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequenceOfEqualElements([4, 4, 4, 4]);
// maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);

function magicSum(array = [], number = parseInt(number)) {
    let searchedSum = number;
    let uniquePairs = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let currentSum = parseInt(array[i]) + parseInt(array[j]);
            if (currentSum === searchedSum) {
                let currentPair = `${array[i]} ${array[j]}`;
                // let isUnique = checkUniquePairs();
                // if (isUnique) {
                uniquePairs.push(currentPair);
                // }
                // break;

                function checkUniquePairs() {
                    for (let i = 0; i < uniquePairs.length; i++) {
                        if (currentPair === uniquePairs[i]) {
                            return false;
                        }
                    }
                    return true;
                }
            }
        }
    }
    console.log(uniquePairs.join("\n"));
}

// magicSum([1, 5, 7, 2, 1, 7], 8);
// magicSum([14, 20, 60, 13, 7, 19, 8], 27);
// magicSum([1, 2, 3, 4, 5, 6], 6);

// magicSum([1, 2, 3, 4, 5, 6], 0);

function dungeonestDark(dungeonRooms) {
    let dungeonRoomsArr = dungeonRooms.toString().split("|");
    // string split by "|"
    let health = 100;
    let coins = 0;
    let bestRoom = 1;
    let isAlive = true;

    for (let i = 0; i < dungeonRoomsArr.length; i++) {
        let currentItem = dungeonRoomsArr[i].toString().split(" ");
        let itemMonster = currentItem[0];
        let num = Number(currentItem[1]);

        if (itemMonster === "potion") {
            let maxHealth = 100;
            let diff = maxHealth - health;
            if (diff < num) {
                num = diff;
            }
            health += num;

            console.log(`You healed for ${num} hp.`); // check if diff is smaller
            console.log(`Current health: ${health} hp.`);
        } else if (itemMonster === "chest") {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else {
            // monster attack
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${itemMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemMonster}.`);
                console.log(`Best room: ${bestRoom}`);
                isAlive = false;
                break;
            }
        }
        bestRoom += 1;
    }
    if (isAlive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

// dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");


function ladybugs(strArray = []) {
    let fieldSize = parseInt(strArray[0]); // is like length of array
    let ladybugIndexes = strArray[1].toString().split(' ');
    let field = new Int32Array(fieldSize);
    field = putLadybugsOnPos();
    let commands = strArray.slice(2);
    // field size
    // indexes of ladybugs inside
    let countCommands = 0;
    let index = -1;
    let totalCommands = commands.length;

    while (countCommands < totalCommands) {
        countCommands += 1;
        index += 1;
        let currentCommand = commands[index].toString().split(' ');
        let ladyBugIndex = parseInt(currentCommand[0]);
        let direction = currentCommand[1];
        let flyLength = parseInt(currentCommand[2]);

        if (isLadybugAtIndex(ladyBugIndex) === 0) {
            continue;
        }

        field[ladyBugIndex] = 0;

        if (direction === "right") {
            let landIndex = ladyBugIndex + flyLength;
            if (landIndex > field.length - 1) {
                continue;
            }
            if (isLadybugAtIndex(landIndex) === 1) {
                while (isLadybugAtIndex(landIndex) === 1) {
                    landIndex += flyLength;
                    if (landIndex > fieldSize - 1) {
                        break;
                    }
                }
            }
            if (landIndex >= 0 && landIndex <= field.length - 1) {
                field[landIndex] = 1;
            }
        } else if (direction === "left") {
            let landIndex = ladyBugIndex - flyLength;
            if (landIndex < 0) {
                continue;
            }

            if (isLadybugAtIndex(landIndex) === 1) {
                while (isLadybugAtIndex(landIndex) === 1) {
                    landIndex -= flyLength;
                    if (landIndex < 0) {
                        break;
                    }
                }
            }
            if (landIndex >= 0 && landIndex <= field.length - 1) {
                field[landIndex] = 1;
            }
        }

        function isLadybugAtIndex(index) {
            if (field[index] === 1) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    function putLadybugsOnPos() {
        for (let i = 0; i < ladybugIndexes.length; i++) {
            let currentIndex = ladybugIndexes[i];
            if (currentIndex >= 0 && currentIndex < fieldSize) {
                field[currentIndex] = 1;
            }
        }
        return field;
    }

    function printResult() {
        let output = "";
        for (let i = 0; i < field.length; i++) {
            output += field[i];
            if (i < field.length - 1) {
                output += " ";
            }
        }
        console.log(output);
    }
    printResult();
}
// ladybugs([3, '-1 0 1 3', '-1 left 4', '1 right -1']);

// ladybugs([ 3, '0 1', '0 right 1', '2 right 1']);
// ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// ladybugs([5, '3', '3 left 2', '1 left -2']);