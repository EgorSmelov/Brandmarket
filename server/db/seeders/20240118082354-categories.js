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
        { name: "Кардиганы" },
        { name: "Спортивные штаны" },
        { name: "Шапки" },
        { name: "Ботинки" },
        { name: "Кроссовки" },
        { name: "Кеды" },
        { name: "Сланцы" },
        { name: "Свитеры" },
        { name: "Водолазки" },
        { name: "Толстовки" },
        { name: "Брюки" },
        { name: "Шорты" },
        { name: "Лонгсливы" },
        { name: "Поло" }
        ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};

