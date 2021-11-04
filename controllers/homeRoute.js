const { Reader } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
  Reader.findAll({
    attributes: ['id', 'first_name','last_name'], 
  });

  res.render('home',{loggedin: req.session.logged_in});
});

module.exports = router;
