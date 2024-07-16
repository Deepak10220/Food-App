const mongoose = require("mongoose");
const resturantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Resturant Title is Required"],
    },
    imageURL: {
      type: String,
    },
    foods: {
      type: Array,
    },
    pickup: {
      type: Boolean,
      default: true,
    },
    delivery: {
      type: Boolean,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    logoURL: {
      type: String,
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    ratingcount: {
      type: String,
    },
    code: {
      type: String,
    },
    coords: {
      id: { type: String },
      latitude: { type: Number },
      latitudeDelta: { type: Number },
      longitude: { type: Number },
      longitudeDelta: { type: Number },
      address: { type: String },
      title: { type: String },
    },
  },
  { timestamps: true }
);
const Resturant = new mongoose.model("resturant", resturantSchema);
module.exports = Resturant;
