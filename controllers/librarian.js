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
    const events = eventsData.map((eventData) => eventData.get({ plain: true }));
    res.render('librarian',  {events,logged_in: req.session.logged_in, isAdmin: req.session.isAdmin, modifyevent: true})
}   
catch(err){
    console.log(err);
}
})




router.put('/events/:id', async (req, res) => {

    // Calls the update method on the Book model
    Events.update(
      {
        // All the fields you can update and the data attached to the request body.
        title: req.body.title,
        description: req.body.description,
        time: req.body.time,
        date: req.body.date,
      },
      {
        // Gets the books based on the isbn given in the request parameters
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedEvent) => {
        // Sends the updated book as a json response
        res.json(updatedEvent)
      })
      .catch((err) => res.json(err));
  });






router.get('/books', async (req, res) => {

    res.render('librarian',  {logged_in: req.session.logged_in, isAdmin: req.session.isAdmin,books: true})

});

module.exports = router;