function travelTime(input = []) {
    let destinations = {};

    for (const line of input) {
        let [country, town, travelCost] = line.split(' > ');
        travelCost = Number(travelCost);
        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
            destinations[country][town] = travelCost;
        } else if (!destinations[country].hasOwnProperty(town)) {
            destinations[country][town] = travelCost;
        }
        let oldCost = destinations[country][town];
        if (oldCost > travelCost) {
            destinations[country][town] = travelCost;
        }
    }

    let countries = Object.keys(destinations).sort((a, b) => a.localeCompare(b));
    let output = [];
    for (const country of countries) {
        let towns = destinations[country];
        let entries = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        let townsStrings = entries.map(x => `${x[0]} -> ${x[1]}`);
        output.push(`${country} -> ${townsStrings.join(' ')}`);
    }
    return output.join('\n');
}

// console.log(travelTime(
//     [
//         "Bulgaria > Sofia > 500",
//         "Bulgaria > Sopot > 800",
//         "France > Paris > 2000",
//         "Albania > Tirana > 1000",
//         "Bulgaria > Sofia > 200"
//     ]
// ));