const express = require("express");
const { Favorite } = require("../../db/models");

const favoritesRouter = express.Router();

// Избранное
favoritesRouter.get("/:userId", async (req, res) => {
  try {
    const favorites = await Favorite.findAll(req.params.id, {
      include: [{ model: Favorite, where: { quantity: { [Op.gt]: 0 } } }],
    });
    res.json(favorites);
  } catch (error) {
    return res.status(500).json(error);
  }
});

favoritesRouter
  .route("/:userId/:goodId")
  .post(async (req, res) => {
    try {
      const { goodId, userId } = req.params;
      await Favorite.create({
        goodId,
        userId,
      });
      res.sendStatus(200);
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
