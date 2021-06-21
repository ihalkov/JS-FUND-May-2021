// regex describe a search pattern
// used to find / extract / replace / split data from text by pattern

// validating string by pattern
// the method test(string, text)
// regex.test(text)

// check for matches
// method match(regex)
// text.match(regex)
// returns an array of all matches (strings)

// using the exec() method
// exec(string, text)
// works with a pointer & returns the groups

// replace(regex, stringReplacement)
// replaces all the strings that match the pattern with the provided replacement

while ((validName = pattern.exec(input)) !== null) {
    validNames.push(validName[0]);
}


// matchAll(regexp)
// returns an iterator of all results matching a string agains a regular expressin, including capturing groups

const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]

// split(regex)

