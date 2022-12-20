const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const {
  validateEmail,
  checkAccountDeletion
} = require("../utils/validateEmail");
var crypto = require("crypto");
const { sendForgotPasswordEmail } = require("../utils/sendForgotPasswordEmail");
const APIError = require("../utils/APIError.js");
const sequelize = require("../config/db.config");
const status = require("http-status");
const catchAsync = require("../utils/catchAsync");
const messages = require("../utils/constants");
const {
  DEFAULT_PERCENTAGE,
  PROFILE_PERCENTAGE,
  IMAGE_UPLOAD_PERCENTAGE,
  RELATIONSHIP_INTENT_PERCENTAGE
} = require("../utils/constants");

const {
  User,
  ForgotPasswordToken,
  UserProfile,
  UserPreference,
  BodyType,
  Ethnicity,
  HairColor,
  Education,
  Children,
  Occupation,
  RelationshipStatus,
  UserTag,
  Tag,
  UserPhoto,
  EmailVerificationToken,
  UserFcmToken
} = require("../models");
const { uploadToS3 } = require("../utils/s3");

const fs = require("fs");
const util = require("util");
const {
  sendVerificationEmail
} = require("../utils/sendEmailVerificationEmail");
const unlinkFile = util.promisify(fs.unlink);

//Register User
exports.register = catchAsync(async (req, res, next) => {
  let user = null;
  let {
    gender,
    name,
    phoneNumber,
    email,
    password,
    birthDate,
    userKey
    //
  } = req.body;
  // const phoneIsValid = bcrypt.compareSync(phoneNumber, userKey); /* uncomment this after getting the twilio keys for sms code sending */
  const phoneIsValid = true;
  if (!phoneIsValid) {
    return next(
      new APIError(messages.INCORRECT_EMAIL_OR_PASSWORD, status.UNAUTHORIZED)
    );
  } else {
    user = await sequelize.transaction(async t => {
      const user = await User.create(
        {
          gender,
          name,
          phoneNumber,
          email,
          password: bcrypt.hashSync(password, 8),
          birthDate,
          //
          roleId: 1,
          userStatus: 1
        },
        { transaction: t }
      );

      //generating user profile on user creation
      await UserProfile.create(
        {
          userId: user.id
        },
        { transaction: t }
      );

      let interestedIn = null;
      if (gender == "male") {
        interestedIn = "female";
      } else {
        interestedIn = "male";
      }
      //generating user preference on user creation
      await UserPreference.create(
        {
          userId: user.id,
          interestedIn: interestedIn
        },
        { transaction: t }
      );
      // const newUserKey = bcrypt.hashSync(user.email, 16)
      //generate token
      return user;
    });
  }
  var token = user.getJWTToken();
  const userData = await User.findOne({
    where: {
      id: user.id
    }
  });
  if (req.body.fcmToken) {
    let fcmTokenExists = await UserFcmToken.findOne({
      where: {
        userId: user.id,
        fcmToken: req.body.fcmToken
      }
    });
    if (!fcmTokenExists) {
      await UserFcmToken.create({
        userId: user.id,
        fcmToken: req.body.fcmToken
      });
    }
  }
  res.status(status.OK).send({
    status: messages.SUCCESS,
    data: userData,
    accessToken: token
  });
});

//Login User
exports.login = catchAsync(async (req, res, next) => {
  let { deviceToken } = req.body;
  console.log(deviceToken);
  await User.update(
    { deviceToken },
    {
      where: {
        email: req.body.email
      }
    }
  );
  const user = await User.findOne({
    where: {
      [Op.or]: {
        email: req.body.email,
        phoneNumber: req.body.email
      }
    },
    include: [
      "UserPhotos",
      {
        model: UserProfile,
        include: [
          {
            model: RelationshipStatus,
            attributes: ["id", "name"]
          },
          {
            model: BodyType,
            attributes: ["id", "name"]
          },
          {
            model: Ethnicity,
            attributes: ["id", "name"]
          },
          {
            model: HairColor,
            attributes: ["id", "name"]
          },
          {
            model: Education,
            attributes: ["id", "name"]
          },
          {
            model: Children,
            attributes: ["id", "name"]
          },
          {
            model: Occupation,
            attributes: ["id", "name"]
          }
        ]
      },
      {
        model: UserPreference,
        include: [
          {
            model: RelationshipStatus,
            attributes: ["id", "name"]
          },
          {
            model: BodyType,
            attributes: ["id", "name"]
          },
          {
            model: Ethnicity,
            attributes: ["id", "name"]
          },
          {
            model: HairColor,
            attributes: ["id", "name"]
          },
          {
            model: Education,
            attributes: ["id", "name"]
          },
          {
            model: Children,
            attributes: ["id", "name"]
          },
          {
            model: Occupation,
            attributes: ["id", "name"]
          },
          {
            model: UserTag,
            include: [
              {
                model: Tag,
                attributes: ["id", "name"]
              }
            ]
          }
        ]
      }
    ]

    //paranoid: false,
  });

  if (!user) {
    return res.status(200).send({
      status: messages.BAD_REQUEST,
      message: messages.INCORRECT_EMAIL_OR_PASSWORD
    });
    // return next(
    //   new APIError(messages.INCORRECT_EMAIL_OR_PASSWORD, status.BAD_REQUEST)
    // );
  } else {
    if (req.body.fcmToken) {
      let fcmTokenExists = await UserFcmToken.findOne({
        where: {
          userId: user.id,
          fcmToken: parseInt(req.body.fcmToken)
        }
      });
      if (!fcmTokenExists) {
        await UserFcmToken.create({
          userId: user.id,
          fcmToken: parseInt(req.body.fcmToken)
        });
      }
    }

    let percentage = DEFAULT_PERCENTAGE;

    let profileValues = Object.assign({}, user.UserProfile?.dataValues);
    let preferenceValues = Object.assign({}, user.UserPreference?.dataValues);

    let notNullProfileValues = Object.keys(profileValues).filter(
      x => profileValues[x] !== null
    ).length;

    let notNullPreferenceValues = Object.keys(preferenceValues).filter(
      x => preferenceValues[x] !== null
    ).length;
    if (notNullProfileValues > 5) {
      percentage = percentage + PROFILE_PERCENTAGE;
    }
    if (notNullPreferenceValues > 6) {
      percentage = percentage + RELATIONSHIP_INTENT_PERCENTAGE;
    }
    let isImageUploaded = await UserPhoto.findOne({
      where: {
        userId: user.id
      }
    });
    if (isImageUploaded) {
      percentage = percentage + IMAGE_UPLOAD_PERCENTAGE;
    }
    if (validateEmail(req.body.email)) {
      if (!user)
        return next(
          new APIError(messages.INCORRECT_EMAIL_OR_PASSWORD, status.BAD_REQUEST)
        );

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user._previousDataValues.password
      );
      if (!passwordIsValid)
        return next(
          new APIError(
            messages.INCORRECT_EMAIL_OR_PASSWORD,
            status.UNAUTHORIZED
          )
        );
    }
    await User.update(
      { profileCompletionPercentage: percentage },
      {
        where: {
          id: user.id
        }
      }
    );

    //Check is disabled or deleted
    if (checkAccountDeletion(user, next)) {
      var token = user.getJWTToken();
      res.status(200).send({
        status: messages.SUCCESS,
        data: user,
        accessToken: token,
        profileCompletionPercentage: percentage
      });
    }
  }
});

//Forget password
exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      where: {
        email
      },
      include: [ForgotPasswordToken]
    });

    if (!user)
      return next(new APIError(messages.EMAIL_NOT_FOUND, status.BAD_REQUEST));

    const token = await user.generateForgotPasswordToken(user.id, 2);
    const subject = "Forgot Password";
    await sendForgotPasswordEmail(user.email, subject, token);
    // Email.sendForgotPasswordEmail(user.email, subject, token);

    res.status(status.CREATED).json({
      status: messages.SUCCESS,
      reset_token: token
    });
  } catch (error) {
    return next(new APIError(error, status.NOT_FOUND));
  }
};

//Match Token
exports.matchToken = async (req, res, next) => {
  try {
    const { token, email } = req.body;
    console.log("bodyyyyyyyyyyyyyyyyyyyyyyy" + req.body.token);
    const hashedToken = User.createHashFromString(token);
    const user = await User.findOne({
      include: [
        {
          model: ForgotPasswordToken,
          where: {
            token: hashedToken,
            expiresIn: {
              [Op.gte]: Date.now()
            }
          }
        }
      ],
      where: { email }
    });
    console.log("userrrrrrrrrrrrrrrrrrrrrrrrrrr" + user);

    if (!user)
      return next(new APIError(messages.INVALID_TOKEN, status.UNAUTHORIZED));

    res.status(status.OK).json({
      status: messages.SUCCESS,
      message: messages.TOKEN_MATCHED
    });
  } catch (error) {
    console.log("errorrrrrrrrrrrrr", error);
  }
};

//Reset Password
exports.resetPassword = async (req, res, next) => {
  try {
    const { password, email } = req.body;

    const user = await User.findOne({
      where: {
        email
      }
    });

    if (!user)
      return next(new APIError(messages.INVALID_TOKEN, status.UNAUTHORIZED));

    user.password = bcrypt.hashSync(password, 8);

    await user.save();

    const accessToken = user.getJWTToken();

    res.status(status.OK).json({
      status: messages.SUCCESS,
      accessToken
    });
  } catch (error) {
    console.log("errorrrrrrrrrr", error);
  }
};

//Google (Social Login)
exports.googleLogin = catchAsync(async (req, res, next) => {
  const { email, googleId } = req.body;

  let user = await User.findOne({ where: { googleId: googleId } });
  if (!user) {
    User.findOne({
      where: {
        email: email
      }
    }).then(user => {
      if (user)
        return next(
          new APIError(messages.EMAIL_ALREADY_EXIST, status.BAD_REQUEST)
        );
    });

    user = await User.create({
      email,
      googleId
    });

    await UserProfile.create({
      userId: user.id
    });

    await UserPreference.create({
      userId: user.id
    });
  }
  if (req.body.fcmToken) {
    let fcmTokenExists = await UserFcmToken.findOne({
      where: {
        userId: user.id,
        fcmToken: req.body.fcmToken
      }
    });
    if (!fcmTokenExists) {
      await UserFcmToken.create({
        userId: user.id,
        fcmToken: req.body.fcmToken
      });
    }
  }
  var token = user.getJWTToken();
  res.status(200).send({
    status: messages.SUCCESS,
    user: user,
    accessToken: token
  });
});

//Facebook (Social Login)
exports.facebookLogin = catchAsync(async (req, res, next) => {
  const { facebookId } = req.body;

  let user = await User.findOne({ where: { facebookId } });
  if (!user) {
    user = await User.create({
      facebookId
    });

    await UserProfile.create({
      userId: user.id
    });

    await UserPreference.create({
      userId: user.id
    });
  }

  if (req.body.fcmToken) {
    let fcmTokenExists = await UserFcmToken.findOne({
      where: {
        userId: user.id,
        fcmToken: req.body.fcmToken
      }
    });
    if (!fcmTokenExists) {
      await UserFcmToken.create({
        userId: user.id,
        fcmToken: req.body.fcmToken
      });
    }
  }

  var token = user.getJWTToken();
  res.status(200).send({
    status: messages.SUCCESS,
    user: user,
    accessToken: token
  });
});

exports.appleLogin = catchAsync(async (req, res, next) => {
  const { appleId } = req.body;

  let user = await User.findOne({ where: { appleId } });
  if (!user) {
    user = await User.create({
      appleId
    });

    await UserProfile.create({
      userId: user.id
    });

    await UserPreference.create({
      userId: user.id
    });
  }

  var token = user.getJWTToken();
  res.status(200).send({
    status: messages.SUCCESS,
    user: user,
    accessToken: token
  });
});
//
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.TWILIO_VERIFY_SID;
console.log(accountSid, authToken);
const client = require("twilio")(
  "ACfe93f53b69b44a82115056212b96ea95",
  "0d625e670a16f017abb7e82b353c99b1"
);
//Send phone verification code
exports.sendCode = catchAsync(async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;
    let codeSend = await client.verify
      .services(verifySid)
      .verifications.create({ to: `+${phoneNumber}`, channel: "sms" })
      .then(message => console.log(message.status))
      .catch(err => console.log("error: ", err));

    if (codeSend) {
      res.status(status.OK).json({
        status: messages.SUCCESS,
        message: messages.CODE_SEND
      });
    }
  } catch (error) {
    console.log("errorrrrrrrrr", error);
  }
});

//Verify Code
exports.verifyCode = catchAsync(async (req, res, next) => {
  const { code, phoneNumber } = req.body;
  res.send.phoneNumber = "+92321888888";
  // return res.end('Hiiiiiiiiiiiiiiiiiiiiii');

  console.log("phonenumber :" + req.body.phoneNumber);

  const check = await client.verify
    .services(process.env.VERIFY_SERVICE_SID)
    .verificationChecks.create({ to: `+${phoneNumber}`, code: code })
    .catch(e => {
      console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" + e);
      res.status(406).send({
        message: "Invalid code"
      });
    });
  if (check.valid) {
    const userKey = bcrypt.hashSync(phoneNumber, 16);
    (await user).update({
      verifiedAt: new Date()
    });

    res.status(status.OK).json({
      status: messages.SUCCESS,
      message: messages.CODE_VERIFIED,
      data: userKey
    });
  } else {
    return next(new APIError(messages.CODE_NOT_VERIFIED, status.NOT_FOUND));
  }
  // next();
});

exports.verifyForgotPasswordCode = async (req, res, next) => {
  try {
    const { token } = req.body;
    const hashedToken = User.createHashFromString(token);

    const user = await User.findOne({
      include: [
        {
          model: ForgotPasswordToken,
          where: {
            token: hashedToken
          }
        }
      ]
    });
    if (!user)
      return next(
        new APIError(messages.CODE_NOT_VERIFIED, status.UNAUTHORIZED)
      );
    await user.ForgotPasswordToken.destroy();

    res.status(status.OK).json({
      status: "success"
    });
  } catch (err) {
    return next(new APIError(messages.UNABLE_TO_VERIFY, status.NOT_FOUND));
  }
};

exports.sendPhoneVerification = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;
    const user = await User.findOne({
      where: {
        phoneNumber
      },
      include: [EmailVerificationToken]
    });
    if (!user)
      return next(
        new APIError(messages.PHONE_NUMBER_NOT_FOUND, status.BAD_REQUEST)
      );
    const subject = messages.EMAIL_VERIFICATION;
    const token = await user.generateEmailVerificationToken(user.id, 2);
    //await sendVerificationEmail(user.email, subject, token);

    res.status(status.CREATED).json({
      status: messages.SUCCESS,
      reset_token: token
    });
  } catch (err) {
    return next(new APIError(err.message, status.NOT_FOUND));
  }
};

exports.sendEmailVerification = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({
      where: {
        email
      },
      include: [EmailVerificationToken]
    });
    if (!user)
      return next(new APIError(messages.EMAIL_NOT_FOUND, status.BAD_REQUEST));
    const subject = messages.EMAIL_VERIFICATION;
    const token = await user.generateEmailVerificationToken(user.id, 2);
    await sendVerificationEmail(user.email, subject, token);

    res.status(status.CREATED).json({
      status: messages.SUCCESS,
      reset_token: token
    });
  } catch (err) {
    return next(new APIError(err.message, status.NOT_FOUND));
  }
};

exports.verifyEmailVerificationCode = async (req, res, next) => {
  try {
    const { token } = req.body;
    const hashedToken = User.createHashFromString(token);

    const user = await User.findOne({
      include: [
        {
          model: EmailVerificationToken,
          where: {
            token: hashedToken
          }
        }
      ]
    });
    if (!user)
      return next(
        new APIError(messages.CODE_NOT_VERIFIED, status.UNAUTHORIZED)
      );
    await user.EmailVerificationToken.destroy();

    res.status(status.OK).json({
      status: "success"
    });
  } catch (err) {
    return next(new APIError(messages.UNABLE_TO_VERIFY, status.NOT_FOUND));
  }
};

exports.signupEmailVerification = async (req, res, next) => {
  console.log("req", req);
  try {
    const { email } = req.body;
    const subject = messages.EMAIL_VERIFICATION;
    const token = Math.floor(1000 + Math.random() * 9000);
    const hashedToken = crypto
      .createHash("sha256")
      .update(token.toString())
      .digest("hex");

    await sendVerificationEmail(email, subject, token);
    const expiresIn =
      Date.now() + parseInt(process.env.FORGOT_PASSWORD_TOKEN_EXPIRES_IN); // Token expires time = 10 minutes

    await EmailVerificationToken.create({
      token: hashedToken,
      expiresIn
    });
    res.status(status.CREATED).json({
      status: messages.SUCCESS,
      reset_token: token
    });
  } catch (error) {
    return next(new APIError(error.message, status.NOT_FOUND));
  }
};

exports.verifySignupEmailVerificationCode = async (req, res, next) => {
  try {
    const { token } = req.body;
    const hashedToken = User.createHashFromString(token);

    const verification = await EmailVerificationToken.findOne({
      where: {
        token: hashedToken
      }
    });
    if (!verification)
      return next(
        new APIError(messages.CODE_NOT_VERIFIED, status.UNAUTHORIZED)
      );

    res.status(status.OK).json({
      status: "success"
    });
  } catch (err) {
    return next(new APIError(messages.UNABLE_TO_VERIFY, status.NOT_FOUND));
  }
};

exports.verifySignupPhoneVerificationCode = async (req, res, next) => {
  try {
    const { token } = req.body;
    const hashedToken = User.createHashFromString(token);

    const verification = await EmailVerificationToken.findOne({
      where: {
        token: hashedToken
      }
    });
    if (!verification)
      return next(
        new APIError(messages.CODE_NOT_VERIFIED, status.UNAUTHORIZED)
      );

    res.status(status.OK).json({
      status: "success"
    });
  } catch (err) {
    return next(new APIError(messages.UNABLE_TO_VERIFY, status.NOT_FOUND));
  }
};

exports.verifyPhoneNumberUserNameExist = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;
    const user = await User.findOne({
      where: {
        phoneNumber
      }
    });

    if (user) {
      return next(
        new APIError(messages.PHONE_ALREADY_EXIST, status.NOT_ACCEPTABLE)
      );
    } else {
      res.status(status.OK).json({
        status: "success"
      });
    }
  } catch (err) {
    return next(new APIError(messages.UNABLE_TO_VERIFY, status.NOT_FOUND));
  }
};

exports.updateForSocialLogin = async (req, res, next) => {
  try {
    let { body: { gender, userName, phoneNumber, email, birthDate } } = req;
    let user = await User.findOne({
      where: { id: req.user.id },
      include: [
        "UserPhotos",
        {
          model: UserProfile,
          include: [
            {
              model: RelationshipStatus,
              attributes: ["id", "name"]
            },
            {
              model: BodyType,
              attributes: ["id", "name"]
            },
            {
              model: Ethnicity,
              attributes: ["id", "name"]
            },
            {
              model: HairColor,
              attributes: ["id", "name"]
            },
            {
              model: Education,
              attributes: ["id", "name"]
            },
            {
              model: Children,
              attributes: ["id", "name"]
            },
            {
              model: Occupation,
              attributes: ["id", "name"]
            }
          ]
        },
        {
          model: UserPreference,
          include: [
            {
              model: RelationshipStatus,
              attributes: ["id", "name"]
            },
            {
              model: BodyType,
              attributes: ["id", "name"]
            },
            {
              model: Ethnicity,
              attributes: ["id", "name"]
            },
            {
              model: HairColor,
              attributes: ["id", "name"]
            },
            {
              model: Education,
              attributes: ["id", "name"]
            },
            {
              model: Children,
              attributes: ["id", "name"]
            },
            {
              model: Occupation,
              attributes: ["id", "name"]
            },
            {
              model: UserTag,
              include: [
                {
                  model: Tag,
                  attributes: ["id", "name"]
                }
              ]
            }
          ]
        }
      ]
    });
    let percentage = DEFAULT_PERCENTAGE;

    let profileValues = Object.assign({}, user.UserProfile.dataValues);
    let preferenceValues = Object.assign({}, user.UserPreference.dataValues);

    let notNullProfileValues = Object.keys(profileValues).filter(
      x => profileValues[x] !== null
    ).length;

    let notNullPreferenceValues = Object.keys(preferenceValues).filter(
      x => preferenceValues[x] !== null
    ).length;
    if (notNullProfileValues > 5) {
      percentage = percentage + PROFILE_PERCENTAGE;
    }
    if (notNullPreferenceValues > 6) {
      percentage = percentage + RELATIONSHIP_INTENT_PERCENTAGE;
    }
    let isImageUploaded = await UserPhoto.findOne({
      where: {
        userId: user.id
      }
    });
    if (isImageUploaded) {
      percentage = percentage + IMAGE_UPLOAD_PERCENTAGE;
    }
    await User.update(
      {
        gender,
        userName,
        phoneNumber,
        email,
        birthDate,
        profileCompletionPercentage: percentage
      },
      {
        where: {
          id: req.user.id
        }
      }
    );
    user = await User.findByPk(req.user.id);
    res.status(status.OK).json({
      status: "success",
      user: user
    });
  } catch (err) {
    return next(new APIError(err.message, status.NOT_FOUND));
  }
};

exports.logout = catchAsync(async (req, res, next) => {
  let { lastLocation } = req.body;
  try {
    console.log("lastLocation", lastLocation);
    await User.update(
      { lastLocation, lastActiveTime: new Date() },
      {
        where: {
          id: req.user.id
        }
      }
    );

    res.status(status.OK).json({
      status: "success",
    });
  } catch (err) {
    return next(new APIError(err.message, status[500]));
  }
});
