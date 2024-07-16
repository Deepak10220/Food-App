const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Food Title is Required"],
    },
    description: {
      type: String,
      required: [true, "Description is Required"],
    },
    price: {
      type: Number,
      required: [true, "Price is Required"],
    },
    imageURL: {
      type: String,
      default:
        "https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg",
    },
    foodTags: {
      type: String,
    },
    category: {
      type: String,
    },
    code: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    resturant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resturant",
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: Number,
    },
  },
  { timestamps: true }
);
const Food = new mongoose.model("food", foodSchema);
module.exports = Food;
