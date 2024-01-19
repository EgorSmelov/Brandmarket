const express = require("express");
const { Category } = require("../../db/models");

const categoriesRouter = express.Router();

categoriesRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.json(categories);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = categoriesRouter;
