const Booking = require("../models/Booking");

// Create Booking
exports.createBooking = async (req, res) => {
  try {
    const { program } = req.body;

    // Prevent duplicate bookings
    const existingBooking = await Booking.findOne({
      member: req.user.id,
      program,
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: "You have already booked this program.",
      });
    }

    const booking = await Booking.create({
      member: req.user.id,
      program,
    });

    res.status(201).json({
      success: true,
      message: "Program booked successfully.",
      booking,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};