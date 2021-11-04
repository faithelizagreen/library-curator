const Sequelize = require('sequelize');
const { Book, Reader } = require('../models');
const router = require('express').Router();
const Op = Sequelize.Op


router.get('/', (req, res) => {
  Reader.findAll({
    attributes: ['id', 'first_name','last_name'], 
  });
  res.render('home',{loggedin: true, admin: true});
});

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
      // res.render('search', {books, logged_in: req.session.logged_in})
  }   
  catch(err){
      console.log("error");
  }
},
function (req, res){
  const books = res.locals.books
  res.render('search', { books, logged_in: req.session.logged_in})
}
);

module.exports = router;
