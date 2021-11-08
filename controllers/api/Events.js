const router = require('express').Router();
const { Events } = require('../../models');
const { isAdmin, withAuth } = require('../../utils/auth');



//=======================================================
//Create a new event if you are loggined and admin. 
//=======================================================
router.get('/', async (req,res) => {
    await Events.findAll({}).then((eventData) => {
      res.status(200).json(eventData)
    }).catch((err) => {
      res.json(err)
    })
  })

  router.get('/:id', async (req,res) => {
    await Events.findOne({where:{id : req.params.id}}).then((eventData) => {
      res.status(200).json(eventData)
    }).catch((err) => {
      res.json(err)
    })
  })





router.post('/',isAdmin, withAuth, async (req, res) => {
  
  console.log(req.file)
  await Events.create({
    title: req.body.title,
    description: req.body.description,
    time: req.body.time,
    date: req.body.date,

  })
    .then((newEvent) => res.redirect("/librarian/events"))
    
    .catch((err) => {
      res.status(500).json(err)
    });
});

//==========================================|/\
// Destroy note referenced by it's id number|/\
//==========================================|/\



router.delete('/:id', isAdmin, withAuth, (req, res) => {
  Events.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((eventData) => {
      if (!eventData) {
        res.status(404).json({ message: 'No Event found with this id' });
        return;
      }
      res.json(eventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
                                    //----------|=
//===================================|-=/\\/\/\/|=
// Update event info referenced by id|-=/\\//\/\|=
//===================================|-=/\\/\/\/|=
   




  
  

module.exports = router;
