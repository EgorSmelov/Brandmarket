const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Goods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Goods.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.NUMBER,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
      color: DataTypes.STRING,
      categoryId: DataTypes.NUMBER,
      genderId: DataTypes.NUMBER,
      brandId: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Goods",
    }
  );
  return Goods;
};
