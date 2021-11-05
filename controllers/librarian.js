const Sequelize = require('sequelize');
const router = require('express').Router();




router.use('/', async (req, res, next) => {

    next()
});


router.get('/', async (req, res) => {
// If the user is already logged in, redirect the request to another route
  if (req.session.logged_in && req.session.isAdmin) {
    res.render('librarian', {logged_in: req.session.logged_in, isAdmin: req.session.isAdmin} );
  }else{
    res.render('home');
  }

})


router.get('/checkout', async (req, res) => {

    res.render('librarian',  {logged_in: req.session.logged_in, isAdmin: req.session.isAdmin, checkout: true})

});

router.get('/librarycard', async (req, res) => {

    res.render('librarian',  {logged_in: req.session.logged_in, isAdmin: req.session.isAdmin, librarycard: true})

});

router.get('/events', async (req, res) => {

    res.render('librarian',  {logged_in: req.session.logged_in, isAdmin: req.session.isAdmin, events: true})

});

router.get('/books', async (req, res) => {

    res.render('librarian',  {logged_in: req.session.logged_in, isAdmin: req.session.isAdmin, books: true})

});

module.exports = router;