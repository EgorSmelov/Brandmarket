const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class GoodsInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Good, {
        foreignKey: "goodId",
      });
    }
  }
  GoodsInfo.init(
    {
      goodId: DataTypes.INTEGER,
      size: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "GoodsInfo",
    }
  );
  return GoodsInfo;
};
