const express = require("express");
const {
  createCatController,
  getAllCategory,
  updateCatController,
  deleteCatController,
} = require("../controllers/categoryController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/createCategory", authMiddleware, createCatController);
router.get("/getAllCategory", getAllCategory);
router.put("/updateCategory/:id", updateCatController);
router.delete("/deleteCategory/:id", deleteCatController);
module.exports = router;
