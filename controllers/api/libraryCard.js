const { LibraryCard, Reader } = require('../../models');

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

module.exports = router;
