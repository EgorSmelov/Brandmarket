const express = require("express");
const { Op } = require("sequelize");
const { Good, GoodsInfo, Favorite, Basket, User } = require("../../db/models");
const uploadMiddleware = require("../middlewares/uploadFile");

const apiGoodsRouter = express.Router();

apiGoodsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const where = {};
      const { categoryId } = req.query;
      if (categoryId !== "null") {
        where.categoryId = categoryId;
      }

      const goods = await Good.findAll({
        // where,
        where: { quantity: { [Op.gt]: 0 } },

        include: [
          {
            as: "userFavorites",
            model: User,
            required: false,
            where: { id: res.locals.user ? res.locals.user?.id : null },
            attributes: ["id"],
            through: {
              model: Favorite,
            },
          },
          {
            as: "userBaskets",
            model: User,
            required: false,
            where: { id: res.locals.user ? res.locals.user?.id : null },
            attributes: ["id"],
            through: {
              model: Basket,
            },
          },
        ],
      });
      return res.json(goods);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  })
  .post(uploadMiddleware.single("file"), async (req, res) => {
    try {
      const {
        title,
        price,
        description,
        color,
        size,
        quantity,
        categoryId,
        genderId,
        brandId,
      } = req.body;

      await Good.create({
        title,
        price: Number(price),
        image: req.file.path.replace("public", ""),
        description,
        color,
        categoryId,
        genderId,
        brandId,
        userId: res.locals.user.id,
        size,
        quantity,
      });
      return res
        .status(201)
        .responce({ message: "The good has been successfully added" });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  });

// Все товары по полу
apiGoodsRouter.get("/genders/:genderId", async (req, res) => {
  try {
    const goods = await Good.findAll({
      where: { genderId: req.params.genderId },
      order: [["createdAt", "DESC"]],
    });
    return res.json(goods);
  } catch (error) {
    return res.status(500).json(error);
  }
});
// ------------ //

// Товары продавца
apiGoodsRouter.get("/sellers", async (req, res) => {
  try {
    const goodsSeller = await Good.findAll({
      where: { userId: res.locals.user.id },
      order: [["createdAt", "DESC"]],
    });
    return res.json(goodsSeller);
  } catch (error) {
    return res.status(500).json(error);
  }
});
// ------------ //

// Все товары в категории
apiGoodsRouter.get(
  "/genders/:genderId/categories/:categoryId",
  async (req, res) => {
    try {
      const goods = await Good.findAll({
        where: {
          genderId: req.params.genderId,
          categoryId: req.params.categoryId,
        },
        order: [["createdAt", "DESC"]],
      });
      return res.json(goods);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
);
// ------------ //

// Один товар
apiGoodsRouter
  .route("/:id")
  .get(async (req, res) => {
    try {
      const good = await Good.findByPk(req.params.id, {
        where: { quantity: { [Op.gt]: 0 } },
        include: [
          {
            as: "userFavorites",
            model: User,
            where: { id: res.locals.user ? res.locals.user?.id : null },
            required: false,
            attributes: ["id"],
            through: {
              model: Favorite,
            },
          },
          {
            as: "userBaskets",
            model: User,
            where: { id: res.locals.user ? res.locals.user?.id : null },
            required: false,
            attributes: ["id"],
            through: {
              model: Basket,
            },
          },
        ],
      });
      res.json(good);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .delete(async (req, res) => {
    try {
      console.log(req);
      await Good.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  })
  .patch(uploadMiddleware.single("file"), async (req, res) => {
    try {
      const {
        title,
        price,
        description,
        color,
        size,
        quantity,
        categoryId,
        genderId,
        brandId,
      } = req.body;

      const good = await Good.findByPk(req.params.id);
      good.title = title;
      good.price = Number(price);
      good.image = req.file.path.replace("public", "");
      good.description = description;
      good.color = color;
      good.categoryId = categoryId;
      good.genderId = genderId;
      good.brandId = brandId;
      good.userId = res.locals.user.id;
      good.size = size;
      good.quantity = quantity;
      good.save();

      return res.status(200).json(good);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
// ------------ //

module.exports = apiGoodsRouter;
