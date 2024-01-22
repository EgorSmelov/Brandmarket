const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const apiGoodsRouter = require("./routes/goodsRouter");
const tokensRouter = require("./routes/tokensRouter");
const authRouter = require("./routes/authRouter");
const categoriesRouter = require("./routes/categoriesRouter");
const brandsRouter = require("./routes/brandsRouter");
const gendersRouter = require("./routes/gendersRouter");
const favoritesRouter = require("./routes/favoritesRouter");
const resLocals = require("./middlewares/resLocals");
const moderationRouter = require("./routes/moderationRouter");
const basketRouter = require("./routes/basketRouter");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(resLocals);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/goods", apiGoodsRouter);
app.use("/api/v1/favorites", favoritesRouter);
app.use("/api/v1/baskets", basketRouter);
app.use("/api/v1/tokens", tokensRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/brands", brandsRouter);
app.use("/api/v1/genders", gendersRouter);
app.use("/api/v1/moderation", moderationRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
