const express = require("express");
const router = express.Router();

const { protect, adminOnly } = require("../middleware/authMiddleware");

const {
  getProfile,
  getMembers,
  deleteMember,
  updateMember,
  assignMembershipPlan,
  assignPrograms,
} = require("../controllers/userController");

// GET routes
router.get("/", protect, adminOnly, getMembers);
router.get("/profile", protect, getProfile);

// Specific PUT routes
router.put("/assign-membership", protect, adminOnly, assignMembershipPlan);
router.put("/assign-programs", protect, adminOnly, assignPrograms);

// Generic ID routes LAST
router.put("/:id", protect, adminOnly, updateMember);
router.delete("/:id", protect, adminOnly, deleteMember);

module.exports = router;