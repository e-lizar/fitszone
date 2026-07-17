const express = require("express");
const router = express.Router();

const {
  getTrainerDashboard,
} = require("../controllers/trainerDashboardController");

const {
  protect,
} = require("../middleware/authMiddleware");

router.get("/", protect, getTrainerDashboard);

module.exports = router;