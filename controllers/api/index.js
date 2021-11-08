const router = require('express').Router();
const readerRoutes = require('./readerRoute');
const bookRoutes = require('./bookRoute');
const LibrarycardRoutes = require('./libraryCard')
const eventsRoutes = require('./Events')
const favorites = require('./favorites')

router.use('/readers', readerRoutes);
router.use('/books', bookRoutes);
router.use('/cards', LibrarycardRoutes);
router.use('/events', eventsRoutes);
router.use('/favorites', favorites);


module.exports = router;