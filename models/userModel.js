const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "user name is  required"],
    },
    email: {
      type: String,
      required: [true, "email is  required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is  required"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: Number,
      required: [true, "number is  required"],
      unique: true,
    },
    usertype: {
      type: String,
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    answer: {
      type: String,
      required: [true, "answer is required"],
    },
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);
module.exports = User;
