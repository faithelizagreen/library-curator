const { LibraryCard, Reader } = require('../../models');
const { withAuth, isAdmin } = require('../../utils/auth');
const router = require('express').Router();

router.get('/', (req, res) => {
  LibraryCard.findAll({
    attributes: ['card_number', 'id'],
    include: {
      model: Reader,
      attributes: ['id', 'first_name', 'last_name', 'email'],
    },
  })
    .then((cardData) => res.json(cardData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  LibraryCard.findOne({
    where: {
      id: req.params.id,
    },include:{model:Reader, attributes:['id','first_name','last_name','email']}
  })
    .then((cardData) => res.json(cardData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

// router.post('/', withAuth, isAdmin, async (req,res) => {
//   await LibraryCard.create({
//       card_number: req.body.card_number,
//       id: req.body.id,
//       reader_id: req.body.reader_id,
//       include: {
//         model: Reader,
//         attributes: ['id', 'first_name', 'last_name', 'email'],
//       },
//     })
//       .then((cardData) => res.json(cardData))
//       .catch((err) => {
//         res.status(500).json(err);
//       });
//   });

router.post('/check', async (req, res) => {
  try{
    const reader = await LibraryCard.findOne({
      attributes: ['card_number'],
      where: {
        card_number: req.body.card,
      },
      include: [{
        model: Reader,
        attributes: ['first_name','last_name']
      }]
    })
    if(reader){
      res.status(200).json(reader)
    }else{
      res.status(500).json({ error: 'Unable to find card' })
    }


  }
  catch(err){
    console.log("Here server");
    res.status(500).send("Request Error")

  }
});

module.exports = router;
