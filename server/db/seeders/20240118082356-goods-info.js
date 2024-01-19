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
        {
          goodId: 2,
          size: 44,
          quantity: 3,
        },
        {
          goodId: 3,
          size: 44,
          quantity: 3,
        },
        {
          goodId: 4,
          size: 44,
          quantity: 4,
        },
        {
          goodId: 5,
          size: 44,
          quantity: 5,
        },
        {
          goodId: 6,
          size: 44,
          quantity: 6,
        },
        {
          goodId: 7,
          size: 44,
          quantity: 7,
        },
        {
          goodId: 8,
          size: 44,
          quantity: 8,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Goods", null, {});
  },
};
