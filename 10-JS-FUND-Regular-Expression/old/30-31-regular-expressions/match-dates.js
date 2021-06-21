function matchDates(dates = '') {
    dates = dates.toString();
    // 0 group match the whole
    // 1st group match the <day>
    // 2nd group match the separator
    // 3rd group match the <month>
    // 4th group match the <year>

    let pattern = /\b(?<day>\d{2})([(\/\-\.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let output = [];
    let validDate; // is array
    // If the regular expression does not include the g flag, str.match() will return the same result as RegExp.exec().
    // exec return the first match, but also remember where was the last position, so can be used for the next, match
    // while ((validDate = dates.match(pattern)) !== null) {
    //     let day = validDate.groups['day'];
    //     let month = validDate.groups['month'];
    //     let year = validDate.groups['year'];
    //     output.push(`Day: ${day}, Month: ${month}, Year: ${year}`);
    // }
    // return output.join('\n');

    let result = dates.match(pattern);
    return result.groups.day;
}

console.log(matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"));
// 13/Jul/1928, 10-Nov-1934, 25.Dec.1937	01/Jan-1951, 23/sept/1973, 1/Feb/2016
