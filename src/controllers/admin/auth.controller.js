const User = require("../../models/User.model");
const Role = require("../../models/Role.model");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const {
  validateEmail,
  checkAccountDeletion,
} = require("../../utils/validateEmail");
const ForgotPasswordToken = require("../../models/ForgotPasswordToken.model");
const { sendForgotPasswordEmail } = require("../../utils/sendEmail");
const APIError = require("../../utils/APIError.js");
const sequelize = require("sequelize");
const status = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const messages = require("../../utils/constants");
const Email = require("../../utils/sendEmail")

//Login User
exports.login = catchAsync(async (req, res, next) => {
  console.log("req.body.email",req.body.email)
  const user = await User.findOne({
    select: "*",
    where: {
      [Op.or]: [
        sequelize.where(
          sequelize.fn("lower", sequelize.col("email")),
          sequelize.fn("lower", req.body.email)
        ),
      ],
      roleId: 2
    },
    paranoid: false,
  });

  if (validateEmail(req.body.email)) {
    if (!user)
      return next(
        new APIError(messages.INCORRECT_EMAIL_OR_PASSWORD, status.BAD_REQUEST)
      );

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return next(
        new APIError(messages.INCORRECT_EMAIL_OR_PASSWORD, status.UNAUTHORIZED)
      );
  }else
  {
    return next(
      new APIError(messages.INCORRECT_EMAIL_OR_PASSWORD, status.BAD_REQUEST)
    );
  }

    //Generate token and send it in response
    var token = user.getJWTToken();

    res.status(200).send({
      status: messages.SUCCESS,
      user: user,
      accessToken: token,
    });
});

exports.forgotPassword = catchAsync(async (req, res, next) => {

  
  const { email } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
    include: [ForgotPasswordToken],
  });

  if (!user)
    return next(new APIError(messages.EMAIL_NOT_FOUND, status.BAD_REQUEST));

  const token = await user.generateForgotPasswordToken(user, 32);
  const frontendUrl = `${process.env.APP_URL}/reset-password?token=${token}`
  
  // sendForgotPasswordEmail(user.email, subject, frontendUrl);
  
  await new Email(user,frontendUrl).sendPasswordReset();

  res.status(status.CREATED).json({
    status: messages.SUCCESS,
    reset_token: token,
  });

});

exports.matchToken = catchAsync(async (req, res, next) => {
  const { token } = req.body;
  const hashedToken = User.createHashFromString(token);
  
  const user = await User.findOne({
    include: [
      {
        model: ForgotPasswordToken,
        where: {
          token: hashedToken,
          expiresIn: {
            [Op.gte]: Date.now(),
          },
        },
      },
    ],
  });

  if (!user)
    return next(new APIError(messages.INVALID_TOKEN, status.UNAUTHORIZED));

  res.status(status.OK).json({
    status: messages.SUCCESS,
    message: messages.TOKEN_MATCHED,
  });
});

exports.resetPassword = async (req, res, next) => {
  const { password, token } = req.body;

  const hashedToken = User.createHashFromString(token);

  const user = await User.findOne({
    include: [
      {
        model: ForgotPasswordToken,
        where: {
          token: hashedToken,
          expiresIn: {
            [Op.gte]: Date.now(),
          },
        },
      },
    ],
  });

  if (!user)
    return next(new APIError(messages.INVALID_TOKEN, status.UNAUTHORIZED));

  user.password = bcrypt.hashSync(password, 8);
  await user.ForgotPasswordToken.destroy();

  await user.save();

  const accessToken = user.getJWTToken();

  res.status(status.OK).json({
    status: messages.SUCCESS,
    user: user,
    accessToken,
  });

};





