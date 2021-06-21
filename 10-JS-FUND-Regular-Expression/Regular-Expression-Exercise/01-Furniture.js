function furniture(input = []) {
    let boughtFurniture = [];
    let moneySpend = 0;

    let pattern = />>(?<furnitureName>\w+)<<(?<price>[0-9]+(\.{1}[0-9]+)?)!(?<quantity>[0-9]+)/;
    for (const line of input) {
        let isValid = line.match(pattern);
        if (isValid !== null) {
            let name = isValid.groups.furnitureName;
            let price = Number(isValid.groups.price);
            let quantity = Number(isValid.groups.quantity);

            boughtFurniture.push(name);
            moneySpend += price * quantity;
        }
    }
    return getOutput(boughtFurniture, moneySpend);

    function getOutput(boughtFurniture, moneySpend) {
        let output = [];
        output.push('Bought furniture:')
        if (boughtFurniture.length > 0) {
            output.push(boughtFurniture.join('\n'));
        }
        output.push(`Total money spend: ${moneySpend.toFixed(2)}`);
        return output.join('\n');
    }
}

// console.log(furniture(
//     [
//         '>>Sofa<<312.23!3',
//         '>>TV<<300!5',
//         '>Invalid<<!5',
//         'Purchase'
//     ]
// ));