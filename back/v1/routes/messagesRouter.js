const express = require('express');
const { protect } = require('../middleware/authorization');
const {
    getAllMessages, 
    createNewMessage
} = require("../controllers/messagesController");
const router = express.Router();


router.get('/:chatId', protect, getAllMessages)
router.post('/', protect, createNewMessage)

module.exports = router;