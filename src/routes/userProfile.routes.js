const express = require("express");
const { checkDuplicateEmail } = require("../middlewares/verifySignUp");
const { checkDuplicatePhone } = require("../middlewares/verifyPhone");
const { checkDuplicatePassword } = require("../middlewares/verifyPassword");
const {
  checkAccountDisableOrDeletion,
  checkDuplicate,
} = require("../middlewares/checkDuplicate");
const { authJwt } = require("../middlewares/authJwt");

const {
  createProfile,
  uploadProfileImage,
  updateEmail,
  updateNumber,
  updatePassword,
  editProfile,
  updateLocation,
  updateRecentLocation,
  uploadSingleImage,
  userData,
  deleteImage,
} = require("../controllers/userProfile.controller");
const validateRequestSchema = require("../middlewares/validateRequestSchema");

const userProfileRouter = express.Router();
userProfileRouter.use(authJwt);

userProfileRouter.route("/create").post(createProfile);
userProfileRouter.route("/upload-image").post(uploadProfileImage);
userProfileRouter.route("/delete-image/:imageId").delete(deleteImage);
userProfileRouter.route("/upload-single-image").post(uploadSingleImage);
userProfileRouter.route("/update-email").put(checkDuplicateEmail, updateEmail);
userProfileRouter.route("/update-phone").put(checkDuplicatePhone, updateNumber);
userProfileRouter
  .route("/update-password")
  .put(checkDuplicatePassword, updatePassword);
userProfileRouter.route("/update-location").put(updateLocation);
// userProfileRouter
//   .route("/update-password")
//   .put(checkDuplicatePassword, updatePassword);
userProfileRouter.route("/edit").put(editProfile);
userProfileRouter.route("/update-recent-location").put(updateRecentLocation);
userProfileRouter.route("/user-data").get(userData);

module.exports = userProfileRouter;
