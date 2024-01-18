const express = require("express");
const verifyAccessToken = require("../middlewares/verifyAccessToken");
// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, './public/img');
//   },
//   filename(req, file, cb) {
//     const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
//     cb(null, `${file.fieldname}-${uniqueSuffix}`);
//   },
// });

// const upload = multer({ storage });
const { Good } = require("../../db/models");

const apiGoodsRouter = express.Router();

apiGoodsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const goods = await Good.findAll({
        order: [["createdAt", "DESC"]],
      });
      return res.json(goods);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(/* upload.single('img'), */ verifyAccessToken, async (req, res) => {
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
      const newGood = await Good.create({
        title,
        price: Number(price),
        image: req.file?.filename || image,
        description,
        color,
        categoryId: Number(categoryId),
        genderId: Number(genderId),
        brandId: Number(brandId),
      });
      return res.status(201).json(newGood);
    } catch (error) {
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

apiGoodsRouter.delete("/:id", verifyAccessToken, async (req, res) => {
  try {
    await Good.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    return res.status(500).json(error);
  }
});

apiGoodsRouter.get("/:id", async (req, res) => {
  try {
    const product = await Good.findByPk(req.params.id);
    res.json(product);
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
