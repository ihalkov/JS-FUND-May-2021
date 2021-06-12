let number = '';

console.log(Number(number));
// 48 to 57

function isNumber(ch = '') {
    let code = ch.charCodeAt(0);
    if (code >= 48 && code <= 57) {
        return true;
    }
    return false;
}

let obj = {
    1: 1
}

console.log(obj['1']);