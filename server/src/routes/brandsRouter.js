const express = require("express");
const { Brand } = require("../../db/models");

const brandsRouter = express.Router();

brandsRouter.get("/", async (req, res) => {
  try {
    const brands = await Brand.findAll({
      order: [["name", "ASC"]],
    });
    return res.json(brands);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = brandsRouter;
