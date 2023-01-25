const status = require("http-status");
const User = require("../models/User.model");
const APIError = require("../utils/APIError");
const messages = require("../utils/constants");

exports.checkDuplicatePhone = (req, res, next) => {
  // Email
  User.findOne({
    where: {
        phoneNumber: req.body.phoneNumber,
    },
  }).then((user) => {
    if (user)
      return next(
        new APIError(messages.PHONE_ALREADY_EXIST, status.BAD_REQUEST)
      );

    next();
  });
};
