const router = require("express").Router()
const { Reader } = require("../../models")
const { withAuth, isAdmin } = require("../../utils/auth")



router.get('/', withAuth, isAdmin, (req, res) => {
    Reader.findAll({
      attributes: ['id', 'first_name','last_name','email'],
      

      include: 
      [{model:Book, attributes:['title','author','id','pages']}],
       group: ['reader_id']
    }).then((readerData) => res.json(readerData)).catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', withAuth, isAdmin, (req,res) => {
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

router.post('/new', withAuth, isAdmin,  (req,res) => {
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

router.post('/login', async (req, res) => {
    try {
      const userData = await Reader.findOne({ where: { email: req.body.email } });

      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        if(userData.is_admin){
            req.session.isAdmin = true 
            res.json({ message: 'Logged in as Librarian' });
        }else{
            req.session.isAdmin = false;
            res.json({ message: 'You are now logged in!' });
        }
            
      });
  
    } catch (err) {
      res.status(400).json({message: "Bad request"});
    }
  });

  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router