const Sequelize = require('sequelize');
const {Favorite } = require('../../models');
const { withAuth } = require("../../utils/auth")
const router = require('express').Router();
const Op = Sequelize.Op

 
router.get("/add/:id", withAuth, async (req,res) => {

    try{
        const response = await Favorite.create({reader_id:req.session.user_id, book_id:req.params.id})
        res.status(200).redirect(req.headers.referer);
    }
    catch(err){
        res.status(500).redirect(req.headers.referer);  
        console.log(err);
    }
})



module.exports = router