let text = 'Lorem Pesho ipsum dolor sit amet, consectetur adipisicing elit. Pesho Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?';
let pattern = /[A-Z][a-z]+/g;

// if you have variables then use this
let pattern2 = new RegExp('Pesho', 'g');

// console.log(typeof pattern); // object
// console.log(pattern instanceof RegExp); // true

// method of RegExp, test if exist
// let result = pattern.test(text);
// console.log(result);
// returns find pattern, index: 64, input:  'Lorem Pesho ipsum dolor sit amet, consectetur adipisic...', groups: undefined

// exec keep the returned result and starts next time from the place where was last time
// let result = pattern.exec(text);
// console.log(result);
// result = pattern.exec(text);
// console.log(result);
// result = pattern.exec(text);
// console.log(result);
// result = pattern.exec(text);
// console.log(result);
// result = pattern.exec(text);
// console.log(result);
let result = pattern.exec(text);

while (result !== null) {
    console.log(result);
    result = pattern.exec(text);
}