const mongoose = require("mongoose")

const Schema = mongoose.Schema

const educationSchema = new Schema({
	school: {
		type: String,
		required: true,
		trim: true,
	},
	degree: {
		type: String,
		required: true,
		trim: true,
	},
	grad: {
		type: String,
		required: true,
	},
	gpa: {
		type: String,
		required: true,
		trim: true,
	},
	coursework: {
		type: [String],
		required: true,
	},
	year: {
		type: Number,
		required: true,
	},
})

module.exports = mongoose.model("Education", educationSchema)
