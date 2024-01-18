/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Brands",
      [
        { name: "Nike" },
        { name: "Adidas" },
        { name: "Gucci" },
        { name: "Zara" },
        { name: "H&M" },
        { name: "Calvin Klein" },
        { name: "Levis" },
        { name: "Versace" },
        { name: "Puma" },
        { name: "Tommy Hilfiger" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Brands", null, {});
  },
};
