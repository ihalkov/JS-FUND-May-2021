const regex1 = RegExp('foo*', 'g');
const str1 = 'table football, foosball';
let array1;

// 0 ind of array is found match
// 1
// array1 = regex1.exec(str1);
// console.log(array1[0]);
// console.log(array1[1]);
// console.log(array1[2]);
while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
}