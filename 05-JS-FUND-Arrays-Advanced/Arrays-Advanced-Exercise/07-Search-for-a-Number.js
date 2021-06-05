function searchForANumber(numbers, instructions) {
    let [take, del, searchedNum] = [...instructions];
    let sequence = numbers.slice(0, take);
    sequence.splice(0, del);

    let count = 0;
    sequence.forEach(el => {
        if (el === searchedNum) {
            count += 1;
        }
    });

    return `Number ${searchedNum} occurs ${count} times.`;
}

// console.log(searchForANumber(
//     [5, 2, 3, 4, 1, 6],
//     [5, 2, 3]
// ));