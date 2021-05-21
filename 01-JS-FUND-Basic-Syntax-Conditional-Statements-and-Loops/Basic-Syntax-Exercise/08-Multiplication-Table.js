function multiplicationTable(input) {
    let num = Number(input);
    let output = [];

    for (let i = 1; i <= 10; i++) {
        let currResult = num * i;
        output.push(`${num} X ${i} = ${currResult}`)
    }
    return output.join('\n');
}