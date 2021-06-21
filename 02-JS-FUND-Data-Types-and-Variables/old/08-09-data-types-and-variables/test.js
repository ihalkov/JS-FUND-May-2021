let name = "Pesho";
console.log(name);

let newName = "Mr." + name;
console.log(newName);

name = name.toLowerCase();
console.log(name);

let bigIntMax = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigIntMax);

bigIntMaxSqr = bigIntMax * bigIntMax;
console.log(bigIntMaxSqr);


console.log(typeof ""); // string
console.log(typeof "John"); // string
console.log(typeof "John Doe"); // string
console.log(typeof 0); // number

let n = 5;
if (typeof(n) === 'number') {
    console.log(n); // 5
}

function stringTest(str) {
    let strToString = str.toString();
    // let strToString = str + "";

    console.log(typeof str);
    console.log(typeof strToString);
}

// stringTest("5");
// stringTest(5);

function primeNumber(number) {
    let result = "";
    for (let i = 2; i < number; i++) {
        let isNotPrime = false;

        if (number % i === 0) {
            result = isNotPrime;
            break;
        } else {
            isNotPrime = true;
            result = isNotPrime;
        }
    }
    console.log(result);
}

primeNumber(6);
primeNumber(7);
primeNumber(8);
primeNumber(81);