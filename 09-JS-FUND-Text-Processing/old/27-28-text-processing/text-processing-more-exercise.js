function valueOfAString([str, check]) {
    let sum = 0;

    for (const ch of str) {
        let chCode = ch.charCodeAt(0);
        if (check === 'UPPERCASE' && (chCode >= 65 && chCode <= 90)) {
            sum += chCode;
            continue;
        } else if (check === 'LOWERCASE' && (chCode >= 97 && chCode <= 122)) {
            sum += chCode;
        }
    }
    return `The total sum is: ${sum}`;
}

// console.log(valueOfAString(
//     ['HelloFromMyAwesomePROGRAM',
//     'LOWERCASE']
// ));
// console.log(valueOfAString(
//     ['AC/DC',
//     'UPPERCASE']
// ));

function serializeString([str = '']) {
    let journal = {};

    for (const ind in str) {
        let ch = str[ind];
        // if not journal with this ind, create new arr and put the ind in the arr with given key
        journal[ch] = (journal[ch] || []).concat(ind);
    }
    let entries = Object.entries(journal);

    let output = [];
    for (const [ch, value] of entries) {
        output.push(`${ch}:${value.join('/')}`);
    }
    return output.join('\n');
}

// console.log(serializeString(
//     ['abababa']
// ));

// console.log(serializeString(
//     ['avjavamsdmcalsdm']
// ));

function deserializeString(input = []) {
    let result = [];
    for (const line of input) {
        if (line === 'end') {
            break;
        }

        let [ch, indexes] = line.split(':');
        indexes = indexes.split('/');
        result = fillIndexes(ch, indexes, result);
    }

    return result.join('');

    function fillIndexes(ch, indexes, update) {
        let arr = update.slice(0);
        for (const ind of indexes) {
            arr[ind] = ch;
        }
        return arr;
    }
}

// console.log(deserializeString([
// 'a:0/2/4/6',
// 'b:1/3/5',
// 'end'
// ]));
// console.log(deserializeString([
// 'a:0/3/5/11',
// 'v:1/4',
// 'j:2',
// 'm:6/9/15',
// 's:7/13',
// 'd:8/14',
// 'c:10',
// 'l:12',
// 'end'
// ]));

function asciiSumator([ch1, ch2, randomStr]) {
    let sum = 0;
    let begin = ch1.charCodeAt(0);
    let end = ch2.charCodeAt(0);
    if (begin > end) {
        let temp = begin;
        begin = end;
        end = temp;
    }

    for (const currCh of randomStr) {
        let chCode = currCh.charCodeAt(0);

        if (chCode > begin && chCode < end) {
            sum += chCode;
        }
    }
    return sum;
}

// console.log(asciiSumator([
//     '.',
//     '@',
//     'dsg12gr5653feee5'
// ]));

// console.log(asciiSumator([
//     '?',
//     'E',
//     '@ABCEF'
// ]));

// console.log(asciiSumator([
//     'a',
//     '1',
//     'jfe392$#@j24ui9ne#@$'
// ]));

function treasureFinder(input = []) {
    let numbers = input.shift().split(' ').map(Number);
    let output = [];

    for (const line of input) {
        if (line === 'find') {
            break;
        }

        let decryptedLine = decryptLine(line, numbers);
        let [type, coords] = getTreasure(decryptedLine);
        output.push(`Found ${type} at ${coords}`);
    }
    return output.join('\n');


    function getTreasure(str = '') {
        let type = getType(str);
        let coords = getCoords(str);

        return [type, coords];

        function getType(str) {
            let ind1 = str.indexOf('&');
            let ind2 = str.indexOf('&', ++ind1);
            let type = str.slice(ind1, ind2);
            return type;
        }

        function getCoords(str) {
            let ind1 = str.indexOf('<');
            let ind2 = str.indexOf('>');
            let coords = str.slice(++ind1, ind2);
            return coords;
        }
    }

    function decryptLine(str = '', seqOfNumbers = []) {
        let decrypted = '';
        let seqLength = seqOfNumbers.length;

        for (const ind in str) {
            let ch = str[ind];
            let chCode = ch.charCodeAt(0);
            // index of the number in seq
            let numInd = ind % seqLength;
            let newChCode = chCode - seqOfNumbers[numInd];
            decrypted += String.fromCharCode(newChCode);
        }
        return decrypted;
    }
}

// console.log(treasureFinder([
//     "1 2 1 3",
//     "ikegfp'jpne)bv=41P83X@",
//     "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
//     "find"
// ]));

function melrahShake([str = '', pattern = '']) {
    // 'shake off', remove first and last match of the pattern you find in the string
    let firstInd = str.indexOf(pattern);
    let lastInd = str.lastIndexOf(pattern);
    let output = [];

    while (pattern.length > 0 && firstInd >= 0 && lastInd >= 0 && firstInd !== lastInd) {
        str = updateString(str, lastInd, pattern);
        pattern = updatePattern(pattern);
        output.push('Shaked it.');

        // update indexes
        firstInd = str.indexOf(pattern);
        lastInd = str.lastIndexOf(pattern);
    }

    // if (str.length > 0) {
    if (str.length > 0 || pattern.length === 0) {
        output.push('No shake.');
        output.push(str);
    }
    return output.join('\n');

    function updateString(str, lastInd, pattern) {
        let p1 = str.slice(0, lastInd);
        let p2 = str.slice(lastInd);
        p1 = p1.replace(pattern, '');
        p2 = p2.replace(pattern, '');
        str = p1 + p2;
        return str;
    }

    function updatePattern(pattern = '') {
        let ind = pattern.length / 2;
        let [p1, p2] = [pattern.slice(0, ind), pattern.slice(++ind)];
        return p1 + p2;
    }
}

// console.log(melrahShake([
//     'astaa baby',
//     'sta'
// ]));

// console.log(melrahShake([
//     'astalavista baby',
//     'sta'
// ]));

// console.log(melrahShake([
//     '##mtm!!mm.mm*mtm.#',
//     'mtm'
// ]));

// console.log(melrahShake([
//     'stastasasssastasta', 'sta'
// ]));

// 'sta sas ssa sta', 'sa'
