function raceExample(input = []) {
    let participants = input
        .shift()
        .split(', ')
        .reduce((acc, curr) => {
            acc[curr] = 0;
            return acc;
        }, {});

    const namePattern = /[a-zA-Z]+/gm;
    const distPattern = /\d/gm;

    const racers = input.slice(0, input.indexOf('end of race'))
        .forEach(line => {
            let name = line.match(namePattern).join('');
            // match all digits then map to Number and reduce
            let distance = line.match(distPattern).map(Number).reduce((a, c) => a + c);
            if (participants.hasOwnProperty(name)) {
                participants[name] += distance;
            }
        });
    let output = Object.entries(participants)
        .sort((a, b) => b[1] - a[1]);
        return `1st place: ${output[0][0]}\n2nd place: ${output[1][0]}\n3rd place ${output[2][0]}`;
}

console.log(raceExample([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race',
]));