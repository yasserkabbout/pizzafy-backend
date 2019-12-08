'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
     user_id: DataTypes.INTEGER,
     status: DataTypes.STRING,
     total_price: DataTypes.DECIMAL
    

  }, {});
  order.associate = function(models) {
    // associations can be defined here

    order.belongsTo(models.user, {
        foreignKey: 'id',
        as: 'userId'
    });


  };
  return order;
};