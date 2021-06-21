function solution(str) {
    let length = str.length;

    if (length % 2 !== 0) {
        // odd
        str += '_';
    }

    if (str === '') {
        return [];
    }
    let regex = /(.{2})/g;
    let result = [];
    result = str.match(regex);
    return result;
}

console.log(solution(''));
console.log(solution('abc'));
console.log(solution('abcdef'));