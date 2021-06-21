// let input = ["[-3, -2, -1, 0, 1, 2, 3, 4]",
// "[10, 1, -17, 0, 2, 13]",
// "[4, -3, 3, -2, 2, -1, 1, 0]"];

let input = ["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"];

let obj = {};

while (input.length > 0) {
    let currStr = input.shift();
    let currArr = JSON.parse(currStr);

    currArr.sort((a, b) => b - a);
    obj[currArr] = currArr;
}

let objKeys = Object.values(obj);

objKeys.sort((a, b) => a.length - b.length);

for (const index in objKeys) {
    console.log(`[${objKeys[index].join(', ')}]`);
}
// console.log();