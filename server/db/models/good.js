const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Good extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Brand, {
        foreignKey: "brandId",
      });
      this.belongsTo(models.Gender, {
        foreignKey: "genderId",
      });
      this.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
      this.hasMany(models.GoodsInfo, {
        foreignKey: "goodId",
      });
      this.belongsToMany(models.User, {
        through: "Favorites",
        foreignKey: "goodId",
      });
      this.belongsToMany(models.User, {
        through: "Baskets",
        foreignKey: "goodId",
      });
      this.belongsToMany(models.User, {
        through: "Purchases",
        foreignKey: "goodId",
      });
    }
  }
  Good.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
      color: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      genderId: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Good",
    }
  );
  return Good;
};
