/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Brands",
      [
        { name: "Evisu" },
        { name: "RIPNDIP" },
        { name: "Butter Goods" },
        { name: "Jordan" },
        { name: "MINGA LONDON" },
        { name: "Carhartt WIP" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Brands", null, {});
  },
};
