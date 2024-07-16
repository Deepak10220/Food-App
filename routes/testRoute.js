const express = require("express");
const { testUserControllers } = require("../controllers/testControllers");
const router = express.Router();
router.get("/test-user", testUserControllers);
module.exports = router;
