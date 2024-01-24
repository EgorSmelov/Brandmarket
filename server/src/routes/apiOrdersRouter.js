const express = require("express");
const { Gender } = require("../../db/models");

const apiOrdersRouter = express.Router();

apiOrdersRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const genders = await Gender.findAll({
        order: [["name", "ASC"]],
      });
      return res.json(genders);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    req.body;

    try {
      const genders = await Gender.findAll({
        order: [["name", "ASC"]],
      });
      return res.json(genders);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

module.exports = apiOrdersRouter;
