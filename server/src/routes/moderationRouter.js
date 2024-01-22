const express = require("express");
const { User } = require("../../db/models");

const moderationRouter = express.Router();

moderationRouter.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
});




module.exports = moderationRouter;
