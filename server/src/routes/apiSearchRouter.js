const express = require('express');
const { Op } = require('sequelize');
const { Good } = require('../../db/models');

const apiSearchRouter = express.Router();

apiSearchRouter.get('/', async (req, res) => {
  const { searchText } = req.params;
  const findGoods = await Good.findAll({
    where: {
      [Op.or]: [{ title: { [Op.iLike]: `%{searchText}%` } }, { description: { [Op.iLike]: searchText } }],
      quantity: { [Op.gt]: 0 },
    },
  });
  res.json(findGoods);
});

module.exports = apiSearchRouter;
