const Project = require("../models/projectModel")

// GET all projects
const getProjects = async (req, res) => {
	try {
		// retrieve array of projects
		const projectsArr = await Project.find().sort({ name: 1 })

		// convert array into key/value pairs
		const projects = {}
		for (const project of projectsArr) {
			projects[project.name] = project
		}
		console.log("All projects retrieved from the db.")
		res.status(200).json(projects)
	} catch (error) {
		console.log(error.message)
		res.status(400).json({
			error: "Could not retrieve projects from db.",
		})
	}
}

// GET a single project
const getProject = async (req, res) => {
	const { name } = req.params

	try {
		const project = await Project.findOne({ name })
		if (!project) {
			console.log("Could not get that project.")
			return res
				.status(404)
				.json({ error: "Project name does not exist for get." })
		}
		console.log(`Project with name, ${project.name}, retrieved.`)
		res.status(200).json(project)
	} catch (error) {
		console.log(error.message)
		res.status(400).json({
			error: "Invalid request from client for get project by name.",
		})
	}
}

// CREATE a new project
const createProject = async (req, res) => {
	try {
		const project = await Project.create({
			...req.body,
		})
		console.log(`Project ${project.name} created.`)
		res.status(200).json(project)
	} catch (error) {
		console.log(error.message)
		res.status(400).json({
			error: "Invalid request from client for project creation operation.",
		})
	}
}

module.exports = {
	getProjects,
	getProject,
	createProject,
}
