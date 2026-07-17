const fs = require("fs");
const path = require("path");
const Program = require("../models/Program");

// Create Program
exports.createProgram = async (req, res) => {
  try {
    const {
      title,
      description,
      level,
      duration,
      schedule,
      trainer,
    } = req.body;

    const image = req.file
      ? `/uploads/${req.file.filename}`
      : "";

    const program = await Program.create({
      title,
      description,
      level,
      duration,
      schedule,
      trainer,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Program created successfully.",
      program,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get All Programs
exports.getPrograms = async (req, res) => {
  try {
    const programs = await Program.find().populate(
      "trainer",
      "name speciality email"
    );

    res.status(200).json({
      success: true,
      programs,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// Get Single Program
exports.getProgram = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id).populate(
      "trainer",
      "name speciality email"
    );

    if (!program) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }

    res.status(200).json({
      success: true,
      program,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Update Program
exports.updateProgram = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);

    if (!program) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }


    program.title = req.body.title;
    program.description = req.body.description;
    program.level = req.body.level;
    program.duration = req.body.duration;
    program.schedule = req.body.schedule;
    program.trainer = req.body.trainer;

    // Only replace the image if a new one was uploaded
        if (req.file) {
  // Delete the old image if it exists
  if (program.image) {
    const oldImagePath = path.join(
      __dirname,
      "..",
      program.image.replace("/", "")
    );

    if (fs.existsSync(oldImagePath)) {
      fs.unlinkSync(oldImagePath);
    }
  }

  // Save the new image
  program.image = `/uploads/${req.file.filename}`;
}

    await program.save();

    res.status(200).json({
      success: true,
      message: "Program updated successfully.",
      program,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


// Delete Program
exports.deleteProgram = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);

    if (!program) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }
    if (program.image) {
        const imagePath = path.join(
         __dirname,
        "..",
       program.image.replace("/", "")
    );
     if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
    }
     }
     await program.deleteOne();

    res.status(200).json({
      success: true,
      message: "Program deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};