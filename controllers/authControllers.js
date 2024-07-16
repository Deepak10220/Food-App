const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const JWT = require("jsonwebtoken");
const registerController = async (req, res) => {
  try {
    const { username, email, password, phone, address, answer } = req.body;
    if (!username || !email || !password || !phone || !address || !answer) {
      return res.status(401).send({
        success: false,
        message: "Please Provide All Field",
      });
    }
    const exiting = await User.findOne({ email });
    if (exiting) {
      return res.status(400).send({
        success: false,
        message: "User Already Exist",
      });
    }
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      answer,
    });
    return res.status(200).send({
      success: true,
      message: "user saved",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Please Fill All Field",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).send({
        success: false,
        message: "please provide valid details",
      });
    }
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    res.status(200).send({
      success: false,
      message: "login successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
module.exports = {
  registerController,
  loginController,
};
