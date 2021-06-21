function wordsTracker(input = []) {
    let searched = input.shift().split(' ');
    let map = new Map();

    for (const word of searched) {
        map.Map(word, 0);
    }

    for (const word of input) {
        if (map.has(word)) {
            let count = map.get(word) + 1;
            map.set(word, count);
        }
    }

    let entries = Array.from(map.entries());
    let sorted = entries.sort((a, b) => b[1] - a[1]);

    print(sorted);

    function print(arr) {
        for (const [key, value] of arr) {
            console.log(`${key} - ${value}`);
        }
    }
}

// wordsTracker([
//     'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
//     , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ]);

function legendaryFarming(input = '') {
    let [map, legendary] = fillTheMap(input);

    let legendaryItem = getLegendaryItem(legendary);

    let allMaterials = Array.from(map.entries());
    let keyMaterial = allMaterials.splice(0, 3);
    let junk = allMaterials;

    let keySorted = keyMaterial.sort((a, b) => {
        let qtyDescSort = b[1] - a[1];
        if (qtyDescSort === 0) {
            return a[0].localeCompare(b[0]);
        }

        return qtyDescSort;
    });

    let junkSorted = junk.sort((a, b) => a[0].localeCompare(b[0]));

    print();

    function print() {
        console.log(`${legendaryItem} obtained!`);
        printArr(keySorted);
        printArr(junkSorted);

        function printArr(arr) {
            for (const kvp of arr) {
                console.log(`${kvp[0]}: ${kvp[1]}`);
            }
        }
    }

    function getLegendaryItem(legendary) {
        let item = '';
        switch (legendary) {
            case 'fragments':
                item = 'Valanyr';
                break;
            case 'shards':
                item = 'Shadowmourne';
                break;
            case 'motes':
                item = 'Dragonwrath';
                break;
        }

        return item;
    }

    function fillTheMap(input) {
        let map = new Map();
        let inventory = input.split(' ');
        let legendary = '';

        let keyItems = ['shards', 'fragments', 'motes'];

        // set key items first three
        map = setKeyItems(keyItems);

        for (let i = 0; i < inventory.length; i += 2) {
            let qty = Number(inventory[i]);
            let material = (inventory[i + 1]).toString().toLowerCase();

            if (map.has(material)) {
                let currQty = map.get(material);

                qty += currQty;
            }

            map.set(material, qty);

            if ((keyItems.includes(material)) && qty >= 250) {
                legendary = material;
                updateLegendary(material);
                break;
            }
        }

        return [map, legendary];

        function setKeyItems(keyItems) {
            for (const item of keyItems) {
                map.set(item, 0);
            }

            return map;
        }

        function updateLegendary(material) {
            let newQty = map.get(material) - 250;
            map.set(material, newQty);
        }
    }
}

// legendaryFarming(
//     '3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'
// );
// legendaryFarming(
//     '123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'
// );

function arenaTier(input = []) {
    let gladiatorPool = new Map();

    for (const line of input) {
        if (line === 'Ave Cesar') {
            break;
        }

        let splitChar = getSplitChar(line);
        if (splitChar === ' -> ') {
            gladiatorPool = addGladiator(line, splitChar, gladiatorPool);
        } else if (splitChar === ' vs ') {
            gladiatorPool = duel(line, splitChar, gladiatorPool);
        }
    }

    printResult();

    function sortTech(obj) {
        let entries = Object.entries(obj);
        let sorted = entries.sort((a, b) => {
            let skillDescSort = b[1] - a[1];
            if (skillDescSort === 0) {
                // name sort
                return a[0].localeCompare(b[0]);
            }

            return skillDescSort;
        });

        return sorted;
    }

    function sortGlads(map) {
        let entries = Array.from(map.entries());
        let sorted = entries.sort((a, b) => {
            let skillDescSort = b[1].totalSkill - a[1].totalSkill;
            if (skillDescSort === 0) {
                // name sort
                return a[0].localeCompare(b[0]);
            }

            return skillDescSort;
        });

        return sorted;
    }

    function printResult() {
        let sortedGlads = sortGlads(gladiatorPool);
        for (const glad of sortedGlads) {
            console.log(`${glad[0]}: ${glad[1].totalSkill} skill`);
    
            let sortedTechniques = sortTech(glad[1]);
            for (const techData of sortedTechniques) {
                if (techData[0] !== 'totalSkill') {
                    console.log(`- ${techData[0]} <!> ${techData[1]}`);
                }            
            }
        }
    }

    function duel(line, splitChar, map) {
        let [glad1, glad2] = line.split(splitChar);

        if (!map.has(glad1) || !map.has(glad2)) {
            return map;
        }

        let glad1Tech = Object.keys(map.get(glad1));
        let glad2Tech = Object.keys(map.get(glad2));

        for (const tech of glad1Tech) {
            if (glad2Tech.includes(tech) && tech !== 'totalSkill') {
                map = fightThem(gladiatorPool, glad1, glad2);
                break;
            }
        }

        return map;
    }

    function fightThem(map, glad1, glad2) {
        let glad1TotSkill = map.get(glad1).totalSkill;
        let glad2TotSkill = map.get(glad2).totalSkill;
        
        if (glad1TotSkill > glad2TotSkill) {
            map.delete(glad2);
        } else if (glad2TotSkill > glad1TotSkill) {
            map.delete(glad1);
        }

        return map;
    }

    function addGladiator(str, ch, map) {
        let [name, technique, skill] = str.split(ch);
        skill = Number(skill);

        if (!map.has(name)) {
            map.set(name, { totalSkill: 0 });
        }

        let currObj = map.get(name);
        currObj = updateCurrObj(currObj, technique, skill);
        map.set(name, currObj);
        return map;
    }

    function updateCurrObj(currObj, technique, skill) {
        if (!currObj.hasOwnProperty(technique)) {
            currObj[technique] = skill;
            currObj['totalSkill'] += skill;
        }

        let currSkill = currObj[technique];
        skill = updateSkill(skill, currSkill);

        currObj[technique] += skill;
        currObj['totalSkill'] += skill; // to correct
        return currObj;
    }

    function updateSkill(skill, currSkill) {
        let update = 0;
        if (skill > currSkill) {
            update = skill - currSkill;
        }

        return update;
    }

    function getSplitChar(str) {
        if (str.includes(' -> ')) {
            return ' -> ';
        } else if (str.includes(' vs ')) {
            return ' vs ';
        }
    }
}

arenaTier([
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Pesho vs Gladius',
        'Gladius vs Julius'
]);

arenaTier([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
]);

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 400',
    'Stefan -> Duck -> 200',
    'Stefan -> Dack -> 100',
    // 'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);

arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);

function oddOccurrences(input) {
    let sentence = input.toLowerCase().split(' ');
    let map = new Map();

    map = setOccurrences(sentence);
    let result = printOddOccurrences(map);
    console.log(result);

    function printOddOccurrences(map) {
        let output = [];
        for (const kvp of map) {
            if (kvp[1] % 2 !== 0) {
                output.push(kvp[0]);
            }
        }

        return output.join(' ');
    }

    function setOccurrences(sentence) {
        for (const word of sentence) {
            if (!map.has(word)) {
                map.set(word, 1);
                continue;
            }

            let count = map.get(word);
            map.set(word, ++count);
        }

        return map;
    }
}

// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

function piccolo(input = []) {
    let parking = fillParkingInfo(input);
    let output = filterCarsIn(parking);
    return getOutput(output);

    function getOutput(arr = []) {
        return arr.length === 0
        ? 'Parking Lot is Empty'
        : arr.sort((a, b) => a.localeCompare(b)).join('\n');
    }

    function filterCarsIn(parking) {
        let output = [];
        for (const car in parking) {
            if (parking[car] === 'IN') {
                output.push(car);
            }
        }
        return output;
    }

    function fillParkingInfo(input) {
        let parking = {};
        for (const line of input) {
            let [direction, carNumber] = line.split(', ');
            parking[carNumber] = direction;
        }
        return parking;
    }
}

// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU'
// ]);

// piccolo([
//     'IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA'
// ]);

function partyTime(input = []) {
    function fillLists(arr) {
        let vip = [];
        let regular = [];
        for (const guestNumber of arr) {
            let chCode = guestNumber.charCodeAt(0);
            if (chCode >= 48 && chCode <= 57) {
                vip.push(guestNumber);
                continue;
            }
            regular.push(guestNumber);
        }
        return [vip, regular];
    }
  
    function getDidNotCome(guestsComing, fullList) {
        let notCome = fullList.splice(0);
        for (const guest of guestsComing) {
            if (notCome.includes(guest)) {
                let ind = notCome.indexOf(guest);
                notCome.splice(ind, 1)
            }
        }
        return notCome;
    }

    function createOutput(arr) {
        return arr.length + '\n' + arr.join('\n');
    }

    let partyInd = input.indexOf('PARTY');
    let [guests, guestsComing] = [input.slice(0, partyInd), input.slice(++partyInd)];
    let [vip, regular] = fillLists(guests);
    let fullList = [...vip, ...regular];

    let guestsNotCome = getDidNotCome(guestsComing, fullList);
    return createOutput(guestsNotCome);
}

// partyTime([
//     '7IK9Yo0h',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc',
//     'tSzE5t0p',
//     'PARTY',
//     '9NoBUajQ',
//     'Ce8vwPmE',
//     'SVQXQCbc'
// ]);

// partyTime([
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
// ]);

function cardGame(input = []) {
    let map = {
        2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1
    };
    function addData(input = []) {
        let data = new Map();
        for (const line of input) {
            let [name, cards] = line.split(': ');
            let cardsArr = cards.split(', ');
            if (!data.has(name)) {
                data.set(name, new Set(cardsArr));
                continue;
            }

            let currSet = Array.from(data.get(name));
            currSet.push(...cardsArr);
            data.set(name, new Set(currSet));
        }

        return data;
    }

    function sumDeck(arr, map) {
        let result = {};
        for (const kvp of arr) {
            let [name, cards] = [kvp[0], kvp[1]];
            let sum = 0;
            for (const card of cards) {
                let tokens = card.split('');
                let type = tokens.pop();
                let power = tokens.join('');
                sum += map[power] * map[type];
            }
            result[name] = sum;
        }
        return result;
    }

    function getOutput(obj) {
        let output = [];
        Object.entries(obj).forEach(kvp => {
            output.push(`${kvp[0]}: ${kvp[1]}`);
        });

        return output.join('\n');
    }

    let personData = addData(input, map);
    let result = sumDeck(personData, map);
    console.log(getOutput(result));
}

// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
// ]);

function travelTime(input = []) {
    // country name, town, (unique), cost number
    let destinations = new Map();
    destinations = addDest(destinations);

    let countries = Array.from(destinations.keys());
    countries.sort((a, b) => a.localeCompare(b));
    print();

    function print() {
        for (const country of countries) {
            let output = country + ' -> ';
            let currObj = destinations.get(country);
            for (const town in currObj) {
                output += `${town} -> ${currObj[town]} `;
            }

            console.log(output);
        }
    }

    function addDest(destinations) {
        for (const line of input) {
            let [country, town, cost] = line.split(' > ');
            cost = Number(cost);

            if (destinations.has(country)) {
                let obj = destinations.get(country);
                if (obj.hasOwnProperty(town)) {
                    let currCost = obj[town];
                    if (currCost < cost) {
                        cost = currCost;
                    }
                }

                obj[town] = cost;
                destinations.set(country, obj);
                continue;
            }

            let obj = {};
            obj[town] = cost;
            destinations.set(country, obj);
        }

        return destinations;
    }
}

// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]);

function companyUsers(input = []) {
    let companies = new Map();

    for (const line of input) {
        let [company, id] = line.split(' -> ');

        companies = addCompany(company);
        companies = addId(company, id);
    }

    let sortAsc = Array.from(companies.keys()).sort((a, b) => a.localeCompare(b));
    displayResult(sortAsc, companies);

    function displayResult(sortAsc, companies) {
        for (const company of sortAsc) {
            console.log(company);
            for (const id of companies.get(company)) {
                console.log(`-- ${id}`);
            }
        }
    }

    function addId(company, id) {
        if (!companies.get(company).has(id)) {
            companies.get(company).add(id);
        }

        return companies;
    }

    function addCompany(company) {
        if (!companies.has(company)) {
            companies.set(company, new Set());
        }

        return companies;
    }
}

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
// ]);

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
// ]);

function minerTask(input = []) {
    let resources = new Map();
    resources = collectResources(resources);
    printResult(resources);

    function printResult(map) {
        for (const [resource, qty] of map) {
            console.log(`${resource} -> ${qty}`);
        }
    }

    function collectResources() {
        for (let i = 0; i < input.length; i += 2) {
            let [resource, qty] = [input[i], Number(input[i + 1])];

            resources = addResource(resource, resources);
            resources = addQty(resource, qty, resources);
        }

        return resources;
    }

    function addQty(key, value, map) {
        let currVal = map.get(key);
        value += currVal;
        map.set(key, value);
        return map;
    }

    function addResource(key, map) {
        if (!map.has(key)) {
            map.set(key, 0);
        }

        return map;
    }
}

// minerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ]);

// minerTask([
//     'gold',
//     '155',
//     'silver',
//     '10',
//     'copper',
//     '17',
//     'gold',
//     '15'
// ]);