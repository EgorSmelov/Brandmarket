/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        { name: "Футболки" },
        { name: "Джинсы" },
        { name: "Платья" },
        { name: "Куртки" },
        { name: "Юбки" },
        { name: "Рубашки" },
        { name: "Блузки" },
        { name: "Спортивные штаны" },
        { name: "Шапки" },
        { name: "Ботинки" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
