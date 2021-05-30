function commonElements(arr1, arr2) {
    let output = [];
    for (const item1 of arr1) {
        for (const item2 of arr2) {
            if (item1 === item2) {
                output.push(item1);
            }
        }
    }
    return output.join('\n');
}

// console.log(commonElements(
//     ['Hey', 'hello', 2, 4, 'Peter', 'e'],
//     ['Petar', 10, 'hey', 4, 'hello', '2']
// ));
// console.log(commonElements(
//     ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
//     ['s', 'o', 'c', 'i', 'a', 'l']
// ));