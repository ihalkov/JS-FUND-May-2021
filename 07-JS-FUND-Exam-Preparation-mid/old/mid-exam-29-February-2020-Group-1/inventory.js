function inventoryTask(input = []) {
    let inventory = input.shift().split(', ');

    while (input.length > 0) {
        let [command, item] = input.shift().split(' - ');
        switch (command) {
            case 'Collect':
                inventory = collect(item);
                break;
            case 'Drop':
                inventory = drop(item);
                break;
            case 'Combine Items':
                inventory = combineItems(item);
                break;
            case 'Renew':
                inventory = renew(item);
                break;
            // case 'Craft!':
            // break;
        }

    
        if (command === 'Craft!') {
            console.log(inventory.join(', '));
        }
    }



    function renew(item) {
        if (inventory.includes(item)) {
            let ind = inventory.indexOf(item);
            let returned = inventory.splice(ind, 1);
            inventory.push(returned[0]);
        }

        return inventory;
    }

    function combineItems(item) {
        let [oldItem, newItem] = item.split(':');
        if (inventory.includes(oldItem)) {
            let ind = inventory.indexOf(oldItem);
            inventory.splice(ind += 1, 0, newItem);
        }

        return inventory;
    }

    function drop(item) {
        if (inventory.includes(item)) {
            let ind = inventory.indexOf(item);
            inventory.splice(ind, 1);
        }

        return inventory;
    }

    function collect(item) {
        if (!inventory.includes(item)) {
            inventory.push(item);
        }

        return inventory;
    }
}

inventoryTask(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventoryTask([
    "Iron, Sword",
    "Drop - Bronze",
    "Combine Items - Sword:Bow",
    "Renew - Iron",
    "Craft!",
]);
