function shoppingList(input = []) {
    let groceries = input.shift().split('!');

    for (const line of input) {
        let [command, item, newItem] = line.split(' ');

        switch (command) {
            case 'Urgent':
                groceries = putUrgent(item);
                break;
            case 'Unnecessary':
                groceries = removeUnnecessary(item);
                break;
            case 'Correct':
                groceries = correct(item, newItem);
                break;
            case 'Rearrange':
                groceries = rearrange(item);
                break;
        }
    }

    console.log(groceries.join(', '));

    function rearrange(item) {
        if (groceries.includes(item)) {
            let ind = groceries.indexOf(item);
            let returned = groceries.splice(ind, 1);
            groceries.push(returned[0]);
        }

        return groceries;
    }

    function correct(item, newItem) {
        if (groceries.includes(item)) {
            let ind = groceries.indexOf(item);
            groceries.splice(ind, 1, newItem);
        }

        return groceries;
    }
    
    function removeUnnecessary(item) {
        if (groceries.includes(item)) {
            let ind = groceries.indexOf(item);
            groceries.splice(ind, 1);
        }

        return groceries;
    }

    function putUrgent(item) {
        if (!groceries.includes(item)) {
            groceries.unshift(item);
        }

        return groceries;
    }
}

// shoppingList([
//     'Tomatoes!Potatoes!Bread',
//     'Unnecessary Milk',
//     'Urgent Tomatoes',
//     'Go Shopping'
// ]);

// shoppingList([
//     'Milk!Pepper!Salt!Water!Banana',
//     'Urgent Salt',
//     'Unnecessary Grapes ',
//     'Correct Pepper Onion',
//     'Rearrange Grapes',
//     'Correct Tomatoes Potatoes',
//     'Go Shopping!'
// ]);