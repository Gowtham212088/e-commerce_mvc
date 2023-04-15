const utility = require("../helper");
const vendorSchema = require("../model/createVendor");
const userSchema = require("../model/createUser");

module.exports = {
  createVendor: async (req, res) => {
    try {
      const hashPassword = await utility.createPassword(req.body.password);
      const vendorDetails = {
        username: req.body.username,
        email: req.body.email,
        age: req.body.age,
        designation: req.body.designation,
        contact: req.body.contact,
        password: hashPassword,
      };
      const create = await vendorSchema.create(vendorDetails);
      res.status(200).send({
        message: "User created Sucessfully",
        status: true,
        data: create,
      });
    } catch (error) {
      console.log(error);
      res.status(404).send({
        message: "Kindly enter all detatils",
        status: false,
      });
    }
  },
  userRegistration: async (req, res) => {
    const password = await utility.createPassword(req.body.password);
    const conformPassword = await utility.createPassword(req.body.password);

    try {
      const userDetails = {
        username: req.body.username,
        email: req.body.email,
        age: req.body.age,
        designation: req.body.designation,
        contact: req.body.contact,
        password: password,
        conformPassword: conformPassword,
      };
      if (req.body.password === req.body.conformPassword) {
        const createuser = await userSchema.create(userDetails);
        res.status(200).send({
          message: "User create Sucessfully",
          status: true,
          data: userDetails,
        });
      } else {
        res.status(404).send({
          message: "Check weather password matching or not",
          status: false,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(404).send({
        message: "Something went wrong",
        status: false,
      });
    }
  },
};
