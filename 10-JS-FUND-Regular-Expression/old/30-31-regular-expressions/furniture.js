function furniture(input = []) {
    let store = [];
    let totalCost = 0;
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>(?:\d+\.)?\d+)!(?<quantity>\d+)/;
    let output = [];
    let currMatch;

    for (const currStr of input) {
        if (currStr === 'Purchase') {
            break;
        }
        currMatch = currStr.match(pattern);
        if (currMatch === null) {
            continue;
        }

        let name = currMatch.groups['name'];
        let price = currMatch.groups['price'];
        let quantity = currMatch.groups['quantity'];
        store.push(name);
        totalCost += Number(price) * Number(quantity);
    }
    output.push('Bought furniture:');
    if (store.length > 0) {
        output.push(...store);
    }
    output.push(`Total money spend: ${totalCost.toFixed(2)}`);
    return output.join('\n');
}

console.log(furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]));



// console.log(furniture(['>>Sofa<<312.23!3',
//    '>>TV<<300!5',
//    '>Invalid<<!5',
//    '>>PS4<<306!8',
//    'Purchase'
// ]));

// console.log(furniture([
//    'Purchase'
// ]));