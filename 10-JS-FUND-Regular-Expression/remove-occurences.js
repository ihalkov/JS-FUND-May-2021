function removeOccurrences(word, str) {
    while (str.includes(word)) {
        str = str.replace(word, '');
    }
    return str;
}

// console.log(removeOccurrences(
//     'ice',
//     'kicegiciceeb'
// ));
// console.log(removeOccurrences(
//     'abc',
//     'tabctqw'
// ));
// console.log(removeOccurrences(
//     'key',
//     'keytextkey'
// ));
// console.log(removeOccurrences(
//     'word',
//     'wordawordbwordc'
// ));