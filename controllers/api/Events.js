const router = require('express').Router()
const { Events } = require('../../models')
const { isAdmin, withAuth } = require('../../utils/auth')


// router.post('/', isAdmin,withAuth,async (req,res) => {
//      await Events.create({
//          title: req.body.title,
//          description: req.body.description,


//      })
// })


module.exports = router