'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_item = sequelize.define('order_item', {
      pizza_id: DataTypes.INTEGER,
      size: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      order_id: DataTypes.INTEGER
    

  }, {});
  order_item.associate = function(models) {
    // associations can be defined here
    
    order_item.belongsTo(models.order, {
        foreignKey: 'id',
        as: 'orderId'
    });

    order_item.belongsTo(models.pizza, {
        foreignKey: 'id',
        as: 'pizzaId'
    });

    order_item.hasOne(models.size, {
        foreignKey: 'id',
        as: 'pizzaSizeId'
    });


  };
  return order_item;
};