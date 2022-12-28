const User = require("./User.model");
const ForgotPasswordToken = require("./ForgotPasswordToken.model");
const EmailVerificationToken = require("./EmailVerificationToken.model");
const UserProfile = require("./UserProfile.model");
const UserPhoto = require("./UserPhoto.model");
const UserStatus = require("./UserStatus.model");
const Education = require("./Education.model");
const Children = require("./Children.model");
const BodyType = require("./BodyType.model");
const RelationshipStatus = require("./RelationshipStatus.model");
const Ethnicity = require("./Ethnicity.model");
const HairColor = require("./HairColor.model");
const Occupation = require("./Occupation.model");
const UserPreference = require("./UserPreference.model");
const Tag = require("./Tag.model");
const UserTag = require("./UserTag.model");
const Report = require("./Report.model");
const Block = require("./Block.model");
const Like = require("./Like.model");
const View = require("./View.model");
const UserSearch = require("./UserSearch.model");
const UserOccupation = require("./UserOccupation.model");
const UserRelationship = require("./UserRelationship.model");
const UserBodyTypes = require("./UserBodyType.model");
const UserChildren = require("./UserChildren.model");
const UserEducations = require("./UserEducation.model");
const UserEthnicity = require("./UserEthnicity.model");
const UserHairColor = require("./UserHairColor.model");
const Faq = require("./Faq.model");

User.hasOne(UserProfile, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});

User.hasOne(UserPreference, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});

// forgot password
User.hasOne(ForgotPasswordToken, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});

User.hasOne(EmailVerificationToken, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});
//user profile

UserProfile.belongsTo(BodyType, {
  onDelete: "CASCADE",
  foreignKey: "bodyTypeId",
});
UserProfile.belongsTo(Ethnicity, {
  onDelete: "CASCADE",
  foreignKey: "ethnicityId",
});
UserProfile.belongsTo(Occupation, {
  onDelete: "CASCADE",
  foreignKey: "occupationId",
});
UserProfile.belongsTo(HairColor, {
  onDelete: "CASCADE",
  foreignKey: "hairColorId",
});
UserProfile.belongsTo(Education, {
  onDelete: "CASCADE",
  foreignKey: "educationId",
});
UserProfile.belongsTo(Children, {
  onDelete: "CASCADE",
  foreignKey: "childrenId",
});
UserProfile.belongsTo(User, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});

User.hasMany(UserPhoto, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});
UserProfile.belongsTo(RelationshipStatus, { 
  onDelete: "CASCADE",
  foreignKey: "relationshipStatusId",
});

//user preference
// UserPreference.belongsTo(RelationshipStatus, {
//   onDelete: "CASCADE",
//   foreignKey: "relationshipStatusId",
// });
// UserPreference.belongsTo(BodyType, {
//   onDelete: "CASCADE",
//   foreignKey: "bodyTypeId",
// });
// UserPreference.belongsTo(Ethnicity, {
//   onDelete: "CASCADE",
//   foreignKey: "ethnicityId",
// });
// UserPreference.belongsTo(Occupation, {
//   onDelete: "CASCADE",
//   foreignKey: "occupationId",
// });
// UserPreference.belongsTo(HairColor, {
//   onDelete: "CASCADE",
//   foreignKey: "hairColorId",
// });
// UserPreference.belongsTo(Education, {
//   onDelete: "CASCADE",
//   foreignKey: "educationId",
// });
// UserPreference.belongsTo(Children, {
//   onDelete: "CASCADE",
//   foreignKey: "childrenId",
// });
UserPreference.belongsTo(User, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});
UserPreference.hasMany(UserTag, {
  onDelete: "CASCADE",
  foreignKey: "userPreferenceId",
});
UserPreference.hasMany(UserOccupation, {
  onDelete: "CASCADE",
  foreignKey: "userPreferenceId",
});
UserOccupation.belongsTo(Occupation, {
  onDelete: "CASCADE",
  foreignKey: "occupationId",
});
UserPreference.hasMany(UserRelationship, {
  onDelete: "CASCADE",
  foreignKey: "userPreferenceId",
});
UserRelationship.belongsTo(RelationshipStatus, {
  onDelete: "CASCADE",
  foreignKey: "relationshipId",
});
UserPreference.hasMany(UserBodyTypes, {
  onDelete: "CASCADE",
  foreignKey: "userPreferenceId",
});
UserBodyTypes.belongsTo(BodyType, {
  onDelete: "CASCADE",
  foreignKey: "bodyTypesId",
});
UserPreference.hasMany(UserChildren, {
  onDelete: "CASCADE",
  foreignKey: "userPreferenceId",
});
UserChildren.belongsTo(Children, {
  onDelete: "CASCADE",
  foreignKey: "childrenId",
});
UserPreference.hasMany(UserEducations, {
  onDelete: "CASCADE",
  foreignKey: "userPreferenceId",
});
UserEducations.belongsTo(Education, {
  onDelete: "CASCADE",
  foreignKey: "educationId",
});
UserPreference.hasMany(UserEthnicity, {
  onDelete: "CASCADE",
  foreignKey: "userPreferenceId",
});
UserEthnicity.belongsTo(Ethnicity, {
  onDelete: "CASCADE",
  foreignKey: "EthnicityId",
});
UserPreference.hasMany(UserHairColor, {
  onDelete: "CASCADE",
  foreignKey: "userPreferenceId",
});
UserHairColor.belongsTo(HairColor, {
  onDelete: "CASCADE",
  foreignKey: "hairColorId",
});
// UserProfile.hasMany(UserTag, {
//   onDelete: "CASCADE",
//   foreignKey: "userProfileId",
// });
Tag.hasMany(UserTag, {
  onDelete: "CASCADE",
  foreignKey: "tagId",
});
UserTag.belongsTo(Tag, {
  onDelete: "CASCADE",
  foreignKey: "tagId",
});

User.hasMany(Report, {
  as: "reportFrom",
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "from",
    allowNull: false,
  },
});

User.hasMany(Report, {
  as: "reportAgainst",
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "against",
    allowNull: false,
  },
});

User.hasMany(Block, {
  as: "blockFrom",
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "from",
    allowNull: false,
  },
});

User.hasMany(Block, {
  as: "blockAgainst",
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "against",
    allowNull: false,
  },
});

User.hasMany(View, {
  as: "viewFrom",
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "from",
    allowNull: false,
  },
});

User.hasMany(View, {
  as: "viewTo",
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "to",
    allowNull: false,
  },
});

View.belongsTo(User, {
  foreignKey: {
    name: "from",
    allowNull: false,
  },
});

View.belongsTo(User, {
  foreignKey: {
    name: "to",
    allowNull: false,
  },
});

User.hasMany(Like, {
  as: "likeFrom",
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "from",
    allowNull: false,
  },
});

User.hasMany(Like, {
  as: "likeTo",
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: {
    name: "to",
    allowNull: false,
  },
});

Like.belongsTo(User, {
  foreignKey: {
    name: "from",
    allowNull: false,
  },
});

Like.belongsTo(User, {
  foreignKey: {
    name: "to",
    allowNull: false,
  },
});


User.hasMany(UserSearch, {
  as: "userSearches",
  onDelete: "CASCADE",
  foreignKey: "userId",
});

UserSearch.belongsTo(User, {
  as:"user",
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});

