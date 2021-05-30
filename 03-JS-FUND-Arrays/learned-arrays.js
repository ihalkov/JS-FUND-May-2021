// You can add an element to the end of the array:
let arr = [10, 20, 30];
arr[arr.length] = 40;
console.log(arr); // [10, 20, 30, 40]

// Reverse array of strings
function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let oldElement = arr[i];
        let previousIndex = arr.length - 1 - i;
        arr[i] = arr[previousIndex];
        arr[previousIndex] = oldElement;
    }
    console.log(arr.join(' '));
}