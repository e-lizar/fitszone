const Trainer = require("../models/Trainer");
const Program = require("../models/Program");

exports.getTrainerDashboard = async (req, res) => {
  try {
    const trainer = await Trainer.findOne({
      $or: [
        { user: req.user._id },
        { email: req.user.email },
      ],
    });

    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "Trainer profile not found.",
      });
    }

    const programs = await Program.find({
      trainer: trainer._id,
    });

    res.json({
      success: true,
      trainer,
      programs,
      totalPrograms: programs.length,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};