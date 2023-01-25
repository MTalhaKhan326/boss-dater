const { body } = require("express-validator");
const messages = require("../utils/constants");
const bcrypt = require("bcryptjs");

updateEmailSchema = [
  body("emailConfirmation")
    .custom((value, { req }) => {
      if (value !== req.body.email) return false;

      return true;
    })
    .withMessage(messages.EMAIL_CONFIRMATION),
];

updatePasswordSchema = [
  body("passwordConfirmation")
    .custom((value, { req }) => {
      if (value !== req.body.password) return false;

      return true;
    })
    .withMessage(messages.PASSWORD_CONFIRMATION),
];

updateOrDeleteAccountSchema = [
  body("password")
    .exists({ checkFalsy: true })
    .withMessage(messages.PASSWORD_REQUIRED_TO_UPDATE_OR_DELETE_ACCOUNT)
    .custom((value, { req }) => {
      if (bcrypt.compareSync(value, req.user.password)) return true;
      else return false;
    })
    .withMessage(messages.INCORRECT_PASSWORD),
];

reportSchema = [
  body("reason")
    .exists({ checkFalsy: true })
    .withMessage("reason is required field"),
  body("note")
    .exists({ checkFalsy: true })
    .withMessage("note is required field"),
];

module.exports = {
  updateEmailSchema,
  updatePasswordSchema,
  updateOrDeleteAccountSchema,
  reportSchema,
};
