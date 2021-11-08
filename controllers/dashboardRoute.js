
const Sequelize = require('sequelize');
const { Book, Favorite, Reader } = require('../models');

const router = require('express').Router();
const Op = Sequelize.Op



// routes for user dashboard
router.get("/", async (req, res) => {

    const checkedOutBookData = await Book.findAll({
      where: {
        reader_id: req.session.user_id
      },
      attributes: ['title','author','image_url']
    });

    const checkedOutBooks = checkedOutBookData.map((checkedOutBook) => checkedOutBook.get({ plain: true }));
  

    const favoriteBookData = await Book.findAll({
        
          include: [
            {
              model: Reader,
              where: {
                id: req.session.user_id
              },
          },
        
        ]
    });
console.log(favoriteBookData)
    const favoriteBooks = favoriteBookData.map((favoriteBook) => favoriteBook.get({ plain: true }));
    console.log(JSON.stringify(favoriteBooks));
  
    res.render("userDash", {
      checkedOutBooks, favoriteBooks,
      logged_in: req.session.logged_in
    });
  });
  
    module.exports = router;