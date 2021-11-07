const { Events } = require("../models");
const { withAuth } = require("../utils/auth");
const router = require('express').Router()




router.get('/', withAuth, async (req,res) => {
    const eventsData = await Events.findAll({
        attributes: ['title','description','created_at'],
        order:[['created_at','DESC']]
    })

    
    const events = eventsData.map((events) => events.get({ plain:true}));

    res.render('eventPage', {events, logged_in: req.session.logged_in})
  });
  

  module.exports = router
