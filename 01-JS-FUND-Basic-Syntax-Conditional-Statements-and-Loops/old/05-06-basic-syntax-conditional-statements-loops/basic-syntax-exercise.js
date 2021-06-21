function ages(age) {
    let personAge = parseInt(age);
    let output = "";
    if (personAge >= 0 && personAge <= 2) {
        output = "baby";
    } else if (personAge >= 3 && personAge <= 13) {
        output = "child";
    } else if (personAge >= 14 && personAge <= 19) {
        output = "teenager";
    } else if (personAge >= 19 && personAge <= 65) {
        output = "adult";
    } else if (personAge >= 66) {
        output = "elder";
    } else {
        output = "out of bounds";
    }
    console.log(output);
}

// ages(["20"]);
// ages(["-1"]);
// ages(["100"]);

function rounding(number, precision) {
    let numberToRound = parseFloat(number);
    if (precision > 15) {
        precision = 15;
    }
    console.log(parseFloat(numberToRound.toFixed(precision)));
}

// rounding(3.1415926535897932384626433832795, 2);
// rounding(10.5, 3);

function division(number) {
    let divisibleNumber = parseInt(number);
    let output = "Not divisible";
    if (divisibleNumber % 10 === 0) {
        output = "The number is divisible by 10";
    } else if (divisibleNumber % 7 === 0) {
        output = "The number is divisible by 7";
    } else if (divisibleNumber % 6 === 0) {
        output = "The number is divisible by 6";
    } else if (divisibleNumber % 3 === 0) {
        output = "The number is divisible by 3";
    } else if (divisibleNumber % 2 === 0) {
        output = "The number is divisible by 2";
    }
    console.log(output);
}

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

function leapYear(year) {
    let check = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    console.log(check ? "yes" : "no");
}

// leapYear(1984);
// leapYear(2003);
// leapYear(4);

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

function triangleOfNumbers(lastNumber) {
    for (let i = 1; i <= lastNumber; i++) {
        console.log(`${i} `.repeat(i));
    }
}

function multiplicationTable(number) {
    number = parseInt(number);
    let product = 0;
    for (let i = 1; i <= 10; i++) {
        product = number * i;
        console.log(`${number} X ${i} = ${product}`);
    }
}

function login(arrayOfStrings) {
    let username = arrayOfStrings[0];

    let password = reversedUsername(username);
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

        function findDecorationStone(baseOfPyramid, incrementOfPyramid) {
            let decorationBase = baseOfPyramid;
            let decorationStone = ((4 * decorationBase) - 4) * incrementOfPyramid;
            return decorationStone;
        }

        function findStone(baseOfPyramid) {
            let stoneBase = baseOfPyramid - 2;
            return (stoneBase * stoneBase) * incrementOfPyramid;
        }
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

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
