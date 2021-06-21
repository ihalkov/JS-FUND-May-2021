function sumFirstLast(input = []) {
    let firstElement = Number(input[0]);
    let lastElement = Number(input[input.length - 1]);

    let sum = firstElement + lastElement;
    return sum;
}

function sumFirstLastMethods(input = []) {
    let firstElement = Number(input.shift());
    let lastElement = Number(input.pop());

    let sum = firstElement + lastElement;
    return sum;
}

function negativePositiveNumbers(input = []) {
    let arrInput = input;
    let newArr = [];

    while (arrInput.length > 0) {
        let firstElement = arrInput.shift();

        if (firstElement < 0) {
            newArr.unshift(firstElement);
            continue;
        }

        newArr.push(firstElement);
    }

    console.log(newArr.join('\n'));
}

// negativePositiveNumbers([7, -2, 8, 9]);
// negativePositiveNumbers([3, -2, 0, 1]);

function firstAndLastKNumbers(input = []) {
    let arr = input;
    let k = arr.shift();

    let firstElements = arr.slice(0, k);
    let lastElements = arr.slice(arr.length - k, arr.length);

    console.log(...firstElements);
    console.log(...lastElements);
}

function firstAndLastKNumbers(input = []) {
    let arr = input;
    let k = arr.shift();

    let firstElements = arr.slice(0, k);
    let lastElements = arr.slice(arr.length - k, arr.length);

    // two ways
    console.log(firstElements.join(' '));
    console.log(...lastElements);
}

// firstAndLastKNumbers([2, 2, 3, 4, 5]);

function lastKNumbersSequence(n, k) {
    let elementsInArray = n;
    let kElements = k;

    let numbers = [1];

    let result = addEachElement();

    return result.join(' ');

    function addEachElement() {
        for (let i = 1; i < elementsInArray; i++) {
            numbers.push(sumOfKSeq(kElements));
        }
        return numbers;
    }

    function sumOfKSeq(k) {
        let index = numbers.length - 1;
        let sum = 0;

        while (index >= numbers.length - k) {
            if (index < 0) {
                return sum;
            }

            sum += numbers[index];
            index -= 1;
        }

        return sum;
    }
}

// lastKNumbersSequence(6, 3);
// lastKNumbersSequence(8, 2);

function processOddNumbers(input = []) {
    let numbers = input;
    let result = numbers
        .filter(function (el, ind) {
            return ind % 2 !== 0;
        })
        .map(x => x * 2)
        .reverse();
    console.log(...result);
}


// processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);

function smallestTwoNumbers(input = []) {
    let numbers = input;

    let result = numbers.sort((a, b) => a - b).slice(0, 2);
    console.log(result.join(' '));
}

// smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

function listOfProducts(input = []) {
    let products = input;
    products.sort();

    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}.${products[i]}`);        
    }
}

// listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);

function arrayManipulations(input = []) {
    let numbers = input.shift().split(' ').map(Number);

    // read commands
    readCommands();

    console.log(numbers.join(' '));

    function readCommands() {
        let commands = input;
        let index = 0;

        while (index < commands.length) {
            let currentCommand = commands[index].split(' ');
            let num = Number(currentCommand[1]);

            switch (currentCommand[0]) {
                case 'Add':
                    add(num);
                    break;
                case 'Remove':
                    remove(num);
                    break;
                case 'RemoveAt':
                    removeAt(num);
                    break;
                case 'Insert':
                    insert(currentCommand, num);
                    break;
            }

            index += 1;
        }

        function insert(currentCommand, num) {
            numbers.splice(Number(currentCommand[2]), 0, num);
        }

        function removeAt(num) {
            numbers.splice(num, 1);
        }

        function remove(num) {
            numbers = numbers.filter(x => x !== num);
        }

        function add(num) {
            numbers.push(num);
        }
    }
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
);