const express = require('express');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
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
const { Product } = require('../../db/models');

const apiProductsRouter = express.Router();

apiProductsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const products = await Product.findAll({
        order: [['createdAt', 'DESC']],
      });
      return res.json(products);
    } catch (error) {
      return res.status(500).json(error);
    }
  })
  .post(/* upload.single('img'), */ verifyAccessToken, async (req, res) => {
    try {
      if (!req.body?.title)
        return res.status(500).json({ message: 'Empty reqbody' });
      const { title, description, price, img } = req.body;
      const newProduct = await Product.create({
        title,
        description,
        price: Number(price),
        img: req.file?.filename || img,
      });
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

apiProductsRouter.delete('/:id', verifyAccessToken, async (req, res) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    return res.status(500).json(error);
  }
});

apiProductsRouter.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
});

apiProductsRouter.patch('/:id', verifyAccessToken, async (req, res) => {
  try {
    if (!req.body?.title)
      return res.status(500).json({ message: 'Empty reqbody' });
    const { title, description, price, img } = req.body;

    const product = await Product.findByPk(req.params.id);
    product.title = title;
    product.description = description;
    product.price = price;
    product.img = img;

    product.save();

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = apiProductsRouter;
