const express = require("express");
const { authJwt } = require('../../middlewares/authJwt')
const { checkDuplicateEmail } = require("../../middlewares/verifySignUp");
const {
  getUsers,
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
  getAllStatuses,
  changeStatus,
  searchUsers,
  generateRTCToken
} = require("../../controllers/admin/user.controller");
const validateRequestSchema = require("../../middlewares/validateRequestSchema");
const {
  loginSchema,
} = require("../../validation_schema/authorizationSchema");
const restrictTo = require("../../middlewares/authorization");
const adminUserRouter = express.Router();
const nocache =(req,resp,next)=>{
  resp.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  resp.header('Expires', '-1');
  resp.header('Pragma', 'no-cache');
  next();
}
// adminUserRouter.use(authJwt);
// adminUserRouter.use(restrictTo(2));  // 1 for user, 2 for admin

adminUserRouter.route("/").get(getUsers);
adminUserRouter.route("/:id/single").get(getSingleUser);
adminUserRouter.route("/status").get(getAllStatuses);
adminUserRouter.route("/").post(checkDuplicateEmail, createUser);
adminUserRouter.route("/:id/update").patch(editUser);

adminUserRouter.route("/change-status").patch(changeStatus);
adminUserRouter.route("/:id/delete").delete(deleteUser);
adminUserRouter.route("/search").get(searchUsers);
adminUserRouter.route("/agora-token/:channel/:role/:tokentype/:uid").get(generateRTCToken);

module.exports = adminUserRouter;
