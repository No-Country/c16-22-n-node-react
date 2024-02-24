// eventually we need the service here
const asyncHandler = require("express-async-handler");
const Message = require("../../database/models/message");
const User = require("../../database/models/user");
const Chat = require("../../database/models/chat");

const getAllMessages = asyncHandler(async (req, res) => {
    const chatId = req.params.chatId
    try {
      const messages = await Message.find({chat: chatId})
      .populate("sender", "name pic email")
      .populate("chat");
      console.log("msg" + messages);
      res.status(200);
      res.json(messages)
    } catch(error) {
      res.status(400);
      throw new Error(error.message)
    }
});

const createNewMessage = asyncHandler(async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);

    message = await message.populate("sender", "name pic");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "name pic email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

    res.json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
  // res.send("Create a new Message");
});

module.exports = {
  getAllMessages,
  createNewMessage
};
