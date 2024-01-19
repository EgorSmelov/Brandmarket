const express = require("express");
const { Op } = require("sequelize");
const multer = require("multer");
const mime = require("mime-types");
const verifyAccessToken = require("../middlewares/verifyAccessToken");
const { Good, GoodsInfo } = require("../../db/models");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/img");
  },
  filename(req, file, cb) {
    const ext = mime.extension(file.mimetype);
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage });

const apiGoodsRouter = express.Router();

apiGoodsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const goods = await Good.findAll({
        include: [
          {
            model: GoodsInfo,
            where: { quantity: { [Op.gt]: 0 } },
          },
        ],
      });

      return res.json(goods);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(upload.single("file"), async (req, res) => {
    try {
      if (!req.body?.title)
        return res.status(500).json({ message: "Empty reqbody" });
      const { title, price, image, description, color } = req.body;
      const newGood = await Good.create({
        title,
        price: Number(price),
        image: req.file?.filename || image,
        description,
        color,
        categoryId: 1,
        genderId: 1,
        brandId: 1,
        userId: res.locals.userId,
      });
      return res.status(201).json(newGood);
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
    const product = await Good.findByPk(req.params.id, {
      include: [{ model: GoodsInfo, where: { quantity: { [Op.gt]: 0 } } }],
    });
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
