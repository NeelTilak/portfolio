const express = require("express")
const { sendEmailController } = require("../controllers/portfolioController")


//objects

const router = express.Router()

router.post('/sendEmail', sendEmailController)

module.exports = router