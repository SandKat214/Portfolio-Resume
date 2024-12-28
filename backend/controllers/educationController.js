const Education = require("../models/educationModel")

// GET all education
const getEducation = async (req, res) => {
	try {
		// retrieve array of education
		const education = await Education.find().sort({ year: -1 })

		console.log("All education retrieved from the db.")
		res.status(200).json(education)
	} catch (error) {
		console.log(error.message)
		res.status(400).json({
			error: "Could not retrieve education from db.",
		})
	}
}

// CREATE a new education
const createEducation = async (req, res) => {
	try {
		const education = await Education.create({
			...req.body,
		})
		console.log(`Education, ${education.degree}, created.`)
		res.status(200).json(education)
	} catch (error) {
		console.log(error.message)
		res.status(400).json({
			error: "Invalid request from client for education creation operation.",
		})
	}
}

module.exports = {
	getEducation,
	createEducation,
}
