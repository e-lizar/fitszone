const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User not found",
        });
      }

      req.user = user;

      next();
    } catch (error) {
      console.error(error);

      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }
};
// Admin only
const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Admins only.",
    });
  }

  next();
};

// Trainer only
const trainerOnly = (req, res, next) => {
  if (req.user.role !== "trainer") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Trainers only.",
    });
  }

  next();
};

// Member only
const memberOnly = (req, res, next) => {
  if (req.user.role !== "member") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Members only.",
    });
  }

  next();
};

module.exports = {
  protect,
  adminOnly,
  trainerOnly,
  memberOnly,
};