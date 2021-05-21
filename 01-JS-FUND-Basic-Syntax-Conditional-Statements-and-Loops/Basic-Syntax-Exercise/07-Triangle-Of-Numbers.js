function triangleOfNumbers(input) {
    let num = Number(input);
    let output = [];

    for (let i = 1; i <= num; i++) {
        output.push(`${i} `.repeat(i));
    }
    return output.join('\n');
}