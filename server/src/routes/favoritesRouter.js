const express = require("express");
const { Favorite, Good, User } = require("../../db/models");

const favoritesRouter = express.Router();

// Избранное
favoritesRouter.get("/", async (req, res) => {
  try {
    const favoriteGoods = await Good.findAll({
      include: {
        as: "userFavorites",
        model: User,
        where: { id: res.locals.user.id },
        attributes: ["id"],
        through: {
          model: Favorite,
        },
      },
    });
    res.json(favoriteGoods);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

favoritesRouter
  .route("/:goodId") // Либо парсить заголовок Authorization через мидлвару verifyAccessToken, либо во все сервисы подклчить передачу куки и на сервере через resLocals.js или verifyRefreshTokeb.js
  .post(async (req, res) => {
    try {
      const { goodId } = req.params;
      console.log(goodId, res.locals.user.id);
      const favorites = await Favorite.findOrCreate({
        where: { goodId, userId: res.locals.user.id },
      });
      return res.json(favorites);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const { goodId } = req.params;
      await Favorite.destroy({
        where: { goodId, userId: res.locals.user.id },
      });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  });
// ------------ //

module.exports = favoritesRouter;
