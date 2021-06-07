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