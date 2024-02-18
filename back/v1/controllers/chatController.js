const chatService = require("../services/chatService");
const getAllChats = (req, res) => {
  const allChats = chatService.getAllChats();
  res.send("Get all Chats");
};

const getOneChat = (req, res) => {
  const Chat = chatService.getOneChat();
  res.send("Get an existing Chat");
};

const createNewChat = (req, res) => {
  const createdChat = chatService.createNewChat();
  res.send("Create a new Chat");
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
