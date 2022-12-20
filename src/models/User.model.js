const { Model, DataTypes, Sequelize } = require("sequelize");
var crypto = require("crypto");
const ForgotPasswordToken = require("./ForgotPasswordToken.model");
const sequelize = require("../config/db.config");
const jwt = require("jsonwebtoken");
const { NON_AUTHORITATIVE_INFORMATION } = require("http-status");
const { isMainThread } = require("worker_threads");
const EmailVerificationToken = require("./EmailVerificationToken.model");

class User extends Model {
  getJWTToken() {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET_KEY);
  }

  static createHashFromString(data) {
    return crypto.createHash("sha256").update(data).digest("hex");
  }

  async generateForgotPasswordToken(user, len) {
    let resetToken = null;
    let hashedToken = null;
    if (user.roleId === 2) {
      resetToken = crypto.randomBytes(len).toString("hex");
      hashedToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    } else {
      resetToken = Math.floor(1000 + Math.random() * 9000);
      hashedToken = User.createHashFromString(resetToken.toString());
    }

    const expiresIn =
      Date.now() + parseInt(process.env.FORGOT_PASSWORD_TOKEN_EXPIRES_IN); // Token expires time = 10 minutes

    if (this.ForgotPasswordToken) {
      this.ForgotPasswordToken.token = hashedToken;
      this.ForgotPasswordToken.expiresIn = expiresIn;
      this.ForgotPasswordToken.userId = user.id;
      this.ForgotPasswordToken.save();
    } else {
      await ForgotPasswordToken.create({
        token: hashedToken,
        expiresIn,
        userId: user
      });
    }

    return resetToken;
  }
  async generateEmailVerificationToken(user, len) {
    let resetToken = null;
    let hashedToken = null;
    if (user.roleId === 2) {
      resetToken = crypto.randomBytes(len).toString("hex");
      hashedToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    } else {
      resetToken = Math.floor(1000 + Math.random() * 9000);
      hashedToken = User.createHashFromString(resetToken.toString());
    }

    const expiresIn =
      Date.now() + parseInt(process.env.FORGOT_PASSWORD_TOKEN_EXPIRES_IN); // Token expires time = 10 minutes

    if (this.EmailVerificationToken) {
      this.EmailVerificationToken.token = hashedToken;
      this.EmailVerificationToken.expiresIn = expiresIn;
      this.EmailVerificationToken.userId = user.id;
      this.EmailVerificationToken.save();
    } else {
      await EmailVerificationToken.create({
        token: hashedToken,
        expiresIn,
        userId: user
      });
    }

    return resetToken;
  }
}

User.init(
  {
    //user registration
    gender: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    birthDate: {
      type: DataTypes.DATEONLY
    },
    isDisabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    deviceToken: {
      type: DataTypes.TEXT
    },
    onlineStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    showRecentLocation: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    showInSearch: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    showWhenViewSomeone: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    showFavouritedOne: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    joiningDate: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    profileCompletionPercentage: {
      type: DataTypes.INTEGER,
      defaultValue: 25
    },
    someoneSendMeMessage: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    someoneFavouritedMe: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    // create Identity screens (user preference)

    facebookId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    appleId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    showWhenViewSomeOne: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    // roleId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "Roles",
    //     key: "id",
    //   },
    // },
    // isActive: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: true
    // },
    // userStatus:{
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: "UserStatuses",
    //     key: "id",
    //   },
    // },
    lastActiveTime: {
      type: "TIMESTAMP",
      allowNull: true
    },
    lastLocation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailVerifiedAt: {
      type: DataTypes.DATE
    },
    phoneVerifiedAt: {
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    paranoid: true,
    modelName: "User"
  }
);


User.addScope('distance', (latitude, longitude, distance, unit = "km") => {
  const constant = unit == "km" ? 6371 : 3959;
  const haversine = `(
      ${constant} * acos(
          cos(radians(${latitude}))
          * cos(radians(latitude))
          * cos(radians(longitude) - radians(${longitude}))
          + sin(radians(${latitude})) * sin(radians(latitude))
      )
  )`;
  return {
      attributes: [ 
          [sequelize.literal(haversine), 'distance'],
      ],
      having: sequelize.literal(`distance <= ${distance}`)
  }
}) 


module.exports = User;



