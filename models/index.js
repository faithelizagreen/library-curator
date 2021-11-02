


// const Reader = require('./Reader');
const Book = require('./Book');
const Reader = require('./Reader')
// const LibraryCard = require('./LibraryCard');

// Reader.hasOne(LibraryCard, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

Reader.hasMany(Book, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

Book.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// LibraryCard.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });

module.exports = { Book, Reader };
// module.exports = { Reader, Book, LibraryCard };

