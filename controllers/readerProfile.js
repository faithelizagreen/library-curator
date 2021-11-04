const { Reader } = require('../models');

const router = require('express').Router()




router.get('/', async (req,res) => {
    await Reader.findAll({})
})

module.exports = router;