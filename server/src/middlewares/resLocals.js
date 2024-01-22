require("dotenv").config();

const jwt = require("jsonwebtoken");

async function resLocals(req, res, next) {
  const { refreshToken } = req.cookies;
  try {
    const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    res.locals.user = user;
    next();
  } catch (error) {
    console.error(error);
    next();
  }
}

module.exports = resLocals;
