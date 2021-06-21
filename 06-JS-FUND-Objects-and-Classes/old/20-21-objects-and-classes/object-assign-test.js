// The Object.assign() method copies all enumerable
// own properties from one or more source objects
// to a target object. It returns the target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// target object - wants to apply the sources prop to, which is returned after modified.
// source - is obj containing the prop you want to apply
// Therefore it assigns properties, versus copying or defining new properties.


const myData = {
    name: 'Ivan',
    fName: 'Halkov',
    test: 4
}

const moreData = {
    midName: 'Stoyanov',
    age: '29',
    test: 7
}

// myData (target), moreData (source), test is updated from 4 to 7
const assignedObj = Object.assign(myData, moreData);
console.log(assignedObj);

