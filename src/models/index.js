const User = require("./User.model");
const Role = require("./Role.model");
const ForgotPasswordToken = require("./ForgotPasswordToken.model");
const EmailVerificationToken = require("./EmailVerificationToken.model");
const UserProfile = require("./UserProfile.model");
const UserPhoto = require("./UserPhoto.model");
const UserStatus = require("./UserStatus.model");
const HairColor = require("./HairColor.model");
const Occupation = require("./Occupation.model");
const Education = require("./Education.model");
const Children = require("./Children.model");
const BodyType = require("./BodyType.model");
const RelationshipStatus = require("./RelationshipStatus.model");
const Ethnicity = require("./Ethnicity.model");
const Tag = require("./Tag.model");
const UserTag = require("./UserTag.model");
const UserPreference = require("./UserPreference.model");
const Report = require("./Report.model");
const Block = require("./Block.model");
const Like = require("./Like.model");
const View = require("./View.model");
const UserSearch = require("./UserSearch.model");
const UserFcmToken = require("./UserFcmToken.model");

require("./associations");

module.exports = {
  UserStatus,
  Role,
  User,
  ForgotPasswordToken,
  EmailVerificationToken,
  UserProfile,
  UserPreference,
  UserPhoto,
  Occupation,
  BodyType,
  HairColor,
  Education,
  Children,
  RelationshipStatus,
  Ethnicity,
  Tag,
  UserTag,
  Report,
  Block,
  Like,
  View,
  UserFcmToken,
  UserSearch
};
