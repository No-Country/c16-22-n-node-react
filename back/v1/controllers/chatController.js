const Chat = require("../../database/models/chat");
const User = require("../../database/models/user");
const chatService = require("../services/chatService");

// fetch all chats for an user
const getAllChats = async (req, res) => {
  try {
    const chatWithUsers = await Chat.find({
      $or: [
        {user: req.user._id},
        {professional: req.user._id}
      ]
    })
      .populate({
        path: "user",
        select: "name pic email",
      })
      .populate({
        path: "professional",
        select: "name pic email",
      })
      .populate("latestMessage")
      .sort({ updatedAt: -1 });
      
    res.send(chatWithUsers);

    // Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
    //   .populate("users", "-password")
    //   .populate("latestMessage")
    //   .sort({ updatedAt: -1 })
    //   .then(async (results) => {
    //     results = await User.populate(results, {
    //       path: "latestMessage.sender",
    //       select: "name pic email",
    //     });
    //     res.status(200).send(results);
    //   });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};

const getOneChat = (req, res) => {
  const Chat = chatService.getOneChat();
  res.send("Get an existing Chat");
};

// CREATE AND ACCESS A CHAT
const createNewChat = async (req, res) => {
  const { professionalId } = req.body;
  
  if (!professionalId) {
    console.log("professionalId param not sent with request");
    return res.sendStatus(400);
  }

  var foundChats = await Chat.find({
    $and: [
      { user: { $eq: req.user._id }  },
      { professional: { $eq: professionalId } },
    ],
  })
    .populate({ path: "user", select: "name pic email" })
    .populate({ path: "professional", select: "name pic email" })
    .populate("latestMessage");


  if (foundChats.length > 0) {
    console.log("existing chat")
    res.status(200);
    res.send(foundChats[0]);
  } else {
    console.log("creating chat");
    var chatData = {
      chatName: "sender",
      user: req.user._id,
      professional: professionalId
    };

    try {
      const createdChat = await Chat.create(chatData);
      const fullChat = await Chat.findOne({ _id: createdChat._id })
        .populate({
          path: "user",
          select: "name pic email",
        })
        .populate({
          path: "professional",
          select: "name pic email",
        });
      res.status(200).json(fullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
};

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
