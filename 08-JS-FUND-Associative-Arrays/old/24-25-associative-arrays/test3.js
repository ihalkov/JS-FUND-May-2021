let str = 'Gladius -> Heal -> 200';

let splitChar = getSplitChar(str);
// console.log();

function getSplitChar(str) {
    if (str.includes(' -> ')) {
        return ' -> ';
    } else if (str.includes(' vs ')) {
        return ' vs ';
    }
}

let obj = {
    name: 'ivan',
    name: 'petya'
}

console.log(obj.name);