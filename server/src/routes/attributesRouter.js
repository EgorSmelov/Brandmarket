const express = require("express");
const { Good } = require("../../db/models");

const attributesRouter = express.Router();

attributesRouter.get("/sizes", async (req, res) => {
  try {
    const sizes = await Good.findAll({
      attributes: ["size"],
      group: ["size"],
      order: [["size", "ASC"]],
    });
    return res.json(sizes);
  } catch (error) {
    return res.status(500).json(error);
  }
});

attributesRouter.get("/colors", async (req, res) => {
  try {
    const colors = await Good.findAll({
      attributes: ["color"],
      group: ["color"],
      order: [["color", "ASC"]],
    });
    return res.json(colors);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = attributesRouter;
