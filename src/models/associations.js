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
UserPreference.belongsTo(RelationshipStatus, {
  onDelete: "CASCADE",
  foreignKey: "relationshipStatusId",
});
UserPreference.belongsTo(BodyType, {
  onDelete: "CASCADE",
  foreignKey: "bodyTypeId",
});
UserPreference.belongsTo(Ethnicity, {
  onDelete: "CASCADE",
  foreignKey: "ethnicityId",
});
UserPreference.belongsTo(Occupation, {
  onDelete: "CASCADE",
  foreignKey: "occupationId",
});
UserPreference.belongsTo(HairColor, {
  onDelete: "CASCADE",
  foreignKey: "hairColorId",
});
UserPreference.belongsTo(Education, {
  onDelete: "CASCADE",
  foreignKey: "educationId",
});
UserPreference.belongsTo(Children, {
  onDelete: "CASCADE",
  foreignKey: "childrenId",
});
UserPreference.belongsTo(User, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});
UserPreference.hasMany(UserTag, {
  onDelete: "CASCADE",
  foreignKey: "userPreferenceId",
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

