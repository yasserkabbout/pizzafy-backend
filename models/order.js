'use strict';
module.exports = (sequelize, DataTypes) => {
  //Statuses are Submitted, Preparing, InDelivey, Delivered
  //TODO Create a seperate Table/Model for Order Status {Submitted: 1, Preparing: 2, InDelivery:3, Delivered: 4}
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