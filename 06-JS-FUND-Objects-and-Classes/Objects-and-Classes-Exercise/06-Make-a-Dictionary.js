function makeADictionary(input = []) {
    let dict = {};
    for (const line of input) {
        let currObj = JSON.parse(line);
        let entries = Object.entries(currObj);
        let [term, description] = [entries[0][0], entries[0][1]];
        dict[term] = description;
    }
    return getOutput(dict);

    function getOutput(obj = {}) {
        let keys = Object.keys(obj);
        keys.sort((a, b) => a.localeCompare(b));

        let output = [];
        for (const key of keys) {
            output.push(`Term: ${key} => Definition: ${obj[key]}`);
        }
        return output.join('\n');
    }
}

// console.log(makeADictionary(
//     [
//         '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//         '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//         '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//         '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//         '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
//     ]
// ));