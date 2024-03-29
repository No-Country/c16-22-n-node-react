// eventually we need the service here
const Message = require("../../database/models/message");
const User = require("../../database/models/user");
const Chat = require("../../database/models/chat");
const {isValidObjectId} = require('mongoose')

const getAllMessages = async (req, res) => {
    const chatId = req.params.chatId
    console.log(chatId)
    if (!chatId || !isValidObjectId(chatId)) {
      // Check if chatId is null or not a valid ObjectId
      res.status(400).json({ error: "Invalid chatId" });
      return;
    }

    if(chatId) {
      try {
        const messages = await Message.find({chat: chatId})
        .populate("sender", "name pic email")
        .populate("chat")
        res.status(200);
        res.json(messages);
      } catch(error) {
        res.status(400);
        throw new Error(error.message)
      }
    }
};

const createNewMessage = async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  let sender = [];

  if (req.user.category) {
    sender[1] = req.user._id
  } else {
    sender[0] = req.user._id; 
  }
  

  var newMessage = {
    sender,
    content: content,
    chat: chatId,
  };


  console.log(sender)
  
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
};

module.exports = {
  getAllMessages,
  createNewMessage
};
