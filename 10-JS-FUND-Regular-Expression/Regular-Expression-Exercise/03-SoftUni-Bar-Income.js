function softUniBarIncome(input = []) {
    let pattern = /%(?<customerName>[A-Z][a-z]+)%[^\|\$%\.]*<(?<product>\w+)>[^\|\$%\.]*\|(?<count>[0-9]+)\|[^\|\$%\.0-9]*(?<price>[0-9]+(\.[0-9]+)?)\$/;
    let totalIncome = 0;
    let output = [];

    for (const line of input) {
        if (line === 'end of shift') {
            break;
        }
        let curr = line.match(pattern);
        if (curr !== null) {
            let [customerName, product, count, price] = [curr.groups.customerName, curr.groups.product, curr.groups.count, curr.groups.price];
            let totalProductPrice = Number(count) * Number(price);
            totalIncome += totalProductPrice;
            output.push(`${customerName}: ${product} - ${totalProductPrice.toFixed(2)}`);
        }
    }
    output.push(`Total income: ${totalIncome.toFixed(2)}`);
    return output.join('\n');
}

// console.log(softUniBarIncome(
//     [
//         '%George%<Croissant>|2|10.3$',
//         '%Peter%<Gum>|1|1.3$',
//         '%Maria%<Cola>|1|2.4$',
//         'end of shift'
//     ]
// ));
// console.log(softUniBarIncome(
//     [
//         '%InvalidName%<Croissant>|2|10.3$',
//         '%Peter%<Gum>1.3$',
//         '%Maria%<Cola>|1|2.4',
//         '%Valid%<Valid>valid|10|valid20$',
//         'end of shift'
//     ]
// ));