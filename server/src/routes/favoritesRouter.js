const express = require("express");
const { Favorite, Good, User } = require("../../db/models");

const favoritesRouter = express.Router();

// Избранное
favoritesRouter.get("/:userId", async (req, res) => {
  try {
    const favoriteGoods = await User.findAll({
      where: { id: req.params.userId },
      include: {
        model: Good,
        attributes: { exclude: ["password"] },
        through: {
          model: Favorite,
        },
      },
    });
    res.json(favoriteGoods[0].Goods);
  } catch (error) {
    return res.status(500).json(error);
  }
});

favoritesRouter
  .route("/:userId/:goodId")
  .post(async (req, res) => {
    try {
      const { goodId, userId } = req.params;
      const favorites = await Favorite.findOrCreate({
        where: { goodId, userId },
      });
      return res.json(favorites);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const { goodId, userId } = req.params;
      await Favorite.destroy({
        where: { goodId, userId },
      });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  });
// ------------ //

module.exports = favoritesRouter;
