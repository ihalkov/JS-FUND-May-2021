function cardGame(input = []) {
    let playersData = getPlayerData(input);
    let dataEntries = Object.entries(playersData);
    let players = {};
    for (const line of dataEntries) {
        let [name, dataSet] = [line[0], line[1]];
        let totalValue = getTotalValue(dataSet);
        players[name] = Number(totalValue);
    }

    let playersEntries = Object.entries(players);
    let output = [];
    for (const [name, value] of playersEntries) {
        output.push(`${name}: ${value}`);
    }
    return output.join('\n');

    function getPlayerData(input = []) {
        let obj = {};
        for (const line of input) {
            let [name, data] = line.split(': ');
            data = data.split(', ');

            if (!obj.hasOwnProperty(name)) {
                obj[name] = new Set();
            }
            data.forEach(item => obj[name].add(item));
        }
        return obj;
    }

    function getTotalValue(set) {
        let dataArr = Array.from(set);
        let power = {
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        };
        let type = {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        };

        let sum = 0;
        for (const line of dataArr) {
            let [p, t] = line.length === 3 ? [line.substring(0, 2), line.substring(2)] : line.split('');
            let currValue = Number(power[p]) * Number(type[t]);
            sum += currValue;
        }
        return sum;
    }
}

// console.log(cardGame(
//     [
//         'Peter: 2C, 4H, 9H, AS, QS',
//         'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//         'Andrea: QH, QC, QS, QD',
//         'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//         'Andrea: QH, QC, JS, JD, JC',
//         'Peter: JD, JD, JD, JD, JD, JD'
//     ]
// ));