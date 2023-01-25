const UserProfile = require("../models/UserProfile.model");
const messages = require("../utils/constants");
const status = require("http-status");
const APIError = require("../utils/APIError");
const { User } = require("../models");

exports.checkDuplicate = (req, res, next) => {
  UserProfile.findOne({
    where: {
      userId: req.user.id,
    },
  }).then((user) => {
    if (user) {
      next(new APIError(messages.USERPROFILE_ALREADY_EXIST, status.CONFLICT));
    }
    next();
  });
};


