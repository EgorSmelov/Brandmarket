const express = require("express");
const { User, ModerationSeller } = require("../../db/models");

const moderationRouter = express.Router();

moderationRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      const { inn, phone } = req.body;
      const sellerForm = await ModerationSeller.findOrCreate({
        where: { inn, phone, userId: res.locals.user.id },
      });
      return res
        .status(201)
        .json({ message: "The good has been successfully added" });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  });

moderationRouter.get("/users", async (req, res) => {
  try {
    const users = await User.findAll({
      include: { model: ModerationSeller, required: true },
    });
    return res.json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
});
moderationRouter.patch("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const selectUser = await User.findByPk(userId);
    selectUser.roleId = 2;

    selectUser.save();

    return res.status(200).json(selectUser);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = moderationRouter;
