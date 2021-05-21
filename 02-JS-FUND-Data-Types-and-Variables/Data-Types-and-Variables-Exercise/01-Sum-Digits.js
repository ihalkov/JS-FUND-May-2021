function sumDigits(input = '') {
    let sum = 0;
    input = input.toString();
    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }
    return sum;
}