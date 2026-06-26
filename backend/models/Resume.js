const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },

    personal: {
      fullName: {
        type: String,
        default: "",
      },
      email: {
        type: String,
        default: "",
      },
      phone: {
        type: String,
        default: "",
      },
      linkedin: {
        type: String,
        default: "",
      },
      github: {
        type: String,
        default: "",
      },
      portfolio: {
        type: String,
        default: "",
      },
      summary: {
        type: String,
        default: "",
      },
    },

    education: [
      {
        degree: {
          type: String,
          default: "",
        },
        college: {
          type: String,
          default: "",
        },
        branch: {
          type: String,
          default: "",
        },
        startYear: {
          type: String,
          default: "",
        },
        endYear: {
          type: String,
          default: "",
        },
        cgpa: {
          type: String,
          default: "",
        },
      },
    ],

    experience: [
      {
        company: {
          type: String,
          default: "",
        },
        role: {
          type: String,
          default: "",
        },
        startDate: {
          type: String,
          default: "",
        },
        endDate: {
          type: String,
          default: "",
        },
        description: {
          type: String,
          default: "",
        },
      },
    ],

    skills: [
      {
        type: String,
      },
    ],

    projects: [
      {
        title: {
          type: String,
          default: "",
        },
        tech: {
          type: String,
          default: "",
        },
        github: {
          type: String,
          default: "",
        },
        live: {
          type: String,
          default: "",
        },
        description: {
          type: String,
          default: "",
        },
      },
    ],

    certificates: [
      {
        name: {
          type: String,
          default: "",
        },
        issuer: {
          type: String,
          default: "",
        },
        year: {
          type: String,
          default: "",
        },
        link: {
          type: String,
          default: "",
        },
      },
    ],

    languages: [
      {
        type: String,
      },
    ],

    achievements: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);