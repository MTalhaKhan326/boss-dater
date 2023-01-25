const authRoutes = require("./auth.routes")
const userRoutes = require('./user.routes')
const profileSettingRoutes = require('./profileSetting.routes')
const adminAuthRoutes = require('./admin/auth.routes')
const adminUserRoutes = require('./admin/user.routes')
const userProfileRoutes = require('./userProfile.routes')
const userPreferenceRoutes = require('./userPreference.routes')

module.exports = {
  authRoutes,
  userProfileRoutes,
  userPreferenceRoutes,

  userRoutes,
  profileSettingRoutes,

  //admin Routes
  adminAuthRoutes,
  adminUserRoutes
};
