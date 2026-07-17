const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["member", "trainer", "admin"],
      default: "member",
    },

    phone: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },

    membershipStatus: {
      type: String,
      enum: ["inactive", "active", "expired"],
      default: "inactive",
    },
    membershipPlan: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "MembershipPlan",
    },
    enrolledPrograms: [
     {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
      },
     ],

    membershipStartDate: {
       type: Date,
      },

    membershipEndDate: {
       type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);