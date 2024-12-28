const mongoose = require("mongoose")

const Schema = mongoose.Schema

const projectSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	title: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	desc: {
		type: String,
		required: true,
	},
	tech: {
		type: [String],
		required: true,
	},
	gitHub: {
		type: String,
		required: true,
		trim: true,
	},
	webLink: {
		type: String,
		trim: true,
	},
	image: {
		type: String,
		required: true,
		trim: true,
	},
})

module.exports = mongoose.model("Project", projectSchema)
