const phonebook = require('../phonebook');

 module.exports = {
  index: (req, res) => {
    res.render('index');
    console.log('as');
    // TODO: load index page
  },
  addPhonebookPost:(req, res) => {
      let {name, number} = req.body;


      phoneboo
    //   console.log(req.body);
    //   res.send('ok');
    // TODO: add a phonebook object to the array
  }
}