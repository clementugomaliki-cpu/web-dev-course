const express = require("express");
const router = express.Router();
const {createUser, verifyEmail, creatorLogin} = require("../controllers/creatorcontroller");


router.post("/creator-register", createUser);
router.post("/verify-otp", verifyEmail);
router.post("/login", creatorLogin);

module.exports = router