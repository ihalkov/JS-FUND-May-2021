let input = [['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
];

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