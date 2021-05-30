function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;

    while (num > 0) {
        let curr = num % 10;
        num = Math.floor(num / 10);
        if (curr % 2 === 0) {
            evenSum += curr;
        } else {
            oddSum += curr;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

// console.log(oddAndEvenSum(1000435));
// console.log(oddAndEvenSum(3495892137259234));