const express = require("express")
const {
	getEducation,
	createEducation,
} = require("../controllers/educationController")

const router = express.Router()

// GET all projects
router.get("/", getEducation)

// POST a new project
// router.post("/", createEducation)

module.exports = router
