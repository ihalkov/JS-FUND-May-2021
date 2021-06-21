function thePianist(input = []) {
    let n = Number(input.shift());
    let pieces = input.splice(0, n);

    while (input.length > 0) {
        let [command, piece, val1, val2] = input.shift().split('|');

        if (command === 'Stop') {
            break;
        }

        pieces = processCommands(command, piece, val1, val2);
    }

    let sorted = sortPieces(pieces);
    print(sorted);

    function processCommands(command, piece, val1, val2) {
        switch (command) {
            case 'Add':
                pieces = add(piece, val1, val2);
                break;
            case 'Remove':
                pieces = remove(piece);
                break;
            case 'ChangeKey':
                pieces = changeKey(piece, val1);
                break;
        }

        return pieces;
    }

    function changeKey(piece, newKey) {
        let [havePiece, ind] = inCollection(piece);
        let output = `Invalid operation! ${piece} does not exist in the collection.`;

        if (havePiece) {
            let [piece, composer] = pieces[ind].split('|');
            output = `Changed the key of ${piece} to ${newKey}!`;

            let updatedPiece = `${piece}|${composer}|${newKey}`;
            pieces.splice(ind, 1, updatedPiece);
        }

        console.log(output);
        return pieces;
    }

    function remove(piece) {
        let [havePiece, ind] = inCollection(piece);
        let output = `Invalid operation! ${piece} does not exist in the collection.`;

        if (havePiece) {
            output = `Successfully removed ${piece}!`;
            pieces.splice(ind, 1);
        }

        console.log(output);
        return pieces;
    }

    function add(piece, composer, key) {
        let [havePiece, ind] = inCollection(piece);
        let output = `${piece} is already in the collection!`;

        if (!havePiece) {
            output = `${piece} by ${composer} in ${key} added to the collection!`;
            pieces.push(`${piece}|${composer}|${key}`);
        }

        console.log(output);
        return pieces;
    }

    function inCollection(piece) {
        let isTrue = false;
        let ind = 0;
        for (ind in pieces) {
            let p = pieces[ind].split('|');
            if (p[0] === piece) {
                isTrue = true;
                break;
            }
        }

        return [isTrue, Number(ind)];
    }

    function print(sorted) {
        for (const arr of sorted) {
            let [piece, composer, key] = arr;
            console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
        }
    }

    function sortPieces(pieces) {
        let sorted = pieces.map(x => {
            let [piece, composer, key] = x.split('|');
            return [piece, composer, key];
        });

        sorted = sorted.sort((a, b) => {
            if (a[0].localeCompare(b[0]) === 0) {
                return a[1].localeCompare(b[1]);
            }

            return a[0].localeCompare(b[0]);
        });
        return sorted;
    }
}


thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);