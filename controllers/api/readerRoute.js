const router= require("express").Router()
const {Reader, Book, LibraryCard} = require("../../models")



router.get('/', (req, res) => {
    Reader.findAll({
      attributes: ['id', 'first_name','last_name','email'],
      

      include: 
      [{model:Book, attributes:['title','author','id','pages']}],
       group: ['reader_id']
    }).then((readerData) => res.json(readerData)).catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req,res) => {
    Reader.findOne({
        attributes: {exclude:['is_admin']},
        where:{
            id: req.params.id
        },include: 
        [{model:Book, attributes:['title','author','id','pages']}],
         group: ['reader_id']
    }).then((bookData) => res.json(bookData))
    
    .catch((err) =>{
        res.status(500).res.json(err)
    })
})

router.post('/new', (req,res) => {
    Reader.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email : req.body.email,
        password: req.body.password,
        is_admin: req.body.admin
    }).then((readerData) => res.json(readerData))       
     .catch((err) => {
        res.status(500).json(err)
    })
})







module.exports = router