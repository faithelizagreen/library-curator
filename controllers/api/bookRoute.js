const Sequelize = require('sequelize');
const { Book,Reader } = require('../../models');
const router = require('express').Router();
const Op = Sequelize.Op


router.get('/search/:term', async (req, res) => {
  const searchFields = req.params.term
  req.session.logged_in = true
  try{
      const booksData = await Book.findAll({
          where: { title: {[Op.like]: [`%${searchFields}%`]}},
          logging: false
      });

      const books = booksData.map((book) => book.get({ plain: true }));

      res.render('search', {books, logged_in: req.session.logged_in})
  }   
  catch{
      console.log("error");
  }
 });


router.put("/out", (req,res) => {

    

})


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

router.post('/addbook', async (req,res) => {
   await Book.create({
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages,
        isbn: req.body.isbn,
        paperback : req.body.paperback ? true:false,
        subject: req.body.subject 


    }).then((addBookData) => {
        res.status(200).redirect('back')

    }).catch((err) => {
        res.status(500).json(err)

    })
})

router.delete('/:id',async(req,res) => {
    Book.destroy({
        where:{
            id: req.params.id,
        }
    }).then((bookData) => res.send('Book with this id has been removed from DB'))
    .catch((err) =>{
        res.status(500).res.json(err)
    })
})




module.exports = router 






