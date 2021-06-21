const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

// if const regex = /[A-Z]/;
// (1) ['T', index: 0, input: 'The quick brown fox jumps over the lazy dog. It barked.', groups: undefined]
