const express = require('express');
const port = 3333;
const bodyParser = require('body-parser');
const app = express();
const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
    // layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
}));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));


// when is made get request to '/' the root folder
app.get('/', function (req, res) {
    // res.send(`
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>Document</title>
    //     </head>
    //     <body>
    //         <form action="/register" method="POST"> 
    //             <label>Username</label>
    //             <input type="text" name="username">
    //             <label>Password</label>
    //             <input type="password" name="password">
    //             <input type="submit">
    //         </form>   
    //     </body>
    //     </html>
    // `);
    res.render('index');
});

app.post('/register', (req, res) => {
    if (req.body.password == 'admin') {
        req.send(`Hello ${req.body.username}, you have been signed`);
    } else {
        res.send('Unauthorized!');
    }
});

// app.post('/register', (req, res) => {
//     console.log(req.body);
// });

app.get('/cat', (req, res) => {
    res.send('Navcho');
});

// will get the name from request
app.get('/cat/:name', (req, res) => {
    res.send(`Cat name is ${req.params.name}`);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));