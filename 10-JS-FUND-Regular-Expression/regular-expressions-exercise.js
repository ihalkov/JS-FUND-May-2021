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

function race(input = []) {
    let participants = input.shift().split(', ');
    let storeInfo = {};
    for (const line of input) {
        let name = getName(line);
        if (participants.includes(name)) {
            let distance = getDistance(line);
            storeInfo = recordData(storeInfo, name, distance);
        }
    }
    let sortedDistance = Object.entries(storeInfo).sort((a, b) => b[1] - a[1]);
    return getResult(sortedDistance);

    function getResult(entries) {
        let output = [];
        output.push(`1st place: ${entries[0][0]}`);
        output.push(`2nd place: ${entries[1][0]}`);
        output.push(`3rd place: ${entries[2][0]}`);

        return output.join('\n');
    }

    function recordData(obj, name, dist) {
        if (!obj.hasOwnProperty(name)) {
            storeInfo[name] = dist;
        } else {
            storeInfo[name] += dist;
        }
        return obj;
    }

    function getName(str) {
        let pattern = /([A-Z]|[a-z])/g;
        let result = str.match(pattern);
        return result.join('');
    }

    function getDistance(str) {
        let pattern = /[0-9]/g;
        let result = str.match(pattern);
        return result.map(x => Number(x)).reduce((acc, curr) => acc + curr);
    }
}

// console.log(race(
//     [
//         'George, Peter, Bill, Tom',
//         'G4e@55or%6g6!68e!!@',
//         'R1@!3a$y4456@',
//         'B5@i@#123ll',
//         'G@e54o$r6ge#',
//         '7P%et^#e5346r',
//         'T$o553m&6',
//         'end of race'
//     ]
// ));

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