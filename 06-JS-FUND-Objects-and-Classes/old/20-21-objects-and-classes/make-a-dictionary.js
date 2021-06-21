let dict = {};
let input = [
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ];

for (const el of input) {
    let obj = JSON.parse(el);
    dict = Object.assign(dict, obj);
}

// for (const key in dict) {
//     console.log(key);
// }

let sortedKeys = Object.keys(dict);
sortedKeys.sort((a, b) => a.localeCompare(b));

// we call the term in ascending order from the array sortedKeys,
// because we can't sort the keys in object
// and then we call the description from the object
for (let term of sortedKeys) {
    let definition = dict[term];
    console.log(`Term: ${term} => Definition: ${definition}`);
}

// console.log();

// for (const key of dict) {
//     console.log(`Term: ${key} => Definition: ${dict[key]}`);
// }

// dict.moveStart()

// let personJSON = `{"name": "Pesho","age": 18,"height": 190}`;
// let strObj = `{"term": "Pesho"}`;
// let personObject = JSON.parse(personJSON);
// personObject += JSON.parse(strObj);
    
// console.log();