const Reader = require('./Reader');
const Book = require('./Book');
const LibraryCard = require('./LibraryCard');
const Events = require('./Events');


Reader.hasOne(LibraryCard, {
    foreignKey: 'reader_id',
    onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
    foreignKey: 'reader_id',
});



Reader.hasMany(Book, {
    foreignKey: 'reader_id',
    onDelete: 'CASCADE',
});

Book.belongsTo(Reader, {
    foreignKey: 'reader_id',
});



module.exports = { Reader, Book, LibraryCard, Events};

