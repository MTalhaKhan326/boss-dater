const { User, Role, UserStatus, BodyType, Ethnicity, HairColor, Occupation, Education, Children, RelationshipStatus, Tag
  } = require('../models/index');
const bcrypt = require("bcryptjs");

const createRoles = async () => {
  const roles = [
    {
      role:"user"
    },
    {
      role:"admin"
    }
  ]
  await Role.bulkCreate(roles);
}

const createUserStatuses = async () => {
  const statuses = [
    {
      status:"pending"
    },
    {
      status:"blocked"
    },
    {
      status:"verified"
    }
  ]
  await UserStatus.bulkCreate(statuses);
}

const createAdminUser = async () => {
  const user = await User.findOne()
  const adminUser = {
    // firstName: "Admin",
    // lastName: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("Password@1", 8),
    // phoneNo: "03244323453",
    // name: "admin",
    roleId: 2
  };
  if(adminUserdata.length == 0){
  await User.create(adminUser);
  }
}


const createHairColorDropDown = async () => {
  const haircolordata = await HairColor.findAll()
  const hairColor = [
    {
      name:"Black"
    },
    {
      name:"Blonde"
    },
    {
      name:"Grey"
    },
    {
      name:"Dark Brown"
    },
    {
      name:"Brown"
    },
    {
      name:"Greyish Black"
    },
    {
      name:"Other"
    }
  ]
  if(haircolordata.length == 0){
  await HairColor.bulkCreate(hairColor);
  }
}

const createOccupationDropDown = async () => {
  const ocuupationdata = await Occupation.findAll()
  const occupation = [
    {
      name:"Business Man",
      gender:"male"
    },
    {
      name:"Data Science",
      gender:"male"
    },
    {
      name:"Media",
      gender:"male"
    },
    {
      name:"Medicine",
      gender:"male"
    },
    {
      name:"Other",
      gender:"male"
    },
    {
      name:"Student",
      gender:"female"
    },
    {
      name:"Business woman",
      gender:"female"
    },
    {
      name:"Media",
      gender:"female"
    },
    {
      name:"Medicine",
      gender:"female"
    },
    {
      name:"Other",
      gender:"female"
    },
  ]
  if(ocuupationdata.length == 0){
  await Occupation.bulkCreate(occupation);
  }
}

const createBodyTypeDropDown = async () => {
  const bodytypedata = await BodyType.findAll();
  const bodyType = [
    {
      name:"Slim"
    },
    {
      name:"Athletic"
    },
    {
      name:"Curvy"
    },
    {
      name:"Healthy"
    },
    {
      name:"Other"
    }
  ]
  if(bodytypedata.length == 0){
    await BodyType.bulkCreate(bodyType);
  }
}
const createEthnicityDropDown = async () => {
  const ethnicitydata = await Ethnicity.findAll();
  const ethnicity= [
    {
      name:"Native American"
    },
    {
      name:"Black/African Dependent"
    },
    {
      name:"African"
    },
    {
      name:"Mixed"
    },
    {
      name:"Pacific Islander"
    },
    {
      name:"White Caucasian"
    },
    {
      name:"East Indian"
    }
  ]
  if(ethnicitydata.length == 0){
  await Ethnicity.bulkCreate(ethnicity);
  }
}
const createRelationShipStatusDropDown = async () => {
  const relationshipStatusData = await RelationshipStatus.findAll();
  const relationshipStatus= [
    {
      name:"In an Open Relationship"
    },
    {
      name:"Married but Looking"
    },
    {
      name:"Single"
    },
    {
      name:"Divorced"
    },
    {
      name:"Separated"
    },
    {
      name:"Widowed"
    },
    {
      name:"Other"
    }
  ]
  if(relationshipStatusData.length == 0){

    await RelationshipStatus.bulkCreate(relationshipStatus);
  }
}
const createChildrenDropDown = async () => {
  const childrendata = await Children.findAll();
  const children = [
    {
      name:"No Kids"
    },
    {
      name:"Expecting"
    },
    {
      name:"New Parent"
    },
    {
      name:"Toddlers"
    },
    {
      name:"Other"
    }
  ]
  if(childrendata.length == 0){
  await Children.bulkCreate(children);
  }
}
const createEducationDropDown = async () => {
  const educationdata = await Education.findAll()
  const education = [
    {
      name:"High School"
    },
    {
      name:"College"
    },
    {
      name:"University"
    },
    {
      name:"PHD"
    },
    {
      name:"Attorney"
    }
  ]
  if(educationdata.length == 0){
  await Education.bulkCreate(education);
  }
  
}

const createTagsDropDown = async () => {
  const tagsdata = await Tag.findAll()
  const tags = [
    {
      name:"Long term"
    },
    {
      name:"Dating"
    },
    {
      name:"Romance"
    },
    {
      name:"Travel"
    },
    {
      name:"Mentorship"
    },
    {
      name:"Marriage"
    },
    {
      name:"Open relationship"
    },
    {
      name:"Short term"
    }
  ]
  if(tagsdata.length == 0){
  await Tag.bulkCreate(tags);
  }
  
}

const seedDB = async () => {
  try {
    // await createRoles();
    // await createUserStatuses();
    // await createAdminUser();
    await createHairColorDropDown();
    await createChildrenDropDown();
    await createRelationShipStatusDropDown();
    await createBodyTypeDropDown();
    await createEthnicityDropDown();
    await createEducationDropDown();
    await createOccupationDropDown();
    await createTagsDropDown();
  } catch (error) {
    console.log('There is some error in seeding database', error)
  }
}

seedDB()