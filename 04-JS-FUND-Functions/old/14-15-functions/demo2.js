function funcCombination(num, operation) {
    let result = operation(num);
    console.log(result);
}

// both are the same
// funcCombination(5, multiply);
funcCombination(5, (a) => a * a); // with one param we can remove ()
funcCombination(2, x => ++x);