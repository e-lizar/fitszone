const express = require("express");
const router = express.Router();

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const upload = require("../middleware/upload");

const {
  createTrainer,
  getTrainers,
  getTrainer,
  updateTrainer,
  deleteTrainer,
} = require("../controllers/trainerController");

// Public
router.get("/", getTrainers);
router.get("/:id", getTrainer);

// Admin
router.post(
  "/",
  protect,
  adminOnly,
  upload.single("image"),
  createTrainer
);

router.put(
  "/:id",
  protect,
  adminOnly,
  upload.single("image"),
  updateTrainer
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteTrainer
);

module.exports = router;