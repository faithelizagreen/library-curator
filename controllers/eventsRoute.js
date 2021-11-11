const { Events } = require("../models");
const router = require('express').Router()

router.get('/', async (req,res) => {
    const eventsData = await Events.findAll({
        attributes: ['title','description', 'date', 'time', 'created_at'],
        order:[['created_at','DESC']]
    })

    
    const events = eventsData.map((events) => events.get({ plain:true}));
    console.log(events)
    res.render('eventPage', {events, logged_in: req.session.logged_in})
  });
  

  module.exports = router
