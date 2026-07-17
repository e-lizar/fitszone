const User = require("../models/User");

// Admin - Get All Members
exports.getMembers = async (req, res) => {
  try {
    const members = await User.find({ role: "member" }).select("-password").populate("membershipPlan").populate("enrolledPrograms");

    res.status(200).json({
      success: true,
      members,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Member/Trainer/Admin - Get Own Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password").populate("membershipPlan").populate("enrolledPrograms");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// Delete Member
exports.deleteMember = async (req, res) => {
  try {
    const member = await User.findById(req.params.id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    await member.deleteOne();

    res.status(200).json({
      success: true,
      message: "Member deleted successfully.",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// Update Member
exports.updateMember = async (req, res) => {
  try {
    const member = await User.findById(req.params.id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    member.name = req.body.name;
    member.email = req.body.email;
    member.phone = req.body.phone;
    member.membershipStatus = req.body.membershipStatus;

    await member.save();

    res.status(200).json({
      success: true,
      message: "Member updated successfully.",
      member,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
const MembershipPlan = require("../models/MembershipPlan");

// Assign Membership Plan
exports.assignMembershipPlan = async (req, res) => {
  try {
    const { memberId, planId } = req.body;

    const member = await User.findById(memberId);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    const plan = await MembershipPlan.findById(planId);

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Membership plan not found",
      });
    }

    const startDate = new Date();

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + plan.duration);

    member.membershipPlan = plan._id;
    member.membershipStartDate = startDate;
    member.membershipEndDate = endDate;
    member.membershipStatus = "active";

    await member.save();

    res.status(200).json({
      success: true,
      message: "Membership assigned successfully.",
      member,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
const Program = require("../models/Program");

// Assign Program(s) to Member
exports.assignPrograms = async (req, res) => {
  try {
    const { memberId, programIds } = req.body;

    const member = await User.findById(memberId);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    member.enrolledPrograms = programIds;

    await member.save();

    res.status(200).json({
      success: true,
      message: "Programs assigned successfully.",
      member,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};