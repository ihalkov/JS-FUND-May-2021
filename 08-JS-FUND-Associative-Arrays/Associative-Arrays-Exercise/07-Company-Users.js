function companyUsers(input = []) {
    let data = {};
    for (const line of input) {
        let [companyName, employeeId] = line.split(' -> ');
        if (!data.hasOwnProperty(companyName)) {
            data[companyName] = new Set();
        }
        data[companyName].add(employeeId);
    }

    let companies = Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]));
    return getOutput(companies);

    function getOutput(companies) {
        let output = [];
        for (const line of companies) {
            let [company, employees] = [line[0], line[1]];
            let employeesArr = Array.from(employees).map(x => `-- ${x}`);
            output.push(`${company}`);
            output.push(...employeesArr);
        }
        return output.join('\n');
    }
}

// console.log(companyUsers(
//     [
//         'SoftUni -> AA12345',
//         'SoftUni -> BB12345',
//         'Microsoft -> CC12345',
//         'HP -> BB12345'
//     ]
// ));
// console.log(companyUsers(
//     [
//         'SoftUni -> AA12345',
//         'SoftUni -> CC12344',
//         'Lenovo -> XX23456',
//         'SoftUni -> AA12345',
//         'Movement -> DD11111'
//     ]
// ));