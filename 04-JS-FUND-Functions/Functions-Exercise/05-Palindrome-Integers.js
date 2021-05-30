function palindromeIntegers(input = []) {
    let output = [];

    for (let i = 0; i < input.length; i++) {
        if (isPalindrome(input[i])) {
            output.push(true);
        } else {
            output.push(false);
        }
    }
    return output.join('\n');

    function isPalindrome(num) {
        let str = num + '';
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

// console.log(palindromeIntegers([123,323,421,121]));
// console.log(palindromeIntegers([32,2,232,1010]));
