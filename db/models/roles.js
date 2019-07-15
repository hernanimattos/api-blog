'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    admin: DataTypes.BOOLEAN,
    user: DataTypes.BOOLEAN,
    editor: DataTypes.BOOLEAN
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};