function partyTime(input = []) {
    let partyInd = input.indexOf('PARTY');
    let [guests, came] = [input.slice(0, partyInd), input.slice(partyInd + 1)];
    let list = fillTheList(guests);
    let sortedList = [...list.vip, ...list.regular];

    for (const curr of came) {
        let ind = sortedList.indexOf(curr);
        sortedList.splice(ind, 1);
    }

    let notCome = sortedList.slice();
    let count = notCome.length;
    return `${count}\n${notCome.join('\n')}`;

    function fillTheList(guests = []) {
        let list = {
            vip: [],
            regular: []
        };

        for (const guest of guests) {
            let isVip = isNumber(guest[0]);
            if (isVip) {
                list.vip.push(guest);
            } else {
                list.regular.push(guest);
            }
        }
        return list;
    }

    function isNumber(ch = '') {
        let code = ch.charCodeAt(0);
        if (code >= 48 && code <= 57) {
            return true;
        }
        return false;
    }
}

// console.log(partyTime(
//     [
//         '7IK9Yo0h',
//         '9NoBUajQ',
//         'Ce8vwPmE',
//         'SVQXQCbc',
//         'tSzE5t0p',
//         'PARTY',
//         '9NoBUajQ',
//         'Ce8vwPmE',
//         'SVQXQCbc'
//     ]
// ));
// console.log(partyTime(
//     [
//         'm8rfQBvl',
//         'fc1oZCE0',
//         'UgffRkOn',
//         '7ugX7bm0',
//         '9CQBGUeJ',
//         '2FQZT3uC',
//         'dziNz78I',
//         'mdSGyQCJ',
//         'LjcVpmDL',
//         'fPXNHpm1',
//         'HTTbwRmM',
//         'B5yTkMQi',
//         '8N0FThqG',
//         'xys2FYzn',
//         'MDzcM9ZK',
//         'PARTY',
//         '2FQZT3uC',
//         'dziNz78I',
//         'mdSGyQCJ',
//         'LjcVpmDL',
//         'fPXNHpm1',
//         'HTTbwRmM',
//         'B5yTkMQi',
//         '8N0FThqG',
//         'm8rfQBvl',
//         'fc1oZCE0',
//         'UgffRkOn',
//         '7ugX7bm0',
//         '9CQBGUeJ'
//     ]
// ));