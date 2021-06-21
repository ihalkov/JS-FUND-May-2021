function bonusScoringSystem(input = []) {
    let numInfo = input.map(Number);
    let countOfStudents = numInfo.shift();
    let courseLectures = numInfo.shift();
    let additionalBonus = numInfo.shift();

    let maxAttendances = findMaxAttendances(numInfo);

    function findMaxAttendances(arr) {
        let max = 0;
        for (let i = 0; i < countOfStudents; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    }

    let maxBonus = 0;
    if (courseLectures > 0) {
        maxBonus = maxAttendances / courseLectures * (5 + additionalBonus);
    }

    print();

    function print() {
        console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
        console.log(`The student has attended ${maxAttendances} lectures.`);
    }
}

bonusScoringSystem(
    [
        1, 0, 0, 0
    ]
);

bonusScoringSystem(
    [
        0, 0, 0
    ]
);

// bonusScoringSystem(
//     [
//         '5', '25', '30',
//         '12', '19', '24',
//         '16', '20'
//     ]
// );

// bonusScoringSystem(
//     [
//         '10', '30', '14', '8',
//         '23', '27', '28', '15',
//         '17', '25', '26', '5',
//         '18'
//     ]
// );