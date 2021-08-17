function usernameProblem01(input = []) {
    let username = input.shift();
    let registrationInd = input.indexOf('Registration');
    let commands = input.slice(0, registrationInd);
    let output = [];

    // let command = data[0];
    // let item = data[1];

    // we need to put functions with the same number of parameters
    // let obj = {
    //     'Letters': function (username, par1) {
    //         let tempUser = username;
    //         if (par1 === 'Lower') {
    //             username = tempUser.toLowerCase();
    //         } else {
    //             username = tempUser.toUpperCase();
    //         }
    //         output.push(username);
    //     },
    //     'Reverse': function (username, par1, par2) {
    //         let tempUser = username;
    //         let startInd = par1;
    //         let endInd = par2;

    //         let isValidInd = (startInd < endInd) &&
    //             (startInd > 0 && startInd < tempUser.length) &&
    //             (endInd > 0 && endInd < tempUser.length);

    //         if (isValidInd) {
    //             output.push(tempUser.substring(startInd, ++endInd).split('').reverse().join(''));
    //         }
    //     },
    //     'Substring': function (username, par1) {
    //         let substring = par1;
    //         // let tempUser = username;
    //         if (username.includes(substring)) {
    //             output.push(username.replace(substring, ''));
    //         } else {
    //             output.push(`The username ${username} doesn't contain ${substring}.`);
    //         }
    //     },
    //     'Replace': function (username, par1) {
    //         let ch = par1;
    //         username = username.replace(ch, '-');
    //         output.push(username);
    //     },
    //     'IsValid': function (username, par1) {
    //         let ch = par1;
    //         let tempUser = username;

    //        if (tempUser.includes(ch)) {
    //            output.push('Valid username.');
    //        } else {
    //            output.push(`${ch} must be contained in your username.`);
    //        }
    //     },
    // }


    for (const line of commands) {
        let [command, par1, par2] = line.split(' ');
        // obj[command](username, par1, par2);
        // return;

        if (command === 'Letters') {
            // 'Letters': function (username, par1) {
                // let tempUser = username;
                if (par1 === 'Lower') {
                    username = username.toLowerCase();
                } else if ((par1 === 'Upper')) {
                    username = username.toUpperCase();
                }
                output.push(username);
        } else if (command === 'Reverse') {
            let tempUser = username;
            let startInd = Number(par1);
            let endInd = Number(par2);

            let isValidInd = (startInd < endInd) &&
                (startInd >= 0 && startInd < tempUser.length) &&
                (endInd >= 0 && endInd < tempUser.length);

            if (isValidInd) {
                output.push(tempUser.substring(startInd, ++endInd).split('').reverse().join(''));
            }
        } else if (command === 'Substring') {
            let substring = par1;
            // let tempUser = username;
            if (username.includes(substring)) {
                output.push(username.replace(substring, ''));
            } else {
                output.push(`The username ${username} doesn't contain ${substring}.`);
            }
        } else if (command === 'Replace') {
            let ch = par1;
            username = username.replace(ch, '-');
            output.push(username);
        } else if (command === 'IsValid') {
            let ch = par1;
            // let tempUser = username;

           if (username.includes(ch)) {
               output.push('Valid username.');
           } else {
               output.push(`${ch} must be contained in your username.`);
           }
        }
        

    }
    // list = obj[command](list, item);
    //     o	"Registration"
    // o	"Letters {Lower/Upper}"
    // o	"Reverse {startIndex} {endIndex}"
    // o	"Substring {substring}"
    // o	"Replace {char}"
    // o	"IsValid {char}"

    // OUTPUTS
    // •	The possible outputs are:
    // o	"The username {username} doesn't contain {substring}."
    // o	"Valid username."
    // o	"{char} must be contained in your username."

    return output.join('\n');
}

console.log(
    usernameProblem01(
        [
            "John",
            "Letters Lower",
            "Substring SA",
            "IsValid @",
            "Registration"
        ]
    )
);

console.log(
    usernameProblem01(
        [
            "ThisIsSoftUni",
            "Reverse 1 3",
            "Replace S",
            "Substring hi",
            "Registration"
        ]
    )
);