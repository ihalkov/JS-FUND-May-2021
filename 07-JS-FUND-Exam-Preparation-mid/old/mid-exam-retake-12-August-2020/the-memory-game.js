function theMemoryGame(input = []) {
    let sequence = input.shift().split(' ');
    let numOfMoves = 0;

    let command = '';
    while (input.length > 0) {
        command = input.shift().split(' ');
        let currSeqLength = sequence.length;

        if (command[0] === 'end' || currSeqLength === 0) {
            break;
        }

        numOfMoves += 1;

        let [ind1, ind2] = [Number(command[0]), Number(command[1])];

        if (ind1 === ind2 || ind1 < 0 || ind1 >= currSeqLength
            || ind2 < 0 || ind2 >= currSeqLength) {
            console.log('Invalid input! Adding additional elements to the board');
            sequence = addAtMiddle(numOfMoves, currSeqLength);
            continue;
        }

        sequence = getCurrSequence(ind1, ind2);
    }

    print();

    function print() {
        if (sequence.length > 1) {
            console.log('Sorry you lose :(');
            console.log(`${sequence.join(' ')}`);
        } else {
            console.log(`You have won in ${numOfMoves} turns!`);
        }
    }

    function addAtMiddle(numOfMoves, currSeqLength) {
        let middle = currSeqLength / 2;
        let el = `-${numOfMoves}a`;
        sequence.splice(middle, 0, el, el);
        return sequence;
    }

    function getCurrSequence(ind1, ind2) {
        let el1 = sequence[ind1];
        let el2 = sequence[ind2];
        if (el1 === el2) {
            sequence = removeElements(el1, el2);
            console.log(`Congrats! You have found matching elements - ${el1}!`);
        } else {
            console.log('Try again!');
        }

        return sequence;

        function removeElements(el1, el2) {
            let indEl1 = sequence.indexOf(el1);
            sequence.splice(indEl1, 1);
            let indEl2 = sequence.indexOf(el2);
            sequence.splice(indEl2, 1);

            return sequence;
        }
    }
}

theMemoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);

theMemoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);

theMemoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]);