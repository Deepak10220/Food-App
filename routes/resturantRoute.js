const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createResturantController,
  getAllResturantController,
  getSingleResturantController,
  deleteResturantController,
} = require("../controllers/resturantController");
const router = express.Router();

router.post("/create", authMiddleware, createResturantController);
router.get("/getAll", getAllResturantController);
router.get("/getSingleResturant/:id", getSingleResturantController);
router.delete(
  "/deleteResturant/:id",
  authMiddleware,
  deleteResturantController
);
module.exports = router;
