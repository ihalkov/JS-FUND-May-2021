function ages(input) {
    let num = Number(input);

    if (num >= 0 && num <= 2) {
        return 'baby';
    } else if (num >= 3 && num <= 13) {
        return 'child';
    } else if (num >= 14 && num <= 19) {
        return 'teenager';
    } else if (num >= 20 && num <= 65) {
        return 'adult';
    } else if (num >= 66) {
        return 'elder';
    } else {
        return 'out of bounds';
    }
}

// console.log(ages(20));
// console.log(ages(1));
// console.log(ages(100));