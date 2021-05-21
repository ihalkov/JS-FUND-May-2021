function printAndSum(num1, num2) {
    let [start, end] = [Number(num1), Number(num2)];
    let numbers = '';
    let sum = 0;
    
    while (start <= end) {
        numbers += start + ' ';
        sum += start++;
    }
    return `${numbers}\nSum: ${sum}`;
}