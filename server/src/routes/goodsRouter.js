const express = require('express');
const { Op } = require('sequelize');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const { Good, GoodsInfo, Favorite, User } = require('../../db/models');
const uploadMiddleware = require('../middlewares/uploadFile');

const apiGoodsRouter = express.Router();

apiGoodsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const where = {};
      const { categoryId } = req.query;
      if (categoryId !== 'null') {
        where.categoryId = categoryId;
      }

      console.log(where);
      const goods = await Good.findAll({
        where,

        include: [
          {
            model: GoodsInfo,
            where: { quantity: { [Op.gt]: 0 } },
          },
          {
            model: User,
            where: { id: res.locals.user.id },
            required: false,
            attributes: ['id'],
            through: {
              model: Favorite,
            },
          },
        ],
      });
      return res.json(goods);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(uploadMiddleware.single('file'), async (req, res) => {
    try {
      if (!req.body?.title) return res.status(500).json({ message: 'Empty reqbody' });
      const { title, price, description, color, size, quantity, userId, categoryId, genderId, brandId } = req.body;

      const good = await Good.create({
        title,
        price: Number(price),
        image: req.file.path.replace('public', ''),
        description,
        color,
        categoryId,
        genderId,
        brandId,
        userId: Number(userId),
      }).then((data) => {
        GoodsInfo.create({
          goodId: data.id,
          size,
          quantity,
        });
      });
      return res.status(201).responce({ message: 'The good has been successfully added' });
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  });

// Все товары по полу
apiGoodsRouter.get('/genders/:genderId', async (req, res) => {
  try {
    const goods = await Good.findAll({
      where: { genderId: req.params.genderId },
      order: [['createdAt', 'DESC']],
    });
    return res.json(goods);
  } catch (error) {
    return res.status(500).json(error);
  }
});
// ------------ //

// Товары продавца
apiGoodsRouter.get('/sellers', async (req, res) => {
  try {
    const goodsSeller = await Good.findAll({
      where: { userId: res.locals.user.id },
      order: [['createdAt', 'DESC']],
    });
    return res.json(goodsSeller);
  } catch (error) {
    return res.status(500).json(error);
  }
});
// ------------ //

// Все товары в категории
apiGoodsRouter.get('/genders/:genderId/categories/:categoryId', async (req, res) => {
  try {
    const goods = await Good.findAll({
      where: {
        genderId: req.params.genderId,
        categoryId: req.params.categoryId,
      },
      order: [['createdAt', 'DESC']],
    });
    return res.json(goods);
  } catch (error) {
    return res.status(500).json(error);
  }
});
// ------------ //

// Один товар
apiGoodsRouter
  .route('/:id')
  .get(async (req, res) => {
    try {
      const good = await Good.findByPk(req.params.id, {
        include: [
          {
            model: GoodsInfo,
            where: { quantity: { [Op.gt]: 0 } },
          },
          {
            model: User,
            where: { id: res.locals.user.id },
            required: false,
            attributes: ['id'],
            through: {
              model: Favorite,
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
      await Good.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  })
  .patch(verifyAccessToken, async (req, res) => {
    try {
      if (!req.body?.title) return res.status(500).json({ message: 'Empty reqbody' });
      const { title, price, image, description, color, categoryId, genderId, brandId } = req.body;

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
// ------------ //

module.exports = apiGoodsRouter;
