// naming of variables to be descriptive, can be 3-4 words even
// don't try to make them short

// don't use the parameter directly, but do make local variable
// can have two functions with the same name and JS use the last writen in the code

// incrementation inside the condition for loop
    // for (let i = 0; i < arr.length; i++) {
// incrementation outside the condition while loop
    // while (a < 5) {
    //     a++;
    // }

// Debugging
// F10 step over (gives next step, but not goes in)
// F11 step into (goes in, deeply)
// Shift + F11 step out

//  Ctrl + D can mark all the occurrence of marked word, symbol etc.
//  Shift + Alt + I put cursors at the end of marked rows
// i % 2 !== 0 check for odd number

// switch can be changed with Object
// '*'.repeat(5);
// return string of '*****'

// use parseFloat() to remove trailing zeroes
    // num = parseFloat(num.toFixed(precision));

// Ternary operator
// return check ? "yes" : "no";

function getDate(year, month, day) {
    let dt = new Date(year, month, day);
    let y = dt.getFullYear();
    let m = dt.getMonth();
    let d = dt.getDate();
    return `${d}-${m}-${y}`;
}

// console.log(getDate(1991, 7, 7));

// can put all the chars to one string and print the line in the end
// let output = "";
// for (let i = 0; i < 5; i++) {
//     output += `${i}`;
// }

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

// distanceBetweenPoints(2, 4, 5, 0);
// distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);

