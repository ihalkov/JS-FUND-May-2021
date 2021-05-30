function factorialDivision(num1, num2) {
    let fact1 = getFactorial(num1);
    let fact2 = getFactorial(num2);
    let result = fact1 / fact2;
    return result.toFixed(2);

    function getFactorial(num) {
        let fact = 1;
        while (num > 1) {
            fact *= num--;
        }
        return fact;
    }
}

// console.log(factorialDivision(5, 2));
// console.log(factorialDivision(6, 2));