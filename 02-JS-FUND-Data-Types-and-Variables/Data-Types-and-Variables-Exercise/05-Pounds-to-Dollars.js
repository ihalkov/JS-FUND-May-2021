function poundsToDollars(input) {
    let pounds = Number(input);
    let dollars = pounds * 1.31;
    return dollars.toFixed(3);
}