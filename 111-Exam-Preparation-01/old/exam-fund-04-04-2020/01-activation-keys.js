function activationKeys(input = []) {
    function processCommands(commands, rawActivationKey) {
        // let currKey = '';
        let output = [];
        for (const line of commands) {
            let command = line.substring(0, line.indexOf('>'));
            switch (command) {
                case 'Contains':
                    output.push(contains(line, rawActivationKey));
                    break;
                case 'Flip':
                    rawActivationKey = flip(line, rawActivationKey);
                    output.push(rawActivationKey);
                    break;
                case 'Slice':
                    rawActivationKey = sliceKey(line, rawActivationKey)
                    output.push(rawActivationKey);
                    break;
            }
        }
        output.push(`Your activation key is: ${rawActivationKey}`);
        return output;

        function sliceKey(str, currKey) {
                let [command, startInd, endInd] = str.split('>>>');
                startInd = Number(startInd);
                endInd = Number(endInd);
                let begin = currKey.substring(0, startInd);
                let end = currKey.substring(endInd);
                return begin + end;
        }
        function flip(str, currKey) {
            let [command, changeCase, startInd, endInd] = str.split('>>>');
            startInd = Number(startInd);
            endInd = Number(endInd);
            let begin = currKey.substring(0, startInd);
            let end = currKey.substring(endInd);
            
            if (changeCase === 'Upper') {
                currKey = currKey.substring(startInd, endInd).toUpperCase();
            } else {
                currKey = currKey.substring(startInd, endInd).toLowerCase();
            }
            return begin + currKey + end;
        }
        function contains(str, currKey) {
            let startInd = str.lastIndexOf('>');
            let substr = str.substring(++startInd);
            return currKey.includes(substr)
                ? `${currKey} contains ${substr}`
                : `Substring not found!`;
        }
    }
    // . It will consist of letters and numbers only. 
    let rawActivationKey = input.shift();
    let commands = input.slice(0, input.indexOf('Generate'));
    let result = processCommands(commands, rawActivationKey);
    return result.join('\n');
}
// 60min
// 100/100

console.log(activationKeys([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]));

console.log(activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate',
]));