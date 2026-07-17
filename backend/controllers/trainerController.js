const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Trainer = require("../models/Trainer");

// Create Trainer
exports.createTrainer = async (req, res) => {
  try {
    const {
      name,
      specialty,
      description,
      experience,
      certification,
      email,
      phone,
      isActive,
    } = req.body;

    const existingTrainer = await Trainer.findOne({email});

    if(existingTrainer){
      return res.status(400).json({
        success: false,
        message:"Trainer with this email already exists.",
      });
    }
    const existingUser = await User.findOne({email});
    
    if(existingUser){
      return res.status(400).json({
        success:false,
        message: "A user with this email already exists."
      });
    }

    const image = req.file
      ? `/uploads/${req.file.filename}`
      : "";

    const trainer = await Trainer.create({
      name,
      specialty,
      description,
      experience,
      certification,
      email,
      phone,
      isActive,
      image,
    });
    // Temporary password
    const temporaryPassword = "trainer123";

    // Hash password
    const hashedPassword = await bcrypt.hash(
      temporaryPassword,
      10
    );

    // Create User account
    await User.create({
      name,
      email,
      password: hashedPassword,
      role: "trainer",
    });

    res.status(201).json({
      success: true,
      message: "Trainer created successfully.Default password: trainer123",
      trainer,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get All Trainers
exports.getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();

    res.status(200).json({
      success: true,
      trainers,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get Single Trainer
exports.getTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);

    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "Trainer not found",
      });
    }

    res.status(200).json({
      success: true,
      trainer,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Update Trainer
exports.updateTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);

    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "Trainer not found",
      });
    }

    const oldEmail = trainer.email;

    trainer.name = req.body.name;
    trainer.specialty = req.body.specialty;
    trainer.description = req.body.description;
    trainer.experience = req.body.experience;
    trainer.certification = req.body.certification;
    trainer.email = req.body.email;
    trainer.phone = req.body.phone;
    trainer.isActive = req.body.isActive;

    if (req.file) {
      if (trainer.image) {
        const oldImagePath = path.join(
          __dirname,
          "..",
          trainer.image.replace("/", "")
        );

        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      trainer.image = `/uploads/${req.file.filename}`;
    }

    await trainer.save();
    await User.updateOne(
      { email: oldEmail },
      {
         name: trainer.name,
         email: trainer.email,
      }
       );

    res.status(200).json({
      success: true,
      message: "Trainer updated successfully.",
      trainer,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Delete Trainer
exports.deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);

    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "Trainer not found",
      });
    }

    if (trainer.image) {
      const imagePath = path.join(
        __dirname,
        "..",
        trainer.image.replace("/", "")
      );

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await User.deleteOne({ email: trainer.email });
    await Trainer.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Trainer deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};