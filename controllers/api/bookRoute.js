const Sequelize = require('sequelize');
const { Book,Reader } = require('../../models');
const router = require('express').Router();
const Op = Sequelize.Op


// router.get('/search/:term', async (req, res) => {
//   const searchFields = req.params.term
//   req.session.logged_in = true
//   try{
//       const booksData = await Book.findAll({
//           where: { title: {[Op.like]: [`%${searchFields}%`]}},
//           logging: false
//       });

//       const books = booksData.map((book) => book.get({ plain: true }));

//       res.render('search', {books, logged_in: req.session.logged_in})
//   }   
//   catch{
//       console.log("error");
//   }

  
// });




router.get('/:id', (req,res) => {
    Book.findOne({
        where:{
            id: req.params.id,
        },include:[{model:Reader, attributes:['first_name','last_name','email','id']}],
        group: ['reader_id']
    }).then((bookData) => res.json(bookData))
    .catch((err) =>{
        res.status(500).res.json(err)
    })
})





module.exports = router 






