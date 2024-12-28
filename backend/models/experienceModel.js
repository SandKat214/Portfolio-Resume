const mongoose = require("mongoose")

const Schema = mongoose.Schema

const experienceSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	company: {
		type: String,
		required: true,
		trim: true,
	},
	start: {
		type: String,
		required: true,
		trim: true,
	},
	end: {
		type: String,
		required: true,
		trim: true,
	},
	bullets: {
		type: [String],
		required: true,
	},
	endYear: {
		type: Number,
		required: true,
	},
	startYear: {
		type: Number,
		required: true,
	},
})

module.exports = mongoose.model("Experience", experienceSchema)
