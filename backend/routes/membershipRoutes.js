const express = require("express");
const router = express.Router();

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const {
  createMembership,
  getMemberships,
  getMembership,
  updateMembership,
  deleteMembership,
} = require("../controllers/membershipController");

// Public
router.get("/", getMemberships);
router.get("/:id", getMembership);

// Admin only
router.post("/", protect, adminOnly, createMembership);
router.put("/:id", protect, adminOnly, updateMembership);
router.delete("/:id", protect, adminOnly, deleteMembership);

module.exports = router;