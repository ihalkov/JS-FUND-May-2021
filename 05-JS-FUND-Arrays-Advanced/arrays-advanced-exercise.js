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
    
}

console.log(distinctArray([1, 2, 3, 4]));
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));
console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));