let input = ["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
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
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"];

    let register = {};

    register = makeNewRegister(input);
    
    print(register);

    function print(register) {
        for (const grade in register) {
            console.log(`${grade} Grade `);

            let listOfStudents = Object.keys(register[grade]);
            console.log('List of students: ' + listOfStudents.join(', '));

            let listOfScores = Object.values(register[grade]);
            let sumOfScores = listOfScores.reduce((acc, curr) => {
                return acc + curr;
            });
            let avgAnnual = sumOfScores / listOfScores.length;
            console.log(`Average annual grade from last year: ${avgAnnual.toFixed(2)}`);
            console.log();
        }
    }

    function makeNewRegister(input) {
        while (input.length > 0) {
            let currStudent = input.shift();
            let [name, grade, avgScore] = getPropValues(currStudent);

            if (avgScore < 3) {
                continue;
            }

            grade += 1;
            if (!register.hasOwnProperty(grade)) {
                register[grade] = {
                }
            }

            register[grade][name] = avgScore;
        }

        return register;
    }

    function getPropValues(currStudent) {
        let studentData = currStudent.split(', ');
        let name = studentData[0].split(': ');
        let grade = studentData[1].split(': ');
        let avgScore = studentData[2].split(': ');

        return [name[1], Number(grade[1]), Number(avgScore[1])];
    }