'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name:DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    address:DataTypes.STRING

  }, {});
  user.associate = function(models) {
    // associations can be defined here
    

    
  };
  return user;
};