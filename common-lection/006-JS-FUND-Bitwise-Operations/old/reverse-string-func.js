let message = 'Hello';

function reverseString(str) {
    str = str.split('').reverse().join('');
    return str;
}

console.log(reverseString(message));