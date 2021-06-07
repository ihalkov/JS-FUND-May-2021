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