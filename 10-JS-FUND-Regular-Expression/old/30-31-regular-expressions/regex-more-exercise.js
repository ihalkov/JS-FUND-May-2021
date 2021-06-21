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

// Мерси, видях къде ми е грешката. Трябва да се изписва по късия брой съвпадения от двете половини, въпреки че никъде не го пише в задачата.  
//
// aaaaaaaa############
// console.log(winningTicket(['@@@^^^^^^^^^^^^^^^@@']));
// console.log(winningTicket(['$$$$$$$$$$Ca$$$$$$$h']));
// console.log(winningTicket(['Ca$$$$$$$h$$$$$$$$$$']));
// console.log(winningTicket(['^^^^^^Ca^^^^^^shCash']));
// console.log(winningTicket(['Cashs$$$$$Cas$$$$$ss']));
// console.log(winningTicket(['Cah$$$s$$$Ca$$$s$$$h']));
// console.log(winningTicket(['Cash$$$$$sCa$$$$$ssh']));

// console.log(winningTicket(['$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey']));
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
    let input = arr[0];
    let [firstPart, secondPart, thirdPart] = input.split('|');
    let capitalLetters = getCapitals(firstPart);
    let wordsData = getWordsData(capitalLetters, secondPart);
    let words = thirdPart.split(' ');
    let validWords = getValidWords(wordsData, words);
    return getOutput(capitalLetters, validWords);

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
            if (wordsData.hasOwnProperty(capital) && wordsData[capital].has(wordLength)) {
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
    let key = Number(input.shift());
    let decrypted = decryptInput(input, key)
    let goodNames = getGoodNames(decrypted);
    return goodNames.join('\n');

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