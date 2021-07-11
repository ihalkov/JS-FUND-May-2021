// function incNumber(number) {
//     ++number;
//     console.log('From function: ' + number);
// }

// let number = 5;
// incNumber(number);
// console.log('Outside the function: ' + number);

function incNumber(numbers) {
        ++numbers[0];
        console.log('From function: ' + numbers);
    }
    
    let numbers = [1, 2, 3, 4];
    incNumber(numbers);
    console.log('Outside the function: ' + numbers);

    
// value types are in steak (only copy the value if its used in function)
// reference type are in heap (Array, Object, Function)
    // (here is not copying the value of array, but is changing it, because is refers to address)
