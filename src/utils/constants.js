module.exports = messages = {
  SUCCESS: "success",
  FAIL: "fail",

  //Auth Controller
  INCORRECT_EMAIL_OR_PASSWORD: "Incorrent Email or Password",
  EMAIL_NOT_FOUND: "No User found with the email address",
  PHONE_NUMBER_NOT_FOUND: "No User found with the Phone Numbebr",
  INVALID_TOKEN: "Your reset password link is invalid or expired",
  TOKEN_MATCHED: "Your token is matched successfully",
  UPLOAD_IMAGE: "Not an image! Please upload only images.",
  EMAIL_ALREADY_EXIST: "Email already exists!",
  PHONE_ALREADY_EXIST: "Phone already exists!",
  PASSWORD_ALREADY_EXIST: "Password already exists!",
  CODE_SEND: "Code is send successfully to your phone number",
  CODE_VERIFIED: "OTP is verified successfully",
  CODE_NOT_VERIFIED: "Your OTP is wrong",
  UNABLE_TO_VERIFY: "Unable to verify the code.",

  //Profile
  PROFILE_ALREADY_EXIST: "User profile already exists",
  PROFILE_UPDATED: "PROFILE is updated successfully",

  //Profile Settings
  EMAIL_CONFIRMATION: "Email confirmation does not match", //UPDATE EMAIL
  PASSWORD_CONFIRMATION: "Password confirmation does not match",
  EMAIL_UPDATED: "Your EMAIL is updated successfully",
  PASSWORD_UPDATED: "Your PASSWORD is updated successfully",
  PASSWORD_REQUIRED_TO_UPDATE_OR_DELETE_ACCOUNT:
    "Password is required to DELETE or DISABLE account",
  ACCOUNT_DELETE: "User ACCOUNT is deleted successfully",
  INCORRECT_PASSWORD: "PASSWORD is incorrect!",
  ACCOUNT_DISABLED: "Your ACCOUNT is disabled successfully",

  //Admin Constants
  STATUS_CHANGED: "User status is changed successfully",
  USER_UN_BLOCKED: "User is unblocked successfully",
  USER_VERIFIED: "User is Verified successfully",
  USER_NOT_FOUND: "User not exist with this id",
  ALREADY_REPORTED: "You have already reported this user.",
  ALREADY_BLOCKED: "You have already blocked this user.",
  REGISTRATION_ARRAY: [
    "gender",
    "username",
    "phoneNumber",
    "email",
    "birthDate",
  ],
  GENERIC_ARRAY: [
    "career",
    "skills",
    "travelingSpot",
    "aboutMe",
    "lookingFor",
    "height",
    "relationshipStatusId",
    "longitude",
    "occupationId",
    "latitude",
  ],
  MEN_ARRAY: ["jobTitle", "linkedin", "businessProfile", "netWorth"],
  WOMEN_ARRAY: ["bodyTypeId", "ethnicityId", "hairColorId", "childrenId"],
  IMAGE_NOT_SELECTED: "No Image selected to upload",
  PREFERENCE_ARRAY: [
    "minAge",
    "maxAge",
    "minHeight",
    "maxHeight",
    "lookingFor",
    "height",
    "netWorth",
  ],
  ALREADY_LIKED: "You have already liked this user.",
  DEFAULT_PERCENTAGE: 25,
  PROFILE_PERCENTAGE: 25,
  IMAGE_UPLOAD_PERCENTAGE: 25,
  RELATIONSHIP_INTENT_PERCENTAGE: 25,
  EMAIL_VERIFICATION : "Email Verification"
};
