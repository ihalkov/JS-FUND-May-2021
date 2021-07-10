function nationalCourt(input = []) {
    let [em1, em2, em3, totalPeople] = [...input].map(Number);
    let answersPerHour = em1 + em2 + em3;
    let totalHours = 0;

    while (totalPeople > 0) {
        totalPeople -= answersPerHour;
        totalHours += 1;

        if (totalHours % 4 === 0) {
            totalHours += 1;
        }
    }
    return `Time needed: ${totalHours}h.`;
}

// console.log(nationalCourt(
//     [
//         '5',
//         '6',
//         '4',
//         '20'
//     ]
// ));
// console.log(nationalCourt(
//     [
//         '1',
//         '2',
//         '3',
//         '45'
//     ]
// ));
// console.log(nationalCourt(
//     [
//         '3',
//         '2',
//         '5',
//         '40'
//     ]
// ));

function shoppingList(input = []) {
    let list = input.shift().split('!');

    for (const line of input) {
        if (line === 'Go Shopping!') {
            break;
        }
        let data = line.split(' ');
        let command = data[0];
        let item = data[1];

        let obj = {
            'Urgent': function (list, item) {
                if (!list.includes(item)) {
                    list.unshift(item)
                }
                return list;
            },
            'Unnecessary': function (list, item) {
                if ((ind = list.indexOf(item)) !== -1) {
                    list.splice(ind, 1);
                }
                return list;
            },
            'Correct': function (list, item) {
                let newItem = data[2];
                if ((ind = list.indexOf(item)) !== -1) {
                    list[ind] = newItem;
                }
                return list;
            },
            'Rearrange': function (list, item) {
                if ((ind = list.indexOf(item)) !== -1) {
                    list.splice(ind, 1);
                    list.push(item);
                }
                return list;
            },
        }

        list = obj[command](list, item);
    }
    return list.join(', ');
}

// console.log(shoppingList(
//     [
//         'Tomatoes!Potatoes!Bread',
//         'Unnecessary Milk',
//         'Urgent Tomatoes',
//         'Go Shopping!'
//     ]
// ));
// console.log(shoppingList(
//     [
//         'Milk!Pepper!Salt!Water!Banana',
//         'Urgent Salt',
//         'Unnecessary Grapes ',
//         'Correct Pepper Onion',
//         'Rearrange Grapes',
//         'Correct Tomatoes Potatoes',
//         'Go Shopping!'
//     ]
// ));