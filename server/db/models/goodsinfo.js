'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GoodsInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GoodsInfo.init({
    goodId: DataTypes.NUMBER,
    size: DataTypes.STRING,
    quantity: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'GoodsInfo',
  });
  return GoodsInfo;
};