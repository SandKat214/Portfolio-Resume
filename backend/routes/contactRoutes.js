const express = require("express")
const { createEmail } = require("../controllers/contactController")

const router = express.Router()

// POST notification
router.post("/", createEmail)

module.exports = router
