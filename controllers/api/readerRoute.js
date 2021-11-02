const router= require("express").Router()
const {Reader, Book, LibraryCard} = require("../../models")



router.get('/', (req, res) => {
    Reader.findAll({
      attributes: ['id', 'name','email], 
      
      include: 
      [{model:Book, attributes:['title','author','id','pages] }]
    }).then((readerData) => res.json(readerData)).catch(err => {
        res.status(500).json(err)
    })
})
        
    
  
  





module.exports = router
