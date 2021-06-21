function concatenateNames(firstName, secondName, delimiter) {
    console.log(`${firstName}${delimiter}${secondName}`);
}

function rightPlace(firstWord, character, secondWord) {
    let length = firstWord.length;
    let newWord = "";
    let output = "Not Matched";

    for (let i = 0; i < length; i++) {
        if (firstWord[i] === "_") {
            newWord += character;
        } else {
           newWord += firstWord[i];
        }
    }
    if (newWord === secondWord) {
        output = "Matched";
    }
    console.log(output);
    // console.log(arguments);
}

// rightPlace("Str_ng", "I", "Strong");
// rightPlace("Str_ng", "i", "String");

function integerAndFloat(firstNumber, secondNumber, thirdNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    thirdNumber = Number(thirdNumber);
    let sum = firstNumber + secondNumber + thirdNumber;

    function returnTypeOfNumber(sum) {
        let number = Number(sum);
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
    result ? console.log(`${amazingNumber} Amazing? True`)
    : console.log(`${amazingNumber} Amazing? False`);
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

    console.log(`${numberOfCenturies} centuries = ${years} `
        + `years = ${days} days = ${hours} hours`
            + ` = ${minutes} minutes`);
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

