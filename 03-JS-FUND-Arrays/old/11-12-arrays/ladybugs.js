function ladybugs(input) {
    let fieldSize = input[0];
    let indexes = input[1].toString().split(' ');
    let commandsArr = input.slice(2);

    let startIndexes = [];
    startIndexes = indexesToNumber(indexes);

    let startPos = getStartPos(startIndexes);

    let count = 0;
    let totalCommands = commandsArr.length;

    while (count < totalCommands) {
        let currentCommand = commandsArr[count].toString().split(' ');
        let index = Number(currentCommand[0]);
        let direction = currentCommand[1];
        let flyLength = Number(currentCommand[2]);

        if (index >= 0 && index < startPos.length) {
            let start = startPos[index];
            startPos[index] = 0;
            if (start === 1) {
                if (direction === "left") {
                    flyLength = -flyLength;
                }
                for (let i = index + flyLength; i < fieldSize && i >= 0; i += flyLength) {
                    if (startPos[i] === 1) {
                        continue;
                    } else {
                        startPos[i] = 1;
                        break;
                    }
                }
            }
        }
        count += 1;
    }

    let output = "";
    for (const pos of startPos) {
        output += pos + " ";
    }

    console.log(output);

    function getStartPos(arrIndexes = []) {
        // array with given size filled with zeroes
        let newArr = new Array(fieldSize).fill(0);

        for (let i = 0; i < fieldSize; i++) {
            for (let j = 0; j < arrIndexes.length; j++) {
                if (i === arrIndexes[j]) {
                    newArr[i] = 1;
                    continue;
                }
            }
        }
        return newArr;
    }
    function indexesToNumber(arr = []) {
        // arr = arr.toString().split(' ');
        let arrToNum = [];
        for (let c = 0; c < arr.length; c++) {
            arrToNum.push(Number(arr[c]));
        }
        return arrToNum;
    }
}


// ladybugs([5, '3', '8 left 2', '1 left -2']);
// ladybugs([3, '0 1', '0 right 1', '2 right 1']);
// ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
// ladybugs([5, '3', '3 left 2', '1 left -2']);