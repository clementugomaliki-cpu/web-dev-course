const express = require("express");
const router = express.Router();
const {createUser, verifyEmail} = require("../controllers/creatorcontroller");


router.post("/creator-register", createUser);
router.post("/verify-otp", verifyEmail);

module.exports = router