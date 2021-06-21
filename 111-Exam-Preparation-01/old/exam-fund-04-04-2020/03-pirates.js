function pirates(input = []) {
    //     Until the "Sail" command is given you will be receiving:
    // •	Cities that you and your crew have targeted, with their population and gold, separated by "||".
    // •	If you receive a city which has been already received, you have to increase the population and gold with the given values.
    let targetedCities = input.splice(0, input.indexOf('Sail'));
    let citiesData = getCitiesData(obj = {}, targetedCities);
    input.shift(); // removes 'Sail'
    let events = input.splice(0, input.indexOf('End'));

    for (const line of events) {
        let command = line.substring(0, line.indexOf('=>'));
        if (command === 'Plunder') {
            citiesData = plunder(line, citiesData);
        } else if (command === 'Prosper') {
            citiesData = prosper(line, citiesData);
        }
    }

    return getOutput(citiesData);
    function getOutput(obj) {
        let citiesLeft = Object.keys(obj).length;
        if (citiesLeft === 0) {
            console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
        } else {
            // sorted by their gold in descending order, then by their name in ascending order, in the following format:
            let entries = Object.entries(obj).sort((a, b) => {
                let retVal = b[1][1] - a[1][1];
                if (retVal === 0) {
                    return a[0].localeCompare(b[0]);
                }
                return retVal;
            });
            console.log(`Ahoy, Captain! There are ${citiesLeft} wealthy settlements to go to:`);
            for (const el of entries) {
                let town = el[0];
                let population = el[1][0];
                let gold = el[1][1];
                console.log(`${town} -> Population: ${population} citizens, Gold: ${gold} kg`);
            }
        }
    }
    function plunder(line, obj) {
        // You have successfully attacked and plundered the town,
        // killing the given number of people and stealing the respective amount of gold.
        let [cmd, town, people, gold] = line.split('=>');
        people = Number(people);
        gold = Number(gold);

        let currPopulation = obj[town][0] -= people;
        let currGold = obj[town][1] -= gold;

        if (currPopulation >= 0 && currGold >= 0) {
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        } 
        if (currPopulation <= 0 || currGold <= 0) {
            delete obj[town];
            console.log(`${town} has been wiped off the map!`);
        } 
        return obj;
    }
    
    function prosper(line, obj) {
        let [cmd, town, gold] = line.split('=>');
        gold = Number(gold);
        if (gold < 0) {
            console.log('Gold added cannot be a negative number!');
        } else {
            let currGold = obj[town][1] += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${currGold} gold.`);
        }
        return obj;
    }
    function getCitiesData(obj = {}, targetedCities) {
        for (const line of targetedCities) {
            let [city, population, gold] = line.split('||');
            population = Number(population);
            gold = Number(gold);

            if (!obj.hasOwnProperty(city)) {
                obj[city] = [0, 0];
            }
            obj[city][0] += population;
            obj[city][1] += gold;
            // city: { population: population, gold: gold }
        }
        return obj;
    }
}
// 81min 100/100
console.log(
    pirates([
        "Tortuga||345000||1250",
        "Santo Domingo||240000||630",
        "Havana||410000||1100",
        "Apple||410000||1100",
        "Sail",
        "Plunder=>Tortuga=>75000=>380",
        "Prosper=>Santo Domingo=>180",
        "End"
    ]));

console.log(
    pirates([
        "Nassau||95000||1000",
        "San Juan||930000||1250",
        "Campeche||270000||690",
        "Port Royal||320000||1000",
        "Port Royal||100000||2000",
        "Sail",
        "Prosper=>Port Royal=>-200",
        "Plunder=>Nassau=>94000=>750",
        "Plunder=>Nassau=>1000=>150",
        "Plunder=>Campeche=>150000=>690",
        "End"
    ]));