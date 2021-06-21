function movingTarget(input = []) {
    let targets = input.shift().split(' ').map(Number);
    let countOfTargets = targets.length;

    while (input.length > 0) {
        let [command, ind, value] = input.shift().split(' ');

        if (command === 'End') {
            break;
        }

        [ind, value] = [Number(ind), Number(value)];

        processCommands(command, ind, value);
    }

    print();

    function processCommands(command, ind, value) {
        switch (command) {
            case 'Shoot':
                targets = shoot(ind, value);
                break;
            case 'Add':
                targets = add(ind, value);
                break;
            case 'Strike':
                targets = strike(ind, value);
                break;
        }
    }

    function strike(ind, radius) {
        let begin = ind - radius;
        let end = ind + radius;
        let itemsToRemove = (2 * radius) + 1;

        if (begin >= 0 && end < countOfTargets) {
            targets.splice(begin, itemsToRemove);
        } else {
            console.log('Strike missed!');
        }

        return targets;
    }

    function add(ind, value) {
        if (ind < 0 || ind >= countOfTargets) {
            console.log('Invalid placement!');
        } else {
            targets.splice(ind, 0, value);
        }

        return targets;
    }

    function shoot(ind, power) {
        if (ind < 0 || ind >= countOfTargets) {
            return targets;
        }

        targets[ind] -= power;
        if (targets[ind] <= 0) {
            targets.splice(ind, 1);
        }

        return targets;
    }

    function print() {
        console.log(targets.join('|'));
    }
}

movingTarget([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
]);

movingTarget([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
]);