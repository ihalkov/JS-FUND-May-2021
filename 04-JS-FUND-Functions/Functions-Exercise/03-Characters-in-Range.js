function charactersInRange(ch1 = '', ch2 = '') {
    let [code1, code2] = [ch1.charCodeAt(0), ch2.charCodeAt(0)];
    if (code2 < code1) {
        let temp = code2;
        code2 = code1;
        code1 = temp;
    }

    let output = [];
    for (let i = code1 + 1; i < code2; i++) {
        output.push(String.fromCharCode(i));
    }

    return output.join(' ');
}

// console.log(charactersInRange('a', 'd'));
// console.log(charactersInRange('#', ':'));
// console.log(charactersInRange('C', '#'));