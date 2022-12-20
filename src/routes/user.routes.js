const express = require ('express');
const {authJwt} = require ('../middlewares/authJwt');
const {
  index,
  getSingle,
  changeStatus,
  update,
  deleteUser,
  blockUser,
  reportUser,
  likeUser,
  getListOfAllUsersLikedByMe,
  getListOfAllUsersWhoLikeMe,
  deleteAccount,
  disableAccount,
  viewUser,
  showOnlineStatus,
  getListOfAllUsersViewedByMe,
  getListOfAllUsersWhoViewedMe,
  showJoiningDate,
  showRecentLoginLocation,
  showInSearch,
  showFavouritedOne,
  showWhenViewSomeOne,
  showWhenViewSomeone,
  showSomeOneSendMeMessage,
  showSomeOneFavouritedMe,
  userData,
  showLatestUser,
  showNearByUser,
  showRecentlyActiveUser,
  getUserSearchById,
  getUserSearches,
  saveUserSearch,
  deleteUserSearchById,
  activateUserSearchById,
  sendPushNotification,
  getUserHistory,
} = require ('../controllers/user.controller');

const {matchUser} = require ('../controllers/matchMaking.controller');
const restrictTo = require ('../middlewares/authorization');
const userRouter = express.Router ();
const validateRequestSchema = require ('../middlewares/validateRequestSchema');
const {reportSchema} = require ('../validation_schema/profileSettingSchema');

// userRouter.use(authJwt);
// userRouter.use(restrictTo(1));  // 1 for user, 2 for admin

//Token will be check here using middleware named 'authJwt' before executing code of following route methods
userRouter
  .route ('/show-when-view-someone')
  .patch (authJwt, showWhenViewSomeOne);
userRouter.route ('/show-latest-user').get (authJwt, showLatestUser);
userRouter.route ('/show-nearby-user').get (authJwt, showNearByUser);
userRouter
  .route ('/show-recently-active-user')
  .get (authJwt, showRecentlyActiveUser);
userRouter.route ('/').post (index);
userRouter.route ('/getUsers').get (authJwt, matchUser);
userRouter.route ('/my-liked-users').get (authJwt, getListOfAllUsersLikedByMe);
userRouter
  .route ('/users-who-like-me')
  .get (authJwt, getListOfAllUsersWhoLikeMe);
userRouter.route ('/block-user/:id').post (authJwt, blockUser);
userRouter
  .route ('/report-user/:id')
  .post (reportSchema, validateRequestSchema, authJwt, reportUser);
userRouter.route ('/like-user/:id').post (authJwt, likeUser);
userRouter.route ('/delete-account').delete (authJwt, deleteAccount);
userRouter.route ('/disable-account').patch (authJwt, disableAccount);
userRouter.route ('/view-user/:id').post (authJwt, viewUser);
userRouter.route ('/online-status').post (authJwt, showOnlineStatus);
userRouter.route ('/joining-date').post (authJwt, showJoiningDate);
userRouter.route ('/in-search').post (authJwt, showInSearch);
userRouter
  .route ('/someone-send-message')
  .post (authJwt, showSomeOneSendMeMessage);
userRouter
  .route ('/someone-favourited-me')
  .post (authJwt, showSomeOneFavouritedMe);
userRouter.route ('/favourited-one').post (authJwt, showFavouritedOne);
userRouter.route ('/view-someone').post (authJwt, showWhenViewSomeone);
userRouter.route ('/recent-login').post (authJwt, showRecentLoginLocation);
userRouter
  .route ('/my-viewed-users')
  .get (authJwt, getListOfAllUsersViewedByMe);

userRouter.route ('/test-hello').get (authJwt, function (req, res) {
  res.status (200).send ({
    hello: 'world',
  });
});

userRouter
  .route ('/users-who-viewed-me')
  .get (authJwt, getListOfAllUsersWhoViewedMe);

userRouter.route ('/save-user-search').post (authJwt, saveUserSearch);
userRouter.route ('/get-user-searches').get (authJwt, getUserSearches);
userRouter.route ('/save-user-search/:id').post (authJwt, saveUserSearch);
userRouter
  .route ('/get-single-user-search/:id')
  .get (authJwt, getUserSearchById);
userRouter
  .route ('/delete-user-search/:id')
  .delete (authJwt, deleteUserSearchById);
userRouter
  .route ('/activate-user-search/:id')
  .post (authJwt, activateUserSearchById);
userRouter
  .route ('/send-push-notification')
  .post (authJwt, sendPushNotification);


  userRouter
  .route ('/user-history/:id')
  .get (authJwt,  getUserHistory);
  


module.exports = userRouter;
