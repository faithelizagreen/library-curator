const router = require('express').Router();
const readerRoutes = require('./readerRoute');
const bookRoutes = require('./bookRoute');
const LibrarycardRoutes = require('./libraryCard')

router.use('/readers', readerRoutes);
router.use('/books', bookRoutes);
router.use('/cards', LibrarycardRoutes)



module.exports = router;