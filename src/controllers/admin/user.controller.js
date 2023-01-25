const User = require("../../models/User.model");
const { Op } = require("sequelize");
const {
  validateEmail,
  checkAccountDeletion,
} = require("../../utils/validateEmail");
const APIError = require("../../utils/APIError.js");
const status = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const messages = require("../../utils/constants");
const bcrypt = require("bcryptjs");
const { UserProfile, UserStatus, UserFcmToken } = require("../../models");

//Generate Agora Token
// const express = require('express');
const dotenv = require('dotenv');
const {RtcTokenBuilder, RtcRole} = require('agora-access-token');

var FCM = require('fcm-node');


const PORT=process.env.APP_ID;
const APP_ID=process.env.APP_ID;
const APP_CERTIFICATE = process.env.APP_CERTIFICATE;


const generateRTCToken = async (req, resp) => { 
  // return resp.send({
  //   hello: "world"
  // })
  //set the response header
  try {
    resp.header('Access-Control-Allow-Origin', '*');
    //get the channel name
    const channelName = req.params.channel;
    if (!channelName) {
      return resp.status(500).json({ 'error': 'channel is required' });
    }
    //get uid
    let uid = req.params.uid;
    if(!uid || uid === '') {
        return resp.status(500).json({ 'error': 'uid is required' });
    }
    // get role
    let role;
    if (req.params.role === 'publisher') {
        role = RtcRole.PUBLISHER;
    } else if (req.params.role === 'audience') {
        role = RtcRole.SUBSCRIBER
    } else {
        return resp.status(500).json({ 'error': 'role is incorrect' });
    }
    //get expire time
    let expireTime = req.query.expiry;
    if (!expireTime || expireTime === '') {
      expireTime = 3600;
    } else {
      expireTime = parseInt(expireTime, 10);
    }
    //calculate the privilege expire time
    const currentTime = Math.floor(Date.now() / 1000);
    const privilegeExpireTime = currentTime + expireTime;
    //build the Token
    let token;
    if (req.params.tokentype === 'userAccount') {
      token = RtcTokenBuilder.buildTokenWithAccount(APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpireTime);
    } else if (req.params.tokentype === 'uid') {
      token = RtcTokenBuilder.buildTokenWithUid(APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpireTime);
    } else {
      return resp.status(500).json({ 'error': 'token type is invalid' });
    }

    // get user by uid
    let fcmTokenRow = await UserFcmToken.findOne({
      where: {
        // fcmToken: {
        //   [Op.not]: null
        // },
        userId: uid
      }
    })

    // if(!fcmTokenRow || !fcmTokenRow.fcmToken) {
    //   return resp.status(500).json({
    //     error: 'Fcm Token not found'
    //   })
    // }

    fcmTokenRow = {fcmToken: "fRwt2SSHSD2v68hwGxY5oC:APA91bE-jT8bbk_MHx41pevrvx2uHbT3w_NNCBAtDUdk-srHd74Ef3SZHx-Xuv0JgYma83H-dXQnM4WzP86DStIm5JlcgPGnv72aSMfbwiZ1iGWz4utmfKPlPcnRuhau1Dq7VYKyypBj"}

    const { fcmToken } = fcmTokenRow

    var serverKey = "AAAA6f0KX6A:APA91bEtKFH9RR_qDRZpVz6tFRjMW6Gs9B_r0AZx83ZZEP28j8gRX1xQ9ZcLMAw4LYoQFk_0KipHR7ko2cNPe-jFrQfyoIJx-NniQMWxUQMMOgx6RFVyBG0yzcsboSEWbP-CVC0fQK2h"; //put your server key here 
    var fcm = new FCM(serverKey);
    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
      to: fcmToken, 
      
      notification: {
          title: 'hello title', 
          body: 'world body',
          android: {
            channelId: "some_1"
          }
      },
      
      data: {
          agoraToken: token 
      }
    };
  
    fcm.send(message, function(err, response) {
      if(err) {
        console.log('error in fcm')
        console.log(err)
      } else {
        console.log('sent successfully')
        console.log(response.results)
      }
    }) 

    //return the token
    return resp.json({ 'rtcToken': token });;
  } catch(e) {
    return resp.json({
      'error': e
    })
  }
};


//To Paginate a collection
const paginate = ({ page = 1, size = 5 }) => {
  page = page - 1;
  const offset = page * size;
  const limit = size;

  return {
    offset,
    limit,
  };
};

//Get all users
const getUsers = catchAsync(async (req, res, next) => {
  let { page, size } = req.query;

  const options = {
    include: UserStatus,
    select: "*",
    // limit: 5,
    // offset: 0,
    order: [["id", "DESC"]],
    where: { roleId: 1 },
    ...paginate({ page, size }),
  };

  const users = await User.findAndCountAll(options);
  res.status(200).send({
    status: messages.SUCCESS,
    results: users.count,
    data: {
      users: users.rows,
    },
    totalPages: Math.ceil(users.count / 5),
    // currentPage: parseInt(page),
  });
});

//Get Single User
const getSingleUser = catchAsync(async (req, res, next) => {
  let userId = req.params.id;
  let user = await User.findOne({ include: UserStatus, where: { id: userId } });

  if(user)
  {
    res.status(status.OK).json({
      status: messages.SUCCESS,
      data: user,
    });
  }else
  {
    return next(new APIError(messages.USER_NOT_FOUND, status.NOT_FOUND));
  }

  
});

//Create user
const createUser = catchAsync(async (req, res, next) => {
  try {
    let { gender, email, password } = req.body;

    const user = await User.create({
      gender,
      email,
      password: bcrypt.hashSync(password, 8),
      roleId: 1,
      userStatus: 1,
    });

    await UserProfile.create({
      userId: user.id,
    });

    res.status(status.OK).send({
      status: messages.SUCCESS,
      data: user,
    });
  }
  catch (error) {
   res.status(500).json({
      status: fail,
      message: error.message,
    });
  }
});

//Edit User
const editUser = catchAsync(async (req, res, next) => {
  let userId = req.params.id;
  let {
    birthDate,
    jobTitle,
    linkedInLink,
    gender,
    career,
    skills,
    travelSpot,
  } = req.body;

  const userStatus = await User.update(
    {
      birthDate,
      jobTitle,
      linkedInLink,
      gender,
      career,
      skills,
      travelSpot,
    },
    { where: { id: userId } }
  );

  if (userStatus[0]) {
    res.status(200).json({
      status: messages.SUCCESS,
      message: "User is updated successfully",
    });
  } else {
    return next(new APIError(messages.USER_NOT_FOUND, status.NOT_FOUND));
  }
});

//get all statuses
const getAllStatuses = catchAsync(async (req, res, next) => {
  const statuses = await UserStatus.findAll();

  res.status(200).json({
    status: messages.SUCCESS,
    results: statuses.length,
    data: statuses,
  });
});

//Change Status
const changeStatus = catchAsync(async (req, res, next) => {
  const { userId, statusId } = req.body;

  const user = await User.findOne({
    where: { id: userId },
  });
  if ((user.userStatus == 2 || user.userStatus == 3) && statusId == 1) {
    return next(new APIError("Cant perform this action", status.UNAUTHORIZED));
  } else {
    const userStatus = await User.update(
      { userStatus: statusId },
      { where: { id: userId } }
    );

    if (userStatus[0]) {
      res.status(status.OK).json({
        status: messages.SUCCESS,
        message: messages.STATUS_CHANGED,
      });
    } else {
      return next(new APIError(messages.USER_NOT_FOUND, status.NOT_FOUND));
    }
  }
});

// delete User
const deleteUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const userDeleted = await User.destroy({
    where: {
      id,
    },
  });

  if (userDeleted) {
    return res.status(status.OK).json({
      status: messages.SUCCESS,
      message: messages.ACCOUNT_DELETE,
    });
  } else {
    return next(new APIError(messages.USER_NOT_FOUND, status.NOT_FOUND));
  }
});

//Search User
const searchUsers = catchAsync(async (req, res, next) => {
  let { page, size, keyword, userStatus } = req.query;

  let whereStatus = {};
  let copyOfWhereStatus = whereStatus;
  
  // if(keyword)    
  //   keyword = "";

  // if(userStatus)  
  //   userStatus = "";
          
  if (userStatus) 
  {
    whereStatus.userStatus = userStatus;
    copyOfWhereStatus.userStatus = userStatus;
  }

  if(keyword && userStatus)
  {
    whereStatus = {}
  }
      
  let options = {
    select: "*",
    limit: 5,
    offset: 0,
    order: [["id", "DESC"]],
    where: {
      [Op.and]: [
        {
          [Op.or]: [
            {
              gender: { [Op.like]: `%${keyword}%` },
            },
            {
              email: { [Op.like]: `%${keyword}%` },
            },
            {
              "$UserStatus.status$": { [Op.iLike]: `%${keyword}%` },
            },
          ],
        },
        {
          roleId: 1,
        },
        copyOfWhereStatus
      ],
    },
    include: UserStatus,
    ...paginate({ page, size }),
  };

  const users = await User.findAndCountAll(options);

  res.status(200).send({
    status: messages.SUCCESS,
    results: users.count,
    data: {
      users: users.rows,
    },
    totalPages: Math.ceil(users.count / 5),
  });
});

  module.exports = {
    getUsers,
    getSingleUser,
    createUser,
    editUser,
    deleteUser,
    getAllStatuses,
    changeStatus,
    searchUsers,
    generateRTCToken
  };
