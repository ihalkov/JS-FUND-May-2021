function shootForTheWin(input = []) {
    let targets = input.shift().split(' ').map(Number);
    let countOfTargets = targets.length;
    let countHits = 0;

    while (input.length > 0) {
        let curr = input.shift();
        let ind = Number(curr);

        if (curr === 'End') {
            break;
        }

        let targetValue = targets[ind];
        if (targetValue === -1 || ind >= countOfTargets) {
            continue;
        }

        targets[ind] = -1;
        countHits += 1;

        targets = targets.map(x => {
            if (x === -1) {
                return -1;
            } else if (x > targetValue) {
                return x -= targetValue;
            } else if (x <= targetValue) {
                return x += targetValue;
            }
        });
    }

    print();

    function print() {
        console.log(`Shot targets: ${countHits} -> ${targets.join(' ')}`);
    }

}

// shootForTheWin([
//     '24 50 36 70',
//     '0',
//     '4',
//     '3',
//     '1',
//     'End'
// ]);

// shootForTheWin([
//     '30 30 12 60 54 66',
//     '5',
//     '2',
//     '4',
//     '0',
//     'End'
// ]);