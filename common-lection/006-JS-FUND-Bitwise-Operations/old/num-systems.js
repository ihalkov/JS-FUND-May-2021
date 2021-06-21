let binary = 11110;
let base = 2;

function convertBinToDec(binNum, base) {
    let strBin = binNum + '';

    let power = strBin.length - 1;
    let ind = 0;
    let dec = 0;
    while (ind < strBin.length) {
        dec += Number(strBin[ind]) * Math.pow(base, power);
        power -= 1;
        ind += 1;
    }

    return dec;
}

let decimalNum = convertBinToDec(binary, base);
console.log(decimalNum);

let decNumber = 174;

function convertDecToBin(decNum, base) {
    let bin = '';

    while (decNum > 0) {
        bin = (decNum % base) + bin;
        decNum = Math.floor(decNum / base);
    }

    return bin;
}

let binNumber = convertDecToBin(decNumber, base);
console.log(binNumber);

let number = 0;
function numSysConverter(num, from, to) {
    // binary to dec, to hex, to octal
    // hex to octal to dec
}
