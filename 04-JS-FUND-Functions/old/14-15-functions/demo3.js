function wrongResultOptimize(numOne, numTwo, numThree) {
    let newArr = [numOne, numTwo, numThree];
    let countNegative = 0;

    for (const element of newArr) {
        if (element === 0) {
            return "Positive";
        } else if (element < 0) {
            countNegative++;
        }
    }

    if (countNegative % 2 === 1) {
        return "Negative";
    }

    return "Positive";
}