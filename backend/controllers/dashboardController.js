const User = require("../models/User");
const Program = require("../models/Program");
const MembershipPlan = require("../models/MembershipPlan");

exports.getDashboard = async (req, res) => {
  try {
    const totalMembers = await User.countDocuments({
      role: "member",
    });

    const activeMembers = await User.countDocuments({
      role: "member",
      membershipStatus: "active",
    });

    const totalPrograms = await Program.countDocuments();

    const totalPlans = await MembershipPlan.countDocuments();

    const recentMembers = await User.find({
      role: "member",
    })
      .select("name email membershipStatus createdAt")
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      totalMembers,
      activeMembers,
      totalPrograms,
      totalPlans,
      recentMembers,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};