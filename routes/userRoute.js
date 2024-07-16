const express = require("express");
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteUserController,
} = require("../controllers/userControllers");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/get-user", authMiddleware, getUserController);
router.put("/update-user", authMiddleware, updateUserController);
router.post("/update-password", authMiddleware, updatePasswordController);
router.post("/reset-password", authMiddleware, resetPasswordController);
router.delete("/delete-user/:id", authMiddleware, deleteUserController);

module.exports = router;
