
const Sequelize = require('sequelize');
const { Book, Events, Reader } = require('../models');

const router = require('express').Router();
const Op = Sequelize.Op



// routes for user dashboard
router.get("/", async (req, res) => {
    console.log('test');

    const checkedOutBookData = await Book.findAll({
      where: {
        reader_id: req.session.user_id
      },
      attributes: ['title','author','image_url']
    })
  
    // const checkedOutBookData = await Reader.findOne({
    //   where:{
    //     id: req.session.user_id
    //   },
    //   include: [
    //     {
    //       model: Book,
    //       attributes: ['title','author','image_url']
    //     }
    //   ],
    // });
    const checkedOutBooks = checkedOutBookData.map((checkedOutBook) => checkedOutBook.get({ plain: true }));
    console.log(checkedOutBooks);
  
    res.render("userDash", {
      checkedOutBooks,
      logged_in: req.session.logged_in
    });
  })
  
    module.exports = router;