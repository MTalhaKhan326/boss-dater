const status = require("http-status");
const User = require("../models/User.model");
const APIError = require("../utils/APIError");
const messages = require("../utils/constants");

exports.checkDuplicatePassword = (req, res, next) => {
  // Password
  User.findOne({
    where: {
        password: req.body.password,
    },
  }).then((user) => {
    if (user)
      return next(
        new APIError(messages.PASSWORD_ALREADY_EXIST, status.BAD_REQUEST)
      );

    next();
  });
};