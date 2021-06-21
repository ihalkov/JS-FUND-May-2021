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
    let [allFlights, changedStatuses, flightStatus] = input;
    flightStatus = flightStatus[0]; // because is from array

    let schedule = createSchedule(allFlights);
    let updated = updateSchedule(schedule, changedStatuses);

    printByStatus(updated, flightStatus);

    function printByStatus(flights, status) {

        for (const num in flights) {
            if (flights[num].status === status) {
                console.log(`{ Destination: '${flights[num].dest}', Status: '${flights[num].status}' }`);
            }
        }
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
}

// flightSchedule(
//     [['WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'],
//     ['Cancelled']
//     ]);

// flightSchedule(
//     [['WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK330 Cancelled'],
//     ['Ready to fly']
//     ]);

function schoolRegister(input = []) {
    let register = {};

    register = makeNewRegister(input);

    print(register);

    function print(register) {
        for (const grade in register) {
            console.log(`${grade} Grade `);

            let listOfStudents = Object.keys(register[grade]);
            console.log('List of students: ' + listOfStudents.join(', '));

            let listOfScores = Object.values(register[grade]);
            let sumOfScores = listOfScores.reduce((acc, curr) => {
                return acc + curr;
            });
            let avgAnnual = sumOfScores / listOfScores.length;
            console.log(`Average annual grade from last year: ${avgAnnual.toFixed(2)}`);
            console.log();
        }
    }

    function makeNewRegister(input) {
        while (input.length > 0) {
            let currStudent = input.shift();
            let [name, grade, avgScore] = getPropValues(currStudent);

            if (avgScore < 3) {
                continue;
            }

            grade += 1;
            if (!register.hasOwnProperty(grade)) {
                register[grade] = {
                }
            }

            register[grade][name] = avgScore;
        }

        return register;
    }

    function getPropValues(currStudent) {
        let studentData = currStudent.split(', ');
        let name = studentData[0].split(': ');
        let grade = studentData[1].split(': ');
        let avgScore = studentData[2].split(': ');

        return [name[1], Number(grade[1]), Number(avgScore[1])];
    }
}

// schoolRegister(
//     [
//         "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//         "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//         "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//         "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//         "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//         "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//         "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//         "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//         "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//         "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//         "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//         "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//         "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
//     ]);

function getBrowserHistory(obj = {}, arr = []) {
    let browserHistory = Object.assign({}, obj);
    let actions = arr.slice(0);

    browserHistory = processActions(browserHistory, actions);
    print(browserHistory);

    function print(obj) {
        console.log(obj['Browser Name']);
        console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
        console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
        console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);
    }

    function processActions(browserHistory, actions) {
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

        return browserHistory;
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