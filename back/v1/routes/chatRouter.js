const express = require("express");
const router = express.Router();

const chatController = require("../controllers/chatController");

router.get('/', chatController.getAllChats);

router.get("/:chatId", chatController.getOneChat);

router.patch("/:chatId", chatController.updateOneChat);

router.post("/", chatController.createNewChat);

router.delete("/:chatId", chatController.deleteOneChat);

module.exports = router;