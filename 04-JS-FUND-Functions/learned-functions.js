// recursion self-invoking

function countDown(x) {
    console.log(x);
    if (x > 0) {
        countDown(x - 1);
    }
}

// countDown(10); // useful just have to have always exit point

// function without parameters (result is always the same), unless it reads data from outside of it

function swapElements(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        swap(arr, i, arr.length - 1 - i);
    }

    function swap(elements, i, j) {
        let temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
    }
    return arr;
}

// console.log(swapElements([1, 2, 3, 4, 5]));

// function arrow(a, b) { return a + b; }
// console.log(arrow(5, 4));

// arrow = (a, b) => a + b;

// code structure and code formatting
// make sure to use correct indentation
function sum() {
    // some code...
    // some more code...
}

// leave a blank line between functions and after blocks
// always use curly brackets for conditional and loop bodies
// avoid long lines and complex expressions

