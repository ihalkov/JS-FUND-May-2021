function race(input = []) {
    let participants = input.shift().split(', ');
    let storeInfo = {};
    for (const line of input) {
        let name = getName(line);
        if (participants.includes(name)) {
            let distance = getDistance(line);
            storeInfo = recordData(storeInfo, name, distance);
        }
    }
    let sortedDistance = Object.entries(storeInfo).sort((a, b) => b[1] - a[1]);
    return getResult(sortedDistance);

    function getResult(entries) {
        let output = [];
        output.push(`1st place: ${entries[0][0]}`);
        output.push(`2nd place: ${entries[1][0]}`);
        output.push(`3rd place: ${entries[2][0]}`);

        return output.join('\n');
    }

    function recordData(obj, name, dist) {
        if (!obj.hasOwnProperty(name)) {
            storeInfo[name] = dist;
        } else {
            storeInfo[name] += dist;
        }
        return obj;
    }

    function getName(str) {
        let pattern = /([A-Z]|[a-z])/g;
        let result = str.match(pattern);
        return result.join('');
    }

    function getDistance(str) {
        let pattern = /[0-9]/g;
        let result = str.match(pattern);
        return result.map(x => Number(x)).reduce((acc, curr) => acc + curr);
    }
}

// console.log(race(
//     [
//         'George, Peter, Bill, Tom',
//         'G4e@55or%6g6!68e!!@',
//         'R1@!3a$y4456@',
//         'B5@i@#123ll',
//         'G@e54o$r6ge#',
//         '7P%et^#e5346r',
//         'T$o553m&6',
//         'end of race'
//     ]
// ));