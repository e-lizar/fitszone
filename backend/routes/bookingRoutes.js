const express = require("express");
const router = express.Router();

const {
  protect,
  memberOnly,
} = require("../middleware/authMiddleware");

const {
  createBooking,
} = require("../controllers/bookingController");

router.post("/", protect, memberOnly, createBooking);

module.exports = router;