'use strict';
module.exports = (sequelize, DataTypes) => {
  const pizza = sequelize.define('pizza', {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    base_price: DataTypes.DECIMAL,

  }, {});
  pizza.associate = function(models) {
    // associations can be defined here
    
  };
  return pizza;
};