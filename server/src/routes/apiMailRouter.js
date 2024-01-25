const express = require("express");
const nodemailer = require("nodemailer");
const Template = require("../email/Template");
// const { Table } = require("../../db/models");

const apiMailRouter = express.Router();
require("dotenv").config();

apiMailRouter.route("/sendorder").post(async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "mail",
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASS,
    },
  });
  const { data } = req.body;
  console.log(data, '<------------------');
  if (data) {
    const mail = Template(data.user, data.guests, data.table, data.total);
    const mailOptions = {
      from: ' "BrandMarket ☕ 🥃 🍭" <brandmarket@gmail.com>',
      to: "smelov909@mial.ru",
      subject: "Brandmarket 🎟",
      html: mail,
    };
    transporter.sendMail(mailOptions);
    return res.json("All right");
  }
  return res.sendStatus(401);
});

module.exports = apiMailRouter;
