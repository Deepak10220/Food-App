const Food = require("../models/foodModel");
const Resturant = require("../models/resturantModel");

const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imageURL,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
      ratingCount,
    } = req.body;
    if (!title || !description || !price) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Details",
      });
    }
    const food = new Food({
      title,
      description,
      price,
      imageURL,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
      ratingCount,
    });
    await food.save();
    res.status(200).send({
      success: true,
      message: "Food Saved",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Create Food Api",
    });
  }
};

const getAllFood = async (req, res) => {
  try {
    const food = await Food.find({});
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "Food Not Available",
      });
    }
    res.status(200).send({
      success: true,
      message: "Get Food",
      food,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Create Food Api",
    });
  }
};

const singleFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    const singleFood = await Food.findById(foodId);
    if (!singleFood) {
      return res.status(404).send({
        success: false,
        message: "incorrect ID",
      });
    }
    res.status(200).send({
      success: true,
      message: "Get Single Food",
      singleFood,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Single Food Api",
    });
  }
};

const updateFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({
        success: false,
        message: "Provide ID",
      });
    }
    const food = await Food.findById(foodId);
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "Food Not Found",
      });
    }
    const {
      title,
      description,
      price,
      imageURL,
      foodTags,
      category,
      code,
      isAvailable,
      resturant,
      rating,
      ratingCount,
    } = req.body;
    const updatedFood = await Food.findByIdAndUpdate(
      foodID,
      {
        title,
        description,
        price,
        imageURL,
        foodTags,
        category,
        code,
        isAvailable,
        resturant,
        rating,
        ratingCount,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Food Item Updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Single Food Api",
    });
  }
};
const deleteFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res.status(404).send({
        success: false,
        message: "Provide ID",
      });
    }
    const deletedFoodController = await Food.findByIdAndDelete(foodId);
    res.status(200).send({
      success: true,
      message: "Food Item Deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Single Food Api",
    });
  }
};

const placeOrderController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Single Food Api",
    });
  }
};
module.exports = {
  createFoodController,
  getAllFood,
  singleFoodController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
};
