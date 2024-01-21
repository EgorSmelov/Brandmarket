const express = require("express");
const { Favorite, Good, User } = require("../../db/models");

const favoritesRouter = express.Router();

// Избранное
favoritesRouter.get("/:userId", async (req, res) => {
  try {
    const favoriteGoods = await Good.findAll({
      include: [
        {
          model: Favorite,
          where: { userId: req.params.id },
        },
      ],
    });
    res.json(favoriteGoods);
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
