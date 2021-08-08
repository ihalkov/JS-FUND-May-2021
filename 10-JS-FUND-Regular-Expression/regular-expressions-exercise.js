// LAB
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

function removeOccurrences(word = '', text = '') {
    while (text.includes(word)) {
        text = text.replace(word, '');
    }
    return text;
}

// removeOccurrences('ice', 'kicegiciceeb');

// EXERCISE
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

function race(input = []) {
    function getResult(entries) {
        let output = [];
        output.push(`1st place: ${entries[0][0]}`);
        output.push(`2nd place: ${entries[1][0]}`);
        output.push(`3rd place: ${entries[2][0]}`);

        return output.join('\n');
    }

    function recordData(obj, name, dist) {
        if (!obj.hasOwnProperty(name)) {
            storeInfo[name] = dist;
        } else {
            storeInfo[name] += dist;
        }
        return obj;
    }

    function getName(str) {
        let pattern = /([A-Z]|[a-z])/g;
        let result = str.match(pattern);
        return result.join('');
    }

    function getDistance(str) {
        let pattern = /[0-9]/g;
        let result = str.match(pattern);
        return result.map(x => Number(x)).reduce((acc, curr) => acc + curr);
    }

    let participants = input.shift().split(', ');
    let storeInfo = {};
    for (const line of input) {
        let name = getName(line);
        if (participants.includes(name)) {
            let distance = getDistance(line);
            storeInfo = recordData(storeInfo, name, distance);
        }
    }
    let sortedDistance = Object.entries(storeInfo).sort((a, b) => b[1] - a[1]);
    return getResult(sortedDistance);
}

// console.log(race(
//     [
//         'George, Peter, Bill, Tom',
//         'G4e@55or%6g6!68e!!@',
//         'R1@!3a$y4456@',
//         'B5@i@#123ll',
//         'G@e54o$r6ge#',
//         '7P%et^#e5346r',
//         'T$o553m&6',
//         'end of race'
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

// MORE EXERCISE
function winningTicket(arr = []) {
    let input = arr[0];
    let tickets = input.trim().split(/\s*\,\s*/);
    let output = [];
    for (const ticket of tickets) {
        output.push(getCurrResult(ticket));
    }
    return output.join('\n');

    function getCurrResult(ticket) {
        let isValid = ticket.length === 20;
        if (!isValid) {
            return 'invalid ticket';
        }
        let [leftHalf, rightHalf] = [ticket.substring(0, 10), ticket.substring(10)];
        let pattern = /(?<winHalf>\@{6,10}|\${6,10}|\^{6,10}|\#{6,10})/g;
        let m1 = leftHalf.match(pattern);
        let m2 = rightHalf.match(pattern);
        
        let isMatch = (m1 !== null && m2 !== null) && (m1[0][0] === m2[0][0])
        if (!isMatch) {
            return `ticket "${ticket}" - no match`;
        }
        
        // let validStr = m1[0].length;
        let getValidLength = (a, b) => {
            if (a.length < b.length) {
                return a.length;
            }
            return b.length;
        };
        let matchLength = getValidLength(m1[0], m2[0]);
        let symbol = m1[0][0];
        if (matchLength === 10) {
            return `ticket "${ticket}" - ${matchLength}${symbol} Jackpot!`;
        }
        return `ticket "${ticket}" - ${matchLength}${symbol}`;
    }
}

// Мерси, видях къде ми е грешката.
    // Трябва да се изписва по късия брой съвпадения от двете половини,
    // въпреки че никъде не го пише в задачата.  
//
// aaaaaaaa############
// console.log(winningTicket(['@@@^^^^^^^^^^^^^^^@@']));
// console.log(winningTicket(['$$$$$$$$$$Ca$$$$$$$h']));
// console.log(winningTicket(['Ca$$$$$$$h$$$$$$$$$$']));
// console.log(winningTicket(['^^^^^^Ca^^^^^^shCash']));
// console.log(winningTicket(['Cashs$$$$$Cas$$$$$ss']));
// console.log(winningTicket(['Cah$$$s$$$Ca$$$s$$$h']));
// console.log(winningTicket(['Cash$$$$$sCa$$$$$ssh']));

// console.log(winningTicket(
    // ['$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey']));
// console.log(winningTicket(['validticketnomatch:(']));

function rageQuit(arr = []) {
    let input = arr[0].toUpperCase();
    let pattern = /(?<str>[^0-9]+)(?<repeat>[0-9]+)/g;
    let message = '';
    while ((curr = pattern.exec(input)) !== null) {
        let str = curr.groups['str'];
        let count = Number(curr.groups['repeat']);
        message += str.repeat(count);
    }
    let uniqueSymbols = new Set(message);
    let uniqueCount = uniqueSymbols.size;
    return `Unique symbols used: ${uniqueCount}\n${message}`;
}

// console.log(rageQuit(['a3']));
// console.log(rageQuit(['aSd2&5s@1']));

function postOffice(arr = []) {
    function getOutput(capitalLetters, validWords) {
        let output = [];
        for (const cap of capitalLetters) {
            let found = validWords.find(el => el[0] === cap);
            output.push(found);
        }
        return output.join('\n');
    }
    
    function getValidWords(wordsData, words) {
        let valid = [];
        for (const word of words) {
            let capital = word[0];
            let wordLength = word.length;
            if (wordsData.hasOwnProperty(capital) &&
                wordsData[capital].has(wordLength)) {
                valid.push(word);
            }
        }
        return valid;
    }

    function getWordsData(capitalLetters = [], secondPart = '') {
        let data = {};
        let pat2 = /(?<asciiCode>\d{2}):(?<additionalLength>\d{2})/g;
        // let extracted = secondPart.match(pat2);

        while ((currMatch = pat2.exec(secondPart)) !== null) {
            let code = Number(currMatch.groups['asciiCode']);
            let length = Number(currMatch.groups['additionalLength']);

            let searchedCapital = String.fromCharCode(code);
            if (capitalLetters.includes(searchedCapital)) {
                data = addCapitalAndLength(data, searchedCapital, length);
            }
        }
        return data;
    }

    function addCapitalAndLength(obj = {}, key, value) {
        value += 1; // that way we have the whole length of the word
        if (!obj.hasOwnProperty(key)) {
            obj[key] = new Set();
        }
        obj[key].add(value);
        return obj;
    }
    
    function getCapitals(firstPart) {
        let pat1 = /([#$%\*&\.])(?<capitals>[A-Z]+)\1/;
        let curr = firstPart.match(pat1);
        return curr.groups['capitals'].split('');
    }

    let input = arr[0];
    let [firstPart, secondPart, thirdPart] = input.split('|');
    let capitalLetters = getCapitals(firstPart);
    let wordsData = getWordsData(capitalLetters, secondPart);
    let words = thirdPart.split(' ');
    let validWords = getValidWords(wordsData, words);
    return getOutput(capitalLetters, validWords);
}

// console.log(postOffice(
//     [
//         'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
//     ]
// ));

// console.log(postOffice(
//     [
//         'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
//     ]
// ));

// console.log(postOffice(
//     [
//         'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|saTheww The Parahaos adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar '
//     ]
// ));

function santaSecretHelper(input = []) {
    function getGoodNames(arr = []) {
        let pat = /@(?<name>[A-Za-z]+)(?:[^@\-!:>])*!(?<behaviour>[GN])!/g;
        let goodNames = [];
        while ((currMatch = pat.exec(arr)) !== null) {
            let name = currMatch.groups['name'];
            let behaviour = currMatch.groups['behaviour'];
            if (behaviour === 'G') {
                goodNames.push(name);
            }
        }
        return goodNames;
    }

    function decryptInput(arr = [], key) {
        let decrypted = [];
        for (let line of arr) {
            line = line.split('').map(x => {
                return String.fromCharCode(x.charCodeAt(0) - key);
            });
            decrypted.push(line.join(''));
        }
        return decrypted;
    }

    let key = Number(input.shift());
    let decrypted = decryptInput(input, key)
    let goodNames = getGoodNames(decrypted);
    return goodNames.join('\n');
}

// console.log(santaSecretHelper(
//     [
//         "3",
//         "CNdwhamigyenumje$J$",
//         "CEreelh-nmguuejnW$J$",
//         "CVwdq&gnmjkvng$Q$",
//         "end"
//     ]
// ));

// console.log(santaSecretHelper(
//     [
//         "3",
//         "N}eideidmk$'(mnyenmCNlpamnin$J$",
//         "ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge",
//         "ppqmkkkmnolmnnCEhq/vkievk$Q$",
//         "yyegiivoguCYdohqwlqh/kguimhk$J$",
//         "end"
//     ]
// ));