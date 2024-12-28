const express = require("express")
const {
	getProjects,
	getProject,
	createProject,
} = require("../controllers/projectController")

const router = express.Router()

// GET all projects
router.get("/", getProjects)

// GET a single project
router.get("/:name", getProject)

// POST a new project
router.post("/", createProject)

module.exports = router
