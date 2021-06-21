let fruits = ['banana', 'apple', 'orange', 'kiwi'];

console.log('for-of');
for (const fruit of fruits) {
    // currFruit
    console.log(`el: ${fruit}`);
}

console.log('');
console.log('for-in');
for (const ind in fruits) {
    // indexes of fruits
    // by this indexes we can call particular fruit
    console.log(`ind: ${ind} => ${fruits[ind]}`);
}