function regexProblem02(input = []) {
    function encrypt(str) {
        let arr = [];
        for (const ch of str) {
            arr.push(ch.charCodeAt(0));
        }
        return arr.join(' ');
    }

    let n = Number(input.shift());
    let arrOfLines = input.slice(0);
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[A-Za-z]{8,})\]/;
    let output = [];

    for (let i = 0; i < n; i++) {
        let line = arrOfLines[i];
        let result = line.match(pattern);

        if (result !== null) {
            let command = result.groups.command;
            let str = result.groups.string;
            let encryptedMessage = encrypt(str);

            output.push(`${command}: ${encryptedMessage}`);
            continue;
        }

        output.push('The message is invalid');
    }

    return output.join('\n');
}

console.log(
    regexProblem02(
        [
            "2",
            "!Send!:[IvanisHere]",
            "*Time@:[Itis5amAlready"
        ]
    )
);


console.log(
    regexProblem02(
        [
            "3",
            "go:[outside]",
            "!drive!:YourCarToACarWash",
            "!Watch!:[LordofTheRings]"
        ]
    )
);