function theImitationGame(input = []) {
    let message = input.shift();

    while (input.length > 0) {
        let command = input.shift();
        if (command === 'Decode') {
            break;
        }

        let [instruction, val1, val2] = command.split('|');

        switch (instruction) {
            case 'Move':
                message = move(message, val1);
                break;
            case 'Insert':
                message = insert(message, val1, val2);
                break;
            case 'ChangeAll':
                message = changeAll(message, val1, val2);
                break;
        }
    }

    print(message);

    function changeAll(msg = '', substr, replace) {
        let message = msg;
        message = message.split('').map(ch => {
            if (ch === substr) {
                ch = replace;
            }

            return ch;
        }).join('');

        return message;
    }

    function insert(msg = '', ind = 0, val2) {
        let message = msg;
        let [p1, p2] = strOnTwoParts(message, ind);
        message = p1 + val2 + p2;

        return message;
    }

    function move(msg = '', val1) {
        let ind = Number(val1);
        let message = msg;

        let [p1, p2] = strOnTwoParts(message, ind);
        message = p2 + p1;

        return message;
    }

    function strOnTwoParts(message, midPoint = 0) {
        let p1 = message.slice(0, midPoint);
        let p2 = message.slice(midPoint);

        return [p1, p2];
    }

    function print(msg) {
        console.log(`The decrypted message is: ${msg}`);
    }
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);