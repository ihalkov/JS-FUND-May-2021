let commands = ['Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'];

for (let i = 0; i < commands.length; i++) {
    let [command, firstNum, secondNum]
        = commands[i].split(' ');

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    console.log(`${command} ${firstNum} ${secondNum}`);
}

// JavaScript Demo: Expressions - Destructuring assignment
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]