function perfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        return 'We have a perfect number!';
    }
    return 'It\'s not so perfect.';
}

// console.log(perfectNumber(6));
// console.log(perfectNumber(28));
// console.log(perfectNumber(1236498));