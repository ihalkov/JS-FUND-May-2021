function sumDigits(input = '') {
    let sum = 0;
    input = input.toString();
    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }
    return sum;
}

function charsToString(ch1, ch2, ch3) {
    return ch1 + ch2 + ch3;
}

function townInfo(name, population, area) {
    return `Town ${name} has population of ${population} and area ${area} square km.`;
}

function convertMetersToKilometers(input) {
    let meters = Number(input);
    let km = meters / 1000;
    return km.toFixed(2);
}

function poundsToDollars(input) {
    let pounds = Number(input);
    let dollars = pounds * 1.31;
    return dollars.toFixed(3);
}

function reversedChars(ch1, ch2, ch3) {
    return `${ch3} ${ch2} ${ch1}`;
}

function lowerOrUpper(ch) {
    if (ch === ch.toUpperCase()) {
        return 'upper-case';
    }
    return 'lower-case';
}