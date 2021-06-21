function sortNumbers(n1, n2, n3) {
    let args = [];
    args.push(n1, n2, n3);
    for (let i = 0; i < args.length; i++) {
        for (let j = i + 1; j < args.length; j++) {
            let num1 = Number(args[j]);
            let num2 = Number(args[i]);
            if (num1 > num2) {
                let currentBigger = num1;
                args[j] = num2;
                args[i] = currentBigger;
            }
        }
    }

    let firstNumber = Number(args[0]);
    let secondNumber = Number(args[1]);
    let thirdNumber = Number(args[2]);

    console.log(firstNumber);
    console.log(secondNumber);
    console.log(thirdNumber);
}

// sortNumbers(2, 1, 3);
// sortNumbers(-2, 1, 3);
// sortNumbers(0, 0, 2);

function englishNameOfTheLastDigit(n) {
    let num = Number(n);

    let lastDigit = num % 10;
    let output = "";
    switch (lastDigit) {
        case 0:
            output = "zero";
            break;
        case 1:
            output = "one";
            break;
        case 2:
            output = "two";
            break;
        case 3:
            output = "three";
            break;
        case 4:
            output = "four";
            break;
        case 5:
            output = "five";
            break;
        case 6:
            output = "six";
            break;
        case 7:
            output = "seven";
            break;
        case 8:
            output = "eight";
            break;
        case 9:
            output = "nine";
            break;
    }
    console.log(output);
}

// first is user input for year, month, day
function nextDay(year, month, day) {
    // here is our reshaping month 0-11, date 1-31
    // here just we need next day so day + 1
    let nextDay = new Date(year, month - 1, day + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}

// nextDay(2016, 9, 30);

function nextDay2(year, month, day) {
    // month is always -1 from user to PC
    let date = new Date(year, month - 1, day);
    // here we get set the day to next day
    date.setDate(date.getDate() + 1);
    // here we have to print year, month +1 because will be
    // showed to the user
    // the date is already updated
    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDate = date.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}

// nextDay2(2016, 9, 30);

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
}

function distanceBetweenPoints(x1, y1, x2, y2) {
    // we will use pythagorean theorem
    // a^2 + b^2 = c^2
    // a & b are both sides of 90 deg triangle
    // c = Math.Sqrt(x^2 + b^2)
    // is the hypotenuse
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);

    // distance is "c"
    let distance = Math.sqrt((a * a) + (b * b));
    console.log(distance);
}

// distanceBetweenPoints(2, 4, 5, 0);
// distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);