function netherRealms(arr = []) {
    // let pattern = /\b[^\s,]*/g;
    // input = input.match(pattern);
    let splitPat =  / *, */g
    let input = arr[0].split(splitPat);
    let demonBook = {};
    // sort alphabetically
    // demon name(health, and damage)
    // split(by ',[ ]*')
    // sum of ascii codes, exclude ([^0-9][^'+', '-', '*', '/' '.']) gives the demon total health
    // sum of all numbers -+10 or so form base damage, symbol '*' multiply by 2, '/' divide by 2
        // (e.g. in the name "m15*/c-5.0", the base damage is 15 + (-5.0) = 10
        // and then you need to multiply it by 2 (e.g. 10 * 2 = 20) and then divide it by 2 (e.g. 20 / 2 = 10)).
        // So, multiplication and division are applied only after all numbers are included in the calculation and in the order they appear in the name
        // •	A demon's name cannot contain blank spaces ' ' or commas ','
    for (const line of input) {
        let name = line.match(/[^,\s+]*/)[0];
        let health = getHealth(name);
        let damage = getDamage(name);
        demonBook[name] = {
            'health': health,
            'damage': damage
        };
    }
    return printOutput(demonBook);

    function printOutput(obj = {}) {
        let output = [];
        let names = Object.keys(obj).sort((a, b) => a.localeCompare(b));
        for (const name of names) {
            output.push(`${name} - ${obj[name].health} health, ${obj[name].damage.toFixed(2)} damage`);
        }
        return output.join('\n');
    }
    function getHealth(name) {
        let pat = /[^\d+\-*/.]/g;
        let health = 0;
        if (name.match(pat) !== null) {
            let validChars = name.match(pat);
            for (const ch of validChars) {
                health += ch.charCodeAt(0);
            }
        }
        return health;
    }
    function getDamage(name = '') {
        let pat = /([-+]?(\d+\.)?\d+)/g;
        // let pat = /[\+\-]*[0-9.]+[0-9]*/g;
        let baseDamage = 0;
        if (name.match(pat) !== null) {
            baseDamage =  (name.match(pat)).map(Number).reduce((acc, curr) => acc + curr);
        }
        // has to be not null
        baseDamage = doCalcs(name, baseDamage);
        // baseDamage = baseDamage.reduce((acc, curr) => acc + curr);
        return baseDamage;

        function doCalcs(name = '', baseDamage) {
            let patMulti = /[*]/g;
            let patDiv = /[/]/g;
            let multi = 0;
            let div = 0;
            if ((currMatch = name.match(patMulti)) !== null) {
                multi = currMatch.length;
            }
            if ((currMatch = name.match(patDiv)) !== null) {
                div = currMatch.length;
            }

            if (multi > div) {
                multi = multi - div;
                baseDamage *= (2 * multi);
            } else if (div > multi) {
                div = div - multi;
                baseDamage /= (2 * div);
            }
            return baseDamage;
        }
    }
}

console.log(netherRealms(
     ['M3ph-0.5s- ,  0.5t0.0**']
));

console.log(netherRealms(
    ['M3ph-0.5s-  0.5t0.0**']
));
console.log(netherRealms(
    ['M3ph-0.5s-0.5t0.0**']
));
console.log(netherRealms(
    ['M3ph-0.5s-0.5t0.0** Azazel']
));


// console.log(netherRealms(
//     ['M3ph1st0**,        Azazel']
// ));
// console.log(netherRealms(
//     ['Gos/ho']
// ));

// M3ph-0.5s,	 -0.5t0.0**
// M3ph1st0** 
// m15*/c-5.0
// m15*/c+5.0

//   ,  M3ph-0.5s-, 0.5t0.0**   ,  

