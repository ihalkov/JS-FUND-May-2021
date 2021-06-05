function bombNumbers(numbers, bombInfo) {
    let [bombNum, bombPower] = [...bombInfo];

    while ((ind = numbers.indexOf(bombNum)) !== -1) {
        let [start, count] = findInd(ind);
        numbers.splice(start, count);
    }
    return numbers.length > 0 ? numbers.reduce((acc, curr) => acc + curr) : 0;

    function findInd(ind) {
        let start = ind - bombPower;
        let count = 1 + (bombPower * 2);

        if (start < 0 || start > numbers.length - 1) {
            start = 0;
        }
        return [start, count];
    }
}

// console.log(bombNumbers(
//     [1, 2, 2, 4, 2, 2, 2, 9],
//     [4, 2]
// ));
// console.log(bombNumbers(
//     [1, 4, 4, 2, 8, 9, 1],
//     [9, 3]
// ));
// console.log(bombNumbers(
//     [1, 7, 7, 1, 2, 3],
//     [7, 1]
// ));
// console.log(bombNumbers(
//     [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
//     [2, 1]
// ));

// console.log(bombNumbers(
//     [1],
//     [1, 1]
// ));