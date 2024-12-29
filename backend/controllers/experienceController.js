const Experience = require("../models/experienceModel")

// GET all education
const getExperience = async (req, res) => {
	try {
		// retrieve array of experience
		const experience = await Experience.find().sort({
			endYear: -1,
			startYear: -1,
		})

		console.log("All experience retrieved from the db.")
		res.status(200).json(experience)
	} catch (error) {
		console.log(error.message)
		res.status(400).json({
			error: "Could not retrieve experience from db.",
		})
	}
}

// CREATE a new experience
const createExperience = async (req, res) => {
	try {
		const experience = await Experience.create({
			...req.body,
		})
		console.log(`Experience, ${experience.title}, created.`)
		res.status(200).json(experience)
	} catch (error) {
		console.log(error.message)
		res.status(400).json({
			error: "Invalid request from client for experience creation operation.",
		})
	}
}

module.exports = {
	getExperience,
	createExperience,
}
