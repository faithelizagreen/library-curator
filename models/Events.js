const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Events extends Model {}

Events.init({
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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: { 
      type: DataTypes.DATE, 
      field: 'created_at' 
    }
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'events'
  }
);

module.exports = Events