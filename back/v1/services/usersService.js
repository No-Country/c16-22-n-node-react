const User = require("../../database/models").userModel;
const generateToken = require('../../config/generateToken');

const getAllUsers = () => {
  return;
};

const getOneUser = () => {

  return;
};

const createNewUser = async (user) => {
  const { name, password, email, pic} = user;

  const createdUser = await User.create({
    name,
    password,
    email,
    pic
  });

  return {
    ...createdUser,
    token: generateToken(createdUser._id),
  }
};

const updateOneUser = (changes) => {
  
  return;
};

const deleteOneUser = () => {
  return;
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
