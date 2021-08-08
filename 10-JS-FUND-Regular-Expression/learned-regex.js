// Regular Expressions (RegEx)
    // Regular Expressions Language Syntax
    // string editing is very important for programmers
    // last time we used the string methods
    // string operations with regex

    // 1. Regular Expressions Syntax
        // Definition and Pattern
            // has own syntax
        // Predefined Character Classes
    // 2. Quantifiers and Grouping
    // 3. Backreferences
    // 4. Regular Expressions in JS

    // Regular Expressions
        // Definition and Classes
        // pros and cons

        // What are regular expressions?
            // Regular expressions (regex)
            // Match text by pattern
        // Patterns are defined by special syntax, e.g.
            // [0-9]+ matches non-empty sequence of digits
            // [A-Z][a-z]* matches a capital + small letters
        // regexr.com
        // regex101.com

    // Pros
        // very easy finding substrings in strings
        // vim in Linux, can increase performance with regex
        // very often is used for validation
        // rarely used
        // fast alternative is to write it ourselves

    // Cons
        // slow performance
        // its not easy readable
        // hard to edit and find mistakes

// comments have to be used when you have not understandable code
        

// just letters
// what we write will match it
// will find every match
// direct match (a, b, by, ' is', 'is')

// Expression Pattern Example
    // [ai] - matches any character of these in parentheses,
        // find me all occurrences of a and i
    // ai - is finding exactly ai occurrence

// Range (I search for one letter in this range)
    // [aueio] - every one separately, 
    // [1234567890]
    // [0-9] - range of letters 0 to 9
    // [0-2] - from 0 to 2
    // [0-9]b - any digit and after it b '3b'
    // [a-z] - from a to z lowercase
    // [a-z][0-9] - give me from 'a' to 'z' and after from '0' to '9'
    // ranges matches only single character
    // [a-zA-Z0-9] - matches letters and numbers
    // [0-37-9] - matches
    // b[1-9]
    // [0-9][0-9] - combination of two digits
    // [a-d0-4] - from a to d and from 0 to 4
    // [^0-9] - ^ (carrot sign) means (not), match everything which is different
    // [^abc] - is case sensitive
    // [а-яА-Я] - Иван [А-я]
    // [a-z0-9] - lowercase letter or digit (one letter)
    // [a-z][0-9] - letter + digit (combination letter and digit)

// Predefined Classes (escape character '\')
    // \w - matches any word character (a-z, A-Z, 0-9, _) [a-zA-Z0-9_]
    // \W - matches any non-word character (opposite of \w) [^a-zA-Z0-9_] (symbols, space)

    // \s - matches any white-space character [     ]
    // \S - matches any non-white-space character (opposite of \s)

    // \d - matches any decimal digit (0-9)
    // \D - matches any non-digit decimal character (the opposite of \d)

    // \wu - 
    // \d\d - match two digits

// Quantifiers (\w+)
    // \d+ (matches previous element one or more times)
    // '*' (match previous element 0 or more times)
    // Pesho\d*
        // Pesho3
        // Pesho6
        // Pesho

    // '?' (match 0 or 1 element)
    // {3} (matches the previous element exactly 3 times)
    // \d{2,4} (custom range) from 2 to 4, if found 4 gives 4 and so on

// Grouping
    // (subexpression) - captures the matched subexpression as numbered group
        // \d{2}-(\w{3})-\d{4}
            // 22-Jan-2015
        // (?:subexpression) - defines a non-capturing group
        // ?: non capturing
        // ha+ (ha, ha ha, ha ha ha, haaaaaaa)
        // (ha)+ (match ha, haha, hahahahahahaha)
            // exactly this combination one or more times
        // ()

// To prevent capturing of letters across new lines,
    // put "\b" at the beginning and at the end of your regex. 

// Note: You should put "/" before and after the pattern
    // so that it is interpreted as a RegEx pattern.
    // Also, place the 'g' (global) flag after it,
    // so that you get all the matches in the text.

// The exec() method executes a search for a match in a specified string.
    // Returns a result array, or null.
const regex1 = RegExp('foo*', 'g');
const str1 = 'table football, foosball';
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
    console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
    // expected output: "Found foo. Next starts at 9."
    // expected output: "Found foo. Next starts at 19."
}

// match() method
    // The match() method searches a string for a match against a regex,
        // and returns the matches, as an Array object.
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

let text = 'Lorem Pesho ipsum dolor pesho@abv.bg sit amet@gmail.com, ' +
    'consectetur adipisicing elit. Pesho Eligendi non quis exercitationem ' +
    'culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab ' + 
    'temporibus asperiores quasi cupiditate. ' + 
    'Voluptatum ducimus voluptates voluptas?';

// without global returns more info about the group
let pattern = /(?<username>\w+)@\w+\.\w+/g;

// over given string we have match method and give it RegExp
    // or RegExp given as a string
// without global method gives the first result
    // match is good for one result
// with global returns an array of results

let result = text.match(pattern);
// text.split(by regex);
// text.replace(email, with something)

// ['Lorem', 'Pesho', 'Pesho', 'Eligendi', 'Voluptatum']
console.log(result.groups.username);

// \w+
// _ (Underscores) are also word characters!

// \d{1,2}-\w{3}-\d{4}
// I am born on 30-Dec-1994.
// My father is born on the 9-Jul-1955.
// 01-July-2000 is not a valid date.

// \b\w+@[a-zA-Z]+\.[a-zA-Z]+
// valid123@email.bg

// invalid*name@emai1.bg

// \d{2}\/\d{2}\/\d{4}
// 01/02/1992

// Backreferences
    // Number Capturing Croups
    // \1
    // \number (matches the value of a number captured group)
    // ((\w+)@\w+\.[a-z]+)
    // valid123@email.com

    // <\w+>.+<\/\w+>
    // Some random text before <h1>Hello World!</h1> after.

    // <(\w+)>.*<\/\1>
    // Some random text before <h1>Hello World!</h1> after.

    // <h1> sadasd </h1>
    // <h1> sadasd </h2>

    // <(?:\w+)>.*<\/\1> (non capturing group, can be repeated but not used)
    // <(?<tag>\w+)>.*<\/\k<tag>> (name capturing group)

// Regular Expression in JS
    // has literal for it in JS
// RegExp methods
    // exec() (executes a search for a match in a string.
        // It returns an array of information or null on a mismatch)
    // test() (test for a match in a string. It returns true or false.)
    let text =
        'Lorem Pesho ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Pesho Eligendi non quis exercitationem culpa nesciunt nihil aut ' +
        'nostrum explicabo reprehenderit optio amet ab temporibus asperiores ' +
        'quasi cupiditate. Voluptatum ducimus voluptates voluptas?';
    let pattern = /[A-Z][a-z]+/g;

    // if you have variables then use this
    let pattern2 = new RegExp('Pesho', 'g');

    // console.log(typeof pattern); // object
    // console.log(pattern instanceof RegExp); // true

    // method of RegExp, test if exist
    // let result = pattern.test(text);
    // console.log(result);
        // returns find pattern, index: 64,
        // input:  'Lorem Pesho ipsum dolor sit amet,
        // consectetur adipisic...', groups: undefined

    // exec keep the returned result and
        // starts next time from the place where was last time
    // let result = pattern.exec(text);
    // console.log(result);
    // result = pattern.exec(text);
    // console.log(result);
    // result = pattern.exec(text);
    // console.log(result);
    // result = pattern.exec(text);
    // console.log(result);
    // result = pattern.exec(text);
    // console.log(result);
    let result = pattern.exec(text);

    while (result !== null) {
        console.log(result);
        result = pattern.exec(text);
    }

// String methods
    let text =
    'Lorem Pesho ipsum dolor pesho@abv.bg sit amet@gmail.com, consectetur ' +
    'adipisicing elit. Pesho Eligendi non quis exercitationem culpa nesciunt ' +
    'nihil aut nostrum explicabo reprehenderit optio amet ab temporibus ' +
    'asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?';

    // without global returns more info about the group
    let pattern = /(?<username>\w+)@\w+\.\w+/g;
    // If the regular expression does not include the g flag,
        // str.match() will return the same result as RegExp.exec().

    // over given string we have match method and give it RegExp or RegExp given as a string
    // without global gives the first result
    // match is good for one result
    let result = text.match(pattern);
    // text.split(by regex);
    // text.replace(email, with something)

    // ['Lorem', 'Pesho', 'Pesho', 'Eligendi', 'Voluptatum']
    console.log(result.groups.username);

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
    
    console.log(matchDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"));
    // 13/Jul/1928, 10-Nov-1934, 25.Dec.1937	01/Jan-1951, 23/sept/1973, 1/Feb/2016

    // if some problem check ascii table
    // put non-capturing group if you are not interested in the data
        // (?:something)
        

// In 1st case the program is possible to try to make match on null,
    // but in second one is checked and can't be
// let keyCode = currStr.match(pattern).length;
let keyCode = currStr.match(pattern) && currStr.match(pattern).length;

// ALWAYS check for not valid matches, NULL always check for null

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

// find the end of the input, in1, in2, in3, ... end, ... here can be something
    // (but we take only before end)
// let racers = input.slice(0, input.indexOf('end of race'));

// good example to make object and put default values in the keys of object with
    // reduce((acc, curr) => { acc[curr] = 0; return acc; }, {});
let participants = input
.shift()
.split(', ')
.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
}, {});

// distPattern is finding all of digit
// make them numbers and adding it to accumulator
// and then distance is keeping, the accumulated value
const distPattern = /\d/gm;
let distance = line.match(distPattern).map(Number).reduce((a, c) => a + c);

// write console.log in judge to check the zero tests

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
    // returns an iterator of all results matching a string
    // against a regular expression, including capturing groups

const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]

// split(regex)

// match()
function matchFullName(names = '') {
    // names = names.toString();
    // two words
    // ([A-Z]{1}\[a-z]+){2, } Capital{1}\[a-z]+
    // regex = /\b([A-Z]{1}[a-z]{2,} [A-Z]{1}[a-z]{2,})\b/gm
    // Note: You should put "/" before and after the pattern
        // so that it is interpreted as a RegEx pattern.
        // Also, place the 'g' (global) flag after it,
        // so that you get all the matches in the text.
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

console.log(
    matchFullName(
        'Ivan Ivanov, Ivan ivanov, ivan Ivanov,' +
        ' IVan Ivanov, Test Testov, Ivan	Ivanov'
    )
);
// Ivan Ivanov

// exec()
function matchDates(dates) {
    // 0 group match the whole
    // 1st group match the <day>
    // 2nd group match the separator
    // 3rd group match the <month>
    // 4th group match the <year>

    let pattern =
        /\b(?<day>\d{2})([(\/\-\.])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let output = [];
    let validDate; // is array

    // exec return the first match,
        // but also remember where was the last position,
        // so can be used for the next, match
    while ((validDate = pattern.exec(dates)) !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        output.push(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }

    return output.join('\n');
}

console.log(matchDates('13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f' + 
    ' 25.Dec.1937 23/09/1973, 1/Feb/2016'));
    
    // 13/Jul/1928, 10-Nov-1934, 25.Dec.1937
    // 01/Jan-1951, 23/sept/1973, 1/Feb/2016


    function furniture(input = []) {
        let boughtFurniture = [];
        let moneySpend = 0;
    
        let pattern =
            />>(?<furnitureName>\w+)<<(?<price>[0-9]+(\.{1}[0-9]+)?)!(?<quantity>[0-9]+)/;
        for (const line of input) {
            let isValid = line.match(pattern);
            if (isValid !== null) {
                let name = isValid.groups.furnitureName;
                let price = Number(isValid.groups.price);
                let quantity = Number(isValid.groups.quantity);
    
                boughtFurniture.push(name);
                moneySpend += price * quantity;
            }
        }
    
        return getOutput(boughtFurniture, moneySpend);
    
        function getOutput(boughtFurniture, moneySpend) {
            let output = [];
            output.push('Bought furniture:')
            if (boughtFurniture.length > 0) {
                output.push(boughtFurniture.join('\n'));
                // or
                // output.push(...boughtFurniture);
            }
            output.push(`Total money spend: ${moneySpend.toFixed(2)}`);
            return output.join('\n');
        }
    }
    
    // console.log(furniture(
    //     [
    //         '>>Sofa<<312.23!3',
    //         '>>TV<<300!5',
    //         '>Invalid<<!5',
    //         'Purchase'
    //     ]
    // ));

    function softUniBarIncome(input = []) {
        let pattern =
        /%(?<customerName>[A-Z][a-z]+)%[^\|\$%\.]*<(?<product>\w+)>[^\|\$%\.]*\|(?<count>[0-9]+)\|[^\|\$%\.0-9]*(?<price>[0-9]+(\.[0-9]+)?)\$/;
        let totalIncome = 0;
        let output = [];
    
        for (const line of input) {
            if (line === 'end of shift') {
                break;
            }
            let curr = line.match(pattern);
            if (curr !== null) {
                let [customerName, product, count, price] = [curr.groups.customerName, curr.groups.product, curr.groups.count, curr.groups.price];
                let totalProductPrice = Number(count) * Number(price);
                totalIncome += totalProductPrice;
                output.push(`${customerName}: ${product} - ${totalProductPrice.toFixed(2)}`);
            }
        }
        output.push(`Total income: ${totalIncome.toFixed(2)}`);
        return output.join('\n');
    }
    
    // console.log(softUniBarIncome(
    //     [
    //         '%George%<Croissant>|2|10.3$',
    //         '%Peter%<Gum>|1|1.3$',
    //         '%Maria%<Cola>|1|2.4$',
    //         'end of shift'
    //     ]
    // ));
    // console.log(softUniBarIncome(
    //     [
    //         '%InvalidName%<Croissant>|2|10.3$',
    //         '%Peter%<Gum>1.3$',
    //         '%Maria%<Cola>|1|2.4',
    //         '%Valid%<Valid>valid|10|valid20$',
    //         'end of shift'
    //     ]
    // ));

    // Grouping

    let pat1 = /([#$%\*&\.])(?<capitals>[A-Z]+)\1/;
        let curr = firstPart.match(pat1);
        return curr.groups['capitals'].split('');