const Chat = require("../../database/models/chat");
const User = require("../../database/models/user");
const chatService = require("../services/chatService");
const asyncHandler = require("express-async-handler");


// fetch all chats for an user
const getAllChats = asyncHandler(async (req, res) => {
  // const allChats = chatService.getAllChats();
  // res.send("Get all Chats");
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name pic email",
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const getOneChat = (req, res) => {
  const Chat = chatService.getOneChat();
  res.send("Get an existing Chat");
};

// CREATE AND ACCESS A CHAT
const createNewChat = asyncHandler(async (req, res) => {
  // const createdChat = chatService.createNewChat();
  // res.send("Create a new Chat");

  const { userId } = req.body;

  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).json(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

const updateOneChat = (req, res) => {
  const updatedChat = chatService.updateOneChat();
  res.send("Update an existing Chat");
};

const deleteOneChat = (req, res) => {
  const deletedChat = chatService.deleteOneChat();
  res.send("Delete an existing Chat");
};

module.exports = {
  getAllChats,
  getOneChat,
  createNewChat,
  updateOneChat,
  deleteOneChat,
};