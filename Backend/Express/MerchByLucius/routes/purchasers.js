const express = require("express");
const router = express.Router();
const {purchaserSignup, verifyEmail, purchaserLogin} = require("../controllers/purchaserController");


router.post("/purchaser-register", purchaserSignup);
router.post("/purchaser-verify-otp", verifyEmail);
//router.post("/login", purchaserLogin);

module.exports = router