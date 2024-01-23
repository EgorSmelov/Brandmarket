/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Goods", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      color: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Categories",
          },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      genderId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Genders",
          },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      brandId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Brands",
          },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Goods");
  },
};
