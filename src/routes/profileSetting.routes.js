const express = require("express");
const { authJwt } = require('../middlewares/authJwt')
const { profileSettings, updateEmail, updatePassword, deleteAccount, disableAccount } = require("../controllers/profileSetting.controller");
const { updateOrDeleteAccountSchema} = require("../validation_schema/profileSettingSchema")
const validateRequestSchema = require("../middlewares/validateRequestSchema")
const restrictTo = require("../middlewares/authorization");
const userRouter = express.Router();

userRouter.use(authJwt);
// userRouter.use(restrictTo(1));  // 1 for user, 2 for admin
//Token will be check here using middleware named 'authJwt' before executing code of following route methods

userRouter.route("/").get(profileSettings);
userRouter.route('/delete-account').delete(updateOrDeleteAccountSchema, validateRequestSchema, deleteAccount);
userRouter.route('/disable-account').patch(updateOrDeleteAccountSchema, validateRequestSchema, disableAccount);

module.exports = userRouter;
