const asyncHandler = require("express-async-handler");
const usersService = require("../services/usersService");
const User = require("../../database/models").userModel;

const getAllUsers = (req, res) => {
  const allUsers = usersService.getAllUsers();
  res.send({status: "OK", data: {}});
};

const getOneUser = (req, res) => {
  const user = usersService.getOneUser();
  res.send("Get an existing User");
};

const createNewUser = asyncHandler( async(req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }
  
  const createdUser = await usersService.createNewUser({
    name,
    email,
    password,
    pic
  });
  res.status(201).send({ status: "OK", data: createdUser });
});

const updateOneUser = (req, res) => {
  const updatedUser = usersService.updateOneUser();
  res.send("Update an existing User");
};

const deleteOneUser = (req, res) => {
  const deletedUser = usersService.deleteOneUser();
  res.send("Delete an existing User");
};

const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne( { email } );

  if(user && (await user.matchPassword(password))) {
    res.send({
      ...user,
      token: generateToken(user._id)
    })
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password")
  }
});

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
  authenticateUser
};
