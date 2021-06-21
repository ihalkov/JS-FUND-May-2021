function counterStrike(input = []) {
    let energy = Number(input.shift());
    let wons = 0;

    while (input.length > 0) {
        let command = input.shift();
        let distance = Number(command);

        if (command === 'End of battle') {
            return console.log(`Won battles: ${wons}. Energy left: ${energy}`);;
        } else if (distance > energy) {
            return console.log(`Not enough energy! Game ends with ${wons} won battles and ${energy} energy`);
        }
        
        energy -= distance;
        wons += 1;

        if (wons % 3 === 0) {
            energy += wons;
        }
    }
}


counterStrike([
    '100',
    '10',
    '10',
    '10',
    '1',
    '2',
    '3',
    '73',
    '10'
]);

counterStrike([
    '200',
    '54',
    '14',
    '28',
    '13',
    'End of battle'
]);