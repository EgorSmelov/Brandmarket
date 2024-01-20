const express = require("express");
const { Op } = require("sequelize");
const verifyAccessToken = require("../middlewares/verifyAccessToken");
const { Good, GoodsInfo } = require("../../db/models");
const uploadMiddleware = require("../middlewares/uploadFile");

const apiGoodsRouter = express.Router();

apiGoodsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const goods = await Good.findAll({
        include: [
          {
            model: GoodsInfo,
            user: { where: { userId: res.locals.id } },
            where: { quantity: { [Op.gt]: 0 } },
          },
        ],
      });

      return res.json(goods);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(uploadMiddleware.single("file"), async (req, res) => {
    try {
      console.log(req.body);
      if (!req.body?.title)
        return res.status(500).json({ message: "Empty reqbody" });
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

      const good = await Good.create({
        title,
        price: Number(price),
        image: req.file.path.replace("public", ""),
        description,
        color,
        categoryId,
        genderId,
        brandId,
        userId: res.locals.userId,
      }).then((data) => {
        GoodsInfo.create({
          goodId: data.id,
          size,
          quantity,
        });
      });
      return res
        .status(201)
        .responce({ message: "The good has been successfully added" });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  });

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

apiGoodsRouter.delete("/:id", async (req, res) => {
  try {
    await Good.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

apiGoodsRouter.get("/:id", async (req, res) => {
  try {
    const good = await Good.findByPk(req.params.id, {
      include: [{ model: GoodsInfo, where: { quantity: { [Op.gt]: 0 } } }],
    });
    res.json(good);
  } catch (error) {
    return res.status(500).json(error);
  }
});

apiGoodsRouter.patch("/:id", verifyAccessToken, async (req, res) => {
  try {
    if (!req.body?.title)
      return res.status(500).json({ message: "Empty reqbody" });
    const {
      title,
      price,
      image,
      description,
      color,
      categoryId,
      genderId,
      brandId,
    } = req.body;

    const good = await Good.findByPk(req.params.id);
    good.title = title;
    good.price = price;
    good.image = req.file?.filename || image;
    good.description = description;
    good.color = color;
    good.categoryId = Number(categoryId);
    good.genderId = Number(genderId);
    good.brandId = Number(brandId);

    good.save();

    return res.status(200).json(good);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = apiGoodsRouter;
