'use strict';


// Our table schema
const People = (sequelize, DataTypes) => sequelize.define('People', {

  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  lastName: {
    type: DataTypes.STRING,
  }
});

module.exports = People;