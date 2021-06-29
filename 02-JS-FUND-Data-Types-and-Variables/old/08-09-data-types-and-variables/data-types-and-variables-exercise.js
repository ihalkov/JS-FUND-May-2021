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

function poundsToDollars(pounds) {
    let dollars = 0;
    let output = "";
    if (typeof pounds !== "number") {
        pounds = Number(pounds);
        if (isNaN(pounds)) {
            output = "Invalid input";
        } else {
            dollars = pounds * 1.31;
            output = dollars.toFixed(3);
        }
    } else {
        dollars = pounds * 1.31;
        output = dollars.toFixed(3);
    }
    console.log(output);
}

// poundsToDollars(80);
// poundsToDollars(39);
// poundsToDollars("104");
// poundsToDollars("1asd");

function reversedChars(ch1, ch2, ch3) {
    let result = "";
    if (typeof ch1 !== "string" ||
        typeof ch2 !== "string" ||
        typeof ch3 !== "string") {
        ch1 = ch1.toString();
        ch2 = ch2.toString();
        ch3 = ch3.toString();
    }
    result = `${ch3} ${ch2} ${ch1}`;
    console.log(result);
}

// reversedChars("1", "2", "4");
// reversedChars("1", "2", 4);

function lowerOrUpper(ch1) {
    let result = "upper-case";
    if (typeof ch1 !== "string") {
        ch1 = ch1.toString();
    }
    if (ch1 === ch1.toLowerCase()) {
        result = "lower-case";
    }
    console.log(result);
}

// lowerOrUpper("f");
// lowerOrUpper("L");
// lowerOrUpper(5);

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
        console.log(result.toFixed(2));
    } else {
        console.log(result);
    }
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

