// indexOf() - returns -1 if the value is not found

let numbers = [5, 10, 15, 20, 25, 30];
// index, delete count, add items if needed
numbers.splice(3, 2, 'twenty', 'twenty-five');
console.log(numbers.join(' | '));

function firstLastKElements(arr) {
    let k = arr.shift();
    let output = [];
    output.push(arr.slice(0, k).join(' '));
    output.push(arr.slice(arr.length - k, arr.length).join(' '));
    return output.join('\n');
}

// console.log(firstLastKElements([2, 7, 8, 9]));
// console.log(firstLastKElements([3, 6, 7, 8, 9]));

function sumLastKNumbersSequence(n, k) {
    let seq = [ 1 ];
    for (let i = 2; i <= n; i++) {
        let end = Math.max(0, seq.length - k);
        let currNum = addNewNumber(seq.length - 1, end, seq);
        seq.push(currNum);
    }
    return seq.join(' ');

    function addNewNumber(start, end, seq) {
        let num = 0;
        for (let i = start; i >= end; i--) {
            num += seq[i];
        }
        return num;
    }
}

// console.log(sumLastKNumbersSequence(6, 3));
// console.log(sumLastKNumbersSequence(8, 2));
// console.log(sumLastKNumbersSequence(9, 5));

// filter elements

let arr = [1, 2, 3];

arr.splice(1, 5);
console.log(arr);