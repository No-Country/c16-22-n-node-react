const usersService = require("../services/usersService");

const getAllUsers = (req, res) => {
    const allUsers = usersService.getAllUsers();
  res.send("Get all Users");
};

const getOneUser = (req, res) => {
    const user = usersService.getOneUser();
  res.send("Get an existing User");
};

const createNewUser = (req, res) => {
    const createdUser = usersService.createNewUser();
  res.send("Create a new User");
};

const updateOneUser = (req, res) => {
    const updatedUser = usersService.updateOneUser();
  res.send("Update an existing User");
};

const deleteOneUser = (req, res) => {
    const deletedUser = usersService.deleteOneUser();
  res.send("Delete an existing User");
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
