const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authorization");
const chatController = require("../controllers/chatController");

router.get('/', protect, chatController.getAllChats);

router.get("/:chatId", chatController.getOneChat);

router.patch("/:chatId", chatController.updateOneChat);

router.post("/", protect, chatController.createNewChat);

router.delete("/:chatId", chatController.deleteOneChat);

module.exports = router;