const Resturant = require("../models/resturantModel");

const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imageURL,
      foods,
      pickup,
      delivery,
      isopen,
      logoURL,
      rating,
      ratingcount,
      code,
      coords,
    } = req.body;
    if (!title || !coords) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Title And Address",
      });
    }
    const newResturant = new Resturant({
      title,
      imageURL,
      foods,
      pickup,
      delivery,
      isopen,
      logoURL,
      rating,
      ratingcount,
      code,
      coords,
    });
    await newResturant.save();
    return res.status(200).send({
      success: true,
      message: "Data saved",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Create Resturant API Error",
    });
  }
};

const getAllResturantController = async (req, res) => {
  try {
    const resturants = await Resturant.find({});
    if (!resturants) {
      return res.status(404).send({
        success: false,
        message: "Resturant Not Available",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Get All Resturant",
      resturants,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get Resturant API",
    });
  }
};

const getSingleResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    const singleResturant = await Resturant.findById(resturantId);
    if (!singleResturant) {
      return res.status(404).send({
        success: false,
        message: "Resturant Not Available",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Get Single Resturant",
      singleResturant,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get Resturant API",
    });
  }
};

const deleteResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.stauts(404).send({
        success: false,
        message: "Please Provide Resturant Id",
      });
    }

    await Resturant.findByIdAndDelete(resturantId);
    return res.status(200).send({
      success: true,
      message: "Resturant Deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Delete Resturant API",
    });
  }
};
module.exports = {
  createResturantController,
  getAllResturantController,
  getSingleResturantController,
  deleteResturantController,
};
