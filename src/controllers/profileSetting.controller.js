const Sequelize = require("sequelize");
const catchAsync = require("../utils/catchAsync");
const status = require("http-status");
const User = require("../models/User.model");
const UserProfile = require("../models/UserProfile.model")
const messages = require("../utils/constants")
const bcrypt = require("bcryptjs");
const APIError = require("../utils/APIError");

exports.profileSettings = catchAsync(async (req, res) => {

  const userProfile = await User.findOne({
    include: {
      model: Profile
    },
    
    where:{
      id:req.user.id
    }
  });

  res.status(status.OK).json({
    status:messages.SUCCESS,
    data:userProfile
  });
  
});

exports.deleteAccount = catchAsync(async (req, res, next)=>{

    // DELETE user account
    await User.destroy({
      where: {
        id: req.user.id
      }
    });

    res.status(status.OK).json({status: messages.SUCCESS, message:messages.ACCOUNT_DELETE})
  
});

exports.disableAccount = catchAsync(async (req, res, next)=>{
  
    //UPDATE a user (make isActive = false)
    req.user.isActive = false;
    await req.user.save();

    res.status(status.OK).json({status: messages.SUCCESS, message:messages.ACCOUNT_DISABLED})

});
