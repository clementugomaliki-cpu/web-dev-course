const express = require("express");
const router = express.Router();
const {purchaserSignup, verifyEmail} = require("../controllers/purchaserController");


router.post("/purchaser-register", purchaserSignup);
router.post("/verify-otp", verifyEmail);

module.exports = router