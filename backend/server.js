const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();


const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const membershipRoutes = require("./routes/membershipRoutes");
const programRoutes = require("./routes/programRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const membershipPlanRoutes = require("./routes/membershipPlanRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const trainerDashboardRoutes = require("./routes/trainerDashboardRoutes");

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/memberships", membershipRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/membership-plans", membershipPlanRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/trainer-dashboard", trainerDashboardRoutes);


// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the FitsZone API 🚀",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});