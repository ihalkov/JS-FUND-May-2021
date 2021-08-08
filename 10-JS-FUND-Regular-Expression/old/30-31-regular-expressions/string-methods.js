let text = 'Lorem Pesho ipsum dolor pesho@abv.bg sit amet@gmail.com, ' +
    'consectetur adipisicing elit. Pesho Eligendi non quis exercitationem ' +
    'culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab ' + 
    'temporibus asperiores quasi cupiditate. ' + 
    'Voluptatum ducimus voluptates voluptas?';

// without global returns more info about the group
let pattern = /(?<username>\w+)@\w+\.\w+/g;


// over given string we have match method and give it RegExp
    // or RegExp given as a string
// without global method gives the first result
    // match is good for one result
// with global returns an array of results

let result = text.match(pattern);
// text.split(by regex);
// text.replace(email, with something)

// ['Lorem', 'Pesho', 'Pesho', 'Eligendi', 'Voluptatum']
console.log(result.groups.username);