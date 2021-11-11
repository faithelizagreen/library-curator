
const Sequelize = require('sequelize');
const { Book, Events } = require('../models');

const router = require('express').Router();
const Op = Sequelize.Op


router.get('/', async (req, res) => {
  try{
    const eventsData = await Events.findAll({
        attributes:['id','title','created_at', 'time', 'date','description'],
        limit:3,
        order:[['created_at','DESC']]
        

    });

    const events = eventsData.map((eventData) => eventData.get({ plain: true }));
    res.render('home', { events, logged_in: req.session.logged_in, admin: req.session.isAdmin} );
}   
catch{
    console.log("error");
}
})
  

router.get('/search/:term', async (req, res, next) => {
  const searchFields = req.params.term
  try{
      const booksData = await Book.findAll({
          where: { title: {[Op.like]: [`%${searchFields}%`]}},
          logging: false
      });

      // const books = booksData.map((book) => book.get({ plain: true }));
      res.locals.books = booksData.map((book) => book.get({ plain: true }));
      next();
      res.render('search', {results , logged_in: req.session.logged_in, admin: req.session.isAdmin})
  }   
  catch(err){
      console.log(err);
  }
},
function (req, res){

    res.render('search', {books:res.locals.books, logged_in: req.session.logged_in })



  // const route = req.headers.referer
  // const last = route.lastIndexOf("/")+1
  // const path = route.slice(last)
 
  // if(path == "bookmanager"){
  // res.render('librarian', 
  // {books:res.locals.books, logged_in: req.session.logged_in, admin: req.session.isAdmin, bookmanager:true})
  
  // }else{  
  // res.render('search', {books:res.locals.books, logged_in: req.session.logged_in})
  // }
}
);

router.get('/logout', (req, res) => {

  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).end()
    });
  }else{
    res.status(404).end()
  }

  

});

router.get("/event",async (req,res) => {
  try{
    const eventsData = await Events.findAll({
        attributes:['id','title','created_at','description'],
        limit:3,
        order:[['created_at','DESC']]
        

    });

    const events = eventsData.map((eventData) => eventData.get({ plain: true }));

    res.render('home', { events,loggedin: req.session.logged_in, admin: req.session.isAdmin} );

}   
catch{
    console.log("error");
}
})


module.exports = router;
