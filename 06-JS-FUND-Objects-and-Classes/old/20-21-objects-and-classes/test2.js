// 'SULS | Main Site | Home Page',
//     'SULS | Main Site | Login Page',
//     'SULS | Main Site | Register Page',

// 'Lambda | CoreB | B24',
//     'Lambda | CoreA | A24',
//     'Lambda | CoreA | A25',

let obj = {
    doSomething() {
        console.log('working');
    }
};

obj.doSomething();

obj['SULS'] = [];
obj['Lambda'] = [];
// obj['SULS']['MainSite'] = [];
obj['SULS']['MainSite'] = ['Home Page', 'Login Page', 'Register Page'];
obj['SULS']['CoreB'] = ['B24'];
obj['SULS']['CoreA'] = ['A24', 'A25'];



let sysKeys = Object.keys(obj);

console.log(obj);
console.log(sysKeys);