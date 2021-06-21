function arrayModifier(input = []) {
    let integers = input.shift().split(' ').map(Number);
    let modified = integers.slice(0);

    while (input.length > 0) {
        let [command, ind1, ind2] = input.shift().split(' ');
        [ind1, ind2] = [Number(ind1), Number(ind2)];

        if (command === 'end') {
            break;
        }

        switch (command) {
            case 'swap':
                modified = swap(ind1, ind2);
                break;
            case 'multiply':
                modified = multiply(ind1, ind2);
                break;
            case 'decrease':
                modified = decrease();
                break;
        }
    }

    print();

    function print() {
        console.log(modified.join(', '));
    }

    function decrease() {
        modified = modified.map(x => x - 1);

        return modified;
    }

    function multiply(ind1, ind2) {
        let product = modified[ind1] * modified[ind2];
        modified[ind1] = product;

        return modified;
    }

    function swap(ind1, ind2) {
        let temp = modified[ind1];
        modified[ind1] = modified[ind2];
        modified[ind2] = temp;

        return modified;
    }
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);