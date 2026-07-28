const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {sendMessage, getConversation, getMyChats} = require("../controllers/chat");

router.post("/", auth, sendMessage);

router.get("/", auth, getMyChats);

router.get("/:userId", auth, getConversation);

module.exports = router;