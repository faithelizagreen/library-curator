const sequelize = require('../config/connection');
const { Reader } = require('../models') 
const { Book } = require('../models');


const readerSeedData = require('./readerSeedData.json');
const bookSeedData = require('./bookSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const readers = await Reader.bulkCreate(readerSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of readers) {
    const newCard = await LibraryCard.create({
      reader_id: id,
    });
  }

  for (const book of bookSeedData) {
    const newBook = await Book.create({
      ...book,
      reader_id: readers[Math.floor(Math.random() * readers.length)].id,
    });
  }
    let count = 1;

    try{
    const books = await Book.bulkCreate(bookSeedData, {
            individualHooks: true,
            returning: false,
            logging: false,
          });
        }
        catch{
            console.log();
        }
        finally{
            console.log("Done");
        }

  process.exit(0);
};

seedDatabase();
