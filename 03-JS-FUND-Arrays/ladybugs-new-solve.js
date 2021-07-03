// position
// fly length

// command
// 0 right 1
// fly one index to right

// if there on upcoming index is a ladybug then the ladybug continues to fly
// with the same command

// if fly out of the field / arr then is gone

// if fly left and is ind < 0
// then is also gone

// first check for valid index, then check if there is ladybug on it
function ladybugs(input = []) {
    let fieldSize = Number(input[0]);
    let indexes = input[1].split(' ').map(Number);

    let initialField = putBugsInPosition(fieldSize, indexes);

    for (let i = 2; i < input.length; i++) {
        let line = input[i];
        initialField = moveBug(line, initialField);
    }
    return initialField.join(' ');

    function putBugsInPosition(fieldSize, indexes) {
        let arr = [];
        arr.length = fieldSize;
        arr.fill(0);

        for (let i = 0; i < fieldSize; i++) {
            // let currInd = indexes.shift();
            if (indexes.includes(i)) {
                arr[i] = 1;
            }
        }
        return arr;
    }

    function moveBug(line, initialField) {
        let [firstPosition, command, flyLength] = line.split(' ');
        firstPosition = Number(firstPosition);
        flyLength = Number(flyLength);

        // is bug position always with bug
        let isBug = initialField[firstPosition] === 1;
        if (!isBug) {
            return initialField;
        }

        initialField[firstPosition] = 0;

        let currPosition = firstPosition;
        while (currPosition >= 0 &&
            currPosition <= initialField.length - 1) {

            let obj = {
                'left': currPosition - flyLength,
                'right': currPosition + flyLength
            };
            currPosition = obj[command];
            if (initialField[currPosition] === 0) {
                initialField[currPosition] = 1;
                break;
            }
        }
        return initialField;
    }
}

// console.log(ladybugs(
//     [
//         3,
//         '0 1',
//         '0 right 1',
//         '2 right 1'
//     ]
// ));
// console.log(ladybugs(
//     [
//         3,
//         '0 1 2',
//         '0 right 1',
//         '1 right 1',
//         '2 right 1'
//     ]
// ));
// console.log(ladybugs(
//     [
//         5,
//         '3',
//         '3 left 2',
//         '1 left -2'
//     ]
// ));