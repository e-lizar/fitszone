const express = require("express");
const router = express.Router();

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const upload = require("../middleware/upload");

const {
  createProgram,
  getPrograms,
  getProgram,
  updateProgram,
  deleteProgram,
} = require("../controllers/programController");


// Public routes
router.get("/", getPrograms);
router.get("/:id", getProgram);

// Admin routes
router.post("/", protect, adminOnly,upload.single("image"), createProgram);
router.put("/:id", protect, adminOnly,upload.single("image"), updateProgram);
router.delete("/:id", protect, adminOnly, deleteProgram);

module.exports = router;