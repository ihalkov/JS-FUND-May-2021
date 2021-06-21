function printListOfEmployees(input = []) {
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

// printListOfEmployees([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
//     ]
//     );

function printObjTowns(input = []) {
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

// printObjTowns(['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']);

function getStoreProvision(currStock = [], orderedStock = []) {
    let totalStock = [];

    class Store {
        constructor(productName, quantity) {
            this.productName = productName;
            this.quantity = Number(quantity);
        }
    }

    totalStock = addCurrStock(currStock, totalStock);
    totalStock = addOrderedStock(orderedStock, totalStock);

    for (const key of totalStock) {
        console.log(`${key.productName} -> ${key.quantity}`);
    }

    function addCurrStock(currStock, totalStock) {
        while (currStock.length > 0) {
            let name = currStock.shift();
            let qty = currStock.shift();

            totalStock.push(new Store(name, qty));
        }

        return totalStock;
    }

    function addOrderedStock(orderedStock, totalStock) {
        while (orderedStock.length > 0) {
            let product = orderedStock.shift();
            let qty = orderedStock.shift();

            let result = totalStock.filter(curr => {
                if (curr.productName === product) {
                    curr.quantity += Number(qty);
                    return 1;
                }
            });

            if (result.length === 0) {
                totalStock.push(new Store(product, qty));
            }

        }

        return totalStock;
    }
}

// getStoreProvision([
//     'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//     ],
//     [
//     'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ]
//     );

function printMoviesInfo(input = []) {
    let movies = [];

    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    while (input.length > 0) {
        let curr = input.shift();

        if (curr.includes('addMovie')) {
            // addMovie length + one space
            movies = addMovie(curr);
        } else if (curr.includes('directedBy')) {
            movies = addDirector(curr, movies);
        } else if (curr.includes('onDate')) {
            movies = onDate(curr, movies);
        }
    }

    for (const movie of movies) {
        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    }

    function addMovie(curr) {
        let movie = curr.substring(9);
        movies.push(new Movie(movie));

        return movies;
    }

    function addDirector(curr, movies) {
        let str = curr;
        let movieInfo = str.split(' directedBy ');

        let movie = movieInfo[0];
        let director = movieInfo[1];

        movies.filter(curr => {
            if (curr.name === movie) {
                curr.director = director;
            }
        });

        return movies;
    }

    function onDate(curr, movies) {
        let str = curr;
        let movieInfo = str.split(' onDate ');

        let movie = movieInfo[0];
        let date = movieInfo[1];

        movies.filter(curr => {
            if (curr.name === movie) {
                curr.date = date;
            }
        });

        return movies;
    }
}

// printMoviesInfo([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);

function printInventory(input = []) {
    let heroes = [];


    while (input.length > 0) {
        let currObj = createObject(input);
        heroes.push(currObj);
    }

    heroes.sort((a, b) => a.level - b.level);

    printHeroes();

    function printHeroes() {
        for (const key of heroes) {
            console.log(`Hero: ${key.name}`);
            console.log(`level => ${key.level}`);
            console.log(`items => ${key.items}`);
        }
    }

    function createObject(input) {
        let currData = input.shift().split(' / ');
        let heroName = currData.shift();
        let level = currData.shift();
        let items = currData.shift().split(', ');
        items.sort();

        let obj = {
            name: heroName,
            level: Number(level),
            items: items.join(', ')
        }

        return obj;
    }
}

// printInventory([
//     "Isacc / 25 / Apple, GravityGun",
//     "Derek / 12 / BarrelVest, DestructionSword",
//     "Hes / 1 / Desolator, Sentinel, Antara"
//     ]
//     );

function makeADictionary(input = []) {
    let dict = {};

    for (const el of input) {
        let obj = JSON.parse(el);
        dict = Object.assign(dict, obj);
    }

    let sortedKeys = Object.keys(dict);
    sortedKeys.sort((a, b) => a.localeCompare(b));

    // we call the term in ascending order from the array sortedKeys,
    // because we can't sort the keys in object
    // and then we call the description from the object
    for (let term of sortedKeys) {
        let definition = dict[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}

// makeADictionary([
//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
// ]
// );

function testVehicleClass() {
    // let parts = {
    //     engine: 6,
    //     power: 100
    // };

    // let engine = parts.engine;
    // let power = parts.power;
    // // create prop quality
    // parts.quality = engine * power;

    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            // parts.engine is the value
            let quality = parts.engine * parts.power;
            this.parts = {
                // key: value
                engine: parts.engine,
                power: parts.power,
                quality: quality
                // quality: parts.engine * parts.power
            };
            this.fuel = Number(fuel);
        }

        drive(fuelLoss) {
            this.fuel = this.fuel - fuelLoss;
        }
    }

    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);

    // if (vehicle.fuel === 100 && vehicle.parts.quality === 600) {
    //     return 'yes';
    // }
    // expect(vehicle.fuel).to.equal(100);
    // expect(vehicle.parts.quality).to.equal(600);
}

// testVehicleClass();

// testVehicleClass(let parts = { engine: 6, power: 100 };
//     let vehicle = new Vehicle('a', 'b', parts, 200);
//     vehicle.drive(100);
//     console.log(vehicle.fuel);
//     console.log(vehicle.parts.quality);
//     );

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
    
    let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
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
        let currProduct = products.shift().split(':');
        let productName = currProduct[0].trim();
        let productPrice = currProduct[1].trim();

        if (currGroup !== productName[0]) {
            currGroup = productName[0];
            output.push(currGroup);
        }

        output.push(`  ${productName}: ${productPrice}`);
    }

    return output.join('\n');
}

// catalogue([
//     'Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'
// ]);

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
    let obj = {};


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

    // Print
    sortedKeys.forEach(key => {
        let sortSubKeys = Object.keys(obj[key]).sort((a, b) => {
            let bValueLength = Object.keys(obj[key][b]).length;
            let aValueLength = Object.keys(obj[key][a]).length;
            return bValueLength - aValueLength;
        });

        console.log(key);
        sortSubKeys.forEach(subKey => {
            console.log(`|||${subKey}`);
            obj[key][subKey].forEach((subComponent => {
                console.log(`||||||${subComponent}`);
            }));
        });
    });
}

// systemRegister([
//     'SULS | Main Site | Home Page',
//     'SULS | Main Site | Login Page',
//     'SULS | Main Site | Register Page',
//     'SULS | Judge Site | Login Page',
//     'SULS | Judge Site | Submittion Page',
//     'Lambda | CoreA | A23',
//     'SULS | Digital Site | Login Page',
//     'Lambda | CoreB | B24',
//     'Lambda | CoreA | A24',
//     'Lambda | CoreA | A25',
//     'Lambda | CoreC | C4',
//     'Indice | Session | Default Storage',
//     'Indice | Session | Default Security',
// ]);