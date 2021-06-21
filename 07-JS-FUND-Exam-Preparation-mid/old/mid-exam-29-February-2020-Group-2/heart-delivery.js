function heartDelivery(input = []) {
    let neighborhood = input.shift().split('@').map(Number);
    let numOfHouses = neighborhood.length;

    let commands = input.slice(0);

    let houseIndex = 0;
    let hadValentine = 0;
    while (commands.length > 0) {
        let [cmd, jumpLength] = commands.shift().split(' ');

        if (cmd === 'Love!') {
            break;
        }

        houseIndex += Number(jumpLength);
        if (houseIndex >= numOfHouses) {
            houseIndex = 0;
        }

        neighborhood[houseIndex] = checkValentine(neighborhood[houseIndex]);
    }

    print(houseIndex);

    function print(houseIndex) {
        console.log(`Cupid's last position was ${houseIndex}.`);
        if (hadValentine === numOfHouses) {
            console.log('Mission was successful.');
        } else {
            let failed = numOfHouses - hadValentine;
            console.log(`Cupid has failed ${failed} places.`);
        }
    }

    function checkValentine(heartsNeeded) {
        if (heartsNeeded === 0) {
            console.log(`Place ${houseIndex} already had Valentine's day.`);
            return heartsNeeded;
        }

        heartsNeeded -= 2;
        if (heartsNeeded === 0) {
            hadValentine += 1;
            console.log(`Place ${houseIndex} has Valentine's day.`);
        }

        return heartsNeeded;
    }
}

heartDelivery([
    '10@10@10@2',
    'Jump 1',
    'Jump 2',
    'Love!'
]);

heartDelivery([
    '2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!'
]);