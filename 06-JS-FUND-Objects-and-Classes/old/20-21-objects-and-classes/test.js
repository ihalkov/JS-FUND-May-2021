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

    towns = towns.filter(x => x.town === 'Sofia');
    console.log();
}

printObjTowns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);