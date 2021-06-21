function solve(firstNum, secondNum, thirdNum) {

}

function solve1() {
    let firstName = "Pesho";
    let secondName = "Gosho";


    console.log(firstName);
    console.log(secondName);
}

function solve2(input) {
    let names = ["Pesho", "Gosho"];

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]); // undefined
    console.log(names.length);
    names[2] = "Ivan";
    console.log(names[2]);
    console.log(names.length);
}

// solve2();
// let numbers = [1, 2, 3, 4, 5];
// let names = [];

function solve3(grades) {
    const names = ['Pesho', 'Gosho', 'Stamat'];

    names[10] = 'Peter'; // will create 10th element and will do so many empty elements
    names[-5] = 'se taq';
    names.push('Dart Vader');
    console.log(names);
    console.log(names.length);
}

// solve3();

function solve4() {
    let capitals = ['Sofia', 'Washington', 'London'];

    for (let i = 0; i < capitals.length; i++) {
        console.log(capitals[i]);
    }

    console.log(capitals.toString());
}

function solve5(arrayOfNums = []) {
    let output = arrayOfNums
    .map(Number)
    .map(number => number + 2);

    console.log(output);
}

// solve5([1, 2, 3, 4, 5, 6]);

function solve6() {
    let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    animals.splice(1, 1);
    console.log(animals);
}

// solve6();

function solve7() {
    let filtered = [12, 5, 8, 130, 44].filter(value => value >= 10);
    console.log(filtered); // 12, 130, 44
}

// solve7();

function solve8() {
    let a = 1;
    while (true) {
       a++;
       if(a === 10)  {
           break;
       }
    }
}
solve8();