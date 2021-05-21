function leapYear(input) {
    let year = Number(input);
    let check = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    if (check) {
        return 'yes';
    }
    return 'no';
}