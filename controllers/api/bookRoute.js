const Sequelize = require('sequelize');
const { Book,Reader, LibraryCard } = require('../../models');
const router = require('express').Router();
const Op = Sequelize.Op
const { withAuth, isAdmin } = require("../../utils/auth")

router.put("/out", withAuth, isAdmin, async (req,res) => {

    try{        
        const checkOut = await Book.findOne({
            where: {
                id : req.body.book_id
            }
        })
        const reader = await Reader.findOne({
            include:{
                model:LibraryCard,
                where: {
                    card_number:req.body.card
                }
            }
        })

        checkOut.reader_id = reader.id;
        checkOut.save()    
        
        res.status(200).end();


    }
    catch(err){
        res.status(500).json({message:"Unable to find book"})
    }

})

router.put("/in", withAuth, isAdmin, async (req,res) => {

    try{        
        const checkOut = await Book.findOne({
            where: {
                id : req.body.book_id
            }
        })

        checkOut.reader_id = null;
        
        res.status(200).end();

    }
    catch(err){
        res.status(500).json({message:"Unable to find book"})
    }

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






