function carWash(arrOfCommands = []) {
    let washingCommands = arrOfCommands;
    let washingValue = 0;

    let putSoap = x => x + 10;
    let putWater = x => x + (x * 0.2);
    let getVacuumCleaner = x => x + (x * 0.25);
    let hadMud = x => x - (x * 0.1);

    washingValue = washing(washingCommands, washingValue);
    printResult(washingValue);

    function printResult(res) {
        console.log(`The car is ${res.toFixed(2)}% clean.`);
    }

    function washing(commands, value) {
        let numOfCommands = commands.length;

        for (let i = 0; i < numOfCommands; i++) {
            let currentCommand = commands[i];
            switch (currentCommand) {
                case 'soap':
                    value = putSoap(value);
                    break;
                case 'vacuum cleaner':
                    value = getVacuumCleaner(value);
                    break;
                case 'mud':
                    value = hadMud(value);
                    break;
                case 'water':
                    value = putWater(value);
                    break;
            }

        }

        return value;
    }
}

// carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);

function numberModification(input) {
    let inputNumber = input;

    let average = getAverageOfDigits(inputNumber);
    while (average <= 5) {
        inputNumber = appendNine(inputNumber);
        average = getAverageOfDigits(inputNumber);
    }

    console.log(inputNumber);

    function appendNine(num) {
        num = num + "9";
        num = Number(num);
        return num;
    }

    function getAverageOfDigits(num) {
        let count = 0;
        let sum = 0;

        while (num > 0) {
            let digit = getDigit(num);
            sum += digit;
            num = updateNum(num);
            count += 1;
        }

        return sum / count;
    }

    function updateNum(num) {
        num /= 10;
        return Math.floor(num);
    }

    function getDigit(num) {
        let digit = num % 10;
        return digit;
    }
}

// numberModification(101);
// numberModification(5835);

function pointsValidation(input) {
    // two points [x1, y1, x2, y2]

    let x1 = input[0];
    let y1 = input[1];

    let x2 = input[2];
    let y2 = input[3];

    let pointOneToZero = isValidDistance(x1, y1, 0, 0);
    let pointTwoToZero = isValidDistance(x2, y2, 0, 0);
    let pointOneToTwo = isValidDistance(x1, y1, x2, y2);

    printResult();

    function printResult() {
        console.log(`{${x1}, ${y1}} to {0, 0} is ${pointOneToZero}`);
        console.log(`{${x2}, ${y2}} to {0, 0} is ${pointTwoToZero}`);
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${pointOneToTwo}`);
    }

    function isValidDistance(x1, y1, x2, y2) {
        let distance = distanceBetweenPoints(x1, y1, x2, y2);
        let copyOfDistance = parseInt(distance);
        if (distance !== copyOfDistance) {
            return 'invalid';
        }

        return 'valid';
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
        return distance;
    }
}

// pointsValidation([3, 0, 0, 4]);
// pointsValidation([2, 1, 1, 1]);

function printDNA(input) {
    let dnaLength = input;
    let symbols = [
        'A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'
    ];

    let stars = 2;
    let dashes = 0;
    let symIndex = 0;
    for (let i = 0; i < dnaLength; i++) {
        if (i % 5 === 0) {
            symIndex = 0;
        }
        if ((i + 1) % 4 === 0) {
            printRowEveryFourth();
            stars = 2;
            dashes = 0;
        } else {
            printRow();
            stars -= 1;
            dashes += 2;
        }

        symIndex += 2;
    }

    function printRow() {
        console.log('*'.repeat(stars) +
            symbols[symIndex] + '-'.repeat(dashes) +
            symbols[symIndex + 1] + '*'.repeat(stars));
    }

    function printRowEveryFourth() {
        console.log('*' + symbols[symIndex] +
            '--' + symbols[symIndex + 1] + '*');
    }
}

// printDNA(4);
// printDNA(10);