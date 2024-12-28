require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

// route imports
const projectRoutes = require("./routes/projectRoutes")
const educationRoutes = require("./routes/educationRoutes")
const experienceRoutes = require("./routes/experienceRoutes")

// express app
const app = express()
const PORT = process.env.PORT

// middleware
app.use(cors({ credentials: true, origin: [process.env.FRONTEND_URL] }))
app.use(express.json())
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

// routes
app.use("/api/projects/", projectRoutes)
app.use("/api/education/", educationRoutes)
app.use("/api/experience/", experienceRoutes)

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// server
		app.listen(PORT, () => {
			console.log(
				`Connected to db and listening on http://localhost:${PORT}....`
			)
		})
	})
	.catch((error) => {
		console.log(error)
	})
