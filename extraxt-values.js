let pattern = /[+-][0-9]\.{1}[0-9]+/g;
let data = [
    '+0.1130 USDT',
    '+1.1415 USDT',
    '-0.8420 USDT',
    '+0.5333 USDT',
    '-1.2663 USDT',
    '-7.4327 USDT',
    '+0.5325 USDT',
    '+0.8122 USDT',
    '+0.2423 USDT',
    '+0.3343 USDT',
    '+0.1285 USDT',
    '+0.4211 USDT',
    '+0.4511 USDT',
    '+0.8336 USDT',
    '+0.9478 USDT',
    '+1.6105 USDT',
    '+1.6404 USDT',
    '-0.0427 USDT',
    '-0.0931 USDT',
    '-0.0353 USDT',
    '+0.4579 USDT',
    '+0.1641 USDT',
    '+0.2745 USDT',
    '+0.2799 USDT',
    '+0.9384 USDT',
    '+0.8931 USDT',
    '+0.6782 USDT',
    '+0.1515 USDT',
    '-0.0538 USDT',
    '+0.7579 USDT',
    '+0.3663 USDT',
    '+0.5423 USDT',
    '+1.3414 USDT',
    '+1.8420 USDT',
    '+0.4577 USDT',
    '+1.0103 USDT',
    '+0.6348 USDT',
    '+0.6309 USDT',
    '+0.6088 USDT',
    '+0.5181 USDT',
    '-0.2308 USDT',
    '-0.2034 USDT'
];

let values = [];

for (const line of data) {
    values.push(Number(line.match(pattern)));
}
console.log(values.join('\n'));

console.log(values.reduce((a, c) => a + c));