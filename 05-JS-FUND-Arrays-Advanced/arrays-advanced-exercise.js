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