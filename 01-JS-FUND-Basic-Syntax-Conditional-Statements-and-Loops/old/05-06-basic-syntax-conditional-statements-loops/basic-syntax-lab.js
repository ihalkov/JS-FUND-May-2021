function multiplyNumBy2(number) {
    console.log(number * 2);
}

function excellentGrade(grade) {
    let output = "Not excellent";
    if (grade >= 5.50) {
        output = "Excellent";
    }
    console.log(output);
}

function printNumbersOneToFive() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

function printNumbersNtoOne(n) {
    let startingNumber = parseInt(n);
    while (startingNumber >= 1) {
        console.log(startingNumber--);
    }
}

function printNumbersMtoN(m, n) {
    let startingNumber = parseInt(m);
    let finalNumber = parseInt(n);
    while (startingNumber >= finalNumber) {
        console.log(startingNumber--);
    }
}

function studentInfo(name, age, grade) {
    let studentName = name;
    let studentAge = age;
    let studentGrade = Number(grade);
    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade.toFixed(2)}`);
}

function monthPrinter(number) {
    let numberOfMonth = parseInt(number);
    switch (numberOfMonth) {
        case 1: console.log("January");
            break;
        case 2: console.log("February");
            break;
        case 3: console.log("March");
            break;
        case 4: console.log("April");
            break;
        case 5: console.log("May");
            break;
        case 6: console.log("June");
            break;
        case 7: console.log("July");
            break;
        case 8: console.log("August");
            break;
        case 9: console.log("September");
            break;
        case 10: console.log("October");
            break;
        case 11: console.log("November");
            break;
        case 12: console.log("December");
            break;
        default:
            console.log("Error!");
    }
}

function foreignLanguages(country) {
    let countryName = country;
    switch (countryName) {
        case "USA":
        case "England":
            console.log("English");
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            console.log("Spanish");
            break;
        default:
            console.log("unknown");
            break;
    }
}

function theatrePromotions(typeOfDay, age) {
    let ageOfPerson = parseInt(age);
    if (ageOfPerson >= 0 && ageOfPerson <= 18) {
        if (typeOfDay === "Weekday") {
            console.log("12$");
        } else if (typeOfDay === "Weekend") {
            console.log("15$");
        } else if (typeOfDay === "Holiday") {
            console.log("5$");
        }
    } else if (ageOfPerson > 18 && ageOfPerson <= 64) {
        if (typeOfDay === "Weekday") {
            console.log("18$");
        } else if (typeOfDay === "Weekend") {
            console.log("20$");
        } else if (typeOfDay === "Holiday") {
            console.log("12$");
        }
    } else if (ageOfPerson > 64 && ageOfPerson <= 122) {
        if (typeOfDay === "Weekday") {
            console.log("12$");
        } else if (typeOfDay === "Weekend") {
            console.log("15$");
        } else if (typeOfDay === "Holiday") {
            console.log("10$");
        }
    } else {
        console.log("Error!");
    }
}

function divisibleBy3() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

function sumOfOddNumbers(n) {
    let sum = 0;
    let totalNumbers = parseInt(n);
    let count = 1;
    let currentNumber = 1;
    while (count <= totalNumbers) {
        if (currentNumber % 2 !== 0) {
            console.log(currentNumber);
            sum += currentNumber;
            count++;
        }
        currentNumber++;
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(["5"]);
sumOfOddNumbers(["3"]);