// LAB
function personInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    // let entries = Object.entries(personInfo);
    // for (let [key, value] of entries) {
    //     console.log(`${key}: ${value}`);
    // }

    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

// personInfo('Peter', 'Pan', '20');

function printCityInfo(name, area, population, country, postCode) {
    let cityInfo = {
        name: name, 
        area: area,
        population: population,
        country: country,
        postCode: postCode
    };

    let entries = Object.entries(cityInfo);
    for (let [ key, value ] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

// printCityInfo("Sofia"," 492", "1238438", "Bulgaria", "1000");

function convertToObject(jsonStr) {
    let jsonObj = JSON.parse(jsonStr);

    for (const key in jsonObj) {
        console.log(`${key}: ${jsonObj[key]}`);
    }
}

function convertToJSON(name, lastName, hairColor) {
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    };

    let objToJSON = JSON.stringify(person);
    console.log(objToJSON);
}

function cats(input = []) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
    }

    for (let i = 0; i < input.length; i++) {
        let currentCat = input[i].split(' ');
        let catName = currentCat[0];
        let catAge = currentCat[1];

        cats.push(new Cat(catName, catAge));
    }

    for (const cat of cats) {
        cat.meow();
    }

}

// cats(['Mellow 2', 'Tom 5']);

// class Cat {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     meow = () => console.log(`${this.name}, age ${this.age} says Meow`);

// }

// let firstCat = new Cat('Mellow', 2);
// let secondCat = new Cat('Tom', 5);

// firstCat.meow();

function printSongs(input = []) {
    let numSongs = input.shift();
    let typeSong = input.pop();
    let songs = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < numSongs; i++) {
        // let songData = input[i].split('_');
        let [typeList, name, time] = input[i].split('_');
        // let typeList = songData[0];
        // let name = songData[1];
        // let time = songData[2];

        songs.push(new Song(typeList, name, time));
    }

    if (typeSong === 'all') {
        songs.forEach(x => console.log(x.name));
    } else {
           let filtered = songs.filter(x => x.typeList === typeSong);
           filtered.forEach(x => console.log(x.name));
    }
}

// printSongs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']
//     );

//     printSongs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']
//     );

//     printSongs([2,
//     'like_Replay_3:15',
//     'ban_Photoshop_3:48',
//     'all']
//     );

// EXERCISE
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

function printListOfEmployeesClassExample(input = []) {
    let listArr = input.slice();
    let employees = [];

    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }

    for (const emp of listArr) {
        let name = emp;
        let personalNumber = emp.length;

        employees.push(new Employee(name, personalNumber))
    }

    employees.map(x => console.log(`Name: ${x.name} -- Personal Number: ${x.personalNumber}`));
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

function printObjTownsOtherWay(input = []) {
    let towns = [];

    // class Town {
    //     constructor(town, latitude, longitude) {
    //         this.town = town;
    //         this.latitude = Number(latitude).toFixed(2);
    //         this.longitude = Number(longitude).toFixed(2);
    //     }
    // }

    while (input.length > 0) {
        let currentData = input.shift();
        let [town, latitude, longitude] = currentData.split(' | ');

        // let currTown = new Town(town, latitude, longitude);
        let currTown = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        towns.push(currTown);
    }

    towns.map(x => console.log(x));
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

function classStorage() {

    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = []; // we don't know what will storage so empty []
            this.totalCost = 0; // we know that we will sum so default 0, if multiply 1
        }
    
        addProduct(product) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += product.quantity * product.price;
        }
    
        getProducts() {
            let output = [];
            for (let i = 0; i < this.storage.length; i++) {
                output.push(JSON.stringify(this.storage[i]));
            }
            return output.join('\n');
        }
    }
    
    let productOne = { name: 'Cucumber', price: 1.50, quantity: 15 };
    let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
    let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
    // create storage obj
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    storage.getProducts();
    console.log(storage.capacity);
    console.log(storage.totalCost);
    
    console.log();
}

function catalogue(input = []) {
    let products = input.slice(0).sort();
    let output = [];
    let currGroup = '';

    while (products.length > 0) {
        let [productName, productPrice] = products.shift().split(' : ');
        // let productName = currProduct[0].trim();
        // let productPrice = currProduct[1].trim();

        if (currGroup !== productName[0]) {
            // Getting first Letter of the group
            let firstLetter = productName[0];
            output.push(firstLetter);
        }

        output.push(`  ${productName}: ${productPrice}`);
    }

    return output.join('\n');
}

// console.log(catalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]));

function systemRegister(input = []) {
    function addSystem(systemName) {
        if (!obj.hasOwnProperty(systemName)) {
            obj[systemName] = {};
        }
    }

    function addComponent(systemName, componentName) {
        if (!obj[systemName].hasOwnProperty(componentName)) {
            obj[systemName][componentName] = [];
        }
    }

    function addSubComponent(systemName, componentName, subComponentName) {
        if (obj[systemName].hasOwnProperty(componentName)) {
            obj[systemName][componentName].push(subComponentName);
        }
    }

    function addAll(systemName, componentName, subComponentName) {
        addSystem(systemName);
        addComponent(systemName, componentName);
        addSubComponent(systemName, componentName, subComponentName);
    }

    function getOutput(sortedKeys) {
        let output = [];
        sortedKeys.forEach(key => {
            let sortSubKeys = Object.keys(obj[key]).sort((a, b) => {
                let bValueLength = Object.keys(obj[key][b]).length;
                let aValueLength = Object.keys(obj[key][a]).length;
                return bValueLength - aValueLength;
            });
    
            output.push(key);
            sortSubKeys.forEach(subKey => {
                output.push(`|||${subKey}`);
                obj[key][subKey].forEach((subComponent => {
                    output.push(`||||||${subComponent}`);
                }));
            });
        });
        return output.join('\n');
    }

    let obj = {};
    while (input.length > 0) {
        let [systemName, componentName, subComponentName] = input.shift().split(' | ');
        addAll(systemName, componentName, subComponentName);
    }

    let sortedKeys = Object.keys(obj).sort((a, b) => {
        let bValueLength = Object.keys(obj[b]).length;
        let aValueLength = Object.keys(obj[a]).length;

        if (bValueLength - aValueLength === 0) {
            return a.localeCompare(b);
        }

        return bValueLength - aValueLength;
    });

    return getOutput(sortedKeys);
}

// console.log(
//     systemRegister(
//         [
//             'SULS | Main Site | Home Page',
//             'SULS | Main Site | Login Page',
//             'SULS | Main Site | Register Page',
//             'SULS | Judge Site | Login Page',
//             'SULS | Judge Site | Submittion Page',
//             'Lambda | CoreA | A23',
//             'SULS | Digital Site | Login Page',
//             'Lambda | CoreB | B24',
//             'Lambda | CoreA | A24',
//             'Lambda | CoreA | A25',
//             'Lambda | CoreC | C4',
//             'Indice | Session | Default Storage',
//             'Indice | Session | Default Security',
//         ]
//     )
// );

// MORE EXERCISE
function classLaptop() {
    class Laptop {
        constructor(info, quality) {
            this.info = info;
            this.quality = quality;
            this.isOn = false;
        }

        turnOn() { this.isOn = true; this.quality -= 1; };
        turnOff() { this.isOn = false; this.quality -= 1; };
        showInfo() { return JSON.stringify(this.info); };
        // get returns current price of the laptop
        get price() { return 800 - (this.info.age * 2) + (this.quality * 0.5); };
    }

    let info = { producer: "Dell", age: 2, brand: "XPS" }
    let laptop = new Laptop(info, 10)
    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    console.log(laptop.quality)
    laptop.turnOn()
    console.log(laptop.isOn)
    console.log(laptop.price)
}

function flightSchedule(input = []) {
    function createSchedule(allFlights) {
        let listOfFlights = allFlights.slice(0);
        let obj = {};

        while (listOfFlights.length > 0) {
            let [flightNum, dest] = listOfFlights.shift().split(' ');
            obj[flightNum] = {
                dest: dest,
                status: 'Ready to fly'
            }
        }

        return obj;
    }

    function updateSchedule(obj, changedStatuses) {
        let updated = Object.assign({}, obj);

        while (changedStatuses.length > 0) {
            let [flNum, status] = changedStatuses.shift().split(' ');
            if (updated.hasOwnProperty(flNum) === true) {
                updated[flNum].status = status;
            }
        }

        return updated;
    }

    function printByStatus(flights, status) {
        let output = [];
        for (const num in flights) {
            if (flights[num].status === status) {
                output.push(`{ Destination: '${flights[num].dest}', Status: '${flights[num].status}' }`);
            }
        }
        return output.join('\n');
    }

    let [allFlights, changedStatuses, flightStatus] = input;
    flightStatus = flightStatus[0]; // because is from array

    let schedule = createSchedule(allFlights);
    let updated = updateSchedule(schedule, changedStatuses);

    return printByStatus(updated, flightStatus);
}

// console.log(
//     flightSchedule(
//         [
//             ['WN269 Delaware',
//                 'FL2269 Oregon',
//                 'WN498 Las Vegas',
//                 'WN3145 Ohio',
//                 'WN612 Alabama',
//                 'WN4010 New York',
//                 'WN1173 California',
//                 'DL2120 Texas',
//                 'KL5744 Illinois',
//                 'WN678 Pennsylvania'
//             ],
//             ['DL2120 Cancelled',
//                 'WN612 Cancelled',
//                 'WN1173 Cancelled',
//                 'SK430 Cancelled'
//             ],
//             ['Cancelled']
//         ]
//     )
// );

// console.log(
//     flightSchedule(
//         [
//             ['WN269 Delaware',
//                 'FL2269 Oregon',
//                 'WN498 Las Vegas',
//                 'WN3145 Ohio',
//                 'WN612 Alabama',
//                 'WN4010 New York',
//                 'WN1173 California',
//                 'DL2120 Texas',
//                 'KL5744 Illinois',
//                 'WN678 Pennsylvania'
//             ],
//             ['DL2120 Cancelled',
//                 'WN612 Cancelled',
//                 'WN1173 Cancelled',
//                 'SK330 Cancelled'
//             ],
//             ['Ready to fly']
//         ]
//     )
// );

function schoolRegister(input = []) {
    function print(register) {
        let output = [];
        for (const grade in register) {
            output.push(`${grade} Grade `);

            let listOfStudents = Object.keys(register[grade]);
            output.push('List of students: ' + listOfStudents.join(', '));

            let listOfScores = Object.values(register[grade]);
            let sumOfScores = listOfScores.reduce((acc, curr) => {
                return acc + curr;
            });
            let avgAnnual = sumOfScores / listOfScores.length;
            output.push(`Average annual grade from last year: ${avgAnnual.toFixed(2)}`);
        }
        return output.join('\n');
    }

    function makeNewRegister(input, obj) {
        while (input.length > 0) {
            let currStudent = input.shift().split(', ');
            let [name, grade, avgScore] = currStudent.map(x => isNaN(x = x.split(': ')[1]) ? x : Number(x));

            if (avgScore < 3) {
                continue;
            }

            grade += 1;
            if (!obj.hasOwnProperty(grade)) {
                obj[grade] = {}
            }

            obj[grade][name] = avgScore;
        }

        return obj;
    }

    let register = {};
    register = makeNewRegister(input, register);
    return print(register);
}

// console.log(
//     schoolRegister(
//         [
//             "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//             "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//             "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//             "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//             "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//             "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//             "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//             "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//             "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//             "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//             "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//             "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//             "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
//         ]
//     )
// );

function getBrowserHistory(obj = {}, arr = []) {
    let browserHistory = Object.assign({}, obj);
    let actions = arr.slice(0);

    for (const line of actions) {
        if (line === 'Clear History and Cache') {
            browserHistory = clear(browserHistory);
            continue;
        }

        let ind = line.indexOf(' ');
        let command = line.substring(0, ind);
        let site = line.substring(ind += 1);

        if (command === 'Close') {
            browserHistory = closeSite(browserHistory, site);
        }

        if (command === 'Open') {
            browserHistory = openSite(browserHistory, site);
        }

        browserHistory = addToLog(line);
    }

    print(browserHistory);

    function print(obj) {
        console.log(obj['Browser Name']);
        console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
        console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
        console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);
    }


    function openSite(obj, site) {
        obj['Open Tabs'].push(site);
        return obj;
    }

    function addToLog(line) {
        obj['Browser Logs'].push(line);
        return obj;
    }

    function closeSite(obj, site) {
        if (obj['Open Tabs'].includes(site)) {
            let ind = obj['Open Tabs'].indexOf(site);
            let closedSite = obj['Open Tabs'].splice(ind, 1);
            obj['Recently Closed'].push(closedSite[0]);

            // obj['Open Tabs'] = obj['Open Tabs'].filter(x => {
            //     if (x !== site) {
            //         return x;
            //     }
            // });
        }

        return obj;
    }

    function clear(obj) {
        obj['Open Tabs'] = [];
        obj['Recently Closed'] = [];
        obj['Browser Logs'] = [];
        return obj;
    }
}

// getBrowserHistory(
//     {
//         "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//         "Recently Closed": ["Yahoo", "Gmail"],
//         "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
//     },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );

// getBrowserHistory(
//     {
//         "Browser Name": "Mozilla Firefox",
//         "Open Tabs": ["YouTube"],
//         "Recently Closed": ["Gmail", "Dropbox"],
//         "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
//     },
//     ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// );

function sequences(input = []) {
    let obj = {};

    while (input.length > 0) {
        let currStr = input.shift();
        let currArr = JSON.parse(currStr);

        currArr.sort((a, b) => b - a);
        obj[currArr] = currArr;
    }

    let objKeys = Object.values(obj);

    objKeys.sort((a, b) => a.length - b.length);

    for (const index in objKeys) {
        console.log(`[${objKeys[index].join(', ')}]`);
    }
}

// sequences(
//     ["[-3, -2, -1, 0, 1, 2, 3, 4]",
//         "[10, 1, -17, 0, 2, 13]",
//         "[4, -3, 3, -2, 2, -1, 1, 0]"]
// );

// sequences(
//     ["[7.14, 7.180, 7.339, 80.099]",
//         "[7.339, 80.0990, 7.140000, 7.18]",
//         "[7.339, 7.180, 7.14, 80.099]"]
// );