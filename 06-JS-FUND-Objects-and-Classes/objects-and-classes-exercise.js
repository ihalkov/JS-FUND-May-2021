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
    let obj = {};
    for (const line of input) {
        let movieName = '';
        if (line.includes('addMovie')) {
            movieName = line.split('addMovie ')[1];
            obj['name'] = movieName;
        } else if (line.includes('directedBy')) {
            let values = line.split(' directedBy ');
            movieName = values[0];
            let director = values[1];
            if (obj.hasOwnProperty(movieName)) {

            }
        } else if (line.includes('onDate')) {
            let values = line.split(' onDate ');
            movieName = values[0];
            let date = values[1];
        }
        return;
    }
    return;
}

console.log(movies(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
));

function inventory(input = []) {
    
}

console.log(inventory(
    [
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
));