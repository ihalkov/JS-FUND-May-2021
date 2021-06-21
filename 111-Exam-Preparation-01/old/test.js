// x = 1; // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
// y = 2;
// console.log(x + " " + y); // '1 2'
// var y; // Declare and Initialize y

console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage
let num; // Declaration
num = 6; // Initialization