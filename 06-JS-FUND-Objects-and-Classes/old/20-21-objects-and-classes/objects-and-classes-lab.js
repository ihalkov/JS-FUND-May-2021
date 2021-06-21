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