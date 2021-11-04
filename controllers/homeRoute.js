const { Events } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try{
    const eventsData = await Events.findAll({
        attributes:['id','title','created_at','description'],
        limit:3,
        order:[['created_at','DESC']]
        

    });

    const events = eventsData.map((eventData) => eventData.get({ plain: true }));
    res.render('home', { events,loggedin: true, admin: true} );
}   
catch{
    console.log("error");
}
})
  


  

module.exports = router;
