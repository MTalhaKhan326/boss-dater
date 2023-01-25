const Education = require("../models/Education.model");
const Ethnicity = require("../models/Ethnicity.model");
const BodyType = require("../models/BodyType.model");
const HairColor = require("../models/HairColor.model");
const Children = require("../models/Children.model");
const { RelationshipStatus, Tag, Occupation } = require("../models");


exports.dropdown = async (req, res) => {
    try {
        const relationshipStatuses = await RelationshipStatus.findAll();
        const ethnicities = await Ethnicity.findAll();
        const hairColors = await HairColor.findAll();
        const bodyTypes = await BodyType.findAll();
        const children = await Children.findAll();
        const educations = await Education.findAll();
        const tags = await Tag.findAll();
        const maleOccupations = await Occupation.findAll({
          where: {
            gender: "male",
          },
        });
        const femaleOccupations = await Occupation.findAll({
          where: {
            gender: "female",
          },
        });

        res.status(200).send({
            status: "successfully fetched data",
            results: {
                relationshipStatuses,
                ethnicities,
                hairColors,
                bodyTypes,
                children,
                educations,
                tags,
                maleOccupations,
                femaleOccupations,
            },
        });
    } catch (error) {}
};
  
  exports.insertData = async (req, res) => {
    try {
      const haircolor = await HairColor.create({
        name: req.body.name,
        id: req.body.id,
      });
  
      res.status(200).send({
        status: "successfully inserted the data",
        data: haircolor,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  };
  
  exports.updateData = async (req, res) => {
    try {
      const hairColor = await HairColor.update(
        {
          name: req.body.name,
        },
        {
          where: { id: req.body.id },
        }
      );
  
      res.status(200).send({
        status: "successfully updated the data",
        data: hairColor,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  };
  
  exports.deletedata = async (req, res) => {
    try {
      const hair = await HairColor.destroy({
        where: {
          id: req.body.id,
        },
      });
  
      res.status(200).send({
        status: "successfully deleted the data",
        data: hair,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  };
  
  ///generic api for inserting data
  
  exports.addingdata = async (req, res) => {
    const { option, value } = req.body;
    if (option == "ethnicity") {
      await Ethnicity.create({
        name: value,
      });
      res.status(200).send({
        status: "successfully added the data",
        // data: options,
      });
    } else if (option == "haircolor") {
      await HairColor.create({
        name: value,
      });
      res.status(200).send({
        status: "successfully added the data",
        // data: options,
      });
    } else if (option == "relationship") {
      await Relationship.create({
        name: value,
      });
      res.status(200).send({
        status: "successfully added the data",
        // data: options,
      });
    } else if (option == "bodytype") {
      await BodyType.create({
        name: value,
      });
      res.status(200).send({
        status: "successfully added the data",
        // data: options,
      });
    } else if (option == "children") {
      await Children.create({
        name: value,
      });
      res.status(200).send({
        status: "successfully added the data",
        // data: options,
      });
    } else if (option == "education") {
      await Education.create({
        name: value,
      });
      res.status(200).send({
        status: "successfully added the data",
        // data: options,
      });
    }
  };
  
  ////generic api for updating api
  
  exports.updatingdata = async (req, res) => {
    const { option } = req.body;
    if (option == "ethnicity") {
      await Ethnicity.update(
        {
          name: req.body.name,
        },
        {
          where: { id: req.body.id },
        }
      );
      res.status(200).send({
        status: "successfully updated the data",
        // data: options,
      });
    } else if (option == "haircolor") {
      await HairColor.update(
        {
          name: req.body.name,
        },
        {
          where: { id: req.body.id },
        }
      );
      res.status(200).send({
        status: "successfully updated the data",
        // data: options,
      });
    } else if (option == "bodytype") {
      await BodyType.update(
        {
          name: req.body.name,
        },
        {
          where: { id: req.body.id },
        }
      );
      res.status(200).send({
        status: "successfully updated the data",
        // data: options,
      });
    } else if (option == "education") {
      await Education.update(
        {
          name: req.body.name,
        },
        {
          where: { id: req.body.id },
        }
      );
      res.status(200).send({
        status: "successfully updated the data",
        // data: options,
      });
    } else if (option == "relationship") {
      await Relationship.update(
        {
          name: req.body.name,
        },
        {
          where: { id: req.body.id },
        }
      );
      res.status(200).send({
        status: "successfully updated the data",
        // data: options,
      });
    } else if (option == "children") {
      await Children.update(
        {
          name: req.body.name,
        },
        {
          where: { id: req.body.id },
        }
      );
      res.status(200).send({
        status: "successfully updated the data",
        // data: options,
      });
    }
  };
  
  /// generic api for deleting data
  
  exports.deletingdata = async (req, res) => {
    const { option } = req.body;
    if (option == "ethnicity") {
      await Ethnicity.destroy({
        where: { id: req.body.id },
      });
      res.status(200).send({
        status: "successfully deleted the data",
        // data: options,
      });
    } else if (option == "haircolor") {
      await HairColor.destroy({
        where: { id: req.body.id },
      });
      res.status(200).send({
        status: "successfully deleted the data",
        // data: options,
      });
    } else if (option == "bodytype") {
      await BodyType.destroy({
        where: { id: req.body.id },
      });
      res.status(200).send({
        status: "successfully deleted the data",
        // data: options,
      });
    } else if (option == "children") {
      await Children.destroy({
        where: { id: req.body.id },
      });
      res.status(200).send({
        status: "successfully deleted the data",
        // data: options,
      });
    } else if (option == "relationship") {
      await Relationship.destroy({
        where: { id: req.body.id },
      });
      res.status(200).send({
        status: "successfully deleted the data",
        // data: options,
      });
    } else if (option == "education") {
      await Education.destroy({
        where: { id: req.body.id },
      });
      res.status(200).send({
        status: "successfully deleted the data",
        // data: options,
      });
    }
  };