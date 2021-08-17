function menuProblem03(input = []) {
    function print(collection, output, unliked) {
        let entries = Object.entries(collection);
        let sortedEntries = entries.sort((a, b) => {
            let result = b[1].length - a[1].length;
            if (result === 0) {
                return a[0].localeCompare(b[0]);
            }
            return result;
        });

        for (const [guest, meals] of sortedEntries) {
            output.push(`${guest}: ${meals.join(', ')}`)
        }
        output.push(`Unliked meals: ${unliked}`)

        return output.join('\n');
    }
    let stopInd = input.indexOf('Stop');
    let data = input.slice(0, stopInd);
    let collection = {};
    // let unliked = 0;
    let unliked = 0;
    let output = [];

    // let likeOrNot = {
    //     like: function (guest, meal, collection) {
    //         if (!collection.hasOwnProperty(guest)) {
    //             collection[guest] = [meal];
    //         } else if ((ind = collection[guest].indexOf(meal)) === -1) {
    //             collection[guest].push(meal);
    //         }
    //         // return collection;
    //     },
    //     unlike: function (guest, meal, collection, unliked) {
    //         if (!collection.hasOwnProperty(guest)) {
    //             output.push(`${guest} is not at the party.`)   
    //         } else if ((ind = collection[guest].indexOf(meal)) === -1) {
    //             output.push(`${guest} doesn't have the ${meal} in his/her collection.`);
    //         } else {
    //             output.push(`${guest} doesn't like the ${meal}.`);
    //             collection[guest].splice(ind, 1);
    //             unliked++;
    //         }
    //     }
    // };

    for (const line of data) {
        let [command, guest, meal] = line.split('-');
        command = command.toLowerCase();
        // likeOrNot[command](guest, meal, collection, unliked);
        if (command === 'like') {
            if (!collection.hasOwnProperty(guest)) {
                collection[guest] = [meal];
            } else if ((ind = collection[guest].indexOf(meal)) === -1) {
                collection[guest].push(meal);
            }
        } else if (command === 'unlike') {
            if (!collection.hasOwnProperty(guest)) {
                output.push(`${guest} is not at the party.`)
            } else if ((ind = collection[guest].indexOf(meal)) === -1) {
                output.push(`${guest} doesn't have the ${meal} in his/her collection.`);
            } else {
                output.push(`${guest} doesn't like the ${meal}.`);
                collection[guest].splice(ind, 1);
                unliked = unliked + 1;
            }
        }
    }



    return print(collection, output, unliked);
}

console.log(
    menuProblem03(
        [
            "Like-Krisi-shrimps",
            "Like-Krisi-soup",
            "Like-Penelope-dessert",
            "Like-Misho-salad",
            "Stop"
        ]
    )
);

console.log(
    menuProblem03(
        [
            "Like-Krisi-shrimps",
            "Unlike-Vili-carp",
            "Unlike-Krisi-salad",
            "Stop"
        ]
    )
);

console.log(
    menuProblem03(
        [
            "Like-Katy-fish",
            "Unlike-Katy-fish",
            "Stop"
        ]
    )
);