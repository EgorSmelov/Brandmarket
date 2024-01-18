/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GoodsInfos",
      [
        {
          goodId: 1,
          size: 42,
          quantity: 1,
        },
        {
          goodId: 1,
          size: 43,
          quantity: 2,
        },
        {
          goodId: 1,
          size: 44,
          quantity: 3,
        },
        {
          goodId: 2,
          size: 42,
          quantity: 0,
        },
        {
          goodId: 2,
          size: 43,
          quantity: 0,
        },
        {
          goodId: 2,
          size: 44,
          quantity: 0,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Goods", null, {});
  },
};
