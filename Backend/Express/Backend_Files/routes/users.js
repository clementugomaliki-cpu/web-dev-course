const router = require("express").Router();
const auth = require("../Middleware/auth");
const {newProfile, login, updateProfile} = require("../controllers/users");

router.post("/register", newProfile)

router.post("/profile", login);

router.put("/profile", auth, updateProfile);

module.exports = router;