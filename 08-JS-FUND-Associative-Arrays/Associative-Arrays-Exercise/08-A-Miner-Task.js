function aMinerTask(input = []) {
    let stock = {};
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let qty = Number(input[i + 1]);

        if (!stock.hasOwnProperty(resource)) {
            stock[resource] = 0;
        }
        stock[resource] += qty;
    }

    let entries = Object.entries(stock).map(x => `${x[0]} -> ${x[1]}`);
    return entries.join('\n');
}

// console.log(aMinerTask(
//     [
//         'Gold',
//         '155',
//         'Silver',
//         '10',
//         'Copper',
//         '17'
//     ]
// ));
// console.log(aMinerTask(
//     [
//         'gold',
//         '155',
//         'silver',
//         '10',
//         'copper',
//         '17',
//         'gold',
//         '15'
//     ]
// ));