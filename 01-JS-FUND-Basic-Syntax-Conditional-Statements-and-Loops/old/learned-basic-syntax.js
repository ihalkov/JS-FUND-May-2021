// naming of variables to be descriptive, can be 3-4 words even
// don't try to make them short

// don't use the parameter directly, but do make local variable
function printNumbers(number) {
    let currentNumber = number;
    while (currentNumber > 0) {
        console.log(currentNumber);
        currentNumber -= 1;
    }
}

// printNumbers(5);

function checkGrade(grade) {
    if (grade) {
        console.log("Excellent");
    } else {
        console.log("Not Excellent");
    }
}

//  checkGrade(5.5);

// F10 step over (gives next step, but not goes in)
// F11 step into (goes in, deeply)
// Shift + F11 step out

function printNumbers(m, n) {
    for (let i = m; i >= n; i -= 1) {
        console.log(i);
    }
}

// printNumbers(10, 5);
// switch (month) {
//     case 1: console.log("January");
//         break;
//     case 2: console.log("February");
//         break;
//     case 3: console.log("March");
//         break;
//     case 4: console.log("April");
//         break;
//     case 5: console.log("May");
//         break;
//     case 6: console.log("June");
//         break;
//     case 7: console.log("July");
//         break;
//     case 8: console.log("August");
//         break;
//     case 9: console.log("September");
//         break;
//     case 10: console.log("October");
//         break;
//     case 11: console.log("November");
//         break;
//     case 12: console.log("December");
//         break;
// }

//  Ctrl + D can mark all the occurrence of marked word, symbol etc.
//  Shift + Alt + I put cursors at the end of marked rows
// i % 2 !== 0 check for odd number

function sumOfOddNumbers(number) {
    let sum = 0;
    let counter = 0;
    let currentNumber = 1;

    while (counter < number) {
        if (currentNumber % 2 !== 0) {
            console.log(currentNumber);

            sum += currentNumber;
        }
        counter++;
        currentNumber++;
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(10);

// don't use copy paste (can make the same mistake multiplied)
//  write everything manually

// leap year year % 4 === 0 && year % 100 !==0 || year % 400 === 0
// output += ${i}

function triangle(number) {
    for (let i = 0; i <= number; i++) {
        console.log(`${i}`.repeat(i));
    }
}

// Remove trailing zeroes, if any (you can use parseFloat())
console.log(parseFloat(numberToRound.toFixed(precision)));

// Ternary operator
function leapYear(year) {
    let check = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    console.log(check ? "yes" : "no");
}

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

let output = "";
for (let i = 0; i < 5; i++) {
    output += `${i}`;
}
console.log(output);

// for (let i = 1; i <= daysMining; i++) {
//     let currentGoldGr = Number(mineShifts[i - 1]);
//     // if (countDays === 3) {
//     // stealing 30%, so the current amount will be 30% less
//     if (i % 3 === 0) {
//         currentGoldGr *= 0.7;
//         countDays = 0;
//     }
// }