// module exports
    function sortDescending(a, b) {
        return a - b;
    }

    // to be able to use it in another file
    module.exports = sortDescending;

// require
    // require from file path
    const sortDesc = require('./module.js');
    let numbers = [1, 6, 2, 10, 3, 7];

    console.log(numbers.sort(sortDesc));

// http request
    // is listening and waiting for request
    // is like infinite loop

// Express.js
    // working with a framework
    // npm - node package manager
    

// MVC
    // MODEL (data)
        // manages data and database logic
    // VIEW (UI)
    // CONTROLLER (logic)
        // implement the application logic

// 