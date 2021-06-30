// LAB
function concatenateNames(firstName, secondName, delimiter) {
    return `${firstName}${delimiter}${secondName}`;
}

function rightPlace(firstWord, character, secondWord) {
    let length = firstWord.length;
    let newWord = "";

    for (let i = 0; i < length; i++) {
        if (firstWord[i] === "_") {
            newWord += character;
            continue;
        }
        newWord += firstWord[i];
    }

    if (newWord === secondWord) {
        return "Matched";
    }
    return "Not Matched";
}

// rightPlace("Str_ng", "I", "Strong");
// rightPlace("Str_ng", "i", "String");

function integerAndFloat(firstNumber, secondNumber, thirdNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    thirdNumber = Number(thirdNumber);
    let sum = firstNumber + secondNumber + thirdNumber;

    function returnTypeOfNumber(sum) {
        sum = Number(sum);
        return sum % 1 === 0 ? "Integer" : "Float";
    }
    let typeOfNumber = returnTypeOfNumber(sum);
    console.log(`${sum} - ${typeOfNumber}`);
}

function integerAndFloat(firstNumber, secondNumber, thirdNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    thirdNumber = Number(thirdNumber);
    let sum = firstNumber + secondNumber + thirdNumber;

    let wholePart = parseInt(sum);
    wholePart === sum ? console.log(`${sum} - Integer`) : console.log(`${sum} - Float`);
}

function amazingNumbers(num) {
    let amazingNumber = num + "";
    let amazingSum = findSum();


    function findSum() {
        let sum = 0;
        for (let i = 0; i < amazingNumber.length; i++) {
            sum += Number(amazingNumber[i]);
        }
        return sum;
    }

    let result = amazingSum + "";
    result = result.includes("9");
    result ? console.log(`${amazingNumber} Amazing? True`) :
        console.log(`${amazingNumber} Amazing? False`);
}

// amazingNumbers(1233);
// amazingNumbers(999);

function amazingNumbersExample(num) {
    let currentNumber = Number(num);
    let sum = findSum();

    function findSum() {
        let sum = 0;

        while (currentNumber > 0) {
            let digit = currentNumber % 10;
            sum += digit;

            currentNumber = Math.floor(currentNumber / 10);
        }
        return sum;
    }

    if (sum.toString().includes("9")) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

// amazingNumbersExample(1233);
// amazingNumbersExample(999);

function gramophone(band, album, song) {
    let bandName = band.toString();
    let albumName = album.toString();
    let songName = song.toString();

    let plateRotationInSec = 2.5;
    let songDurationInSec = (albumName.length * bandName.length) * songName.length / 2;
    let plateRotations = Math.ceil(songDurationInSec / plateRotationInSec);
    console.log(`The plate was rotated ${plateRotations} times.`);
}

function fuelMoney(distance, passengers, price) {
    let travelDistance = Number(distance);
    let totalPassengers = Number(passengers);
    let dieselPrice = Number(price);

    let fuelConsumption = 7;
    let passengersConsumption = totalPassengers * 0.100;

    let neededFuel = (travelDistance / 100) * fuelConsumption;
    neededFuel += passengersConsumption;
    let neededMoney = neededFuel * dieselPrice;
    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}

// fuelMoney(260, 9, 2.49);
// fuelMoney(90, 14, 2.88);

function centuriesToMinutes(centuries) {
    let numberOfCenturies = parseInt(centuries);

    let years = numberOfCenturies * 100;
    let days = Math.floor(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${numberOfCenturies} centuries = ${years} ` +
        `years = ${days} days = ${hours} hours` +
        ` = ${minutes} minutes`);
}

// centuriesToMinutes(1);
// centuriesToMinutes(5);

function specialNumbers(n) {
    let totalNumbers = parseInt(n);

    let sumOfDigits = 0;
    for (let i = 1; i <= totalNumbers; i++) {
        sumOfDigits = calcSumOfDigits(i);
        switch (sumOfDigits) {
            case 5:
            case 7:
            case 11:
                console.log(`${i} -> True`);
                break;
            default:
                console.log(`${i} -> False`);
                break;
        }
    }

    function calcSumOfDigits(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = parseInt(num / 10);
        }
        return sum;
    }
}

// specialNumbers(15);

function triplesOfLatinLetters(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                let ch1 = String.fromCharCode(97 + i);
                let ch2 = String.fromCharCode(97 + j);
                let ch3 = String.fromCharCode(97 + k);
                console.log(`${ch1}${ch2}${ch3}`);
            }
        }
    }
}

function triplesExample(num) {
    let firstNum = 'a'.charCodeAt(0);
    let lastNum = firstNum + num;
    for (let i = firstNum; i < lastNum; i++) {
        for (let j = firstNum; j < lastNum; j++) {
            for (let k = firstNum; k < lastNum; k++) {
                let ch1 = String.fromCharCode(i);
                let ch2 = String.fromCharCode(j);
                let ch3 = String.fromCharCode(k);
                console.log(`${ch1}${ch2}${ch3}`);
            }
        }
    }
}

// takes to much memory
// triplesExample(3);

// EXERCISE
// two ways
function sumDigits(n) {
    let num = Number(n);
    let sum = 0;
    while (num > 0) {
        let currentDigit = num % 10;
        num = Number(num / 10);
        sum += currentDigit;
    }
    return sum;
}

function sumDigits(input = '') {
    let sum = 0;
    input = input.toString();
    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }
    return sum;
}

// typeOf verification
function charsToString(ch1, ch2, ch3) {
    let result = "";

    if (typeof ch1 !== "string" || typeof ch2 !== "string" || typeof ch3 !== "string") {
        ch1 = ch1.toString();
        ch2 = ch2.toString();
        ch3 = ch3.toString();
    }
    result = ch1 + ch2 + ch3;
    return result;
}

function charsToString(ch1, ch2, ch3) {
    return ch1 + ch2 + ch3;
}

// console.log(charsToString(5, "5", 2));

function townInfo(name, population, area) {
    return `Town ${name} has population of ${population} and area ${area} square km.`;
}

// typeOf verification
function townInfoExample(cityName, population, area) {
    let result = "";
    if (typeof cityName === "string" &&
        typeof population === "string" &&
        typeof area === "string") {
        result = `Town ${cityName} has population of ${population} and area ${area} square km.`;
    } else {
        cityName = cityName.toString();
        population = Number(population);
        area = Number(area);
        if (isNaN(population) || isNaN(area)) {
            console.log("Invalid input");
        } else {
            result = `Town ${cityName} has population of ${population} and area ${area} square km.`;
        }
    }
    console.log(result);
}

// solve with typeof checks
function metersToKm(num) {
    let meters = num;
    let kilometers = 0;
    let output = "";
    if (typeof meters !== "number") {
        meters = Number(meters);
        if (isNaN(meters)) {
            output = "Invalid input";
        } else {
            kilometers = meters / 1000;
            output = kilometers.toFixed(2);
        }
    } else {
        kilometers = meters / 1000;
        output = kilometers.toFixed(2);
    }
    console.log(output);
}
// metersToKm(1852);
// metersToKm("798");
// metersToKm("asd");

function metersToKm(num) {
    let meters = num;
    let kilometers = 0;
    if (typeof meters !== "number") {
        meters = Number(meters);
        if (isNaN(meters)) {
            return "Invalid input";
        }
    }
    kilometers = meters / 1000;
    return kilometers.toFixed(2);
}
// console.log(metersToKm(1852));
// console.log(metersToKm("798"));
// console.log(metersToKm("asd"));

function poundsToDollars(pounds) {
    let dollars = 0;
    if (typeof pounds !== "number") {
        pounds = Number(pounds);
        if (isNaN(pounds)) {
            return "Invalid input";
        }
    }
    dollars = pounds * 1.31;
    return dollars.toFixed(3);
}

// console.log(poundsToDollars(80));
// console.log(poundsToDollars(39));
// console.log(poundsToDollars("104"));
// console.log(poundsToDollars("1asd"));

function reversedChars(ch1, ch2, ch3) {
    if (typeof ch1 !== "string" ||
        typeof ch2 !== "string" ||
        typeof ch3 !== "string") {
        ch1 = ch1.toString();
        ch2 = ch2.toString();
        ch3 = ch3.toString();
    }
    return `${ch3} ${ch2} ${ch1}`;
}

// console.log(reversedChars("1", "2", "4"));
// console.log(reversedChars("1", "2", 4));

function lowerOrUpper(ch1) {
    if (typeof ch1 !== "string") {
        ch1 = ch1.toString();
    }
    if (ch1 === ch1.toLowerCase()) {
        return "lower-case";
    }
    return "upper-case";
}

// console.log(lowerOrUpper("f"));
// console.log(lowerOrUpper("L"));
// console.log(lowerOrUpper(5));

function lowerOrUpperExample(ch1) {
    let result = "lower-case";
    if (typeof ch1 !== "string") {
        ch1 = ch1.toString();
    }
    if (ch1.charCodeAt(0) >= 60 &&
        ch1.charCodeAt(0) <= 90) {
        result = "upper-case";
    }
    console.log(result);
}

// lowerOrUpperExample("f");
// lowerOrUpperExample("L");
// lowerOrUpperExample(5);

function calculator(n1, sign, n2) {
    let numberOne = n1;
    let operator = sign;
    let numberTwo = n2;
    let result = 0;

    if (typeof numberOne !== "number" ||
        typeof operator !== "string" ||
        typeof numberTwo !== "number") {
        numberOne = Number(numberOne);
        operator = operator.toString();
        numberTwo = Number(numberTwo);
        if (isNaN(numberOne) || isNaN(numberTwo)) {
            result = "Invalid input";
        }
    }

    switch (operator) {
        case "*":
            result = numberOne * numberTwo;
            break;
        case "/":
            result = numberOne / numberTwo;
            break;
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        default:
            result = "Invalid operator";
            break;
    }
    if (!isNaN(result)) {
        return result.toFixed(2);
    }
    return result;
}

// calculator("5", "+", "5");
// calculator("5", 5, 5);

function gladiatorExpenses(lost, price1, price2, price3, price4) {
    let lostFightsCount = lost;
    let helmetPrice = price1;
    let swordPrice = price2;
    let shieldPrice = price3;
    let armourPrice = price4;

    let expenses = 0;
    let shieldBroken = 0;
    // loss repair
    // helmet, sword, shield, armour
    // lost fights count

    // second game broken helmet
    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice;
        }
        if (i % 3 === 0) {
            expenses += swordPrice;
        }
        if (i % 6 === 0) {
            expenses += shieldPrice;
            shieldBroken += 1;
            if (shieldBroken % 2 === 0) {
                expenses += armourPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
    // third game sword broken
    // if sword and helmet broke >> shield also broken
    // shieldBrokenCount = everySecondTime armour also broke
}

// gladiatorExpenses(7, 2, 3, 4, 5);
// gladiatorExpenses(23, 12.50, 21.50, 40, 200);

function spiceMustFlow(start) {
    let startingYield = start;
    let storageSpice = 0;
    let workersExpenses = 26;
    let daysOperated = 0;

    while (startingYield >= 100) {
        storageSpice += startingYield;
        storageSpice -= workersExpenses;
        daysOperated += 1;
        startingYield -= 10;
    }
    // total amount of spice
    if (storageSpice >= 26) {
        storageSpice -= workersExpenses;
    }
    // starting yield how much on first day
    // second day drops with 10
    // third 10 less than second

    // profitable? when yield is at least 100
    // less than 100 abandon the source

    // mining crew consumes 26 spices every day
    // additional 26 after abandon
    // workers cannot consume more spice than in storage

    // log how many days mine operated
    // total amount of spice extracted

    console.log(daysOperated);
    console.log(storageSpice);
}

// spiceMustFlow(111);

// MORE EXERCISE
function digitsWithWords(word) {
    let digitWord = word;
    let digit = 0;
    switch (digitWord) {
        case "zero":
            break;
        case "one":
            digit = 1;
            break;
        case "two":
            digit = 2;
            break;
        case "three":
            digit = 3;
            break;
        case "four":
            digit = 4;
            break;
        case "five":
            digit = 5;
            break;
        case "six":
            digit = 6;
            break;
        case "seven":
            digit = 7;
            break;
        case "eight":
            digit = 8;
            break;
        case "nine":
            digit = 9;
            break;
        default:
            break;
    }
    console.log(digit);
}

function primeNumberChecker(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(primeNumberChecker(7));
// console.log(primeNumberChecker(8));
// console.log(primeNumberChecker(81));

function cone(r, h) {
    let radius = r;
    let height = h;

    let volume = (1 / 3) * Math.PI * radius * radius * height;
    let slantHeight = Math.sqrt((radius * radius) + (height * height));
    let lateralSurfaceArea = Math.PI * radius * slantHeight;
    let baseSurfaceArea = Math.PI * radius * radius;
    let totalSurfaceArea = lateralSurfaceArea + baseSurfaceArea;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}

// cone(3, 5);
// cone(3.3, 7.8);

function biggestOfThreeNumbers(n1, n2, n3) {
    let firstNumber = n1;
    let secondNumber = n2;
    let thirdNumber = n3;

    let biggestNum = firstNumber;

    if (secondNumber > biggestNum) {
        biggestNum = secondNumber;
    }

    if (thirdNumber > biggestNum) {
        biggestNum = thirdNumber;
    }
    console.log(biggestNum);
}

// biggestOfThreeNumbers(-2, 7, 3);
// biggestOfThreeNumbers(130, 5, 99);
// biggestOfThreeNumbers(43, 43.2, 43.1);

function biggestOfThreeNumbersTest(n1, n2, n3) {
    let firstNumber = n1;
    let secondNumber = n2;
    let thirdNumber = n3;

    let biggestNum = Math.max(firstNumber, secondNumber, thirdNumber);
    console.log(biggestNum);
}

function binaryToDecimal(binary) {
    let binaryNum = binary.toString();
    let toDecimal = 0;

    function returnDecimal() {
        let decimal = 0;
        let power = 0;
        for (let i = binaryNum.length - 1; i >= 0; i--) {
            // 00001001 start from last so 10010000 1 * 2^0 + 0 * 2^1 + 0 * 2^2 + 1 * 2^3
            decimal += parseInt(binaryNum[i]) * Math.pow(2, power);
            power += 1;
        }
        return decimal;
    }
    toDecimal = returnDecimal();
    console.log(toDecimal);
}

// binaryToDecimal("00001001");
// binaryToDecimal("11110000");

function chessBoard(n) {
    let size = n;

    console.log("<div class=\"chessboard\">");

    for (let row = 1; row <= size; row++) {
        returnRow(row);
    }
    console.log("</div>");

    function returnRow(row) {
        console.log("<div>");
        for (let col = 1; col <= size; col++) {
            returnEachCol(row, col);
        }
        console.log("</div>");
    }

    function returnEachCol(row, col) {
        if ((row + col) % 2 === 0) {
            console.log("<span class=\"black\"></span>");
        } else {
            console.log("<span class=\"white\"></span>");
        }
    }
}

// chessBoard(3);

function triangleArea(a, b, c) {

    function heronsFormula() {

        let semiPerimeter = returnSemiPerimeter();
        let area = calcArea();

        console.log(area);

        function calcArea() {
            let area = Math.sqrt(semiPerimeter *
                (semiPerimeter - a) * (semiPerimeter - b) *
                (semiPerimeter - c));
            return area;
        }

        function returnSemiPerimeter() {
            let s = (a + b + c) / 2;
            return s;
        }
    }
    heronsFormula();
}

// triangleArea(2, 3.5, 4);