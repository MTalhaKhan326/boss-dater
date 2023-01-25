const { Model, DataTypes } = require("sequelize");
// const { toDefaultValue } = require("sequelize/types/lib/utils");
const sequelize = require("../config/db.config");
const jwt = require('jsonwebtoken');

class UserProfile extends Model {
  getJWTToken() {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET_KEY)
  }
  static createHashFromString(data) {
    return crypto.createHash('sha256').update(data).digest('hex')
  }
}
  //Functions comes here


UserProfile.init(
  {
    career: {
      type: DataTypes.TEXT,
    },
    skills: {
      type: DataTypes.TEXT,
    },
    travelingSpot: {
      type: DataTypes.TEXT,
    },
    aboutMe: {
      type: DataTypes.TEXT,
    },
    lookingFor: {
      type: DataTypes.TEXT,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    heightUnit: {
      type: DataTypes.STRING,

      defaultValue: "cm",
    },
    // relationshipStatusId: {
    //   type: DataTypes.INTEGER,
    //
    //   references: {
    //     model: 'BodyTypes',
    //     key: 'id'
    //   }
    // },
    latitude: {
      type: DataTypes.FLOAT,
    },
    longitude: {
      type: DataTypes.FLOAT,
    },
    recentLatitude: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    recentLongitude: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    //for men
    jobTitle: {
      type: DataTypes.STRING,
    },
    linkedin: {
      type: DataTypes.TEXT,
    },
    netWorth: {
      type: DataTypes.INTEGER,
    },

    //for women
    // bodyTypeId: {
    //   type: DataTypes.INTEGER,
    //
    //   references: {
    //     model: 'BodyTypes',
    //     key: 'id'
    //   }
    // },
    // ethnicityId: {
    //   type: DataTypes.INTEGER,
    //
    //   references: {
    //     model: 'Ethnicities',
    //     key: 'id'
    //   }
    // },
    // hairColorId: {
    //   type: DataTypes.INTEGER,
    //
    //   references: {
    //     model: 'hairColor',
    //     key: 'id'
    //   }
    // },
    // educationId: {
    //   type: DataTypes.INTEGER,
    //
    //   references: {
    //     model: 'Education',
    //     key: 'id'
    //   }
    // },
    // childrenId: {
    //   type: DataTypes.INTEGER,
    //
    //   references: {
    //     model: 'Children',
    //     key: 'id'
    //   }
    // },
  },
  {
    sequelize,
    modelName: "UserProfile",
  }
);

module.exports = UserProfile;
