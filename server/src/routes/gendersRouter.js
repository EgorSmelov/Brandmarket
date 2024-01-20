const express = require("express");
const { Gender } = require("../../db/models");

const gendersRouter = express.Router();

gendersRouter.get("/", async (req, res) => {
  try {
    const genders = await Gender.findAll({
      order: [["name", "ASC"]],
    });
    return res.json(genders);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = gendersRouter;
