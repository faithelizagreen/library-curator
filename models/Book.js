const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_paperback: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    subject: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    reader_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'reader',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'books'
  }
);

module.exports = Book;
