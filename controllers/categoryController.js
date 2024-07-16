const Category = require("../models/categoryModel");

const createCatController = async (req, res) => {
  try {
    const { title, imageURL } = req.body;
    if (!title) {
      return res.status(404).send({
        success: false,
        message: "Please Provie Title",
      });
    }
    const category = new Category({
      title,
      imageURL,
    });
    await category.save();
    return res.status(200).send({
      success: false,
      message: "Category Saved",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Create Category API",
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (!categories) {
      return res.status(404).send({
        success: false,
        message: "categories not available",
      });
    }
    res.status(200).send({
      success: true,
      message: "Get Categories",
      categories,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Create Category API",
    });
  }
};
const updateCatController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageURL } = req.body;
    if (!title) {
      return res.status(404).send({
        success: false,
        message: "Please Provide title",
      });
    }
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { title, imageURL },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category Updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Create Category API",
    });
  }
};

const deleteCatController = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category Deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Delete Category API",
    });
  }
};
module.exports = {
  createCatController,
  getAllCategory,
  updateCatController,
  deleteCatController,
};
