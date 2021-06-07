function employees(input = []) {
    let output = [];
    for (const fullName of input) {
        let currObj = {
            fullName: fullName,
            personalNum: fullName.length
        };
        output.push(`Name: ${currObj.fullName} -- Personal Number: ${currObj.personalNum}`);
    }
    return output.join('\n');
}

// console.log(employees(
//     [
//         'Silas Butler',
//         'Adnaan Buckley',
//         'Juan Peterson',
//         'Brendan Villarreal'
//     ]
// ));

function towns(input = []) {
    let output = [];

    class Town {
        constructor(townName, latitude, longitude) {
            this.townName = townName,
                this.latitude = latitude.toFixed(2),
                this.longitude = longitude.toFixed(2)
        }
    }

    for (const line of input) {
        let [townName, latitude, longitude] = line.split(' | ');
        latitude = Number(latitude);
        longitude = Number(longitude);

        let currTown = new Town(townName, latitude, longitude);
        output.push(`{ town: '${currTown.townName}', latitude: '${currTown.latitude}', longitude: '${currTown.longitude}' }`);
    }

    return output.join('\n');
}

// console.log(towns(
//     [
//         'Sofia | 42.696552 | 23.32601',
//         'Beijing | 39.913818 | 116.363625'
//     ]
// ));

function storeProvision(stock, ordered) {
    let totalStock = [...stock, ...ordered];
    let output = [];
    let storage = {};
    storage = putDataInObj(totalStock);

    Object.entries(storage).forEach(([product, quantity]) => {
        output.push(`${product} -> ${quantity}`);
    });

    return output.join('\n');

    function putDataInObj(arr) {
        let obj = {};
        for (let i = 0; i < arr.length; i += 2) {
            let product = arr[i];
            let qty = Number(arr[i + 1]);

            if (!obj.hasOwnProperty(product)) {
                obj[product] = qty;
            } else {
                obj[product] += qty;
            }
        }
        return obj;
    }
}

// console.log(storeProvision(
//     [
//         'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//     ],
//     [
//         'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ]
// ));

function movies(input = []) {
    let collection = [];
    for (const line of input) {
        let movieName = '';
        if (line.includes('addMovie')) {
            movieName = line.split('addMovie ')[1];
            collection = addMovie(movieName, collection);
        } else if (line.includes('directedBy')) {
            let values = line.split(' directedBy ');
            movieName = values[0];
            let director = values[1];

            if (checkMovie(movieName, collection)) {
                collection = addDirector(movieName, director, collection);
            }
        } else if (line.includes('onDate')) {
            let values = line.split(' onDate ');
            movieName = values[0];
            let date = values[1];

            if (checkMovie(movieName, collection)) {
                collection = addDate(movieName, date, collection);
            }
        }
    }

    return print(collection);

    function addDate(movieName, date, arr) {
        for (const currObj of arr) {
            if (currObj.name === movieName) {
                currObj.date = date;
            }
        }
        return arr;
    }

    function addDirector(movieName, director, arr) {
        for (const currObj of arr) {
            if (currObj.name === movieName) {
                currObj.director = director;
            }
        }
        return arr;
    }

    function checkMovie(movieName, arr) {
        for (const currObj of arr) {
            if (currObj.name === movieName) {
                return true;
            }
        }
        return false;
    }

    function addMovie(name, arr) {
        arr.push({
            name: name
        });
        return arr;
    }

    function print(arr = []) {
        let output = [];
        
        for (const currObj of arr) {
            let keys = Object.keys(currObj);
            if (keys.length === 3) {
                output.push(JSON.stringify(currObj));
            }
        }
        return output.join('\n');
    }
}

// console.log(movies(
//     [
//         'addMovie Fast and Furious',
//         'addMovie Godfather',
//         'Inception directedBy Christopher Nolan',
//         'Godfather directedBy Francis Ford Coppola',
//         'Godfather onDate 29.07.2018',
//         'Fast and Furious onDate 30.07.2018',
//         'Batman onDate 01.08.2018',
//         'Fast and Furious directedBy Rob Cohen'
//     ]
// ));

function inventory(input = []) {
    let data = {};
    for (const line of input) {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items.split(', ');
        items.sort((a, b) => a.localeCompare(b));
        data[level] = {
            name: name,
            items: items
        };
    }
    return getOutput(data);

    function getOutput(obj = {}) {
        let output = [];
        let levels = Object.keys(obj);
        levels.sort((a, b) => a - b);

        for (const lvl of levels) {
            let key = obj[lvl];
            output.push(`Hero: ${key.name}`);
            output.push(`level => ${lvl}`);
            output.push(`items => ${key.items.join(', ')}`);
        }
        return output.join('\n');
    }
}

// console.log(inventory(
//     [
//         "Isacc / 25 / Apple, GravityGun",
//         "Derek / 12 / BarrelVest, DestructionSword",
//         "Hes / 1 / Desolator, Sentinel, Antara"
//     ]
// ));

function makeADictionary(input = []) {
    let dict = {};
    for (const line of input) {
        let currObj = JSON.parse(line);
        let entries = Object.entries(currObj);
        let [term, description] = [entries[0][0], entries[0][1]];
        dict[term] = description;
    }
    return getOutput(dict);

    function getOutput(obj = {}) {
        let keys = Object.keys(obj);
        keys.sort((a, b) => a.localeCompare(b));

        let output = [];
        for (const key of keys) {
            output.push(`Term: ${key} => Definition: ${obj[key]}`);
        }
        return output.join('\n');
    }
}

// console.log(makeADictionary(
//     [
//         '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//         '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//         '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//         '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//         '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
//     ]
// ));

class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
        this.parts.quality = this.parts.engine * this.parts.power;
    }

    drive(decrease) {
        this.fuel -= decrease;
    }
}

// let parts = {
//     engine: 6,
//     power: 100
// };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);