const Sequelize = require('sequelize');
const { Book,Reader } = require('../../models');
const router = require('express').Router();
const Op = Sequelize.Op



<<<<<<< HEAD

=======
>>>>>>> main
router.post('/', async (req, res) => {
    const searchFields = req.body.search
   
    try{
        const books = await Book.findAll({
            where: { title: {[Op.like]: [`%${searchFields}%`]}},
            logging: false
        });

        res.render('results', {books});
    }   
    catch{
        console.log("error");
    }
  
});



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






