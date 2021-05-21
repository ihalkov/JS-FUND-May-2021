function rounding(num, precision) {
    num = Number(num);
    precision = Number(precision);

    if (precision > 15) {
        precision = 15;
    }

    // use parseFloat() to remove trailing zeroes
    num = parseFloat(num.toFixed(precision));
    return num;
}