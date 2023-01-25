const express = require("express");
// const { uploadFile } = require("../utils/fileUpload");
const { checkDuplicateEmail } = require("../../middlewares/verifySignUp");
// const {checkAccountDisableOrDeletion} = require("../middlewares/checkDuplicate");
const {
  login,
  forgotPassword,
  matchToken,
  resetPassword
} = require("../../controllers/admin/auth.controller");
const validateRequestSchema = require("../../middlewares/validateRequestSchema");
const {
  loginSchema,
  resetPasswordSchema
} = require("../../validation_schema/authorizationSchema");

const adminAuthRouter = express.Router();

adminAuthRouter.route("/login").post(loginSchema, validateRequestSchema, login);

adminAuthRouter.route("/forgot-password").post(forgotPassword);
adminAuthRouter.route("/match-token").post(matchToken);
adminAuthRouter.route("/reset-password").patch(resetPasswordSchema,validateRequestSchema,resetPassword);

module.exports = adminAuthRouter;
