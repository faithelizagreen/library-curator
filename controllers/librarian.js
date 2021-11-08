const Sequelize = require('sequelize');
const { Events } = require('../models');
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


router.get('/bookmanager', async (req, res) => {

    res.render('librarian',  {logged_in: req.session.logged_in, isAdmin: req.session.isAdmin, bookmanager: true})

    router.get('/search/:term', async (req, res, next) => {
      const searchFields = req.params.term
    
      try{
          const booksData = await Book.findAll({
              where: { title: {[Op.like]: [`%${searchFields}%`]}},
              logging: false
          });
          res.locals.books = booksData.map((book) => book.get({ plain: true }));
          next();
      }   
      catch(err){
          console.log("error");
      }
    },
    function (req, res){
      const books = res.locals.books
      res.render('librarian', {logged_in: req.session.logged_in, isAdmin: req.session.isAdmin, modifybook:true})
    }
    );

});

router.get('/librarycard', async (req, res) => {

    res.render('librarian',  {logged_in: req.session.logged_in, isAdmin: req.session.isAdmin, librarycard: true})

});

router.get('/events', async (req, res) => {
  try{
    const eventsData = await Events.findAll({


        attributes:['id','title','created_at','description', 'time', 'date'],

        order:[['created_at','DESC']]
        

    });
    console.log(eventsData);
    const events = eventsData.map((eventData) => eventData.get({ plain: true }));
    res.render('librarian',  {events,logged_in: req.session.logged_in, isAdmin: req.session.isAdmin, modifyevent: true})
}   
catch(err){
    console.log(err);
}
})

    



router.get('/books', async (req, res) => {

    res.render('librarian',  {logged_in: req.session.logged_in, isAdmin: req.session.isAdmin, books: true})

});


router.get('/logout', (req, res) => {

  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).end()
    });
  }else{
    res.status(404).end()
  }
});

module.exports = router