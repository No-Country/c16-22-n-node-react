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
  const userExists = await User.findOne({ email })

  if(userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const createdUser = await User.create({
    name,
    password,
    email,
    pic
  })

  if(createdUser) {
    return {
      ...createdUser,
      token: generateToken(createdUser._id)
    };  
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
  
};

const updateOneUser = () => {
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
