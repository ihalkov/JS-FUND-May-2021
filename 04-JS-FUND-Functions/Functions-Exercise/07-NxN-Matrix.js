function nXnMatrix(num) {
    let row = `${num} `.repeat(num);
    let output = [];
    for (let i = 0; i < num; i++) {
        output.push(row);
    }
    return output.join('\n');
}

// console.log(nXnMatrix(3));
// console.log(nXnMatrix(7));
// console.log(nXnMatrix(2));
