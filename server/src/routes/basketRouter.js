const express = require("express");
const { Basket, Good, User } = require("../../db/models");

const basketRouter = express.Router();

// Избранное
basketRouter.get("/", async (req, res) => {
  try {
    const basketGoods = await Good.findAll({
      include: {
        as: "userBaskets",
        model: User,
        where: { id: res.locals.user.id },
        attributes: ["id"],
        through: {
          model: Basket,
        },
      },
    });
    res.json(basketGoods);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

basketRouter
  .route("/:goodId") // Либо парсить заголовок Authorization через мидлвару verifyAccessToken, либо во все сервисы подклчить передачу куки и на сервере через resLocals.js или verifyRefreshTokeb.js
  .post(async (req, res) => {
    try {
      const { goodId } = req.params;

      const good = await Good.findOne({ where: { id: goodId } });

      const basket = await Basket.create({
        goodId,
        userId: res.locals.user.id,
        price: good.price,
        totalPrice: good.price,
        quantity: 1,
      });
      return res.status(200).json(basket); // 201 - создание объекта
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const { goodId } = req.params;
      await Basket.destroy({
        where: { goodId, userId: res.locals.user.id },
      });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  });
// ------------ //

basketRouter.patch("/:goodId/increment", async (req, res) => {
  try {
    const { goodId } = req.params;
    const basketGood = await Basket.findOne({
      where: { goodId, userId: res.locals.user.id },
    });
    basketGood.quantity += 1;
    basketGood.totalPrice += basketGood.price;
    basketGood.save();

    return res.json(basketGood);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

basketRouter.patch("/:goodId/decrement", async (req, res) => {
  try {
    const { goodId } = req.params;
    const basketGood = await Basket.findOne({
      where: { goodId, userId: res.locals.user.id },
    });
    basketGood.quantity > 1 ? (basketGood.quantity -= 1) : basketGood.quantity;

    basketGood.totalPrice > basketGood.price
      ? (basketGood.totalPrice -= basketGood.price)
      : basketGood.totalPrice;

    basketGood.save();

    return res.json(basketGood);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

module.exports = basketRouter;
