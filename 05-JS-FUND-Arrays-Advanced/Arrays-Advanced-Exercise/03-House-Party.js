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