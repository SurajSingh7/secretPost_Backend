const express = require("express")
const router = express.Router()

const {login,signup,sendotp} = require("../controllers/Auth");

const {resetPasswordToken,resetPassword } = require("../controllers/ResetPassword");


// Route for user login,signup,sendotp
router.post("/login", login)
router.post("/signup", signup)
router.post("/sendotp", sendotp)


// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)
router.post("/reset-password", resetPassword)


module.exports = router