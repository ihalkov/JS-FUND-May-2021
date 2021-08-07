function serializeString([str = '']) {
    let journal = {};

    for (const ind in str) {
        let ch = str[ind];
        // if not journal with this ind,
            // create new arr and put the ind in the arr with given key
        journal[ch] = (journal[ch] || []).concat(ind);
    }
    let entries = Object.entries(journal);

    let output = [];
    for (const [ch, value] of entries) {
        output.push(`${ch}:${value.join('/')}`);
    }
    return output.join('\n');
}

console.log(serializeString(
    ['abababa']
));
