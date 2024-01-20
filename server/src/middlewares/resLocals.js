require("dotenv").config();

const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwtConfig");

function resLocals(req, res, next) {
  try {
    const refreshToken = req.cookies[jwtConfig.refresh.name];
    const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    res.locals.user = user;
    // console.log(user);
    next();
  } catch (error) {
    next();
  }
}

module.exports = resLocals;
