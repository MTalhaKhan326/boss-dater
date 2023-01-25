const AppleStrategy = require("passport-appleid");
const User = require("../models/User.model");

passport.use(new AppleStrategy({
    clientID: APPLE_SERVICE_ID,
    callbackURL: 'https://www.example.net/auth/apple/callback',
    teamId: APPLE_TEAM_ID,
    keyIdentifier: 'RB1233456',
    privateKeyPath: path.join(__dirname, "./AuthKey_RB1233456.p8")
  }, 
  function(accessToken, refreshToken, profile, done) {
    const id = profile.id;
  User.findOrCreate({
    
  }, function (err, user) {
        done(err, user);
    });
  }
));