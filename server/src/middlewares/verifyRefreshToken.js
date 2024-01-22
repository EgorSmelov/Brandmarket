const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwtConfig");

require("dotenv").config();

function verifyRefreshToken(req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    res.locals.user = user;
    next();
  } catch (error) {
    console.log("verify refresh error");
    console.log(error);
    res.clearCookie(jwtConfig.refresh.name).sendStatus(403);
  }
}

module.exports = verifyRefreshToken;
