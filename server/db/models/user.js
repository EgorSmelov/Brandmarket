const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Role, {
        foreignKey: "roleId",
      });
      this.hasMany(models.Good, {
        foreignKey: "userId",
      });
      this.belongsToMany(models.Good, {
        // as: "favorite",
        through: "Favorites",
        foreignKey: "userId",
      });
      this.belongsToMany(models.Good, {
        // as: "basket",
        through: "Baskets",
        foreignKey: "userId",
      });
      this.belongsToMany(models.Good, {
        // as: "purchase",
        through: "Purchases",
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
