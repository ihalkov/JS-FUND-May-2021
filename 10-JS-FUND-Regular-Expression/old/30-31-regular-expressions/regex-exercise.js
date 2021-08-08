function furniture(input = []) {
    let store = [];
    let totalCost = 0;
    let pattern =
        />>(?<name>[A-Za-z]+)<<(?<price>(?:\d+\.)?\d+)!(?<quantity>\d+)/;
    let output = [];
    let currMatch;

    for (const currStr of input) {
        if (currStr === 'Purchase') {
            break;
        }

        currMatch = currStr.match(pattern);
        if (currMatch === null) {
            continue;
        }

        let name = currMatch.groups['name'];
        let price = currMatch.groups['price'];
        let quantity = currMatch.groups['quantity'];
        store.push(name);
        totalCost += Number(price) * Number(quantity);
    }
    
    output.push('Bought furniture:');
    if (store.length > 0) {
        output.push(...store);
    }
    output.push(`Total money spend: ${totalCost.toFixed(2)}`);
    return output.join('\n');
}

// console.log(furniture(['>>Sofa<<312.23!3',
//    '>>TV<<300!5',
//    '>Invalid<<!5',
//    'Purchase'
// ]));



// console.log(furniture(['>>Sofa<<312.23!3',
//    '>>TV<<300!5',
//    '>Invalid<<!5',
//    '>>PS4<<306!8',
//    'Purchase'
// ]));

// console.log(furniture([
//    'Purchase'
// ]));

function race(input = []) {
    let participants = input.shift().split(', ');
    let obj = {};
    // alphanumeric characters
    for (const line of input) {
        if (line === 'end of race') {
            break;
        }
        let name = getName(line);
        let dist = getDist(line);
        if (participants.includes(name)) {
            if (!obj.hasOwnProperty(name)) {
                obj[name] = dist;
                continue;
            }
            obj[name] += dist;
        }
    }
    function getName(str) {
        let name;
        let namePattern = /([A-Za-z])/g;
        name = str.match(namePattern).join('');
        return name;
    }

    function getDist(str) {
        let distPattern = /\d/g;
        str = str.split('');
        let sum = 0;
        // can be with reduce
        str.map(x => {
            if (x.match(distPattern)) {
                sum += Number(x);
            }
        });
        return sum;
    }

    function printTop3(distSort) {
        let output = [];
        output.push(`1st place: ${distSort[0][0]}`);
        output.push(`2nd place: ${distSort[1][0]}`);
        output.push(`3rd place: ${distSort[2][0]}`);
        return output;
    }

    let distSort = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    let result = printTop3(distSort);
    return result.join('\n');
    // https://softuni.bg/forum/30108/javascript-02-race-ot-regex-exercise
}

// console.log(race([
//     'George, Peter, Bill, Tom',
//     'G4e@55or%6g6!68e!!@',
//     'R1@!3a$y4456@',
//     'B5@i@#123ll',
//     'G@e54o$r6ge#',
//     '7P%et^#e5346r',
//     'T$o553m&6',
//     'end of race',
// ]));

function softUniBarIncome(input = []) {
    let pattern = /%(?<customer>([A-Z][a-z]{1,}))%(?:[^\|$%\.])*<(?<product>(\w+))>(?:[^\|$%\.])*\|(?<count>\d+)\|(?:[^\|$%\.\d])*(?<price>\d+(\.\d+)?)\$/;
    let totalCost = 0;
    let store = [];
    for (const line of input) {
        if (line === 'end of shift') {
            break;
        }
        currMatch = line.match(pattern);
        if (currMatch === null) {
            continue;
        }

        let customer = currMatch.groups['customer'];
        let product = currMatch.groups['product'];
        let count = currMatch.groups['count'];
        let price = currMatch.groups['price'];

        let currTotal = Number(price) * Number(count);
        store.push(`${customer}: ${product} - ${currTotal.toFixed(2)}`);
        totalCost += currTotal;
    }
    store.push(`Total income: ${totalCost.toFixed(2)}`);
    return store.join('\n');
}

// console.log(softUniBarIncome([
//     '%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift'
// ]));

// console.log(softUniBarIncome([
//     '%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift'
// ]));

function starEnigma(input = []) {
    // count all the letters [s, t, a, r] – case insensitive and
    // remove the count from the current ASCII value of each symbol of the encrypted message.
    function extractPlanetData(arr = [], numMessages) {
        // let pat = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[A|D])![^@\-!:>]*->(?<soldierCount>\d+)/;
        let pat = /(?:.*)@(?<planet>[A-Za-z]+)[^@:!\->]*:(?<population>[0-9]+)[^@:!\->]*!(?<attackType>[AD])![^@:!\->]*->(?<soldierCount>[0-9]+)(?:.*)/;
        let attackedPlanets = [];
        let destroyedPlanets = [];

        for (let i = 0; i < numMessages; i++) {
            let currStr = arr[i];
            let curr = currStr.match(pat);
            if (curr === null) {
                continue;
            }
            if (curr.groups['attackType'] === 'A') {
                attackedPlanets.push(curr.groups['planet']);
                continue;
            }
            destroyedPlanets.push(curr.groups['planet']);
        }
        return [attackedPlanets, destroyedPlanets];
    }
    function printOutput(arr1, arr2) {
        arr1.sort((a, b) => a.localeCompare(b));
        arr2.sort((a, b) => a.localeCompare(b));
        let output = [];
        output.push(`Attacked planets: ${arr1.length}`);
        putPlanetsFrom(arr1);
        output.push(`Destroyed planets: ${arr2.length}`);
        putPlanetsFrom(arr2);
        return output.join('\n');

        function putPlanetsFrom(arr) {
            for (const planet of arr) {
                output.push(`-> ${planet}`);
            }
        }
    }
    let pattern = /[star]/gi;
    let numMessages = Number(input.shift());
    let getDecrypted = (input, numMessages) => {
        let messages = [];
        for (let i = 0; i < numMessages; i++) {
            let currStr = input[i];
            // In 1st case the program is possible to try to make match on null, but in second one is checked and can't be
            // let keyCode = currStr.match(pattern).length;
            let keyCode = currStr.match(pattern) && currStr.match(pattern).length;
            currStr = currStr.split('').map(ch => String.fromCharCode((ch.charCodeAt(0) - keyCode)));
            messages.push(currStr.join(''));
        }
        return messages;
    };
    let decryptedMessage = getDecrypted(input, numMessages);
    let [attackedPlanets, destroyedPlanets] = extractPlanetData(decryptedMessage, numMessages);
    return printOutput(attackedPlanets, destroyedPlanets);
}

// console.log(starEnigma([
//     "2",
//     "STCDoghudd4=63333$D$0A53333",
//     "EHfsytsnhf?8555&I&2C9555SR"
// ]));

// console.log(starEnigma([
//     "3",
//     "tt(''DGsvywgerx>6444444444%H%1B9444",
//     "GQhrr|A977777(H(TTTT",
//     "EHfsytsnhf?8555&I&2C9555SR"
// ]));

function netherRealms(arr = []) {
    let splitPat =  / *, */g
    let input = arr[0].split(splitPat);
    let demonBook = {};
    
    for (const line of input) {
        let name = line.match(/[^,\s+]*/)[0];
        let health = getHealth(name);
        let damage = getDamage(name);
        demonBook[name] = {
            'health': health,
            'damage': damage
        };
    }
    return printOutput(demonBook);

    function printOutput(obj = {}) {
        let output = [];
        let names = Object.keys(obj).sort((a, b) => a.localeCompare(b));
        for (const name of names) {
            output.push(`${name} - ${obj[name].health} health, ${obj[name].damage.toFixed(2)} damage`);
        }
        return output.join('\n');
    }
    function getHealth(name) {
        let pat = /[^\d+\-*/\.]/g;
        let health = name.match(pat).map(x => x.charCodeAt(0)).reduce((acc, curr) => acc + curr);
        return health;
    }
    function getDamage(name = '') {
        let pat = /([-+]?(\d+\.)?\d+)/g;
        let baseDamage = 0;
        if (name.match(pat) !== null) {
            baseDamage = (name.match(pat)).map(Number).reduce((acc, curr) => acc + curr);
        }
        baseDamage = doCalcs(name, baseDamage);
        return baseDamage;

        function doCalcs(name = '', baseDamage) {
            for (const ch of name) {
                if (ch === '*') {
                    baseDamage *= 2;
                } else if (ch === '/') {
                    baseDamage /= 2;
                }
            }
            return baseDamage;
        }
    }
}

// console.log(netherRealms(
//      ['M3ph-0.5s-0.5t0.0**']
// ));
// console.log(netherRealms(
//     ['M3ph1st0**, Azazel']
// ));


// console.log(netherRealms(
//     ['M3ph1st0**,        Azazel']
// ));
// console.log(netherRealms(
//     ['Gos/ho']
// ));

// M3ph-0.5s,	 -0.5t0.0**
// M3ph1st0** 
// m15*/c-5.0
// m15*/c+5.0

//   ,  M3ph-0.5s-, 0.5t0.0**   ,  

function extractEmails(arr = '') {
    let pattern = /(?:^| )(?<email>(?<user>(?:[a-z][a-z0-9\.\-_]+))@(?<host>(?:[a-z0-9\-]+)(?:\.[a-z0-9]+){1,}))/g;
    let emails = arr[0].match(pattern);
    let output = [];
   
    if (emails !== null) {
        for (const email of emails) {
            output.push(email.trim());
        }
    }
    return output.join('\n');
}

// console.log(extractEmails(['Please contact us at: support@github.com.', 'end']));
// console.log(extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.', 'end']));
// console.log(extractEmails(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.', 'end']));

