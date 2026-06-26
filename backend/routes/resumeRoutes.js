const express = require("express");

const router = express.Router();

const {
  createResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume,
} = require("../controllers/resumeController");

// Create Resume
router.post("/", createResume);

// Get All Resumes
router.get("/", getAllResumes);

// Get Resume By ID
router.get("/:id", getResumeById);

// Update Resume
router.put("/:id", updateResume);

// Delete Resume
router.delete("/:id", deleteResume);

module.exports = router;