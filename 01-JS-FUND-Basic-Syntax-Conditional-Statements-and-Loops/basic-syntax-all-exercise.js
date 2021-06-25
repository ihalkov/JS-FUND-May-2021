// === LAB ===
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
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
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

// sumOfOddNumbers(["5"]);
// sumOfOddNumbers(["3"]);

// === EXERCISE ===
function ages(input) {
    let num = Number(input);

    if (num >= 0 && num <= 2) {
        return 'baby';
    } else if (num >= 3 && num <= 13) {
        return 'child';
    } else if (num >= 14 && num <= 19) {
        return 'teenager';
    } else if (num >= 20 && num <= 65) {
        return 'adult';
    } else if (num >= 66) {
        return 'elder';
    } else {
        return 'out of bounds';
    }
}

// console.log(ages(20));
// console.log(ages(1));
// console.log(ages(100));

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

function division(input) {
    let num = Number(input);
    if (num % 10 === 0) {
        return 'The number is divisible by 10';
    } else if (num % 7 === 0) {
        return 'The number is divisible by 7';
    } else if (num % 6 === 0) {
        return 'The number is divisible by 6';
    } else if (num % 3 === 0) {
        return 'The number is divisible by 3';
    } else if (num % 2 === 0) {
        return 'The number is divisible by 2';
    }
    return 'Not divisible';
}

// old
function vacation(people, group, day) {
    let numberOfPeople = Number(people);
    let typeOfGroup = group;

    let totalPrice = 0;
    let singlePrice = 0;

    singlePrice = returnSinglePrice(typeOfGroup, day);

    function returnSinglePrice(typeOfGroup, day) {
        if (typeOfGroup === "Students") {
            switch (day) {
                case "Friday":
                    singlePrice = 8.45;
                    break;
                case "Saturday":
                    singlePrice = 9.80;
                    break;
                case "Sunday":
                    singlePrice = 10.46;
                    break;
            }
            if (numberOfPeople >= 30) {
                singlePrice = singlePrice * 0.85;
            }
        } else if (typeOfGroup === "Business") {
            switch (day) {
                case "Friday":
                    singlePrice = 10.90;
                    break;
                case "Saturday":
                    singlePrice = 15.60;
                    break;
                case "Sunday":
                    singlePrice = 16;
                    break;
            }
        } else if (typeOfGroup === "Regular") {
            switch (day) {
                case "Friday":
                    singlePrice = 15;
                    break;
                case "Saturday":
                    singlePrice = 20;
                    break;
                case "Sunday":
                    singlePrice = 22.50;
                    break;
            }
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                singlePrice = singlePrice * 0.95;
            }
        }
        return singlePrice;
    }

    if (typeOfGroup === "Business" && numberOfPeople >= 100) {
        numberOfPeople -= 10;
    }
    totalPrice = numberOfPeople * singlePrice;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

// vacation(30, "Students", "Sunday");
// vacation(40, "Regular", "Saturday");

// NEW
function vacation(groupCount, type, day) {
    let days = {
        'Friday': 0,
        'Saturday': 1,
        'Sunday': 2
    };
    let table = {
        'Students': [8.45, 9.80, 10.46],
        'Business': [10.90, 15.60, 16],
        'Regular': [15, 20, 22.50]
    };

    let ind = days[day];
    let singlePrice = table[type][ind];
    let disc = 1;

    if (type === 'Students' && groupCount >= 30) {
        disc = 0.85;
    } else if (type === 'Business' && groupCount >= 100) {
        groupCount -= 10;
    } else if (type === 'Regular' && (groupCount >= 10 && groupCount <= 20)) {
        disc = 0.95;
    }

    let total = singlePrice * groupCount * disc;
    return `Total price: ${total.toFixed(2)}`;
}

// console.log(vacation(30,
//     "Students",
//     "Sunday"
// ));
// console.log(vacation(40,
//     "Regular",
//     "Saturday"
// ));


function leapYear(input) {
    let year = Number(input);
    let check = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return check ? 'yes' : 'no';
}

// OLD
function printNumbersAndSum(firstNumber, lastNumber) {
    let currentNumber = firstNumber;
    let sequenceOfNumbers = "";
    let sum = 0;
    while (currentNumber <= lastNumber) {
        sequenceOfNumbers += currentNumber + " ";

        sum += currentNumber;
        currentNumber += 1;
    }
    console.log(sequenceOfNumbers);
    console.log(`Sum: ${sum}`);
}

// NEW
function printAndSum(num1, num2) {
    let [start, end] = [Number(num1), Number(num2)];
    let numbers = '';
    let sum = 0;

    while (start <= end) {
        numbers += start + ' ';
        sum += start++;
    }
    return `${numbers}\nSum: ${sum}`;
}

function triangleOfNumbers(input) {
    let num = Number(input);
    let output = [];

    for (let i = 1; i <= num; i++) {
        output.push(`${i} `.repeat(i));
    }
    return output.join('\n');
}

function multiplicationTable(input) {
    let num = Number(input);
    let output = [];
    for (let i = 1; i <= 10; i++) {
        output.push(`${num} X ${i} = ${num * i}`)
    }
    return output.join('\n');
}

// console.log(multiplicationTable(7));


function login(arrayOfStrings) {
    function reversedUsername(username) {
        let usernameString = String(username);
        let index = usernameString.length - 1;
        let reversed = "";
        while (index >= 0) {
            reversed += usernameString[index];
            index -= 1;
        }
        return reversed;
    }

    let username = arrayOfStrings[0];
    let password = reversedUsername(username);
    let count = 0;
    let currentPassword = arrayOfStrings[count];
    do {
        count += 1;
        currentPassword = arrayOfStrings[count];
        if (currentPassword === password) {
            console.log(`User ${username} logged in.`);
            break;
        }
        if (count >= 4) {
            console.log(`User ${username} blocked!`);
            break;
        }

        console.log("Incorrect password. Try again.");
    } while (currentPassword !== password);
}

// login(['Acer', 'login', 'go', 'let me in', 'recA']);
// login(['momo', 'omom']);
// login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);


// stone, marble, lapis lazuli and gold
// base width x length, reduced by 2 blocks, 1 by each side, increment height of each step
// bulk out of stone
// outer layer marble
// every fifth step is lapis lazuli
// final step is gold

// 1x1 blocks, height = to given increment
// decorative stone for one step is width x length by 2 blocks one from each side,
// find are and multiply by increment

// Output:
// total of each material, rounded up
// final height of the pyramid rounded down

// Constraints:
// base always integer > 0
// increment number > 0
// Numbers.MAX_SAFE_INTEGER will never be exceeded

function thePyramidOfKingDjoser(base, increment) {
    function findDecorationStone(baseOfPyramid, incrementOfPyramid) {
        let decorationBase = baseOfPyramid;
        let decorationStone = ((4 * decorationBase) - 4) * incrementOfPyramid;
        return decorationStone;
    }

    function findStone(baseOfPyramid) {
        let stoneBase = baseOfPyramid - 2;
        return (stoneBase * stoneBase) * incrementOfPyramid;
    }

    let baseOfPyramid = parseInt(base);
    let incrementOfPyramid = Number(increment);

    let totalStone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let count = 1;
    let height = 0;

    while (baseOfPyramid >= 1) {
        if (baseOfPyramid > 2) {
            let stoneOnGivenLevel = findStone(baseOfPyramid);
            totalStone += stoneOnGivenLevel;

            if (count !== 5) {
                let currentMarbleLevel = findDecorationStone(baseOfPyramid, incrementOfPyramid);
                marble += currentMarbleLevel;
            } else if (count === 5) {
                let currentLapisLevel = findDecorationStone(baseOfPyramid, incrementOfPyramid);
                lapis += currentLapisLevel;
                count = 0;
            }
        } else {
            gold = (baseOfPyramid * baseOfPyramid) * incrementOfPyramid;
        }

        // check height
        count += 1;
        height += 1;
        baseOfPyramid -= 2;
    }
    height *= incrementOfPyramid;

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

// thePyramidOfKingDjoser(11, 1);
// thePyramidOfKingDjoser(11, 0.75);
// thePyramidOfKingDjoser(12, 1);
// thePyramidOfKingDjoser(23, 0.5);

function bitcoinMining(mineShifts) {
    // 1 Bitcoin	11949.16 lv.
    // 1 g of gold	67.51 lv.
    let daysMining = mineShifts.length;
    let totalGoldInLv = 0;

    let bitcoinInLv = 11949.16;
    let goldGrInLv = 67.51;

    let totalBitcoins = 0;
    // firstBitcoinDay is undefined
    let firstBitcoinDay;

    for (let i = 1; i <= daysMining; i++) {
        let currentGoldGr = Number(mineShifts[i - 1]);
        // if (countDays === 3) {
        // stealing 30%, so the current amount will be 30% less
        if (i % 3 === 0) {
            currentGoldGr *= 0.7;
            countDays = 0;
        }

        totalGoldInLv += currentGoldGr * goldGrInLv;

        if (totalGoldInLv >= bitcoinInLv) {
            // firstBitcoinDay += i + 1;
            if (firstBitcoinDay === undefined) {
                // later is already defined so will not enter in this if :D
                firstBitcoinDay = i;
            }
            let currentBitcoins = Math.floor(totalGoldInLv / bitcoinInLv);
            totalBitcoins += currentBitcoins;
            totalGoldInLv = totalGoldInLv % bitcoinInLv;
        }
    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (firstBitcoinDay !== undefined) {
        // if (totalBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalGoldInLv.toFixed(2)} lv.`);
}

// bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100]);
// bitcoinMining([3124.15, 504.212, 2511.124]);

// MORE EXERCISE
function sortNumbers(n1, n2, n3) {
    let args = [n1, n2, n3];
    // args.push(n1, n2, n3);
    for (let i = 0; i < args.length - 1; i++) {
            let num1 = Number(args[i]);
            let num2 = Number(args[i + 1]);
            if (num1 > num2) {
                let currentBigger = num1;
                args[i] = num2;
                args[i + 1] = currentBigger;
            }
    }

    // let firstNumber = Number(args[0]);
    // let secondNumber = Number(args[1]);
    // let thirdNumber = Number(args[2]);

    // console.log(firstNumber);
    // console.log(secondNumber);
    // console.log(thirdNumber);

    return args.join('\n');
}

// console.log(sortNumbers(2, 1, 3));
// console.log(sortNumbers(-2, 1, 3));
// console.log(sortNumbers(0, 0, 2));

function englishNameOfTheLastDigit(n) {
    let num = Number(n);

    let lastDigit = num % 10;
    // can have return instead of output
    // can be in object and return the end result when accessed particular key
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
// nextDay(1991, 7, 7);

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