function piccolo(input = []) {
    let parking = new Set();
    for (const line of input) {
        let [command, plateNumber] = line.split(', ');
        if (command === 'IN') {
            parking.add(plateNumber);
            continue;
        }
        parking.delete(plateNumber);
    }

    if (parking.size === 0) {
        return 'Parking Lot is Empty';
    }

    let sortedCars = Array.from(parking).sort((a, b) => a.localeCompare(b));
    return sortedCars.join('\n');
}

// console.log(piccolo(
//     [
//         'IN, CA2844AA',
//         'IN, CA1234TA',
//         'OUT, CA2844AA',
//         'IN, CA9999TT',
//         'IN, CA2866HI',
//         'OUT, CA1234TA',
//         'IN, CA2844AA',
//         'OUT, CA2866HI',
//         'IN, CA9876HH',
//         'IN, CA2822UU'
//     ]
// ));
// console.log(piccolo(
//     [
//         'IN, CA2844AA',
//         'IN, CA1234TA',
//         'OUT, CA2844AA',
//         'OUT, CA1234TA'
//     ]
// ));