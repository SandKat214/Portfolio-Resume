const express = require("express")
const {
	getExperience,
	createExperience,
} = require("../controllers/experienceController")

const router = express.Router()

// GET all projects
router.get("/", getExperience)

// POST a new project
router.post("/", createExperience)

module.exports = router
