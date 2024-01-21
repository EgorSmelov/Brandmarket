require("dotenv").config();

const jwt = require("jsonwebtoken");

async function resLocals(req, res, next) {
  const { token } = req.cookies.refreshToken;
  try {
    const { user } = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    res.locals.user = user;
    next();
  } catch (error) {
    console.error(error);
    next();
  }
}

module.exports = resLocals;
