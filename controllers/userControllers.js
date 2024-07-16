const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const getUserController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "User Data successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get User API",
    });
  }
};

const updateUserController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    const { username, address, phone } = req.body;
    if (username) {
      user.username = username;
    }
    if (address) {
      user.address = address;
    }
    if (phone) {
      user.phone = phone;
    }
    await user.save();
    res.status(200).send({
      success: false,
      message: "User Update Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Update User API",
    });
  }
};

const updatePasswordController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    const { oldpassword, newpassword } = req.body;
    if (!oldpassword || !newpassword) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Old And New Password",
      });
    }
    const isMatch = await bcryptjs.compare(oldpassword, user.password);
    if (!isMatch) {
      return res.status(404).send({
        success: false,
        message: "please provide valid details",
      });
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = await bcryptjs.hash(newpassword, salt);
    user.password = hashedPassword;
    await user.save();
    return res.status(200).send({
      success: true,
      message: "Password Updated",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Update Password API Error",
    });
  }
};

const resetPasswordController = async (req, res) => {
  try {
    const { email, newpassword, answer } = req.body;
    if (!email || !newpassword || !answer) {
      return res.status(404).send({
        success: false,
        message: "Please Fill All Field",
      });
    }
    const user = await User.findOne({ email, answer });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User Not Found",
      });
    }
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = await bcryptjs.hash(newpassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Reset API Error",
    });
  }
};

const deleteUserController = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Delete API",
    });
  }
};
module.exports = {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteUserController,
};
