const router = require('express').Router();
const readerRoutes = require('./readerRoute');
const bookRoutes = require('./bookRoute');


router.use('/readers', readerRoutes);
router.use('/books', bookRoutes);



module.exports = router;