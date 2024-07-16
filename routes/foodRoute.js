const express = require("express");
const {
  createFoodController,
  getAllFood,
  singleFoodController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
} = require("../controllers/foodController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.post("/create-food", authMiddleware, createFoodController);
router.get("/get-food", getAllFood);
router.get("/single-food/:id", singleFoodController);
router.get("/update-food/:id", updateFoodController);
router.delete("/delete-food/:id", deleteFoodController);
router.post("/placeorder", authMiddleware, placeOrderController);

module.exports = router;
