const express = require("express");
const { Brand } = require("../../db/models");

const brandsRouter = express.Router();

brandsRouter.get("/", async (req, res) => {
  try {
    const categories = await Brand.findAll();
    return res.json(categories);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = brandsRouter;