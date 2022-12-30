const express = require("express");
const { uploadFile } = require("../utils/fileUpload");
const { checkDuplicateEmail } = require("../middlewares/verifySignUp");
const {
  checkAccountDisableOrDeletion
} = require("../middlewares/checkDuplicate");
const { authJwt } = require("../middlewares/authJwt");

const {
  login,
  register,
  forgotPassword,
  matchToken,
  resetPassword,
  googleLogin,
  facebookLogin,
  sendCode,
  appleLogin,
  verifyCode,
  verifyForgotPasswordCode,
  sendEmailVerification,
  verifyEmailVerificationCode,
  signupEmailVerification,
  verifySignupEmailVerificationCode,
  updateForSocialLogin,
  verifySignupPhoneVerificationCode,
  verifyPhoneNumberExist,
  verifyPhoneNumberUserNameExist,
  logout
} = require("../controllers/auth.controller");
const { dropdown } = require("../controllers/dropdown.controller");
const validateRequestSchema = require("../middlewares/validateRequestSchema");
const {
  registerSchema,
  loginSchema
} = require("../validation_schema/authorizationSchema");

const authRouter = express.Router();

authRouter.route("/login").post(loginSchema, validateRequestSchema, login);
authRouter
  .route("/register")
  .post(registerSchema, validateRequestSchema, checkDuplicateEmail, register);
authRouter.route("/forgot-password").post(forgotPassword);
authRouter.route("/match-token").post(matchToken);
authRouter.route("/reset-password").post(resetPassword);

//Social Logins
authRouter.route("/google-login").post(googleLogin);
authRouter.route("/facebook-login").post(facebookLogin);
authRouter.route("/apple-login").post(appleLogin);
authRouter
  .route("/update-social-login")
  .post(authJwt, updateForSocialLogin); //checkDuplicateEmail

//phone number verification
authRouter.route("/send-code").post(sendCode);
authRouter.route("/verify-code").post(verifyCode);
authRouter.route("/dropdowns").get(dropdown);
authRouter.route("/verify-forgot-password-code").post(verifyForgotPasswordCode);
authRouter.route("/send-email-verification").post(sendEmailVerification);
authRouter.route("/signup-email-verification").post(signupEmailVerification);

authRouter
  .route("/verify-email-verification-code")
  .post(verifyEmailVerificationCode);

authRouter
  .route("/verify-signup-email-verification-code")
  .post(verifySignupEmailVerificationCode);

authRouter
  .route("/verify-signup-phone-verification-code")
  .post(verifySignupPhoneVerificationCode);

authRouter.route("/verify-phone-number-exist").post(verifyPhoneNumberUserNameExist);
authRouter.route("/logout").post(authJwt, logout);



module.exports = authRouter;
