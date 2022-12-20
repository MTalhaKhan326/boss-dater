var express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/db.config");
const cors = require("cors");
const passport = require("passport");
const {
  authRoutes,
  userProfileRoutes,
  userPreferenceRoutes,
  userRoutes,
  profileSettingRoutes,
  adminAuthRoutes,
  adminUserRoutes
} = require("./routes/index.routes");
const { getJwtStrategy } = require("./config/passport");
const logger = require("./utils/logMsg");
global.logger = require("./utils/logMsg");
const APIError = require("./utils/APIError");
const globalErrorHandler = require("./controllers/errorController");
const fileUpload = require("express-fileupload");
const { User } = require("./models");

var app = express();

app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "500mb" }));
app.use("/uploads", express.static("uploads"));

const connectWithDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connection To Database Has Been Established");
  } catch (error) {
    logger.error("There is some error in syncing models", error);
  }
};

connectWithDB();

app.use(
  cors({
    origin: "*"
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the beginnings of nothingness." });
});

app.get("/test", async (req, res) => {
  let isConnected = false,
    error = null,
    data = {};
  try {
    await connectWithDB();
    isConnected = true;
    data.users = await User.findAll();
  } catch (e) {
    error = e;
  }
  res.json({ isDbConnected: isConnected, error, data });
});

//Routes
app.use(`${process.env.URL_PREFIX}/auth`, authRoutes);

//intentRoutes
app.use(`${process.env.URL_PREFIX}/preference`, userPreferenceRoutes);

//Admin Authorization Routes
app.use(`${process.env.URL_PREFIX}/admin`, adminAuthRoutes);

//Protected Resources
passport.use(getJwtStrategy());
//Routes
app.use(`${process.env.URL_PREFIX}/profile`, userProfileRoutes);
app.use(`${process.env.URL_PREFIX}/user`, userRoutes);
app.use(`${process.env.URL_PREFIX}/profile-settings`, profileSettingRoutes);

//admin protected resources
app.use(`${process.env.URL_PREFIX}/admin/users`, adminUserRoutes);

app.all("*", (req, res, next) => {
  next(new APIError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//Error handling middleware
app.use(globalErrorHandler);

module.exports = app;
