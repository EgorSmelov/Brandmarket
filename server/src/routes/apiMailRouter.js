const express = require("express");
const nodemailer = require("nodemailer");
const Template = require("../email/Template");
// const { Table } = require("../../db/models");

const apiMailRouter = express.Router();
require("dotenv").config();

apiMailRouter.route("/sendorder").post(async (req, res) => {
  const transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.yandex.ru",
    port: 465,
    auth: {
      user: "smelov909@yandex.ru",
      pass: "rwumxjfoggyguayd",
    },
  });
  const { data } = req.body;
  console.log(data, "<---------------");
  const price = data.totalprice;
  const title = data.baskets.map((datas) => datas.title).join('\n');
  const color = data.baskets.map((datas) => datas.color);
  if (data) {
    const mail = Template(title, price, color);
    const mailOptions = {
      from: "smelov909@yandex.ru",
      to: "smelov909@yandex.ru",
      subject: "ЧЕК от Brandmarket 🎟",
      html: mail,
    };
    const send = () =>
      new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          }
          resolve(info);
        });
      });
    await send(mailOptions);
  }
  return res.sendStatus(401);
});

module.exports = apiMailRouter;
