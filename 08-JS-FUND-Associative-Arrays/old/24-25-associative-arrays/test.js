let pool = new Map();

pool.set('glad1', {
    tech1: '200',
    tech2: '300'
});


console.log();

// getting the skill value
console.log(pool.get('glad1')['tech1']);
let keys = Object.keys(pool.get('glad1'));
console.log(keys);