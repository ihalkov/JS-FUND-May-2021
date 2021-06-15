function modernTimesOfHashTag(str = '') {
    let arr = str.split(' ');
    let validWords = [];
    arr.forEach(w => {
        if (w.includes('#') && isWord(w) && w.length > 1) {
            validWords.push(w.substring(1));
        }
    });
    return validWords.join('\n');

    // 97 to 122 lowercase
    function isWord(word) {
        word = word.toLowerCase();
        // start from ind 1, because 0 index should start with #
        for (let i = 1; i < word.length; i++) {
            let ch = word[i];
            if (ch < 97 || ch > 122) {
                return false;
            }
        }
        return true;
    }
}

// console.log(modernTimesOfHashTag(
//     'Nowadays everyone uses # to tag a #special word in #socialMedia'
// ));