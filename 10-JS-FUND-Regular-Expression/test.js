function matchPhoneNumber(numbers = '') {
    // to String because regex works over strings
    numbers = numbers.toString();
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let result = numbers.match(pattern);
    return result.join(', ');
}

console.log(matchPhoneNumber('+359 2 222 2222 +359-2-222-2222'));
