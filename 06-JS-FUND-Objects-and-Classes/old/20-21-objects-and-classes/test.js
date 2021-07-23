function schoolRegister(input = []) {
    function print(register) {
        let output = [];
        for (const grade in register) {
            output.push(`${grade} Grade `);

            let listOfStudents = Object.keys(register[grade]);
            output.push('List of students: ' + listOfStudents.join(', '));

            let listOfScores = Object.values(register[grade]);
            let sumOfScores = listOfScores.reduce((acc, curr) => {
                return acc + curr;
            });
            let avgAnnual = sumOfScores / listOfScores.length;
            output.push(`Average annual grade from last year: ${avgAnnual.toFixed(2)}`);
        }
        return output.join('\n');
    }

    function makeNewRegister(input, obj) {
        while (input.length > 0) {
            let currStudent = input.shift().split(', ');
            let [name, grade, avgScore] = currStudent.map(x => isNaN(x = x.split(': ')[1]) ? x : Number(x));

            if (avgScore < 3) {
                continue;
            }

            grade += 1;
            if (!obj.hasOwnProperty(grade)) {
                obj[grade] = {}
            }

            obj[grade][name] = avgScore;
        }

        return obj;
    }

    let register = {};
    register = makeNewRegister(input, register);
    return print(register);
}

console.log(
    schoolRegister(
        [
            "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
            "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
            "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
            "Student name: George, Grade: 8, Graduated with an average score: 2.83",
            "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
            "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
            "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
            "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
            "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
            "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
            "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
            "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
            "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
        ]
    )
);