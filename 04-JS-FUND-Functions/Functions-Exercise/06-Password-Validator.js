function passwordValidator(input = '') {
    let pass = input;
    let output = [];

    checkLength(pass);
    checkCorrectChars(pass);
    check2Digits(pass);

    if (output.length === 0) {
        output.push('Password is valid');
    }
    return output.join('\n');

    function check2Digits(str = '') {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            let chCode = str[i].charCodeAt(0);
            if (chCode >= 48 && chCode <= 57) {
                count += 1;
                if (count >= 2) {
                    return;
                }
            }
        }
        output.push("Password must have at least 2 digits");
    }

    function checkLength(str) {
        if (str.length >= 10 || str.length < 6) {
            output.push('Password must be between 6 and 10 characters');
        }
    }

    function checkCorrectChars(str = '') {
        str = str.toLowerCase();
        for (let i = 0; i < str.length; i++) {
            let chCode = str[i].charCodeAt(0);
            if ((chCode < 48 || chCode > 57) && (chCode < 97 || chCode > 122)) {
                output.push('Password must consist only of letters and digits');
                return;
            }
        }
    }
}

// console.log(passwordValidator('logIn'));
// console.log(passwordValidator('MyPass123'));
// console.log(passwordValidator('Pa$s$s'));