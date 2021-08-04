function modernTimesOfHashTag(str = '') {
    function isValid(word) {
        word = word.toLowerCase().slice(1);
        for (const ch of word) {
            if (ch.charCodeAt(0) < 97 || ch.charCodeAt(0) > 122) {
                return false;
            }

        }

        return true;
    };

    let words = str.split(' ');
    let output = [];
    for (const word of words) {
        // 97 to 122
        if (word.startsWith('#') && word.length > 1) {
            // let lowercaseWord = word.toLowerCase().slice(1);

            if (isValid(word)) {
                output.push(word.slice(1));
            }
        }
    }

    return output.join('\n');
}

console.log(
    modernTimesOfHashTag(
        'Nowadays everyone uses # to tag a #spec/ial word in #socialMedia'
    )
);