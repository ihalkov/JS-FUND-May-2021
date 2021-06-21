let input = [
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
];

// let input = [
//             'SULS | Main Site | Register Page',
//             'SULS | Main Site | Home Page',
//             'SULS | Main Site | Login Page',
//             'SULS | Main Site | Register Page',
//             'SULS | Judge Site | Submittion Page',
//             'SULS | Judge Site | Login Page',
//             'SULS | Judge Site | Submittion Page',
//             'Lambda | CoreA | A24',
//             'Lambda | CoreA | A23',
//             'SULS | Digital Site | Login Page',
//             'Lambda | CoreA | A25',
//             'Lambda | CoreB | B24',
//             'Lambda | CoreA | A24',
//             'Lambda | CoreA | A25',
//             'Lambda | CoreC | C4',
//             'Indice | Session | Default Storage',
//             'Indice | Session | Default Security',
//         ];

// 'SULS | Main Site | Home Page',
//     'SULS | Main Site | Login Page',
//     'SULS | Main Site | Register Page',

// 'Lambda | CoreB | B24',
//     'Lambda | CoreA | A24',
//     'Lambda | CoreA | A25',
let obj = {};


function addSystem(systemName) {
    if (!obj.hasOwnProperty(systemName)) {
        obj[systemName] = {};
    }
}

function addComponent(systemName, componentName) {
    if (!obj[systemName].hasOwnProperty(componentName)) {
        obj[systemName][componentName] = [];
    }
}

function addSubComponent(systemName, componentName, subComponentName) {
    if (obj[systemName].hasOwnProperty(componentName)) {
        obj[systemName][componentName].push(subComponentName);
    }
}

function addAll(systemName, componentName, subComponentName) {
    addSystem(systemName);
    addComponent(systemName, componentName);
    addSubComponent(systemName, componentName, subComponentName);
}


// obj.addSystem('exooy');
// obj.addSystem('exooy');
// obj.addComponent('exooy', 'c1');
// obj.addComponent('exooy', 'c1');
// obj.addSubComponent('exooy', 'c1', 'sc1');
// obj['SULS'] = [];
// obj['Lambda'] = [];
// // obj['SULS']['MainSite'] = [];
// obj['SULS']['MainSite'] = ['Home Page', 'Login Page', 'Register Page'];
// obj['SULS']['CoreB'] = ['B24'];
// obj['SULS']['CoreA'] = ['A24', 'A25'];

// let in = 'SULS | Main Site | Home Page';

// obj.addAll('SULS', 'Main Site', 'Home Page');
// obj.addAll();

while (input.length > 0) {
    let [systemName, componentName, subComponentName] = input.shift().split(' | ');
    addAll(systemName, componentName, subComponentName);
}

let sortedKeys = Object.keys(obj).sort((a, b) => {
    let bValueLength = Object.keys(obj[b]).length;
    let aValueLength = Object.keys(obj[a]).length;

    if (bValueLength - aValueLength === 0) {
        return a.localeCompare(b);
    }

    return bValueLength - aValueLength;
});

// Print
sortedKeys.forEach(key => {
    let sortSubKeys = Object.keys(obj[key]).sort((a, b) => {
        let bValueLength = Object.keys(obj[key][b]).length;
        let aValueLength = Object.keys(obj[key][a]).length;
        return bValueLength - aValueLength;
    });

    console.log(key);
    sortSubKeys.forEach(subKey => {
        console.log(`|||${subKey}`);
        obj[key][subKey].forEach((subComponent => {
            console.log(`||||||${subComponent}`);
        }));
    });
});

// console.log(obj);
// // console.log(sysKeys);
// console.log(sorted);
// console.log();

function systemRegister(input = []) {
    let obj = {};


    function addSystem(systemName) {
        if (!obj.hasOwnProperty(systemName)) {
            obj[systemName] = {};
        }
    }

    function addComponent(systemName, componentName) {
        if (!obj[systemName].hasOwnProperty(componentName)) {
            obj[systemName][componentName] = [];
        }
    }

    function addSubComponent(systemName, componentName, subComponentName) {
        if (obj[systemName].hasOwnProperty(componentName)) {
            obj[systemName][componentName].push(subComponentName);
        }
    }

    function addAll(systemName, componentName, subComponentName) {
        addSystem(systemName);
        addComponent(systemName, componentName);
        addSubComponent(systemName, componentName, subComponentName);
    }

    while (input.length > 0) {
        let [systemName, componentName, subComponentName] = input.shift().split(' | ');
        addAll(systemName, componentName, subComponentName);
    }

    let sortedKeys = Object.keys(obj).sort((a, b) => {
        let bValueLength = Object.keys(obj[b]).length;
        let aValueLength = Object.keys(obj[a]).length;

        if (bValueLength - aValueLength === 0) {
            return a.localeCompare(b);
        }

        return bValueLength - aValueLength;
    });

    // Print
    sortedKeys.forEach(key => {
        let sortSubKeys = Object.keys(obj[key]).sort((a, b) => {
            let bValueLength = Object.keys(obj[key][b]).length;
            let aValueLength = Object.keys(obj[key][a]).length;
            return bValueLength - aValueLength;
        });

        console.log(key);
        sortSubKeys.forEach(subKey => {
            console.log(`|||${subKey}`);
            obj[key][subKey].forEach((subComponent => {
                console.log(`||||||${subComponent}`);
            }));
        });
    });
}

systemRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
]);


