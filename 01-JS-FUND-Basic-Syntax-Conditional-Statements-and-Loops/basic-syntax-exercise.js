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

    if (check) {
        return 'yes';
    }
    return 'no';
}

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
        let currResult = num * i;
        output.push(`${num} X ${i} = ${currResult}`)
    }
    return output.join('\n');
}

