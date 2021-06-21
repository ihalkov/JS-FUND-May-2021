function matchFullName(names = '') {
    // names = names.toString();
    // two words
    // ([A-Z]{1}\[a-z]+){2, } Capital{1}\[a-z]+
    // regex = /\b([A-Z]{1}[a-z]{2,} [A-Z]{1}[a-z]{2,})\b/gm
    // Note: You should put "/" before and after the pattern so that it is interpreted as a RegEx pattern. Also, place the 'g' (global) flag after it, so that you get all the matches in the text.
    // exec()
    let pattern = /\b([A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,})\b/g;

    let validNames;
    validNames = names.match(pattern);

    // // current is different from null
    // while ((validName = pattern.exec(names)) !== null) {
    //     validNames.push(validName[0]);
    // }
    return validNames.join(' ');
}

// console.log(matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov'));
// Ivan Ivanov


function matchPhoneNumber(numbers = '') {
    numbers = numbers.toString();
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let result = numbers.match(pattern);
    return result.join(', ');
}

// console.log(matchPhoneNumber('+359 2 222 2222 +359-2-222-2222'));

function matchDates(dates) {
    // 0 group match the whole
    // 1st group match the <day>
    // 2nd group match the separator
    // 3rd group match the <month>
    // 4th group match the <year>

    let pattern = /\b(?<day>\d{2})([(\/\-\.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let output = [];
    let validDate; // is array
    // exec return the first match, but also remember where was the last position, so can be used for the next, match
    while ((validDate = pattern.exec(dates)) !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        output.push(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
    return output.join('\n');
}

// console.log(matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"));
// 13/Jul/1928, 10-Nov-1934, 25.Dec.1937	01/Jan-1951, 23/sept/1973, 1/Feb/2016

function removeOccurrences(word = '', text = '') {
    while (text.includes(word)) {
        text = text.replace(word, '');
    }
    return text;
}

// removeOccurrences('ice', 'kicegiciceeb');