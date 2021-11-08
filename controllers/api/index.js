const router = require('express').Router();
const bookRoutes = require('./bookRoute');
const LibrarycardRoutes = require('./libraryCard')
const eventsRoutes = require('./Events')
const favorites = require('./favorites')
const readerRoute = require('./readerRoute')



router.use('/books', bookRoutes);
router.use('/cards', LibrarycardRoutes);
router.use('/events', eventsRoutes);
router.use('/favorites', favorites);
router.use('/readers', readerRoute);



module.exports = router;