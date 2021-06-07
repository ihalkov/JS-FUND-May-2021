function employees(input = []) {
    let output = [];
    for (const fullName of input) {
        let currObj = {
            fullName: fullName,
            personalNum: fullName.length
        };
        output.push(`Name: ${currObj.fullName} -- Personal Number: ${currObj.personalNum}`);
    }
    return output.join('\n');
}

// console.log(employees(
//     [
//         'Silas Butler',
//         'Adnaan Buckley',
//         'Juan Peterson',
//         'Brendan Villarreal'
//     ]
// ));