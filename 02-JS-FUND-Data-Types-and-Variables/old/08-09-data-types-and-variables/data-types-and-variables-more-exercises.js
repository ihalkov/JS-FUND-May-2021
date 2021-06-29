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
        }
        else {
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