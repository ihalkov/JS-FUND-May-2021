function loadingBar(num) {
    if (num < 100) {
        return num + '% ' + '[' + '%'.repeat(num / 10) + '.'.repeat((100 - num) / 10) + ']' + '\n' + 'Still loading...';
    } else {
        return '100% Complete!' + '\n' + '%'.repeat(10);
    }
}

// console.log(loadingBar(30));
// console.log(loadingBar(50));
// console.log(loadingBar(100));