function inventory(input = []) {
    let data = {};
    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items.split(', ');
        items.sort((a, b) => a.localeCompare(b));
        data[level] = {
            name: name,
            items: items
        };
    }
    return getOutput(data);

    function getOutput(obj = {}) {
        let output = [];
        let levels = Object.keys(obj);
        levels.sort((a, b) => a - b);

        for (const lvl of levels) {
            let key = obj[lvl];
            output.push(`Hero: ${key.name}`);
            output.push(`level => ${lvl}`);
            output.push(`items => ${key.items.join(', ')}`);
        }
        return output.join('\n');
    }
}

// console.log(inventory(
//     [
//         "Isacc / 25 / Apple, GravityGun",
//         "Derek / 12 / BarrelVest, DestructionSword",
//         "Hes / 1 / Desolator, Sentinel, Antara"
//     ]
// ));