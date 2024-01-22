const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ModerationSeller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  ModerationSeller.init(
    {
      inn: DataTypes.STRING,
      phone: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ModerationSeller",
    }
  );
  return ModerationSeller;
};
