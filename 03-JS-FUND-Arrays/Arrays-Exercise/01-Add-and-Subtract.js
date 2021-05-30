function addAndSubtract(input) {
    //     •	If the number is even - add to its value its index position
    // •	If the number is odd - subtract to its value its index position

    let newSum = 0;
    let oldSum = 0;

    for (let i = 0; i < input.length; i++) {
        let currNum = input[i];
        oldSum += currNum;

        if (currNum % 2 === 0) {
            currNum += i;
        } else {
            currNum -= i;
        }

        input[i] = currNum;
        newSum += currNum;
    }

    return getOutput();

    function getOutput() {
        let output = [];
        output.push(`[ ${input.join(', ')} ]`);
        output.push(oldSum);
        output.push(newSum);
        return output.join('\n');
    }
}

// console.log(addAndSubtract([5, 15, 23, 56, 35]));
// console.log(addAndSubtract([-5, 11, 3, 0, 2]));