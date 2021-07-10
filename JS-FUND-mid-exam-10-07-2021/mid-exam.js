function rearrangeNumbersSequenceProblem2(input = []) {
    let numbers = input.shift().split(' ').map(Number);
    for (const line of input) {
        if (line === 'Finish') {
            break;
        }
        let data = line.split(' ');
        let command = data[0];
        let value = Number(data[1]);
        let obj = {
            'Add': (numbers, value) => {
                numbers.push(value);
                return numbers;
            },
            'Remove': (numbers, value) => {
                if ((ind = numbers.indexOf(value)) !== -1) {
                    numbers.splice(ind, 1);
                }
                return numbers;
            },
            'Replace': (numbers, value) => {
                if ((ind = numbers.indexOf(value)) !== -1) {
                    let replacement = Number(data[2]);
                    numbers.splice(ind, 1, replacement);
                }
                return numbers;
            },
            'Collapse': (numbers, value) => {
                let result = numbers.filter(x => x >= value);
                return result;
            },
        }
        numbers = obj[command](numbers, value);
    }
    return numbers.join(' ');
}

// console.log(rearrangeNumbersSequenceProblem2(
//     [ '1 4 5 19', 'Add 1', 'Remove 4', 'Finish' ]
// ));
// console.log(rearrangeNumbersSequenceProblem2(
//     [ '1 20 -1 10', 'Collapse 8', 'Finish' ]
// ));
// console.log(rearrangeNumbersSequenceProblem2(
//     [ '5 9 70 -56 9 9', 'Replace 9 10', 'Remove 9', 'Finish' ]
// ));

function catProblem3(arg1, arg2, arg3) {
    // let priceRatings = input[0];
    let priceRatings = arg1;
    let itemsCount = priceRatings.length;
    let entryPoint = Number(arg2);
    // let entryPoint = Number(input[1]);
    let typeOfItems = arg3;
    // let typeOfItems = input[2];

    let ratingEntry = priceRatings[entryPoint];
    let leftSum = getSum(priceRatings, 0, entryPoint, ratingEntry, typeOfItems);
    let rightSum = getSum(priceRatings, entryPoint + 1, itemsCount, ratingEntry, typeOfItems);

    if (rightSum > leftSum) {
        return `Right - ${rightSum}`;
    }
    return `Left - ${leftSum}`;

    function getSum(arr, start, end, ratingEntry, typeOfItems) {
        let sum = 0;
        arr = arr.slice(start, end);

        if (typeOfItems === 'cheap') {
            arr = arr.filter(x => x < ratingEntry);
        } else if (typeOfItems === 'expensive') {
            arr = arr.filter(x => x >= ratingEntry);
        }
        sum = arr.reduce((acc, curr) => acc + curr);
        return sum;
    }
}

// console.log(catProblem3(
//         [1, 5, 1],
//         '1',
//         'cheap'
// ));
// console.log(catProblem3(
//         [-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
//         '7',
//         'expensive'
// ));

function battlesProblem1(input = []) {
    input = input.map(Number);
    let experienceNeeded = input.shift();
    let countOfBattles = input.shift();
    let totalExperience = 0;
    let battles = 0;

    for (let i = 0; i < countOfBattles; i++) {
        let currExperience = input[i];
        battles += 1;
        if (battles % 15 === 0) {
            currExperience *= 1.05;
        } else if (battles % 5 === 0) {
            currExperience *= 0.9;
        } else if (battles % 3 === 0) {
            currExperience *= 1.15;
        }
        totalExperience += currExperience;
        if (totalExperience >= experienceNeeded) {
            return `Player successfully collected his needed experience for ${battles} battles.`
        }
    }
    let diff = experienceNeeded - totalExperience;
    return `Player was not able to collect the needed experience, ${diff.toFixed(2)} more needed.`;
}

// console.log(battlesProblem1(
//     [
//         500, 5, 50, 100, 200, 100, 30
//     ]
// ));
// console.log(battlesProblem1(
//     [
//         500, 5, 50, 100, 200, 100, 20
//     ]
// ));
// console.log(battlesProblem1(
//     [
//         400, 5, 50, 100, 200, 100, 20
//     ]
// ));